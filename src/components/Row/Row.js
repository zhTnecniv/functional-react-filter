import Cell from "../Cell/Cell.js";
import styles from "./Row.module.css";

const Row = (props) => {
    const { region, model, sales } = props;
    return (
        <div className={styles.row}>
            <Cell key={1} value={region} />
            <Cell key={2} value={model} />
            <Cell key={3} value={sales} />
        </div>
    );
}

export default Row;
