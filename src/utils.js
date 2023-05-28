import problems from './problemData'
export const getProblemById = (id) => {
  return problems.find((problem) => problem.id === id);
};
