import pic from "/src/assets/profile_pic.jpg";
import linkedin from "/src/assets/linkedin.svg";
import github from "/src/assets/github.svg";
import arrow from "/src/assets/arrow.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppSample from "/src/assets/appsample.png";
import FreeSample from "/src/assets/freesample.png";
import CoinSample from "/src/assets/coinsample.png";
import ShapeSample from "/src/assets/shapesample.png";
import java from "/src/assets/java.svg";
import javascript from "/src/assets/javascript.svg";
import python from "/src/assets/python.svg";
import typescript from "/src/assets/typescript.svg";
import reactsvg from "/src/assets/react.svg";
import git from "/src/assets/git.svg";
import html from "/src/assets/html.svg";
import css from "/src/assets/css.svg";
import csharp from "/src/assets/csharp.svg";

function App() {
  var settings = {
    dots: true,
    infinite: true,
    fade:true,
    speed:100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    waitForAnimate:false,
    autoplaySpeed: 10000,
    cssEase: "linear",

  };
  return (
    <>
      <div className=" mt-5 pt-5 justify-content-center align-items-center ">
        <div className="h-100 mt-5 pt-5 d-flex flex-row justify-content-center ">
          <div className=" px-4">
            <div className="profile-img">
              <img className="pic" src={pic}></img>
            </div>
          </div>

          <div className="px-4 ">
            <div className="d-flex h-100 w-100 flex-column justify-content-center intro-div ">
              <h1 className="">Hi i'm Natalie</h1>
              <p>I am a 21 year old, recent Computer Science graduate, currently residing in Melbourne, Australia.</p>
              <div>
                <a
                  href="https://linkedin.com/in/natalie-yip-96a33a272"
                  target="_blank"
                >
                  <img src={linkedin} className="icons" />
                </a>
                <a href="https://github.com/nataliey365" target="_blank">
                  <img src={github} className="icons" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="position-relative mt-5 pt-5 ">
        <div className="custom-shape-divider-top-1737353334">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
          <div className="text-center arrow-overlap ">
            <a href="#qual">
              <img src={arrow} className="arrow-style" />
            </a>
          </div>
        </div>
        <div className="bg-white pb-3">
          <h1 className="px-5 pt-4 pb-3" id="qual">My Projects</h1>
      <div className="m-5 pb-4" >
          <Slider {...settings}>
            <div className="p-5">
                <div className="d-flex flex-row justify-content-center">
              <img className="app-sample mx-4" src={AppSample}></img>

              <div className="text-left mx-4">
                <h3>
                    Non-Profit Dating App
                </h3>
              <p className="project-text"> A more ethical take on dating apps, designed for real human connection.</p>
              <p className="itl">React Native, Expo Go, Tailwind, Prisma, Fastify
              </p>
              </div>
              </div>
            </div>

            <div>
            <div className="p-5">
                <div className="d-flex flex-row justify-content-center">
              <img className="app-sample mx-4" src={CoinSample}></img>

              <div className="text-left mx-4">
                <h3>
                    Coin Detector
                </h3>
              <p className="project-text">Coin detector program that can detect, identify and label New Zealand coins from a given image.</p>
              <p className="itl">Python
              </p>
              </div>
              </div>
            </div>
            </div>

            <div>
            <div className="p-5">
                <div className="d-flex flex-row justify-content-center">
              <img className="app-sample mx-4" src={FreeSample}></img>

              <div className="text-left mx-4">
                <h3>
                    Freecycling Website
                </h3>
              <p className="project-text"> A WCAG AA compliant high-fidelity prototype detailing a community freecycling initiative.</p>
              <p className="itl">HTML, CSS, JavaScript
              </p>
              </div>
              </div>
            </div>
            </div>

            <div>
            <div className="p-5">
                <div className="d-flex flex-row justify-content-center">
              <img className="app-sample mx-4" src={ShapeSample}></img>

              <div className="text-left mx-4">
                <h3>
                    Shape Visualiser
                </h3>
              <p className="project-text"> A GUI application, visualising user selected shapes and trajectory.</p>
              <p className="itl">Java
              </p>
              </div>
              </div>
            </div>
            </div>
          </Slider>
         
          </div>

          <div className="mx-5 mt-5 d-flex flex-row justify-content-between">
            <div>
          <h4 className="m-auto">Skill Overview</h4>
          <div className="">
            
            <div className="d-flex flex-row pr-1">
            <img className="languages" src={python}></img>
              <img className="languages" src={java}></img>
              <img className="languages" src={csharp}></img>
              
              <img className="languages" src={reactsvg}></img>
              <img className="languages" src={html}></img>
              <img className="languages" src={css}></img>

              <img className="script" src={javascript}></img>
              <img className="script" src={typescript}></img>
              <img className="languages" src={git}></img>

            </div>
            </div>
            </div>
          <p className="my-auto">These projects and more are accessible on GitHub</p>

          </div>
        </div>

      </div>
    </>
  );
}
export default App;
