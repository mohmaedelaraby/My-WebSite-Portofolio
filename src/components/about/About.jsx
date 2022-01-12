import "./about.css";
import me from "../../img/3.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={me}
            alt="me"
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">ABOUT ME</h1>
        <hr/>
        <p className="a-sub">
        Welcome to My Portofolio.
        </p>
        <p className="a-desc">
        I'm a fresh graduated who looking forward to improve my skils although I am a fast learner 
                and knows more than programming language like c#,  c++, js, java, and python and more than framework
                node.js & express.js as backend and experienced at HTML, CSS, JS and Responsive design and worked with 
                react.js asfront-end and strong with dealing with database both SQL postgres and NOSQL mongo db and all 
                by self learning and i'm so eager to learn more about tech industry
        </p>
        
      </div>
    </div>
  );
};

export default About;
