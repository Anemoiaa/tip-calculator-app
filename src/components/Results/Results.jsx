import cl from "./Results.module.css";

function Results(props) {
    return (
        <div className={cl.item}>
            <div className={cl.title}>Tip Amount <span>/ person</span></div>
            <div className={cl.value}>$0.00</div>
        </div>
    );
}

export default Results;

