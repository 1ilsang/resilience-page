import { FunctionComponent, useLayoutEffect, useMemo, useState } from 'react';

import QuestionItem from './QuestionItem';
import ScoreBoard from './ScoreBoard';

import {
  causeQuestionList,
  communicationQuestionList,
  egoExpandQuestionList,
  egoOptimismQuestionList,
  emotionQuestionList,
  impulseQuestionList,
  lifeSatisfactionQuestionList,
  LOCAL_STORAGE_KEY,
  QUESTION_COUNT,
  QUESTION_SPLIT_COUNT,
  reverseQuestionList,
  REVERSE_SCORE,
  sympathyQuestionList,
  thankfulQuestionList,
} from '~/constants';

const QuestionRow = ({
  list,
  startIndex,
  scoreList,
  handleValueChange,
}: {
  list: number[];
  startIndex: number;
  scoreList: number[];
  handleValueChange: (no: number, score: number) => void;
}) => {
  return (
    <div style={{ display: 'flex' }}>
      {list.map((_, index) => {
        const no = startIndex + index;
        return (
          <QuestionItem
            key={index}
            no={no}
            value={scoreList[no]}
            onChange={handleValueChange}
          />
        );
      })}
    </div>
  );
};

const Questions: FunctionComponent = () => {
  const [scoreList, setScoreList] = useState<number[]>([
    ...Array(QUESTION_COUNT).fill(0),
  ]);

  const [emotion, setEmotion] = useState<number>(0);
  const [impulse, setImpulse] = useState<number>(0);
  const [cause, setCause] = useState<number>(0);

  const [communication, setCommunication] = useState<number>(0);
  const [sympathy, setSympathy] = useState<number>(0);
  const [egoExtend, setEgoExtend] = useState<number>(0);

  const [egoOptimism, setEgoOptimism] = useState<number>(0);
  const [lifeSatisfaction, setLifeSatisfaction] = useState<number>(0);
  const [thankful, setThankful] = useState<number>(0);

  const selfControl = emotion + impulse + cause;
  const personalRelationship = communication + sympathy + egoExtend;
  const positive = egoOptimism + lifeSatisfaction + thankful;
  const resilience = selfControl + personalRelationship + positive;

  useLayoutEffect(() => {
    const savedData = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!savedData) return;
    const scores = JSON.parse(savedData) as number[];
    setScoreList(scores);
  }, []);

  const handleValueChange = (index: number, score: number) => {
    setScoreList((prev) => {
      prev[index] = score;
      return [...prev];
    });
  };
  const clearState = () => {
    setEmotion(0);
    setImpulse(0);
    setCause(0);

    setCommunication(0);
    setSympathy(0);
    setEgoExtend(0);

    setEgoOptimism(0);
    setLifeSatisfaction(0);
    setThankful(0);
  };
  const handleSubmitClick = () => {
    clearState();
    scoreList.forEach((originScore, index) => {
      const no = index + 1;
      const score = reverseQuestionList.includes(no)
        ? REVERSE_SCORE - originScore
        : originScore;
      const handlePrevAdder = (prev: number) => prev + score;
      if (emotionQuestionList.includes(no)) {
        setEmotion(handlePrevAdder);
      } else if (impulseQuestionList.includes(no)) {
        setImpulse(handlePrevAdder);
      } else if (causeQuestionList.includes(no)) {
        setCause(handlePrevAdder);
      } else if (communicationQuestionList.includes(no)) {
        setCommunication(handlePrevAdder);
      } else if (sympathyQuestionList.includes(no)) {
        setSympathy(handlePrevAdder);
      } else if (egoExpandQuestionList.includes(no)) {
        setEgoExtend(handlePrevAdder);
      } else if (egoOptimismQuestionList.includes(no)) {
        setEgoOptimism(handlePrevAdder);
      } else if (lifeSatisfactionQuestionList.includes(no)) {
        setLifeSatisfaction(handlePrevAdder);
      } else if (thankfulQuestionList.includes(no)) {
        setThankful(handlePrevAdder);
      }
    });
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(scoreList));
  };
  const handleResetClick = () => {
    window.localStorage.removeItem(LOCAL_STORAGE_KEY);
    setScoreList([...Array(QUESTION_COUNT).fill(0)]);
    clearState();
  };
  const questionList: number[][] = useMemo(
    () =>
      [...Array(QUESTION_COUNT)].reduce((acc, cur, index) => {
        if (index % QUESTION_SPLIT_COUNT === 0) {
          acc.push([]);
        }
        const targetRow = acc[acc.length - 1];
        targetRow.push(0);
        return acc;
      }, [] as number[]),
    [],
  );

  return (
    <>
      <h1>회복탄력성 결과 확인</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {questionList.map((list, index) => {
          return (
            <QuestionRow
              key={index}
              list={list}
              scoreList={scoreList}
              handleValueChange={handleValueChange}
              startIndex={index * QUESTION_SPLIT_COUNT}
            />
          );
        })}
      </div>
      <hr />
      <button onClick={handleSubmitClick}>검사하기</button>
      <button onClick={handleResetClick}>초기화</button>
      {resilience > 0 && (
        <ScoreBoard
          selfControl={selfControl}
          personalRelationship={personalRelationship}
          positive={positive}
          resilience={resilience}
        />
      )}
    </>
  );
};

export default Questions;
