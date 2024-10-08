import React from 'react';

const CustomInput = (props) => {
  const { type, label, i_id, i_class, name, val, onChng, onBlur } = props;
  return (
    <div className="form-floating my-3">
      <input
        type={type}
        className={`form-control rounded-left ${i_class}`}
        placeholder={label}
        id={i_id}
        name={name}
        value={val}
        onChange={onChng}
        onBlur={onBlur}
      />
      <label htmlFor="floatingInput">{label}</label>
    </div>
  );
};

export default CustomInput;