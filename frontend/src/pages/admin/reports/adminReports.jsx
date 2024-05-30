import {
    DUMMY_DATA_ENTRIES,
    DUMMY_DATA_METRICS,
} from "../../../consts/admin/dummyData";
import useReport from "../../../hooks/reports/useReport";
import Chart from "../../../components/chart/chart";
import classes from "./AdminReports.module.scss";

const AdminReports = () => {
    const { renderMetrics, renderEntries } = useReport(
        DUMMY_DATA_METRICS,
        DUMMY_DATA_ENTRIES
    );

    return (
        <div className={classes["AdminReports_Container"]}>
            <div className={classes["Metrics_Container"]}>
                {renderMetrics()}
            </div>
            <div className={classes["Graphs_Container"]}>
                <Chart
                    text="Entradas de la colonia de residentes y visitantes (por
                    periodo)"
                    type="1"
                />
                <Chart text="Entradas de la colonia (por usuario)"/>
            </div>
            <div className={classes["Entries_Container"]}>
                <h4>Entradas recientes</h4>
                <div className={classes["Entries_Cards_Container"]}>
                    {renderEntries()}
                </div>
            </div>
        </div>
    );
};

export default AdminReports;
