import { DataContext } from "../../App";

// Component for average Living Wage for each state
const Average = () => {
    const { json } = React.useContext(DataContext);

    React.useEffect(() => {
        google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawChart);

        let avgs = {};
        // DO NOT change to const, only works as function. Need to look into why ES6 does not work for visualization.
        function drawChart() {
            let parsedJSON = JSON.parse(json);
            let headers = Object.keys(parsedJSON[0]); // Array of columns

            // for state
            // for county
            // get living_wage of county
            // sum(living_wage) / numOfCounties = AVERAGE FOR STATE
            // return state: living_wage_average
            for (let i = 0; i < parsedJSON.length - 1; i++) {
                // console.log(parsedJSON);
                if (!(parsedJSON[i]["state"] in avgs)) {
                    avgs[parsedJSON[i]["state"]] = {};
                    avgs[parsedJSON[i]["state"]]["living_wage_total"] =
                        parseFloat(parsedJSON[i]["living_wage"]);
                    avgs[parsedJSON[i]["state"]]["count"] = 1;
                } else {
                    avgs[parsedJSON[i]["state"]]["living_wage_total"] +=
                        parseFloat(parsedJSON[i]["living_wage"]);
                    avgs[parsedJSON[i]["state"]]["count"] += 1;
                }
            }

            // Calculate averages and store in avg array
            let avgArr = [];
            for (let state in avgs) {
                avgArr.push([
                    state,
                    avgs[state]["living_wage_total"] / avgs[state]["count"],
                ]);
            }

            // console.log(avgArr);

            avgArr.unshift(["State", "AVG Living Wage for Single Adult"]);

            let data = google.visualization.arrayToDataTable(avgArr);

            // var data = google.visualization.arrayToDataTable([
            //     ["Element", "Density"],
            //     ["Copper", 8.94],
            //     ["Silver", 10.49],
            //     ["Gold", 19.3],
            //     ["Platinum", 21.45],
            // ]);

            var view = new google.visualization.DataView(data);

            var options = {
                title: "Average Living Wage for a Single Adult per State",
                legend: { position: "none" },
                explorer: { axis: "vertical" },
                width: 1000,
                height: 4000,
                hAxis: { title: "US Dollars ($)" },
                // bar: { groupWidth: "95%" },
            };
            var chart = new google.visualization.BarChart(
                document.getElementById("average")
            );
            chart.draw(view, options);
        }
    }, []);

    return <div id="average"></div>;
};

export default Average;
