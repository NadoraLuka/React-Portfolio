import React from "react";
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function body(props) {
  return (
    <div className="aboutApp">
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h3>About Me</h3>
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <div className="row">
                <div className="col-md-3">
                  <img
                    id="pic"
                    src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/17361701_1277716475653586_735198170199674266_n.jpg?_nc_cat=107&ccb=2&_nc_sid=174925&_nc_ohc=E6gfE2sBAXMAX_tb0HF&_nc_ht=scontent-ort2-2.xx&oh=1a7e6e4b3f7f8f9a216dd7212cc76e6f&oe=5FBA3341"
                    alt="profile pic"
                    width="100%"
                    height="auto%"
                  />
                </div>

                <div className="col-md-8">
                  <p>
                    {" "}
                    My name Nader Mashy. I am an aspiring developer currently
                    registered with Vanderbilt University Coding Bootcamp. I
                    anticipate completing the program in November 2020.
                  </p>

                  <p>
                    {" "}
                    My background is the completion of university and high
                    school. I have several years of experience in: I was
                    responsible for creating construction drawings based upon
                    the needs of a specific project. This will involve compiling
                    data, determining design information, engineering
                    calculations, coordinating with engineers and other
                    designers, and checking calculations.{" "}
                  </p>

                  <p>
                    {" "}
                    My next work is hopefully a full stack developer. I hope to
                    gain enough knowledge to work in this sphere and gain even
                    more experience.
                  </p>
                  <p>
                    {" "}
                    During my free time I like to player soccer and spend time
                    with family.
                  </p>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
export default body;
