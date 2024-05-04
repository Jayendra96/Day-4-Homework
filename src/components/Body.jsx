import React from "react";
import profile from "../assets/profile.jpg";
import work from "../assets/work.jpg";
import skills from "../assets/skills.jpg";
import bulb from "../assets/bulb.jpg";

const Body = () => {
  return (
    <div className="container">
      <div className="left-section">
        <div className="card">
          <img src={profile} alt="loading" />
          <h2>Profile</h2>
        </div>
        <div className="card">
          <img src={work} alt="loading" />
          <h2>Work</h2>
        </div>
        <div className="card">
          <img src={skills} alt="loading" />
          <h2>Skills & Samples</h2>
        </div>
        <div className="card">
          <img src={bulb} alt="loading" />
        </div>
      </div>
      <div className="right-section">
        <div className="first-section">
          <div className="left">
            <h1>JESSICA GREENE</h1>
            <h4>FREELANCER WRITER</h4>
          </div>
          <div className="right">
            <div className="para">
              <p>
                I specialize in writing long-form blog content, case-studies,
                e-books, and white papers for B2Bs, tech startups, and marketing
                agencies.
              </p>
            </div>
            <div className="address">
              <p>
                <span>Email:</span>myemail@gmail.com
              </p>
              <p>
                <span>Website:</span>mywebsite.com
              </p>
            </div>
          </div>
        </div>
        <div className="second-section">
            <div className="work-data">
                <div className="left"><h5>Present</h5></div>
                <div className="right">
                    <h5>Jessica Greene Marketing · Freelance Writer</h5>
                    <p>Create blog posts, landing pages, e-books, and case studies for clients</p>
                </div>
            </div>
            <div className="work-data">
                <div className="left"><h5>2016</h5></div>
                <div className="right">
                    <h5>Kaiser Permanente · Lead Agile Product Owner</h5>
                    <p>Created and socialized best practices for Agile software development</p>
                </div>
            </div>
            <div className="work-data">
                <div className="left"><h5>2013-2015</h5></div>
                <div className="right">
                    <h5>Humana 2013-2015 Agile Product Owner</h5>
                    <p>Oversaw the implementation of six major web development projects</p>
                </div>
            </div>
        </div>
        <div className="third-section"></div>
        <div className="fourth-section"></div>
      </div>
    </div>
  );
};

export default Body;
