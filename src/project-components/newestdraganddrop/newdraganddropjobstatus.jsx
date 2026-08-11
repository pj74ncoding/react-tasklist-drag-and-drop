import './newdraganddropjobstatus.css'

export const DragAndDropJobStatus = ({
  jobItems,
  onDragStart,
  status,
  handleDelete,
}) => {
    
  return (
    <>
      <h3>{status}</h3>
      {jobItems.map((item) => (
        <div
          key={item.id}
          className="l-item"
          draggable
          onDragStart={(e) => onDragStart(e, item.id)}
        >
          Id: <b>{item.id}</b> &nbsp; Title: <b>{item.title}</b> &nbsp; Status:{" "}
          <b>{item.status}</b>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <div className="delete-button-container">
            <button onClick={() => handleDelete(item.id)}>Delete Job</button>
          </div>
        </div>
      ))}
    </>
  );
};
