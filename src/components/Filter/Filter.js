
function Filter(props) {
    const { name, options, selectedValue, setSelectedValue } = props;

    return (
        <div>
            <span>{name + " filter: "}</span>
            <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
                <option>all</option>
                {options.map(
                    (option, idx) => <option key={idx} value={option}>{option}</option>
                )}
            </select>
        </div>
    );
}

export default Filter;
