import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { useParams } from "react-router-dom";
import {
  updateCurrentProblemInStore,
  addSubMissionToAQuestion,
} from "../../actions/actionCreators/question";
import { Container, Row, Col, Button, Form, Badge } from "react-bootstrap";

function Problem(props) {
  // get id of project from url params
  let { id } = useParams();
  //  get current project from redux store
  let currentProblem = useSelector((state) => {
    return state.questions.currentProblem;
  });
  //  acessing redux-store data and dispatch
  let dispatch = useDispatch();
  let { userAuth: auth, questions } = useSelector((state) => {
    return state;
  });
  // get logged in user and id
  let currentUser = auth.user;
  let currentUserId = currentUser ? currentUser._id : null;

  // if current project is empty ,  fetch current project from the server
  if (
    Object.keys(currentProblem || {}).length === 0 ||
    currentProblem?._id.toString() !== id
  ) {
    currentProblem = (questions.questions || []).find(
      (q) => q._id.toString() === id
    );

    if (Object.keys(currentProblem || {}).length)
      // dispatching an action to get project and update it in the store
      dispatch(updateCurrentProblemInStore(currentProblem));
  }

  // redirects to sign in page if user is not logged in
  if (auth && !auth.isLoggedin) {
    return <Navigate to="/user/sign-in" />;
  }

  const [codeInEditor, updateCode] = useState("Enter your Code Here");
  const updateCodeOnUserinput = (event) => {
    let fieldName = event.target.getAttribute("name");
    //  used es6 computed file name

    updateCode(event.target.value);
  };
  const onSubmit = () => {
    dispatch(addSubMissionToAQuestion(id, codeInEditor));
  };
  const difficulty = currentProblem.difficulty;
  const difficultyBadgeClass =
    difficulty === "medium"
      ? "success"
      : difficulty === "easy"
      ? "primary"
      : "danger";
  return (
    <Container style={{ marginTop: "16%", marginBottom: "16%" }}>
      <Row className="mb-2">
        <Col>
          {" "}
          <h1 className="display-3 "> {currentProblem.title}</h1>
        </Col>

        <Col className="text-end ">
          <h5 className="text-muted d-inline-block mt-3">Difficulty : </h5>
          <Badge bg={difficultyBadgeClass}> {difficulty.toUpperCase()}</Badge>
        </Col>
      </Row>
      <hr></hr>
      <Row className="mb-2 ms-2">
        Description :<br />
        {currentProblem.description}
      </Row>
      <Row className="mb-2 ms-2 col-4">
        Test Cases :<br />
        {currentProblem.testCases.map((tC, index) => (
          <section className="bg-secondary text-white rounded my-1">
            <h5 className="text-muted d-inline-block">
              Example {index + 1} :{" "}
            </h5>
            <p>
              Input : {tC.input}
              <br />
              Output: {tC.output}
            </p>
          </section>
        ))}
      </Row>
      <Row className="mb-2 mt-3 ms-1">
        <Col className="text-end">
          <h5 className="text-muted d-inline-block">Difficulty : </h5>
          <Badge bg={difficultyBadgeClass}> {difficulty.toUpperCase()}</Badge>
        </Col>
      </Row>
      <Row>
        <h3 className="display-6">Code Editor</h3>
        <Form.Control
          as="textarea"
          placeholder={codeInEditor}
          name="code"
          rows={15}
          onChange={updateCodeOnUserinput}
        />
      </Row>
      <div className="text-end me-2 my-4">
        <Button variant="outline-success" size="sm" onClick={onSubmit}>
          Submit Code
        </Button>
      </div>
    </Container>
  );
}
export default Problem;
