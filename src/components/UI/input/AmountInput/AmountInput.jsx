import cl from "./AmountInput.module.css"

function AmountInput(props) {
    return (
        <>
            <img src={props.icon} alt="icon" />
            <input className={cl.inputWithIcon} type="text" placeholder="0" />
        </>
    );
}

export default AmountInput;