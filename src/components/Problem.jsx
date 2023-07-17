function Problem({ title, difficulty, acceptance }) {
  let color = "";

  if (difficulty === "Medium") {
    color = "rgb(189, 189, 0)";
  } else if (difficulty === "Hard") {
    color = "rgb(255, 33, 33)";
  } else {
    color = "rgb(0, 212, 0)";
  }

  return (
    <div className="problem">
      <p className="title">{title}</p>
      <p className="difficulty" style={{ color: color }}>
        {difficulty}
      </p>
      <p className="acceptance">{acceptance}</p>
    </div>
  );
}

export default Problem;
