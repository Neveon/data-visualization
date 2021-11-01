"use strict";
import { DataContext } from "../../App";

const GraphDisplay = () => {
    const { json } = React.useContext(DataContext);

    // useEffect(() => {}, [json]);

    return <div>{json === JSON.stringify({}) && "Please Load Data"}</div>;
};

export default GraphDisplay;
