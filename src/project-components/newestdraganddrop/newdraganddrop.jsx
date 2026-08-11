import { useState } from "react";
import "./newdraganddrop.css";
import { DragAndDropJobStatus } from "./newdraganddropjobstatus";

export const PeteDragAndDrop = ({
  jobItems,
  setJobItems,
  tempArray,
  setTempArray,
}) => {
  // 1. Handle the start of the drag
  const onDragStart = (e, itemId) => {
    e.dataTransfer.setData("itemId", itemId);
  };

  // 2. Allow the drop (Required by browsers)
  const onDragOver = (e) => {
    e.preventDefault();
  };

  // 3. Handle the drop logic: Update State, not DOM
  const onDrop = (e, newStatus) => {
    const itemId = e.dataTransfer.getData("itemId");

    setJobItems((prevItems) =>
      prevItems.map((item) =>
        item.id.toString() === itemId ? { ...item, status: newStatus } : item,
      ),
    );
  };

  function handleDelete(id) {
    console.log("id", id);
    console.log("jI", jobItems);
    console.log("ta", tempArray);
    setJobItems(jobItems.filter((bot) => bot.id !== id));
    setTempArray(tempArray.filter((bot) => bot.id != id));
  }

  return (
    <div className="drag-and-drop-container">
      {/* Left Column */}
      <div
        className="left-section"
        id="left"
        onDragOver={onDragOver}
        onDrop={(e) => onDrop(e, "need to start")}
      >
        <DragAndDropJobStatus
          jobItems={jobItems.filter((j) => j.status === "need to start")}
          onDragStart={onDragStart}
          status="need to start"
          handleDelete={handleDelete}
        />
      </div>

      {/* Middle Column */}
      <div
        className="middle-section"
        id="middle"
        onDragOver={onDragOver}
        onDrop={(e) => onDrop(e, "in progress")}
      >
        <DragAndDropJobStatus
          jobItems={jobItems.filter((j) => j.status === "in progress")}
          onDragStart={onDragStart}
          status="in progress"
          handleDelete={handleDelete}
        />
      </div>

      {/* Right Column */}
      <div
        className="right-section"
        id="right"
        onDragOver={onDragOver}
        onDrop={(e) => onDrop(e, "completed")}
      >
        <DragAndDropJobStatus
          jobItems={jobItems.filter((j) => j.status === "completed")}
          onDragStart={onDragStart}
          status="completed"
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};
