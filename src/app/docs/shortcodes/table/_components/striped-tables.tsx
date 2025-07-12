import Link from "next/link";

interface TableDataProps {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
}
const StripedTables = () => {
  const tableData: TableDataProps[] = [
    { id: 1, firstName: "Mark", lastName: "Otto", username: "@mdo" },
    { id: 2, firstName: "Jacob", lastName: "Thornton", username: "@fat" },
    { id: 3, firstName: "Larry", lastName: "the Bird", username: "@twitter" },
  ];
  return (
    <>
      <div className="basic_table">
        <h4 className="s_title load-order-2 smooth-scroll-heading" id="strip">
          Striped Table
          <Link
            className="anchorjs-link "
            aria-label="Anchor"
            data-anchorjs-icon=""
            href="#strip"
            style={{ font: "1em / 1 anchorjs-icons", paddingLeft: "0.375em" }}
          />
        </h4>
        <p>
          Use <code className="highlighter-rouge">.table-striped</code> to add
          zebra-striping to any table row within the{" "}
          <code className="highlighter-rouge">&lt;tbody&gt;</code>.
        </p>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id}>
                <th scope="row">{row.id}</th>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StripedTables;
