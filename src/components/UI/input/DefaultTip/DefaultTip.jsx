import cl from "./DefaultTip.module.css";

function DefaultTip(props) {
    return (
        <label className={cl.defaultTip}>
            {props.value}%
            <input 
                checked={props.checked} 
                value={props.value} 
                onChange={props.onChange}
                type="radio" name="tip" 
            />
        </label>
    );
}

export default DefaultTip;