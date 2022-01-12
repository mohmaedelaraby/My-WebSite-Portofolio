import "./intro.css";
import {init} from 'ityped'
import { useEffect, useRef } from "react";
import CV from '../../img/Software Eng Mohamed.pdf'


const Intro = () => {

  const textREF = useRef()
  useEffect(()=>{
    init(textREF.current,{
      showCursor:true,
      backDelay:1000,
      backSpeed:100,
      strings:["Mohamed El-Araby"]
    })
  },[])
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name"><span className='ityped-cursor' ref={textREF} ></span></h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Software Engineer  </div>
              <div className="i-title-item"> Front-End Developer</div>
              <div className="i-title-item"> Back-End Developer</div>
            </div>
          </div>
          <p className="i-desc">
          Welcome , i'm Mohamed El-Araby a Software Engineer who Devlope 
                        Front-End Apps and Back-End APIs ... Hope You a Very Happy Day
                        
          </p>
          <br/>
          <a href={CV} download={CV}><button type='submit'>Download my resume</button></a>
        
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
       
      </div>
    </div>
  );
};

export default Intro;
