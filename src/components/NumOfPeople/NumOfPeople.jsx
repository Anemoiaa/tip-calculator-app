import AmountInput from "../UI/input/AmountInput/AmountInput";
import cl from "./NumOfPeople.module.css";

function NumOfPeople(props) {
    return (
        <div className={cl.container}>
            <div className={`${cl.title} title`}>
                Number Of People
                <div className={cl.zeroError}>Can’t be zero</div>
            </div>
            <div className={cl.content}>
                <AmountInput icon={props.icon} />
            </div>
        </div>
    );
}

export default NumOfPeople;