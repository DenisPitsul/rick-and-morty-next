import React from "react";

type Props = {
  name: string;
  changeID: (id: number) => void;
  total: number;
};

const InputGroup = ({ name, changeID, total }: Props) => {
  return (
    <div className="input-group mb-3">
      <select
        onChange={(e) => changeID(+e.target.value)}
        className="form-select"
        id={name}
      >
        <option value="1">Choose...</option>
        {[...Array(total).keys()].map((x) => {
          return (
            <option value={x + 1} key={x}>
              {name} - {x + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;
