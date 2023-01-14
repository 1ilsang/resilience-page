import { FunctionComponent } from 'react';

import {
  PersonalRelationshipScore,
  PositiveScore,
  ResilienceScore,
  SelfControlScore,
} from '~/constants';

type ScoreBoardProps = {
  selfControl: number;
  personalRelationship: number;
  positive: number;
  resilience: number;
};

const ScoreBoard: FunctionComponent<ScoreBoardProps> = ({
  selfControl,
  personalRelationship,
  positive,
  resilience,
}) => {
  return (
    <>
      <hr />
      <div>
        <h2>자기조절능력: {selfControl}</h2>
        <ul>
          <li>대한민국 평균: {SelfControlScore.avg}</li>
          <li>대한민국 상위7%: {SelfControlScore.high}</li>
          <li>대한민국 하위20%: {SelfControlScore.low}</li>
        </ul>
        <h2>대인관계능력: {personalRelationship}</h2>
        <ul>
          <li>대한민국 평균: {PersonalRelationshipScore.avg}</li>
          <li>대한민국 상위6%: {PersonalRelationshipScore.high}</li>
          <li>대한민국 하위20%: {PersonalRelationshipScore.low}</li>
        </ul>
        <h2>긍정성: {positive}</h2>
        <ul>
          <li>대한민국 평균: {PositiveScore.avg}</li>
          <li>대한민국 상위6%: {PositiveScore.high}</li>
          <li>대한민국 하위20%: {PositiveScore.low}</li>
        </ul>
        <h2>회복탄력성: {resilience}</h2>
        <ul>
          <li>대한민국 평균: {ResilienceScore.avg}</li>
          <li>대한민국 상위6%: {ResilienceScore.high}</li>
          <li>대한민국 하위20%: {ResilienceScore.low}</li>
        </ul>
      </div>
    </>
  );
};

export default ScoreBoard;
