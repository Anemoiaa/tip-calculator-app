import iconDollar from "./assets/images/icon-dollar.svg";
import iconPerson from "./assets/images/icon-person.svg";
import ResetButton from "./components/UI/button/ResetButton/ResetButton";
import Results from "./components/Results/Results";
import Header from "./components/Header/Header";
import Bill from "./components/Bill/Bill";
import NumOfPeople from "./components/NumOfPeople/NumOfPeople";
import SelectTip from "./components/SelectTip/SelectTip";
import { useEffect, useState } from "react";

function App() {
    const defaultTips = ["5", "10", "15", "25", "50"];
    const [bill, setBill] = useState("");
    const [selectedTip, setSelectedTip] = useState("");
    const [numOfPeople, setNumOfPeople] = useState("");
    const [results, setResults] = useState({tipAmount: "0.00", total: "0.00"});


    function resetValues() {
        setBill("");
        setSelectedTip("");
        setNumOfPeople("");
        setResults({tipAmount: "0.00", total: "0.00"});
    }

    useEffect(() => {
        let [billFloat, selectedTipFloat, nOfPeopleFloat] = [bill, selectedTip, numOfPeople].map(value => parseFloat(value));
        if([billFloat, selectedTipFloat, nOfPeopleFloat].some(val => isNaN(val))) {
            return
        }
        let tipAmount = (billFloat / 100 * selectedTipFloat) / nOfPeopleFloat;
        let total = (billFloat + (tipAmount * nOfPeopleFloat));
        setResults({tipAmount: tipAmount.toFixed(2), total: total.toFixed(2)}); 
    
    }, [bill, numOfPeople, selectedTip]);

    return (
        <div className="wrapper">
            <Header />
            <div className="container">
                <div className="left">
                    <Bill
                        value={bill}
                        onChange={(e) => setBill(e.target.value)} 
                        icon={iconDollar} />
                    <SelectTip 
                        defTips={defaultTips} 
                        selectedTip={selectedTip} 
                        onChange={(e) => setSelectedTip(e.target.value)}
                    />
                    <NumOfPeople 
                        value={numOfPeople}
                        onChange={value => setNumOfPeople(value)}
                        icon={iconPerson} 
                    />
                </div>
                <div className="results-wrapper">
                    <div className="results">
                        <Results 
                            title={"Tip Amount"} 
                            value={results.tipAmount}
                        />
                        <Results 
                            title={"Total"} 
                            value={results.total}
                        />
                        <ResetButton 
                            onClick={resetValues} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
