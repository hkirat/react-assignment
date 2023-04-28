import { useParams } from "react-router-dom";
import problems from "../db/problems";
import Error from "../Pages/Error";
import Header from "../components/Header";
const Problem = () => {
  const { id } = useParams();
  const problem = problems.find((problem) => problem.id === id);
  return problem ? (
    <>
      <Header />
      <section className="flex flex-row justify-center">
        <div className="description w-1/2 border border-green-600 p-5">
          <div className="text-black text-xl font-semibold mx-4 tracking-wide w-fit flex flex-row ">
            <span className="mx-4">{problem.id}</span>
            <p>{problem.title}</p>
            {problem.difficulty === "Easy" ? (
              <div className="text-green-500 border border-green-500 rounded-xl w-fit  text-center text-sm p-2 ml-4">
                {problem.difficulty}
              </div>
            ) : problem.difficulty == "Blue" ? (
              <div className="text-blue-500 border border-green-500 rounded-xl w-fit  text-center text-sm py-2">
                {problem.difficulty}
              </div>
            ) : (
              <div className="text-red-500 border border-green-500 rounded-xl w-fit  text-center text-sm p-2 mx-4">
                {problem.difficulty}
              </div>
            )}
          </div>
          <div className="explain">
            <p className="text-base font-thin tracking-wider mt-8">
              {problem.description}
            </p>
            <p className="example bg-slate-400 p-5 border border-white rounded-lg text-stone-100 my-5">
              {problem.example}
            </p>
          </div>
        </div>
        <div className="editor w-1/2 border border-red-600">
          <p className="text-center text-lg">Editor</p>
        </div>
      </section>
    </>
  ) : (
    <Error />
  );
};

export default Problem;
