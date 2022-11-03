import './switch.css';

export const Switch = ({ id, isOn, handleToggle }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        id={id}
        className="switch"
        type="checkbox"
      />

      <label
        htmlFor={id}
        className="switch__label"
      >
        <span className="switch__button" />
      </label>
    </>
  );
};
