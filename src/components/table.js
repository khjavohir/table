import "../css/table.css";
import Card from "./Card";
const Table = ({ cards }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {cards && cards.length
        ? cards.map((item, index) => (
            <Card key={index} item={item}/>
          ))
        : ""}
    </div>
  );
};

export default Table;