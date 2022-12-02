import iconDollar from "./assets/images/icon-dollar.svg";
import iconPerson from "./assets/images/icon-person.svg";
import ResetButton from "./components/UI/button/ResetButton/ResetButton";
import Results from "./components/Results/Results";
import Header from "./components/Header/Header";
import Bill from "./components/Bill/Bill";
import NumOfPeople from "./components/NumOfPeople/NumOfPeople";
import SelectTip from "./components/SelectTip/SelectTip";

function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="container">
                <div className="left">
                    <Bill  icon={iconDollar} />
                    <SelectTip />
                    <NumOfPeople icon={iconPerson} />
                </div>
                <div className="results-wrapper">
                    <div className="results">
                        <Results title={"Tip Amount"} />
                        <Results title={"Total"} />
                        <ResetButton />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
