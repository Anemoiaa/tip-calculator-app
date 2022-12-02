import DefaultTip from "../UI/input/DefaultTip/DefaultTip";
import CustomTip from "../UI/input/CustomTip/CustomTip";
import cl from "./SelectTip.module.css";

function SelectTip(props) {
    return (
        <div className={cl.container}>
            <div className="title">Select Tip %</div>
            <div className={cl.content}>
                {props.defTips.map((value, index) =>
                    <DefaultTip
                        key={index}
                        value={value}
                        checked={value === props.selectedTip}
                        onChange={props.onChange}
                    />
                )}
                <CustomTip value={props.selectedTip} onChange={props.onChange} />
            </div>
        </div>
    );
}

export default SelectTip;