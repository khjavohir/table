import "../css/table.css";

const Table = () => {
  return (
    <div>
      <table>
        <tr>
          <th>
            <p>Surname</p>
          </th>
          <th>
            <p>Name</p>
          </th>
          <th>
            <p>Adress</p>
          </th>
        </tr>

        <tr>
          <td>Xatamov</td>
          <td>Javohir</td>
          <td>Uzbekistan</td>
        </tr>
        <tr className="ex1">
          <td>Cristiano</td>
          <td>Ronaldo</td>
          <td>Portugal</td>
        </tr>
        <tr>
          <td>Maykl</td>
          <td>Jordan</td>
          <td>America</td>
        </tr>
        <tr className="ex1">
          <td>Maykl</td>
          <td>Jackson</td>
          <td>America</td>
        </tr>
        <tr>
          <td>Maykl</td>
          <td>Jordan</td>
          <td>America</td>
        </tr>
        <tr className="ex1">
          <td>Maykl</td>
          <td>Jackson</td>
          <td>America</td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
