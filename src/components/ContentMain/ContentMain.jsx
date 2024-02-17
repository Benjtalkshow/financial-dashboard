import "./ContentMain.css";
import Cards from "../Cards/Cards";
import Transaction from "../Transaction/Transaction"

const ContentMain = () => {
  return (
    <div className="main-content-holder">
        <div className="content-grid-one">
            <Cards />
            <Transaction />
        </div>
        <div className="content-grid-two">
            <div className="grid-two-item">
              <div className="subgrid-two">


              </div>
            </div>

            <div className="grid-two-item">
              <div className="subgrid-two">

              </div>
            </div>
        </div>
    </div>
  )
}

export default ContentMain