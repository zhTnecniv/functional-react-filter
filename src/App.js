import data from "./data/data.json";
import styles from './App.module.css';
import FilterBox from "./components/FilterBox/FilterBox.js";
import Table from "./components/Table/Table.js";
import { useState } from "react";

function App() {
	const [selectedRegion, setSelectedRegion] = useState("all");
	const [selectedModel, setSelectedModel] = useState("all");

	return (
		<div className={styles.app}>
			<div style={{fontSize: "30px", marginBottom: "20px"}}>
				Filter App
			</div>
			<FilterBox data={data}
				selectedRegion={selectedRegion}
				selectedModel={selectedModel}
				setSelectedRegion={setSelectedRegion}
				setSelectedModel={setSelectedModel} />
			<Table data={data}
				selectedRegion={selectedRegion}
				selectedModel={selectedModel} />
		</div>
	);
}

export default App;
