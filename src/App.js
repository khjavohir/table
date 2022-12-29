import Table from "./components/table";

const App = () => {
  const tableElements = [
    { key: "id", name: "ID" },
    { key: "client", name: "Name" },
    { key: "product", name: "Products" },
    { key: "price", name: "Total price" },
  ];

  const table = [
    { id: 1, client: "Javohir", product: "rice/potato/tomato", price: 5000 },
    { id: 2, client: "Jalol", product: "potato/tomato", price: 5000 },
    { id: 3, client: "Rasulbek", product: "tomato", price: 5000 },
  ];

  return (
    <div>
      <Table table={table} tableHeader={tableElements} />
    </div>
  );
};

export default App;
