import { reportDatasets, reportLabels } from "../../data/data";
import { iconsImgs } from "../../utils/images";
import BarChart from "../Charts/BarChart";


const Reports = () => {
  return (
    <div className="grid-one-item grid-common grid-c1">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Reports</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} />
        </button>
      </div>
      <BarChart labels={reportLabels} datasets={reportDatasets} />
    </div>
  );
};

export default Reports;
