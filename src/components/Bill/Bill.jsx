import AmountInput from "../UI/input/AmountInput/AmountInput"
import cl from "./Bill.module.css"

function Bill({icon, ...props}) {
    return (
        <div className={cl.container}>
            <div className="title">Bill</div>
            <div className={cl.content}>
                <AmountInput 
                    icon={icon}
                    {...props}
                />
            </div>
        </div>
    );
}

export default Bill;