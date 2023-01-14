import { ChangeEventHandler, FunctionComponent } from 'react';

type QuestionItemProps = {
  no: number;
  value: number;
  onChange: (no: number, value: number) => void;
};

const QuestionItem: FunctionComponent<QuestionItemProps> = ({
  no,
  value,
  onChange,
}) => {
  const handleValueChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const score = Number(e.target.value);
    onChange(no, score);
  };

  return (
    <div style={{ padding: 4, width: 50 }}>
      No.{`${no + 1}`.padStart(2, '0')}:{' '}
      <input
        style={{ width: 20 }}
        type="number"
        min={1}
        max={5}
        value={value}
        onChange={handleValueChange}
      />
    </div>
  );
};

export default QuestionItem;
