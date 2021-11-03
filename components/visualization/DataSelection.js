"use strict";
import { DataContext } from "../../App";

import Average from "./Average";
import Pie from "./Pie";
import Population from "./Population";

const DataSelection = () => {
    const { json } = React.useContext(DataContext);

    const [state, setState] = React.useState(null);

    const avgClick = () => {
        if (json != JSON.stringify({})) {
            setState("avg");
        }
    };

    const popClick = () => {
        if (json != JSON.stringify({})) {
            setState("pop");
        }
    };

    const pieClick = () => {
        if (json != JSON.stringify({})) {
            setState("pie");
        }
    };

    switch (state) {
        case null:
            return (
                <div>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={avgClick}
                    >
                        Average Living Wage
                    </button>
                    <br />
                    <br />
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={popClick}
                    >
                        Population
                    </button>
                    <br />
                    <br />
                    <button
                        type="button"
                        className="btn btn-dark"
                        onClick={pieClick}
                    >
                        Demographics Pie
                    </button>
                    <br />
                    <br />
                    {json === JSON.stringify({}) && "Please Load Data"}
                </div>
            );
        case "avg":
            return (
                <div>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={avgClick}
                    >
                        Average Living Wage
                    </button>
                    <br />
                    <br />
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={popClick}
                    >
                        Population
                    </button>
                    <br />
                    <br />
                    <button
                        type="button"
                        className="btn btn-dark"
                        onClick={pieClick}
                    >
                        Pie
                    </button>
                    <Average />
                </div>
            );
        case "pop":
            return (
                <div>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={avgClick}
                    >
                        Average Living Wage
                    </button>
                    <br />
                    <br />
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={popClick}
                    >
                        Population
                    </button>
                    <br />
                    <br />
                    <button
                        type="button"
                        className="btn btn-dark"
                        onClick={pieClick}
                    >
                        Pie
                    </button>
                    <Population />
                </div>
            );
        case "pie":
            return (
                <div>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={avgClick}
                    >
                        Average Living Wage
                    </button>
                    <br />
                    <br />
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={popClick}
                    >
                        Population
                    </button>
                    <br />
                    <br />
                    <button
                        type="button"
                        className="btn btn-dark"
                        onClick={pieClick}
                    >
                        Pie
                    </button>

                    <Pie />
                </div>
            );
    }
};

export default DataSelection;
