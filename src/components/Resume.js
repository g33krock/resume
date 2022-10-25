import React, { Component } from "react";

export class Resume extends Component {
  render() {
    return (
      <div className="row">
        <div className="myPic">
          <div className="picStick">
            <img
              width="75%"
              src="https://jwvonytjrpiueyuwsjpa.supabase.co/storage/v1/object/public/images/Dallas%20L.jpg"
              alt="Dallas Lovell"
            ></img>
            <br />
            <span className="contact">
            <h2>Dallas Lovell</h2>
            <h3>Full Stack Developer/Software Engineer</h3>
            </span>
            <p>
              Phoenix, AZ 85044
              <br />
              dallas.lovell@gmail.com
              <br />
              +1 480 823 1141
            </p>
          </div>
        </div>
        <div className="blue">
          <span className="resume">
            <div className="header" id="header">
              <h1>Dallas Lovell</h1>
              <h2>Full Stack Developer/Software Engineer</h2>
              <h3>
                Phoenix, AZ 85044
                <br />
                dallas.lovell@gmail.com
                <br />
                +1 480 823 1141
              </h3>
              <ul>
                <li>
                  Proficient in Javascript, Typescript, Powershell, CSS, and
                  HTML
                </li>
                <li>
                  Familiar with React, React- Native, Angular, Bootstrap,
                  NodeJS, GraphQL, Mermaid.JS, PostgreSQL and MongoDB
                </li>
                <li>
                  Extensive knowledge of Azure DevOps and creating YAML based
                  Pipelines to streamline and facilitate data operations within
                  an organization
                </li>
                <li>
                  Proven leadership skills gained from school administration
                </li>
              </ul>
            </div>
            <div className="work" id="work">
              <h2>Work Experience</h2>
              <span className="workHeading">
                <h3>Software Engineer</h3>
                <p>
                  <strong>Health Catalyst</strong> - South Jordan, UT -{" "}
                  <i>February 2022 to Present</i>
                </p>
              </span>
              <ul>
                <li>Set up environments and agents in the Azure Environment</li>
                <li>Created pipelines in Azure DevOps to automate processes</li>
                <li>
                  Used Azure Static Web apps to create Angular apps linked to
                  Azure
                </li>
                <li>Managed permissions for other teams in the organization</li>
              </ul>
              <span className="workHeading">
                <h3>Full Stack Developer - Contracted</h3>
                <p>
                  <strong>MPI Unlimited</strong> - Gilbert, AZ -{" "}
                  <i>November 2021 to February 2022</i>
                </p>
              </span>
              <ul>
                <li>
                  Worked on main company Wordpress site in Javascript and PHP
                </li>
                <li>
                  Created customizable template with PERN model (Postgres,
                  Express, React, Node.js) to generate 40+ semi-unique sites for
                  agents across the country
                </li>
                <li>
                  <a href="https://github.com/g33krock/g33kempire">
                    Link to Agent Template
                  </a>{" "}
                  <i>(incomplete)</i>
                </li>
              </ul>
              <span className="workHeading">
                <h3>Technology Director/Developer</h3>
                <p>
                  <strong>AZ Aspire Academy</strong> - Phoenix, AZ -{" "}
                  <i>August 2020 to February 2022</i>
                </p>
              </span>
              <ul>
                <li>
                  Created a web based student tracking system in React
                  (CyberCampus) that connected all 5 campuses
                </li>
                <li>
                  Cybercampus tracked grades, attendance, student contact info,
                  sped data, transcripts, etc
                </li>
                <li>
                  Created alert delivery systems to notify teachers, parents,
                  and key staff members of any issues that may be present with
                  students
                </li>
                <li>
                  <a href="https://github.com/g33krock/aspire-digicampus">
                    Link to CyberCampus Repo
                  </a>
                </li>
              </ul>
              <span className="workHeading">
                <h3>Campus Coordinator</h3>
                <p>
                  <strong>AZ Aspire Academy</strong> - Queen Creek, AZ -{" "}
                  <i>July 2019 to August 2020</i>
                </p>
              </span>
              <ul>
                <li>Ran a campus for special needs students</li>
                <li>Supervised 10 teachers</li>
                <li>
                  Created workflow systems to automate data collection and
                  facilitate communication within the organization
                </li>
              </ul>
              <span className="workHeading">
                <h3>STEM Director/ Data specialist</h3>
                <p>
                  <strong>Imagine Schools</strong> - Coolidge, AZ -{" "}
                  <i>November 2017 to July 2019</i>
                </p>
              </span>
              <ul>
                <li>
                  Collected, analyzed, and distributed student data to create
                  intervention groups and strategies
                </li>
                <li>Directed the STEM program</li>
              </ul>
              <span className="workHeading">
                <h3>Principal</h3>
                <p>
                  <strong>Champion Schools</strong> - San Tan Valley, AZ -{" "}
                  <i>August 2013 to November 2017</i>
                </p>
              </span>
              <ul>
                <li>Taught 5th grade Math/Science</li>
                <li>
                  Founded STEM/Robotics clubs and South Mountain and Chandler
                  campuses
                </li>
                <li>
                  Assisted in opening Chandler campus as Instructional Coach
                </li>
                <li>Opened San Tan campus as Principal</li>
                <li>
                  Worked collaboratively to develop K-8 math and science
                  curriculum for all 3 campuses
                </li>
              </ul>
            </div>
            <div className="volunteer" id="volunteer">
              <h2>Volunteer</h2>
              <h3>
                Volunteered and created summer STEM programs for the Chandler
                Boys and Girls Club
              </h3>
              <ul>
                <li>
                  Taught students basic computer programming, 3D design and
                  printing, and hands on engineering
                </li>
                <li>
                  Worked alongside students to build robotic arms, catapults,
                  boiler boats, etc while tying the projects to math concepts
                </li>
              </ul>
              <h3>Volunteer Representative</h3>
              <p>
                Port-au-Prince, Haiti - <i>May 2001 to June 2003</i>
              </p>

              <ul>
                <li>
                  Translated for English speakers in personal and public
                  settings
                </li>
                <li>Organized volunteer efforts</li>
                <li>
                  Developed leadership and presentational skills by teaching
                  Haitians to speak English
                </li>
                <li>
                  Worked full time for 2 years on a volunteer basis (55-70 hours
                  a week)
                </li>
                <li>Multi-lingual</li>
              </ul>
            </div>
            <div className="education" id="education">
              <h2>Education</h2>
              <span className="educationHeading">
                <h3>Bootcamp Certificate in Full Stack Web Development</h3>
                <p>
                  <strong>Nucamp</strong> - Tempe, AZ -
                  <i>October 2019 to February 2020</i>
                </p>
              </span>
              <br />
              <span className="educationHeading">
                <h3>Masters in Educational Leadership</h3>
                <p>
                  <strong>Northern Arizona University</strong> - Phoenix, AZ -{" "}
                  <i>June 2016 to May 2017</i>
                </p>
              </span>
              <br />
              <span className="educationHeading">
                <h3>Masters in Elementary Education</h3>
                <p>
                  <strong>Arizona State University</strong> - Mesa, AZ -{" "}
                  <i>August 2006 to May 2013</i>
                </p>
              </span>
              <br />
              <span className="educationHeading">
                <h3>B.S. in Business Administration</h3>
                <p>
                  <strong>Brigham Young University Idaho</strong> - Rexburg, ID
                  - <i>July 2003 to December 2005</i>
                </p>
              </span>
            </div>
            <div className="skills" id="skills">
              <h2>Skills</h2>
              <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>C++</li>
                <li>React</li>
                <li>React Native</li>
                <li>Angular</li>
                <li>Bootstrap</li>
                <li>Node.js</li>
                <li>PowerShell</li>
                <li>Azure</li>
                <li>Azure DevOps</li>
                <li>Azure Functions</li>
                <li>Azure Logic Apps</li>
                <li>MongoDB</li>
                <li>Web Development</li>
                <li>GitHub</li>
                <li>CSS</li>
                <li>Git</li>
                <li>HTML5</li>
                <li>Web Development</li>
                <li>GitHub</li>
                <li>CSS</li>
                <li>YAML</li>
                <li>JSON</li>
                <li>Redux</li>
                <li>PostgreSQL</li>
                <li>REST</li>
                <li>Debugging</li>
                <li>Visual Studio</li>
                <li>SQL</li>
                <li>Agile</li>
                <li>User Interface (UI)</li>
                <li>MySQL</li>
                <li>APIs</li>
                <li>AWS</li>
                <li>Microsoft Flow</li>
              </ul>
            </div>
          </span>
        </div>
        <div className="nav">
          <div className="navStick">
            <h2>Navigation</h2>
            <a href="#header">Contact Info</a>
            <br />
            <a href="#work">Work History</a>
            <br />
            <a href="#volunteer">Volunteer Service</a>
            <br />
            <a href="#education">Education</a>
            <br />
            <a href="#skills">Relevant Skills</a>
          </div>
        </div>
      </div>
    );
  }
}
