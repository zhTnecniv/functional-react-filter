import Row from "../Row/Row.js";
import styles from "./Table.module.css";

function Table(props) {
    const { data, selectedRegion, selectedModel } = props;
    return (
        <div className={styles.table}>
            <Row fontWeight={"bold"} region={"region"} model={"model"} sales={"sales"} />
            {
                data.filter(
                    item => {
                        if (selectedRegion === "all" || selectedRegion === item.region) return true;
                        return false;
                    }
                ).filter(
                    item => {
                        if (selectedModel === "all" || selectedModel === item.model) return true;
                        return false;
                    }
                ).map(
                    (item, idx) => <Row
                        key={idx} region={item.region}
                        model={item.model} sales={item.sales} />)
            }
        </div>
    );
}

export default Table;
