import { DataContext } from "../../App";

// Component for average Living Wage for each state
const Pie = () => {
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
            // get population of each race
            // return each race % of the entire country population
            for (let i = 0; i < parsedJSON.length - 1; i++) {
                // console.log(parsedJSON);
                if (!(parsedJSON[i]["state"] in avgs)) {
                    // init state if the state doesnt exist in avgs
                    avgs[parsedJSON[i]["state"]] = {};

                    // avgs[parsedJSON[i]["state"]]["population_total"]
                    let county_pop =
                        parseInt(parsedJSON[i]["male"]) +
                        parseInt(parsedJSON[i]["female"]);

                    // White
                    avgs[parsedJSON[i]["state"]]["white"] =
                        county_pop *
                        parseFloat(parsedJSON[i]["non_hispanic_white_alone"]);
                    // Black
                    avgs[parsedJSON[i]["state"]]["black"] =
                        county_pop * parseFloat(parsedJSON[i]["black_alone"]);
                    // Hispanic
                    avgs[parsedJSON[i]["state"]]["hispanic"] =
                        county_pop * parseFloat(parsedJSON[i]["hispanic"]);
                    // Asian
                    avgs[parsedJSON[i]["state"]]["asian"] =
                        county_pop * parseFloat(parsedJSON[i]["asian_alone"]);
                    // Other
                    avgs[parsedJSON[i]["state"]]["other"] =
                        county_pop * parseFloat(parsedJSON[i]["other"]);
                } else {
                    let county_pop =
                        parseInt(parsedJSON[i]["male"]) +
                        parseInt(parsedJSON[i]["female"]);
                    // White
                    avgs[parsedJSON[i]["state"]]["white"] +=
                        county_pop *
                        parseFloat(parsedJSON[i]["non_hispanic_white_alone"]);
                    // Black
                    avgs[parsedJSON[i]["state"]]["black"] +=
                        county_pop * parseFloat(parsedJSON[i]["black_alone"]);
                    // Hispanic
                    avgs[parsedJSON[i]["state"]]["hispanic"] +=
                        county_pop * parseFloat(parsedJSON[i]["hispanic"]);
                    // Asian
                    avgs[parsedJSON[i]["state"]]["asian"] +=
                        county_pop * parseFloat(parsedJSON[i]["asian_alone"]);
                    // Other
                    avgs[parsedJSON[i]["state"]]["other"] +=
                        county_pop * parseFloat(parsedJSON[i]["other"]);
                }
            }

            // for avgs[parsedJSON[i]["state"]]
            // sum the white, black, hispanic, asian population for total in the entire US
            // get

            // Calculate % and store in avg array
            let arr = [];
            let whiteTotal = 0;
            let blackTotal = 0;
            let hispanicTotal = 0;
            let asianTotal = 0;
            let otherTotal = 0;
            // popTotal=0;

            for (let state in avgs) {
                // avgArr.push([state, avgs[state]["population_total"]]);
                // popTotal += avgs[state]["population_total"];
                whiteTotal += avgs[state]["white"];
                blackTotal += avgs[state]["black"];
                hispanicTotal += avgs[state]["hispanic"];
                asianTotal += avgs[state]["asian"];
                otherTotal += avgs[state]["other"];
            }

            arr.push(
                ["White", whiteTotal],
                ["Black", blackTotal],
                ["Hispanic", hispanicTotal],
                ["Asian", asianTotal],
                ["Other", otherTotal]
            );

            // console.log(arr);

            arr.unshift(["Race", "Population"]);

            let data = google.visualization.arrayToDataTable(arr);

            var view = new google.visualization.DataView(data);

            var options = {
                title: "Demographics in the United States",
                // legend: { position: "none" },
                // explorer: { axis: "vertical" },
                width: 1000,
                height: 600,
                // hAxis: { title: "Population" },
                // bar: { groupWidth: "95%" },
            };
            var chart = new google.visualization.PieChart(
                document.getElementById("pie")
            );
            chart.draw(view, options);
        }
    }, [json, isCounties]);

    return (
        <>
            {isCounties ? (
                <div id="pie"></div>
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

export default Pie;
