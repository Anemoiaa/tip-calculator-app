import AmountInput from "../UI/input/AmountInput/AmountInput"
import cl from "./Bill.module.css"

function Bill(props) {
    return (
        <div className={cl.container}>
            <div className="title">Bill</div>
            <div className={cl.content}>
                <AmountInput icon={props.icon} />
            </div>
        </div>
    );
}

export default Bill;