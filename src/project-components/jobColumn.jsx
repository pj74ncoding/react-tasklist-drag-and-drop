import "./jobColumn.css";
import { FormButton } from "./formButton";

export const JobColumn = ({ status, children, red, orange }) => {
  return (
    <section className="section">
      <h2>{status}</h2>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, debitis
        quas ullam natus deserunt illum maiores. Ullam nostrum alias ex eveniet,
      </p>

      {children}
      <div className="button-container">
        <div>
          <FormButton value="Parse Emails" />
        </div>
        <div>
          <FormButton value="Sap Extraction" />
        </div>
      </div>
      <br />
    </section>
  );
};
