import "./intro.scss";
import Typewriter from 'typewriter-effect';

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/mypic2.png" alt="me"/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I am</h2>
          <h1>Assel Minassipova</h1>
          <h3><Typewriter 
          options={{ 
          strings: ['Support Engineer', 'Software Engineer' ],
          autoStart:true,
          delay:75,
          loop:true
           }}
           
           /></h3>
          {/* <h3><span ref={textRef}></span></h3> */}
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt=""/>
        </a>
      </div>
    </div>
  );
}
