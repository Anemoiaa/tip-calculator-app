import DefaultTip from "../UI/input/DefaultTip/DefaultTip";
import CustomTip from "../UI/input/CustomTip/CustomTip";
import cl from "./SelectTip.module.css";

function SelectTip(props) {
    return (
        <div className={cl.container}>
            <div className="title">Select Tip %</div>
            <div className={cl.content}>
                {[5, 10, 15, 25, 50].map((value, index) =>
                    <DefaultTip
                        key={index}
                        value={value}
                        checked={false}
                    />
                )}
                <CustomTip />
            </div>
        </div>
    );
}

export default SelectTip;