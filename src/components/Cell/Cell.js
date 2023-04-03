import styles from "./Cell.module.css";

const Cell = (props) => {
    const { value } = props;

    return (
        <div className={styles.cell}>{value}</div>
    );
}

export default Cell;
