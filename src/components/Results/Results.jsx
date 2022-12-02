import cl from "./Results.module.css";

function Results(props) {
    return (
        <div className={cl.item}>
            <div className={cl.title}>{props.title} <span>/ person</span></div>
            <div className={cl.value}>${props.value}</div>
        </div>
    );
}

export default Results;

