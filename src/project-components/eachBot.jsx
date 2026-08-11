export const EachBot = ({
  bot,
  statusChangeCompleted,
  handleDelete,
}) => {
  const buttonText = bot.status === "need to start" ? "start" : "progress";
  const onChangeState =
    bot.status === "need to start" ? "in progress" : "completed";

  let example;
  if (bot.status === "need to start") {
    example = "in progress";
  } else if (bot.status === "in progress") {
    example = "completed";
  } else if (bot.status === "completed") {
    example = "signed off";
  } else {
    example = "ghost status";
  }
  return (
    <div>
      <li>
        Id: <b>{bot.id}</b> &nbsp; Title: <b>{bot.title}</b> &nbsp; Status:{" "}
        <b>{bot.status}</b>
        &nbsp; &nbsp;
        <button onClick={() => statusChangeCompleted(bot.id, onChangeState)}>
          Move {example} Job
        </button>
        &nbsp; &nbsp;
        <button onClick={() => handleDelete(bot.id)}>Delete Job</button>
      </li>
      <br />
    </div>
  );
};
