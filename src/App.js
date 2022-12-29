import Table from "./components/Table";

const App = () => {
  const tableElements = [
    { name: "id" },
    { name: "client" },
    { name: "product" },
    { name: "price" },
  ];

  const table = [
    { id: 1, name: "Javohir", product: "rice", price: 5000 },
    { id: 2, name: "Jalol", product: "potato", price: 5000 },
    { id: 3, name: "Rasulbek", product: "tomato", price: 5000 },
  ];

  return (
    <div>
      <Table table={table} />
    </div>
  );
};

export default App;
