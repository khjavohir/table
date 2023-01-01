import "../css/table.css";

const Table = ({ cards }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {cards && cards.length
        ? cards.map((item, index) => (
            <div className="ex1">
              <img src={item.img} alt="" />
              <p className="first-p" key={index}>{item.title} </p>
              <div className="big-ex2">
                <div className="ex2"></div>
               <p className="second-p"><i>{item.desc}</i></p>
               <a className="second-a" href="#">{item.btn}</a>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default Table;