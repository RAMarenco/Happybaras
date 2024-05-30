import {
    DUMMY_DAYS_DATA,
    DUMMY_MONTHS_DATA,
    DUMMY_YEARS_DATA,
} from "../../consts/admin/dummyData";
import { useEffect, useState } from "react";
import useChart from "../../hooks/chart/useChart";
import { DAYS, MONTHS, YEARS } from "../../consts/admin/labels";
import OutlinedButton from "./../Buttons/Outlined/OutlinedButton";
import { buttonColorsStrings } from "./../Buttons/ButtonColorStrings";
import { useMediaQuery } from "react-responsive";
import classes from "./Chart.module.scss";

const Chart = ({ text, type = "", endpoint = "" }) => {
    const isMovile = useMediaQuery({ query: '(max-width: 900px)' });
    const { chart, setData, setLabels } = useChart();
    const [dataType, setDataType] = useState("S");

    useEffect(() => {
        setData(DUMMY_DAYS_DATA);
        setLabels(DAYS);
    }, []);

    useEffect(() => {
        if (dataType === "S") {
            setData(DUMMY_DAYS_DATA);
            setLabels(DAYS);
        } else if (dataType === "M") {
            setData(DUMMY_MONTHS_DATA);
            setLabels(MONTHS);
        } else if (dataType === "A") {
            setData(DUMMY_YEARS_DATA);
            setLabels(YEARS);
        }
    }, [dataType]);

    const handleClick = (text) => {
        if (text === "S") {
            setDataType("S");
        } else if (text === "M") {
            setDataType("M");
        } else if (text === "A") {
            setDataType("A");
        }
    };

    return (
        <div className={classes["Graph_Container"]}>
            <div className={classes["Graph_Info_Container"]}>
                <h4>{text}</h4>
                <div className={classes["Button_Container"]}>
                    <OutlinedButton
                        text={isMovile ? "S" : "Semanal"}
                        onClick={() => handleClick("S")}
                        color={buttonColorsStrings.accentGreen}
                        size_w="sm"
                    />
                    <OutlinedButton
                        text={isMovile ? "M" : "Mensual"}
                        onClick={() => handleClick("M")}
                        color={buttonColorsStrings.accentGreen}
                        size_w="sm"
                    />
                    {type === "1" && (
                        <OutlinedButton
                        text={isMovile ? "A" : "Anual"}
                            onClick={() => handleClick("A")}
                            color={buttonColorsStrings.accentGreen}
                            size_w="sm"
                        />
                    )}
                </div>
            </div>
            {chart()}
        </div>
    );
};

export default Chart;
