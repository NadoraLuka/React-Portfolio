import React from "react";
import "../App.css";

const portfolio = () => {
  return (
    <div className="portfolioApp">
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h3>Portfolio</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-1"></div>

              <div className="col-md-3">
                <a href=" https://nadoraluka.github.io/WeatherApp/">
                  <img
                    src="./img/Weather1.PNG"
                    className="card-img-top"
                    alt="img-one"
                  />
                </a>
                <p className="card-text">Weather Dashboard</p>
                <p id="repo">
                  <a href="https://github.com/NadoraLuka/WeatherApp">
                    https://github.com/NadoraLuka/WeatherApp
                  </a>
                </p>
              </div>
              <div className="col-md-1"></div>

              <div className="col-md-3">
                <a href="https://nadoraluka.github.io/Work-Day-Plan/">
                  <img
                    src="img/WorkDay2.PNG"
                    className="card-img-top"
                    alt="img-two"
                  />
                </a>
                <p className="card-text">Day Planner</p>
                <p id="repo">
                  <a href="https://github.com/NadoraLuka/Work-Day-Plan">
                    https://github.com/NadoraLuka/Work-Day-Plan
                  </a>
                </p>
              </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-3">
                <a href=" https://nadoraluka.github.io/CodeQuiz/">
                  <img
                    src="./img/Codequize3.PNG"
                    className="card-img-top"
                    alt="img-one"
                  />
                </a>
                <p className="card-text">CodeQuiz</p>
                <p id="repo">
                  <a href="https://github.com/NadoraLuka/CodeQuiz">
                    https://github.com/NadoraLuka/CodeQuiz
                  </a>
                </p>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-3">
                <a href="https://nadoraluka.github.io/Time-Well-Wasted/.">
                  <img
                    src="./img/Time1.PNG"
                    className="card-img-top"
                    alt="img-one"
                  />
                </a>
                <p className="card-text">Project-1</p>
                <p id="repo">
                  <a href="https://github.com/NadoraLuka/Time-Well-Wasted">
                    https://github.com/NadoraLuka/Time-Well-Wasted
                  </a>
                </p>
                <div className="col-md-1"></div>
              </div>
            </div>
            <br></br>
            <br></br>
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-3">
                <a href=" https://nadoraluka.github.io/SecurityLock/">
                  <img
                    src="./img/Lock1.PNG"
                    className="card-img-top"
                    alt="img-one"
                  />
                </a>
                <p className="card-text">Try: Password Generator</p>
                <p id="repo">
                  <a href="https://github.com/NadoraLuka/SecurityLock">
                    https://github.com/NadoraLuka/SecurityLock
                  </a>
                </p>
              </div>

              <div className="col-md-1"></div>

              <div className="col-md-3">
                <a href="https://whispering-bayou-29946.herokuapp.com/">
                  <img
                    src="./img/Argonaut.PNG"
                    className="card-img-top"
                    alt="img-one"
                  />
                </a>
                <p className="card-text">Project 2: Argonauts</p>
                <p id="repo">
                  <a href="https://github.com/NadoraLuka/Argonauts">
                    https://github.com/NadoraLuka/Argonauts
                  </a>
                </p>
              </div>
            </div>
            <br></br>
            <div className="gitProfile">
              <p>
                GitHub Profile:{" "}
                <a href="https://github.com/NadoraLuka">
                  https://github.com/NadoraLuka
                </a>{" "}
              </p>
              <p>
                Linkedin Profile:{" "}
                <a href="https://www.linkedin.com/in/nader-mashy-a97554125/">
                  https://www.linkedin.com/in/nader-mashy-a97554125/
                </a>
              </p>
              <p>Email Address:naderaian2013@gmail.com</p>
              <p>Phone Number:(865)-232-0947</p>
              <a href="https://github.com/NadoraLuka/Portfolio/blob/master/resume/Nader%20Mashy%20Resume%202020.pdf">
                {" "}
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default portfolio;
