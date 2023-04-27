import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Tooltip,
  Alert,
  Badge,
} from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Navigate } from "react-router";
import {
  deleteProblemFromDatabase,
  getAllProblemsFromDatabase,
} from "../../actions/actionCreators/question";
import AddNewProblem from "./AddNewProblem";
import PaginationComponent from "./PaginationComponent";
class AllProblems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      itemsPerPage: 10,
      havePagesLoaded: false,
    };
  }

  componentWillMount() {
    this.props.dispatch(getAllProblemsFromDatabase());
  }
  onClickSetCurrentPageInState = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };
  render() {
    let { currentPage } = this.state;
    let auth = this.props.auth;
    let { questions = [] } = this.props.questions || {};
    // pagination logic stary
    const indexOfLastItem = this.state.currentPage * this.state.itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - this.state.itemsPerPage;
    const totalItems = questions.length;
    const totalPages = Math.ceil(totalItems / this.state.itemsPerPage);
    // contains all the questions to be displayed on current page (note questions are present without any filters around)
    let questionsOnCurrentPage = questions.slice(
      indexOfFirstItem,
      indexOfLastItem
    );

    // questions as rows of table
    let questionList = questionsOnCurrentPage.map((question, index) => {
      // to deal with accessing properties of undefined
      if (question == undefined) return "";
      let { title, description, difficulty, _id, acceptance } = question;
      const difficultyBadgeClass =
        difficulty === "medium"
          ? "success"
          : difficulty === "easy"
          ? "primary"
          : "danger";
      return (
        <tr key={_id}>
          <td className="text-center">{index + 1}</td>
          <td className="text-center">
            <Link to={`/question/id/${_id}`} data-question-id={_id}>
              {title}
            </Link>
          </td>
          <td className="text-center">
            <Badge bg={difficultyBadgeClass}>{difficulty}</Badge>
          </td>
          <td className="text-center">{acceptance}</td>
        </tr>
      );
    });

    // loads private route only when page user is logged in; if user is not logged in he is directed to sign in page
    if (auth && !auth.isLoggedin) {
      return <Navigate to="/user/sign-in" />;
    }
    return (
      <Container style={{ marginTop: "16%" }} className="mb-5 ">
        <Row>
          <h1>Problems</h1>
        </Row>
        <Row>
          {questionList.length <= 0 && (
            <Col xs={12}>
              <Alert variant="warning" className="text-center mt-5">
                There are no Problems to view ! <br />
                Create new Problems or get added to Problems of others .
              </Alert>
            </Col>
          )}
          {auth && auth?.user?.role === "admin" && (
            <Col>
              <AddNewProblem />
            </Col>
          )}
        </Row>
        {questionList.length > 0 && (
          <Row>
            <Col
              xs={12}
              style={{ height: "480px", overflow: "auto" }}
              id="target"
            >
              <Table hover size="sm">
                <thead className="text-center">
                  <tr>
                    <th>#</th>
                    <th>Problem</th>
                    <th>Difficulty</th>
                    <th>Acceptance</th>
                    <th>Completed</th>
                    {/* <th className="text-center"></th> */}
                  </tr>
                </thead>
                <tbody>{questionList}</tbody>
              </Table>
            </Col>
          </Row>
        )}
        {questionList.length > 0 && (
          <PaginationComponent
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={this.onClickSetCurrentPageInState}
          />
        )}
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return { auth: state.userAuth, questions: state.questions };
};
export default connect(mapStateToProps)(AllProblems);
