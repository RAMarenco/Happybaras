import EntriesCard from "../../components/entrieCard/entrieCard";
import MetricCard from "../../components/metricCard/metricCard";

const useReport = (dataMetrics, dataEntries) => {
    const renderMetrics = () => {
        if (dataMetrics.length > 0) {
            return dataMetrics.map((element) => {
                return (
                    <MetricCard
                        key={element.id}
                        icon={element.icon}
                        text={element.text}
                        total={element.total}
                    />
                );
            });
        }
    };

    const renderEntries = () => {
        if (dataEntries.length > 0) {
            return dataEntries.map((element) => {
                return (
                    <EntriesCard element={element} key={element.id}/>
                );
            });
        }
    };

    return { renderMetrics, renderEntries };
}

export default useReport;