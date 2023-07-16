import { useParams } from "react-router-dom";

function Problem() {
  const { id } = useParams();

  return <div>Problem {id}</div>;
}

export default Problem;
