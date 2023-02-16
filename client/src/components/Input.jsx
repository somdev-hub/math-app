import React from "react";

const Input = () => {
  const [values, setValues] = React.useState({ val1: "", val2: "" });
  const submitted = ({ currentTarget: input }) => {
    setValues({ ...values, [input.name]: input.value });
  };
  return (
    <div>
      <input type="text" value={values.val1} onChange={submitted} />
      <input type="text" value={values.val2} onChange={submitted} />
    </div>
  );
};

export default Input;
