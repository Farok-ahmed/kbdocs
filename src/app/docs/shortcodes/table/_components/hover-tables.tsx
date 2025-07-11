import Link from "next/link";

interface TableDataProps {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
}
const HoverTables = () => {
  const tableData: TableDataProps[] = [
    { id: 1, firstName: "Mark", lastName: "Otto", username: "@mdo" },
    { id: 2, firstName: "Jacob", lastName: "Thornton", username: "@fat" },
    { id: 3, firstName: "Larry", lastName: "the Bird", username: "@twitter" },
  ];
  return (
    <>
      <div className="basic_table">
        <h4 className="s_title load-order-2" id="hover">
          Hover Tables
          <Link
            className="anchorjs-link "
            aria-label="Anchor"
            data-anchorjs-icon=""
            href="#hover"
            style={{ font: "1em / 1 anchorjs-icons", paddingLeft: "0.375em" }}
          />
        </h4>
        <p>
          Since KbDoc is based on Bootstrap 4, so you can safley use Bootstrap's
          table classes to style your table. We also added more table styles and
          functionality to our template.
        </p>
        <table className="table basic_table_info table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => (
              <tr key={data.id}>
                <th scope="row">{data.id}</th>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HoverTables;
