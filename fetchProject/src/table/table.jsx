import Row from "./row";

const Table = ({ data }) => {
    if (!data || data.length === 0) {
        return <p>No data available</p>; // Prevent error when data is null or empty
    }

    return (
        <table className="table">
            <tbody>
                {data.map((item, index) => (
                    <Row key={index} item={item} /> // ✅ Added a unique key
                ))}
            </tbody>
        </table>
    );
};

export default Table;
