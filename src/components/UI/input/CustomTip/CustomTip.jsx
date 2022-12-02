import cl from "./CustomTip.module.css";

function CustomTip(props) {
    return (
        <input {...props} className={cl.customTip} type="text" placeholder="Custom" />
    );
}


export default CustomTip;