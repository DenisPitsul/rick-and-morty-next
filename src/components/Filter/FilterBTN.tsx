import React from "react";

type Props = {
  input: string;
  task: (value: string) => void;
  updatePageNumber: (pageNumber: number) => void;
  index: number;
  name: string;
};

const FilterBTN = ({ input, task, updatePageNumber, index, name }: Props) => {
  return (
    <div>
      <style jsx>
        {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>

      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          onClick={(x) => {
            task(input);
            updatePageNumber(1);
          }}
          className="btn btn-outline-primary"
          htmlFor={`${name}-${index}`}
        >
          {input}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
