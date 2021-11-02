import { DataContext } from "../../App";

// Component for average Living Wage for each state
const Population = () => {
    const [isCounties, setIsCounties] = React.useState(false);
    const { json } = React.useContext(DataContext);

    React.useEffect(() => {
        google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawChart);

        let avgs = {};
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

            // for state
            // for county
            // get population of county
            // sum(population) / numOfCounties = AVERAGE FOR STATE
            // return state: population average
            for (let i = 0; i < parsedJSON.length - 1; i++) {
                // console.log(parsedJSON);
                if (!(parsedJSON[i]["state"] in avgs)) {
                    avgs[parsedJSON[i]["state"]] = {};
                    avgs[parsedJSON[i]["state"]]["population_total"] =
                        parseInt(parsedJSON[i]["male"]) +
                        parseInt(parsedJSON[i]["female"]);
                } else {
                    avgs[parsedJSON[i]["state"]]["population_total"] +=
                        parseInt(parsedJSON[i]["male"]) +
                        parseInt(parsedJSON[i]["female"]);
                }
            }

            // Calculate averages and store in avg array
            let avgArr = [];
            for (let state in avgs) {
                avgArr.push([state, avgs[state]["population_total"]]);
            }

            // console.log(avgArr);

            avgArr.unshift(["State", "Population"]);

            let data = google.visualization.arrayToDataTable(avgArr);

            var view = new google.visualization.DataView(data);

            var options = {
                title: "Population for each US State",
                legend: { position: "none" },
                // explorer: { axis: "vertical" },
                width: 800,
                height: 3000,
                hAxis: { title: "Population" },
                // bar: { groupWidth: "95%" },
            };
            var chart = new google.visualization.BarChart(
                document.getElementById("pop")
            );
            chart.draw(view, options);
        }
    }, [json, isCounties]);

    return (
        <>
            {isCounties ? (
                <div id="pop"></div>
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
        </>
    );
};

export default Population;
