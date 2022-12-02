import cl from "./ResetButton.module.css";

function ResetButton(props) {
    return (
        <button {...props} className={cl.resetBtn}>RESET</button>
    );
}

export default ResetButton;