import "./ContentMain.css";
import Cards from "../Cards/Cards";
import Transaction from "../Transaction/Transaction";
import Reports from "../Reports/Reports";
import Budget from "../Budget/Budget";
import Loans from "../Loan/Loan";
import Advice from "../Advice/Advice";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
      <div className="content-grid-one">
        <Cards />
        <Transaction />
        <Reports />
      </div>
      <div className="content-grid-two">
      <Budget />
        <div className="grid-two-item">
          <div className="subgrid-two">
          <Advice />
          <Advice />
          <Advice />
          </div>
        </div>
        <div className="grid-two-item">
          <div className="subgrid-two">
            <Advice />
            <Reports />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentMain;
