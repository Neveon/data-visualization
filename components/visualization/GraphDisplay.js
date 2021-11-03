"use strict";
import { DataContext } from "../../App";

import Line from "./Line";
import Pie from "./Pie";
import Population from "./Population";

const GraphDisplay = () => {
    // State for managing the correct CSV file is uploaded
    // const [isCounties, setIsCounties] = React.useState(false);

    const { json, view } = React.useContext(DataContext);

    // if (json !== JSON.stringify({}) && isCounties === false) {
    //     let parsedJSON = JSON.parse(json);
    //     // Array of columns
    //     let headers = Object.keys(parsedJSON[0]);

    //     // Checking if csv data is correct for display
    //     if (
    //         headers.includes("state") ||
    //         headers.includes("county") ||
    //         headers.includes("living_wage")
    //     ) {
    //         setIsCounties(true);
    //     }
    // }

    React.useEffect(() => {
        console.log("graph display rendered");
    }, [json, view]);

    switch (view) {
        case "Line":
            return (
                <div>
                    <Line />
                </div>
            );
        case "Pie":
            return (
                <div>
                    <Pie />
                </div>
            );
        case "Bar":
            return (
                <div>
                    <Population />
                </div>
            );
        default:
            return (
                <div>
                    <p>
                        <b style={{ color: "red" }}>
                            Please select correct CSV file and select a View to
                            display
                        </b>
                    </p>
                </div>
            );
    }
};

export default GraphDisplay;
