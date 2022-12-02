import { useState } from "react";
import AmountInput from "../UI/input/AmountInput/AmountInput";
import cl from "./NumOfPeople.module.css";

function NumOfPeople(props) {
    const [dispalyError, setDisplayError] = useState(false);
    return (
        <div className={cl.container}>
            <div className={`${cl.title} title`}>
                Number Of People
                {dispalyError && 
                    <div className={cl.zeroError}>Can’t be zero</div>
                }
            </div>
            <div className={cl.content}>
                <AmountInput 
                    value={props.value}
                    onChange={(e) => {
                        if(e.target.value === '0') setDisplayError(true);
                        else {
                            setDisplayError(false);
                            props.onChange(e.target.value); 
                        }  
                    }}
                    icon={props.icon} 
                />
            </div>
        </div>
    );
}

export default NumOfPeople;