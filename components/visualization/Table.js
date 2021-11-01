"use strict";

import "./Table.css";

// We get JSON data from the context api
import { DataContext } from "../../App";

const Table = () => {
    const { json } = React.useContext(DataContext);

    // CSV into HTML table
    const jsonToHTML = (data) => {
        // Prevent this function running if data is the empty initialized JSON string
        if (data === JSON.stringify({})) {
            console.log(data);
            return;
        }
        let parsedJSON = JSON.parse(data);
        console.log(parsedJSON.length);

        let headers = Object.keys(parsedJSON[0]); // Array of columns
        console.log(headers);

        let table = document.getElementById("table");
        // let csv = data[0].split("\n");
        // building HTML table
        let html = "<table border=1px>";
        // Building row for headers
        for (let i = 0; i < headers.length; i++) {
            html += "<th>" + headers[i];
        }
        // Building rows for each record
        for (let i = 1; i < parsedJSON.length; i++) {
            html += "<tr>";
            for (let j = 0; j < headers.length; j++) {
                // console.log(parsedJSON[i][headers[j]]);
                html += "<td>" + parsedJSON[i][headers[j]];
            }
        }
        html += "</table>";
        // Update table component
        table.innerHTML = html;
    };

    // This effect runs when the this component renders
    //or when json data changes
    React.useEffect(() => {
        console.log("This component's effect has ran");
        jsonToHTML(json);
    }, [json]);

    return <div id="table">Table</div>;
};

export default Table;
