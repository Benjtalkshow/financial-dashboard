import "./Transaction.css";
import { iconsImgs } from "../../utils/images";
import LineChart from "../Charts/LineChart";
import { transactionDatasets, transactionLabels } from "../../data/data";


const Transactions = () => {
  return (
    <div className="grid-one-item grid-common grid-c2">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">All transactions</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>
        <LineChart labels={transactionLabels} datasets={transactionDatasets}/>
    </div>
  )
}

export default Transactions