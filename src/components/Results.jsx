const Results = ({ result }) => {
  return (
    <>
      <div
        className={`${
          result?.msg === undefined ? "text-red-600" : "text-green-600"
        }`}
      >
        <h3>{result?.msg || result?.err}</h3>
        <span>{result.data.result}</span>
      </div>
    </>
  );
};

export default Results;
