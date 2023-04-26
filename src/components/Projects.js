import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/p1.png";
import projImg2 from "../assets/img/p2.png";
import projImg3 from "../assets/img/p3.png";
import projImg4 from "../assets/img/p4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      description: "Billionaire Club",
      imgUrl: projImg1,
      url: "https://fir-appy-16aa8.web.app",
    },
    {
      description: "Smart Games",
      imgUrl: projImg2,
      url: "https://smartgame-fb46e.web.app",
    },
    {
      description: "Monster Mob",
      imgUrl: projImg3,
      url: "https://monstermob-b6c12.web.app",
    },
    {
      description: "Golden Ticket",
      imgUrl: projImg4,
      url: "https://your-url.com",
    },
  ];

  const handleProjectClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>I show you all the big and small websites I have done so far</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item> */}
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} onClick={() => handleProjectClick(project.url)} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Lorem .</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Loremc </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};

export default Projects;
