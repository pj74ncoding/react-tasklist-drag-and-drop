import { JobForm } from "./jobForm.jsx";
import "./appTaskForm.css";
import Fox from "./fox.jpg";
import FormHeader from "./appTaskFormHeader.jsx";
import { JobColumn } from "./jobColumn.jsx";
import { Footer } from "./footer.jsx";
import { useState, useEffect } from "react";
import { NewJobsAdded } from "./newJobsAdded.jsx";
import JobStatus from "./JobStatus.jsx";
import { WebsiteDropdown } from "./dropdown.jsx";
import { JobDropdown } from "./jobDropDown.jsx";
import { SuccessMessage } from "./successmessage.jsx";

// import { typeOf } from "react-is";
import { PeteDragAndDrop } from "./newestdraganddrop/newdraganddrop.jsx";

function AppTaskForm() {
  const [jobItems, setJobItems] = useState([
    { id: "1", title: "scout player", status: "need to start" },
    { id: "2", title: "scout player", status: "need to start" },
    { id: "3", title: "player contracts", status: "in progress" },
    { id: "4", title: "player contracts", status: "in progress" },
    { id: "5", title: "player training schedule", status: "completed" },
    { id: "6", title: "player training schedule", status: "completed" },
  ]);

  const [idNumber, setIdNumber] = useState("");
  const [newTitle, setTitle] = useState("");
  const [newStatus, setStatus] = useState("");

  const [tempArray, setTempArray] = useState([]);

  // change the slice
  const [originalJobItems, setOriginalJobItems] = useState(jobItems.slice());

  const [search, setSearch] = useState("");
  const [searchArray, setSearchArray] = useState(jobItems.slice());
  const [searchArrays, setSearchArrays] = useState(jobItems.slice());

  const [showSearch, setShowSearch] = useState(false);

  const [newJobs, setNewJobs] = useState([]);

  const [storage, setStorage] = useState(false);

  const [disabled, setDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [characterError, setCharacterError] = useState(null);
  const [test, setTest] = useState(false);
  const [isMessageDisplayed, setIsMessageDisplayed] = useState(false);
  const [idError, setIdError] = useState(null);
  const [viewJoblist, setViewJoblist] = useState(false);

  // LOCAL STORAGE FOR NEWJOBS ARRAY/////////////////

  if (storage == true) {
    const newJobsAdded = newJobs;
    localStorage.setItem("newjobs", JSON.stringify(newJobsAdded));
    const parsedJobsadded = JSON.parse(localStorage.getItem("newJobs"));
  }

  ////////////////////////////////////////////////////////////////

  console.log("jobItems", jobItems);
  const green = {
    color: "green",
  };

  const orange = {
    color: "orange",
  };

  const red = {
    color: "red",
  };
  const handleStatusChange = (id, statusType = "in progress") => {
    const modArr = tempArray.map((item) => {
      if (item.id == id) {
        return { ...item, status: statusType };
      } else {
        return item;
      }
    });
    console.log(modArr);
    setTempArray(modArr);
  };

  const handleStatusChangeProgress = (id, statusType = "completed") => {
    const modArr = tempArray.map((item) => {
      if (item.id == id) {
        return { ...item, status: statusType };
      } else {
        return item;
      }
    });
    console.log(modArr);
    setTempArray(modArr);
  };

  function handleId(e) {
    setIdNumber(e.target.value);
  }

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleStatus(e) {
    setStatus(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const check = jobItems.some((bot) => bot.id == idNumber);
    console.log("check", check);

    if (jobItems.some((v) => v.id == idNumber)) {
      setIdNumber("");
      setTitle("");
      setStatus("");
      setIdError("JOB ID IS ALREADY TAKEN!!");
    } else if (idNumber == "" || newTitle == "" || newStatus == "") {
      setDisabled(true);
      setDisabled(false);
      setErrorMessage("ALL INPUT FIELDS MUST BE FILLED IN!!");
      console.log("one");
    } else if (newTitle.length <= 5) {
      setCharacterError("JOB TITLE MUST BE MORE THAN 5 CHARACTERS!!");
      setDisabled(true);
      setDisabled(false);
      console.log("two");
    } else if (disabled == false) {
      setJobItems([
        ...jobItems,
        { id: idNumber, title: newTitle, status: newStatus },
      ]);

      setIdError(null);
      setErrorMessage(null);
      setCharacterError(null);
      setIsMessageDisplayed(true);

      setTimeout(() => {
        setIsMessageDisplayed(false);
      }, 4000);

      console.log("three");
      setNewJobs([
        ...newJobs,
        { id: idNumber, title: newTitle, status: newStatus },
      ]);

      setIdNumber("");
      setTitle("");
      setStatus("");

      jobItems.map((bot) => <li key={bot.id}>Status: {bot.status}</li>);
      console.log("jobItems:", jobItems);
      setSearchArray([
        ...searchArray,
        { id: idNumber, title: newTitle, status: newStatus },
      ]);
    }
  }

  function jobItemsReset() {
    setSearchArray(originalJobItems);
    setJobItems(originalJobItems);
    setNewJobs([]);
    setTempArray([]);
  }

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function searchJob() {
    const modarr = searchArray;
    const filteredArr = modarr.filter((bot) => bot.id == search);
    //setSearchArrays(modarr.filter((bot) => bot.id == search)); // Attempt at updating
    setTempArray([...tempArray, ...filteredArr]); // Expected an updated searchArrays
    console.log(
      searchArrays,
      modarr.filter((bot) => bot.id == search),
    );

    setSearch("");
    setShowSearch(true);
    console.log("search", tempArray);
  }

  console.log("jobItems");

  return (
    <div>
      <div className="header-component">
        <FormHeader />
      </div>
      <br />

      {/* <JobForm /> */}

      <br />
      <hr />
      <br />
      <div className="input-and-running-job-container">
        {/* {/* INPUT AREA */}

        <WebsiteDropdown storage={storage} setStorage={setStorage} />

        <form className="job-input-section">
          {isMessageDisplayed && (
            <SuccessMessage
              image={Fox}
              alt="An abstract fox head"
              message="Success Your Job Has Been Added!!"
            />
          )}
          <h3>Enter new Job Details</h3>
          <p>Enter Job Id:</p>
          <span style={{ color: "red", fontWeight: "bold" }}>{idError}</span>
          <input
            type="text"
            size="40"
            placeholder="Enter id"
            onChange={handleId}
            value={idNumber}
          />
          <p>Enter Job Title:</p>
          <span style={{ color: "red", fontWeight: "bold" }}>
            {characterError}
          </span>

          <input
            type="text"
            size="40"
            placeholder="Enter title"
            onChange={handleTitle}
            value={newTitle}
          />
          <JobDropdown setStatus={setStatus} />

          <br />
          <button
            disabled={disabled}
            className="job-input-section-button"
            onClick={handleSubmit}
          >
            Submit Job
          </button>
          <p className="submit-error-message">{errorMessage}</p>
        </form>

        <section className="running-joblist">
          <h3>Running Job List - Scroll To See All Jobs</h3>
          <br />

          <div className="joblist-button-container">
            <button className="joblist-reset-button" onClick={jobItemsReset}>
              Reset Back To Original JobList
            </button>
            <button
              onClick={() => setViewJoblist(!viewJoblist)}
              className="joblist-toggle-button"
            >
              Display Job List on/off
            </button>
          </div>
          <br />
          <hr />

          {viewJoblist &&
            jobItems.map((bot) => (
              <li
                style={
                  bot.status === "completed"
                    ? green
                    : bot.status === "in progress"
                      ? orange
                      : red
                }
                key={bot.id}
              >
                id: {bot.id} &nbsp; title: {bot.title} &nbsp; status:{" "}
                {bot.status} &nbsp;
              </li>
            ))}
        </section>

        <section className="search-section">
          <h3>Search Job By Id - Scroll If Needed</h3>
          <p>Enter Job Id: </p>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "30px",
                height: "36px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.3em",
                color: "grey",
                borderLeft: "2px solid grey",
                borderTop: "2px solid grey",
                borderBottom: "2px solid grey",
              }}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <input
              style={{
                borderLeft: "none",
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px",
                fontSize: "1em",
              }}
              type="text"
              placeholder="Enter Job Id"
              size="10"
              onChange={handleSearch}
              value={search}
            />
            &nbsp; &nbsp; &nbsp;
            <button onClick={searchJob}>Search Job</button>
          </div>

          {tempArray.map((bot) => (
            <li
              style={
                bot.status === "completed"
                  ? green
                  : bot.status === "in progress"
                    ? orange
                    : red
              }
              key={bot.id}
            >
              Job Id: {bot.id} Job Title: {bot.title} Job Status: {bot.status}
            </li>
          ))}
        </section>
      </div>

      <br />
      <hr />
      <br />
      <main className="job-column-container">
        {/* <button onClick={handleChange}>Change</button> */}

        <JobColumn status="Need to Start" color={red}>
          <div className="icon-container">
            <i
              style={{ color: "red", fontSize: "3rem", padding: "10px" }}
              className="fa-regular fa-circle-xmark"
            ></i>

            <i
              style={{ fontSize: "1.5rem", marginTop: "20px", padding: "10px" }}
              className="fa-solid fa-trash"
            ></i>
          </div>
        </JobColumn>

        <JobColumn status="In-Progress" color={orange}>
          <div className="icon-container">
            <i
              style={{ color: "orange", fontSize: "3rem", padding: "10px" }}
              className="fa-solid fa-arrow-rotate-right"
            ></i>
            <i
              style={{ fontSize: "1.5rem", marginTop: "20px", padding: "10px" }}
              className="fa-solid fa-trash"
            ></i>
          </div>
        </JobColumn>

        <JobColumn status="Completed" color={red}>
          <div className="icon-container">
            <i
              style={{ color: "green", fontSize: "3rem", padding: "10px" }}
              className="fa-solid fa-circle-check"
            ></i>
            <i
              style={{ fontSize: "1.5rem", marginTop: "20px", padding: "10px" }}
              className="fa-solid fa-trash"
            ></i>
          </div>
        </JobColumn>
        <br />
        <h1
          style={{
            textAlign: "center",
            color: "orange",
            textDecoration: "underline",
          }}
        >
          Move And Delete Section
        </h1>
        <br />
        <JobStatus
          setJobItems={setJobItems}
          setTempArray={setTempArray}
          tempArray={tempArray}
          jobItems={jobItems}
          status="need to start"
        />
        <JobStatus
          setJobItems={setJobItems}
          setTempArray={setTempArray}
          tempArray={tempArray}
          jobItems={jobItems}
          status="in progress"
        />
        <JobStatus
          setJobItems={setJobItems}
          setTempArray={setTempArray}
          tempArray={tempArray}
          jobItems={jobItems}
          status="completed"
        />
      </main>
      <br />
      <h1
        style={{
          textAlign: "center",
          color: "darkorange",
          textDecoration: "underline",
        }}
      >
        Drag And Drop / Delete Section
      </h1>
      <br />
      <PeteDragAndDrop
        jobItems={jobItems}
        setJobItems={setJobItems}
        tempArray={tempArray}
        setTempArray={setTempArray}
      />
      <br />
      <h1>Added Jobs Section</h1>
      <br />
      <NewJobsAdded jobList={newJobs} green={green} orange={orange} red={red} />
      <br />
      <Footer />
    </div>
  );
}

export default AppTaskForm;
