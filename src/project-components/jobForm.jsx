import "./jobForm.css";
import "./formButton.css";
import { FormButton } from "./formButton.jsx";
import { useState } from "react";


export const JobForm = () => {

  const [activity, setActivity] = useState("")
  const [status, setStatus] = useState("to start")

  function handleStatusChange(e) {
    setStatus(e.target.value)
  }

  function changeText(e) {
    setActivity(e.target.value)
  }

  return (
    <div >
      <div>
        <form className="form-container">
          <input
            type="text"
            className="form-input"
            placeholder="Enter the job"
            onChange={changeText}
          />
          <div>
            <div className="button-component-container">
              <FormButton value="Read Emails" />
              <FormButton value="Send Emails" />
              <FormButton value="Web Parsing" />
            </div>
          </div>
        </form>
      </div>
      <div>
        <br />
        <div className="dropdown-container">
        <select className="dropdown-menu" onChange={handleStatusChange} name="" id="">
            <option value="to start"> To Start</option>
            <option value="Running">In progress</option>
            <option value="Completed">Completed</option>
          </select>

          <button className="enter-job-button">Enter the Job</button>
        </div>
      </div>
    </div>
  );
};
