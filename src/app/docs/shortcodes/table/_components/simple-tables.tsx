interface SimpleTableData {
  sampleId: string;
  reading1: number;
  reading2: number;
  reading3: number;
  reading4: number;
}

const SimpleTables = () => {
  const tableData: SimpleTableData[] = [
    {
      sampleId: "Timeline",
      reading1: 16,
      reading2: 94,
      reading3: 74,
      reading4: 56,
    },
    {
      sampleId: "Sample #1",
      reading1: 24,
      reading2: 19,
      reading3: 44,
      reading4: 74,
    },
    {
      sampleId: "Pomodoro timer",
      reading1: 12,
      reading2: 63,
      reading3: 82,
      reading4: 66,
    },
    {
      sampleId: "Tags",
      reading1: 95,
      reading2: 46,
      reading3: 62,
      reading4: 24,
    },
    {
      sampleId: "Tracking time",
      reading1: 19,
      reading2: 66,
      reading3: 31,
      reading4: 99,
    },
    {
      sampleId: "Keyboard",
      reading1: 57,
      reading2: 15,
      reading3: 57,
      reading4: 9,
    },
    {
      sampleId: "Shortcuts",
      reading1: 69,
      reading2: 46,
      reading3: 16,
      reading4: 33,
    },
    {
      sampleId: "Manually",
      reading1: 18,
      reading2: 93,
      reading3: 84,
      reading4: 57,
    },
    {
      sampleId: "Timeline",
      reading1: 92,
      reading2: 10,
      reading3: 69,
      reading4: 35,
    },
    {
      sampleId: "Adding",
      reading1: 4,
      reading2: 87,
      reading3: 51,
      reading4: 22,
    },
    {
      sampleId: "Sample #2",
      reading1: 24,
      reading2: 23,
      reading3: 85,
      reading4: 34,
    },
    {
      sampleId: "Pomodoro",
      reading1: 92,
      reading2: 6,
      reading3: 67,
      reading4: 65,
    },
  ];

  return (
    <>
      <div className="table-responsive">
        <table className="table table_shortcode">
          <thead>
            <tr>
              <th>Sample ID</th>
              <th>Reading #1</th>
              <th>Reading #2</th>
              <th>Reading #3</th>
              <th>Reading #4</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <th>{row.sampleId}</th>
                <td>{row.reading1}</td>
                <td>{row.reading2}</td>
                <td>{row.reading3}</td>
                <td>{row.reading4}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SimpleTables;
