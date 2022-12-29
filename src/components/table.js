import '../css/table.css'

const Table = ({ table, tableHeader }) => {




  return (
    <div>
      <table>
        <tr>
          {tableHeader && tableHeader.length > 0
            ? tableHeader.map((item, index) => (
                <th key={index}>
                  <p>{item.name}</p>
                </th>
              ))
            : ""}
        </tr>

        {table && table.length
          ? table.map((item, index) => (
              <tr key={index}>
                {tableHeader && tableHeader.length > 0 ? tableHeader.map((itemHeader, index) => (
                  <td>{item[itemHeader.key]}</td>
                )) : ''}
                
                
              </tr>
            ))
          : ""}
      </table>
    </div>
  );
}

export default Table