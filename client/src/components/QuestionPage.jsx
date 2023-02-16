import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Alert from "react-bootstrap/Alert";
import "./QuestionPage.css";
// import Input from "./Input";
import { RxCross1 } from "react-icons/rx";
import {AiFillHome} from "react-icons/ai";

const QuestionPage = () => {
  const [buttonClicked, setButtonClicked] = React.useState(false);
  const [correct, setCorrect] = React.useState(false);
  // var button=false;

  const arr = [];
  let a = Math.floor(Math.random() * 20);
  let b = Math.floor(Math.random() * 20);
  let d = Math.floor(Math.random() * 20);
  for (let i = 0; i < 5; i++) {
    arr.push(`(${a},${b})`);
    b = a + b;
    a = a + d;
  }

  const clicked = (e) => {
    e.preventDefault();
    setButtonClicked(true);
    // button=true;
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    if (input1 == a && input2 == b) {
      setCorrect(true);
      console.log("correct");
    } else {
      console.log("wrong");
    }
  };
  // React.useEffect(() => {
  //   random();
  // }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#f2f0f1",
        height: "100vh",
        justifyContent: "space-between"
      }}
    >
      <div className="beforeclick">
        <Navbar style={{ backgroundColor: "#d9d9d9", width: "100%" }}>
          <Container>
            <Navbar.Brand href="#home">LOGO</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Alert
          variant="light"
          style={{ marginTop: "15px", width: "98%", textAlign: "left" }}
        >
          Mental math level-1
        </Alert>
        <div className="math-content">
          {arr.map((item, index) => {
            return (
              <p key={index} className="numbers">
                {item},
              </p>
            );
          })}
          <p className="numbers">
            (
            <input type="text" id="input1" />,
            <input type="text" id="input2" />)
          </p>
        </div>
        <button onClick={clicked} style={{background:"#000",color:"#fff",border:"none"}}>Submit</button>
      </div>
      <div className="afterclick">
        {buttonClicked ? (
          !correct ? (
            <>
              <Alert
                variant="danger"
                style={{
                  width: "98%",
                  textAlign: "left",
                  background: "#ce1e1e",
                  display: "flex",
                  justifyContent: "space-between"
                }}
              >
                <div
                  className="alert-text"
                  style={{ color: "#fff", fontWeight: "bold" }}
                >
                  <RxCross1 /> Wrong !
                </div>
                <button
                  onClick={() => {
                    setButtonClicked(false);
                  }}
                  style={{border:"none",background:"#fff"}}
                >
                  Next
                </button>
              </Alert>
              <div className="correct-answer" style={{ textAlign: "left" }}>
                <p>Correct answer is {`(${a},${b})`}</p>
              </div>
            </>
          ) : (
            <>
              <Alert
                variant="success"
                style={{
                  width: "98%",
                  textAlign: "left",
                  // background: "#ce1e1e",
                  display: "flex",
                  justifyContent: "space-between"
                }}
              >
                <div
                  className="alert-text"
                  style={{ color: "#fff", fontWeight: "bold" }}
                >
                  Success !
                </div>
                <button
                  onClick={() => {
                    setButtonClicked(false);
                  }}
                  style={{border:"none",background:"#fff"}}
                >
                  Next
                </button>
              </Alert>
              {/* <div className="correct-answer" style={{ textAlign: "left" }}>
            <p>Correct answer is {`(${a},${b})`}</p>
          </div> */}
            </>
          )
        ) : null}
      </div>
    </div>
  );
};

export default QuestionPage;
