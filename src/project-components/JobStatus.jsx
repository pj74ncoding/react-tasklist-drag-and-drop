import { React, useState } from "react";
import { EachBot } from "./eachBot";

const JobStatus = ({
  jobItems,
  status,
  setJobItems,
  tempArray,
  setTempArray,
  elementClassName,
}) => {

  const jobStatus = status;



  const handleStatusChangeProgress = (id, statusType = "completed") => {
    const modArr = jobItems.map((item) => {
      if (item.id == id) {
        return { ...item, status: statusType };
      } else {
        return item;
      }
    });
    console.log(modArr);
    setJobItems(modArr);
  };

  function handleDelete(id) {
    setJobItems(jobItems.filter((bot) => bot.id !== id));
    setTempArray(tempArray.filter((bot) => bot.id != id));
  }

  const itemStatus = jobItems.filter((bot) => bot.status == jobStatus);
  const filteredItems = itemStatus.map((bot) => (
    <EachBot
      bot={bot}
      statusChangeCompleted={handleStatusChangeProgress}
      handleDelete={handleDelete}
      key={bot.id}
      elementClassName={elementClassName}
    />
  ));

  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid grey",
        paddingLeft: "20px",
      }}
    >
      <h1>Filtered Items</h1>
      {filteredItems}
    </div>
  );
};

export default JobStatus;
