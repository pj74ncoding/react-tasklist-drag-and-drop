import "./formButton.css";

export const FormButton = (props)=> {
  return (
    <div>
      <button className="form-button">{props.value}</button>
    </div>
  );
};
