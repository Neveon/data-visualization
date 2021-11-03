import { DataContext } from "../../App";

// Component for average Living Wage for each state
const Line = () => {
    const [isCounties, setIsCounties] = React.useState(false);
    const { json } = React.useContext(DataContext);

    React.useEffect(() => {
        console.log("Line rendered");
        google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawChart);

        // Init covid data for line chart
        let covid = {
            "covid-confirmed-2020-05": 0,
            "covid-confirmed-2020-06": 0,
            "covid-confirmed-2020-07": 0,
            "covid-confirmed-2020-08": 0,
            "covid-confirmed-2020-09": 0,
            "covid-confirmed-2020-10": 0,
            "covid-confirmed-2020-11": 0,
            "covid-confirmed-2020-12": 0,
            "covid-confirmed-2021-01": 0,
            "covid-confirmed-2021-02": 0,
            "covid-confirmed-2021-03": 0,
            "covid-confirmed-2021-04": 0,
            "covid-confirmed-2021-05": 0,
            "covid-confirmed-2021-06": 0,
            "covid-confirmed-2021-07": 0,
            "covid-confirmed-2021-08": 0,
            "covid-deaths-2020-05": 0,
            "covid-deaths-2020-06": 0,
            "covid-deaths-2020-07": 0,
            "covid-deaths-2020-08": 0,
            "covid-deaths-2020-09": 0,
            "covid-deaths-2020-10": 0,
            "covid-deaths-2020-11": 0,
            "covid-deaths-2020-12": 0,
            "covid-deaths-2021-01": 0,
            "covid-deaths-2021-02": 0,
            "covid-deaths-2021-03": 0,
            "covid-deaths-2021-04": 0,
            "covid-deaths-2021-05": 0,
            "covid-deaths-2021-06": 0,
            "covid-deaths-2021-07": 0,
            "covid-deaths-2021-08\r": 0, // The json includes \r, would need to fix how we obtain the json for csv to remove this
        };
        // DO NOT change to const, only works as function. Need to look into why ES6 does not work for visualization.
        function drawChart() {
            let parsedJSON = JSON.parse(json);
            let headers = Object.keys(parsedJSON[0]); // Array of columns

            // Checking if csv data is correct for display
            if (
                !headers.includes("state") ||
                !headers.includes("county") ||
                !headers.includes("living_wage")
            ) {
                setIsCounties(false);
                return;
            } else {
                setIsCounties(true);
            }

            // Adding up total confirmed cases and deaths for each data
            for (let i = 0; i < parsedJSON.length - 1; i++) {
                // console.log(parsedJSON);
                for (let key in covid) {
                    covid[key] += parseInt(parsedJSON[i][key]);
                }
            }

            // console.log(covid);

            // formatting data for google line chart
            let dtArr = [];
            let cc = [];
            let dd = [];
            for (let key in covid) {
                let dt = key.split("-").slice(2, 4).join("-");
                // Using trimEnd() to remove \r from the last covid-deaths key
                if (!dtArr.includes(dt.trimEnd())) {
                    dtArr.push(dt.trimEnd());
                }

                if (key.includes("deaths")) {
                    dd.push(covid[key]);
                } else {
                    cc.push(covid[key]);
                }
            }

            let formattedData = [];
            for (let i = 0; i < dtArr.length; i++) {
                // console.log("Date: %s, cc: %d, cd: %d", dtArr[i], cc[i], dd[i]);
                formattedData.push([dtArr[i], cc[i], dd[i]]);
            }
            console.log(formattedData);

            formattedData.unshift(["Date", "Covid-Confirmed", "Covid-Deaths"]);

            let data = google.visualization.arrayToDataTable(formattedData);

            var view = new google.visualization.DataView(data);

            var options = {
                title: "Covid Confirmed Cases and Deaths for US",
                // legend: { position: "none" },
                // explorer: { axis: "vertical" },
                width: 1200,
                height: 600,
                hAxis: { title: "Date" },
                vAxis: { title: "Number of Cases" },
                bar: { groupWidth: "95%" },
            };
            var chart = new google.visualization.LineChart(
                document.getElementById("line")
            );
            chart.draw(view, options);
        }
    }, [json, isCounties]);

    return (
        <div>
            {isCounties ? (
                <div id="line"></div>
            ) : (
                <div>
                    <br />
                    <p>
                        <b style={{ color: "red" }}>
                            Please select correct CSV file
                        </b>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Line;
