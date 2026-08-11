export const JobDropdown = ({ setStatus }) => {


  return (
    
    <div>
      <p>Select Job Status:</p>
      <select  style={{backgroundColor: 'yellow', padding: '5px'}} name="job status" id="test">
        <option onClick={() => setStatus("need to start")} value="need to start">Need to start</option>

        <option onClick={() => setStatus("in progress")} value="in progress">
          In progress
        </option>

        <option onClick={() => setStatus("completed")} value="Completed">
          Completed
        </option>
      </select>
    </div>
  );
};
