import Filter from "../Filter/Filter.js";
import styles from "./FilterBox.module.css";

function FilterBox(props) {
    const { data, selectedModel, selectedRegion, setSelectedModel, setSelectedRegion } = props;

    const regions = [...new Set(data.map(
        item => item.region
    ))];
    const models = [...new Set(data.map(
        item => item.model
    ))]
    return (
        <div className={styles.filterbox}>
            <Filter
                name={"region"} options={regions}
                selectedValue={selectedRegion}
                setSelectedValue={setSelectedRegion} />
            <Filter name={"model"} options={models}
                selectedValue={selectedModel}
                setSelectedValue={setSelectedModel} />
        </div>
    );
}

export default FilterBox;
