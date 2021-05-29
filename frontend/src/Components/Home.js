import React, { useEffect } from "react"
import { gsap } from "gsap"
import ThreeD1 from "./ThreeD1"
import softLightChiro from "../images/softLightChiro.jpeg"
import womanDesk from "../images/womanDesk.jpeg"
import oldRoom from "../images/oldRoom.jpeg"
import softLightChiro2 from "../images/softLightChiro2.jpeg"
import trace1 from "../images/trace1.svg"

const Home = () => {
  //timeline

  useEffect(() => {
    const tl = gsap.timeline()

    tl.to(".container2", {
      height: "100%",
      duration: 2,
      ease: "power4.out",
      delay: 2
    })
      .to(
        ".centerPic",
        {
          opacity: 1,
          duration: 0.1
        },
        "-=1.2"
      )
      .to(
        ".photoCover1",
        {
          minHeight: 0,
          transformOrigin: "center top",
          duration: 0.7
        },
        "-=.8"
      )
      .to(".centerPic2", {
        display: "flex",
        duration: 0
      })
      .to(
        ".line1",
        { opacity: 1, ease: "expo.out", duration: 0.3, delay: 1, y: 0 },
        "-=1.5"
      )
      .to(".line1", {
        y: 340,
        ease: "power1.in",
        duration: 2.3,
        delay: 0.5,
        display: "none"
      })
      .to(
        ".image1",
        {
          clipPath: "inset(100% 0% 0%)",
          webkitClipPath: "inset(100% 0% 0%)",
          ease: "power4.out",
          display: "none",
          duration: 0.9
        },
        "-=1.3"
      )
      .to(".lineWrapper", { display: "none", duration: 0 }, "-=1.3")
      .to(".line1", { display: "none", duration: 0 }, "-=1.3")
      .to(".lineWrapper2", { display: "flex" }, "-=1.2")
      .from(
        ".line2",
        {
          yPercent: -100,
          y: -30,
          duration: 1.4
        },
        "-=2.1"
      )
      .to(
        ".container2",
        {
          background: "#6db392"
        },
        "-=1.4"
      )
      .to(".centerPic3", {
        display: "flex",
        duration: 0
      })
      .to(".line2", {
        y: 340,
        ease: "power1.in",
        duration: 2.3,
        delay: 0.2,
        display: "none"
      })
      .to(
        ".image2",
        {
          clipPath: "inset(100% 0% 0%)",
          webkitClipPath: "inset(100% 0% 0%)",
          ease: "power4.out",
          display: "none",
          duration: 0.9
        },
        "-=1.3"
      )
      .to(
        ".container2",
        {
          background: "#567087",
          duration: 0
        },
        "-=1.3"
      )
      .to(".lineWrapper2", { display: "none", duration: 0 }, "-=1.3")
      .to(".line2", { display: "none", duration: 0 }, "-=1.3")
      .to(".lineWrapper3", { display: "flex" }, "-=1.2")
      .to(".line3", { display: "flex" }, "-=1.2")
      .from(
        ".line3",
        {
          yPercent: -40,

          duration: 0.8,
          delay: 0.5
        },
        "-=2.1"
      )
      .to(
        ".line3",
        {
          y: 340,
          ease: "expo.in",
          duration: 1,
          delay: 0.2,
          display: "none"
        },
        "-=.3"
      )
      .to(
        ".centerPic3",
        {
          height: "100%",
          right: 0,
          bottom: 0,
          delay: 1,
          width: "70%",
          ease: "power4.out"
        },
        "-=.5"
      )
      .to(
        ".ThrDwrapper",
        {
          height: "50vh",
          width: "30vw",
          display: "flex"
        },
        "-=.5"
      )
      .to(
        ".image3",
        {
          height: "100%",
          width: "100%",
          margin: 0
        },
        "-=.8"
      )

      .set(".image5", {
        opacity: 0.4
      })
      .to(
        ".image3",
        {
          clipPath: "inset(0% 0% 100% 0%)",
          webkitClipPath: "inset(0% 0% 100% 0%)",
          ease: "power4.out",
          display: "none",
          duration: 0.9
        },
        "-=.5"
      )
      .to(
        ".image4",
        {
          opacity: 1,
          scale: 1.2
        },
        "-=.8"
      )
      .to(
        ".connectButton",
        {
          right: "7vw",
          opacity: 0.7
        },
        "-=.6"
      )
      .set(".line4", {
        display: "flex"
      })
      .to(".lineWrapper4", {
        y: 250
      })
      .to(
        ".line4",
        {
          clipPath: "inset(0% 0% 0%)",
          webkitClipPath: "inset(0% 0% 0%)",
          delay: 0.4
        },
        "-=.6"
      )
      .to(
        ".line5",
        {
          clipPath: "inset(0% 0% 0%)",
          webkitClipPath: "inset(0% 0% 0%)"
        },
        "-=.4"
      )
      .to(
        ".line6",
        {
          clipPath: "inset(0% 0% 0%)",
          webkitClipPath: "inset(0% 0% 0%)",
          stagger: 0.1
        },
        "-=.4"
      )
      .to(
        ".connectButton2",
        {
          clipPath: "inset(0% 0% 0%)",
          webkitClipPath: "inset(0% 0% 0%)",
          stagger: 0.1
        },
        "-=.4"
      )
      .to(".trace1", { opacity: 1, duration: 1 }, "-=.6")
      .to(
        "li",
        {
          opacity: 0.9,
          stagger: 0.1,
          duration: 0.2
        },
        "-=1.3"
      )
  }, [])

  return (
    <div className='container1'>
      <div className='container2'>
        <div className='lineWrapper'>
          <div className='line1'>A smarter way</div>
        </div>
        <div className='lineWrapper2'>
          <div className='line2'>to build</div>
        </div>
        <div className='lineWrapper3'>
          <div className='line3'>your practice</div>
        </div>
        <div className='centerPic'>
          <img src={softLightChiro} className='image1'></img>

          <div className='photoCover1'></div>
        </div>
        <div className='centerPic2'>
          <img src={womanDesk} className='image2'></img>
        </div>
        <div className='centerPic3'>
          <img src={oldRoom} className='image3'></img>
        </div>
        <div className='centerPic5'>
          <img src={oldRoom} className='image5'></img>
        </div>
        <div className='centerPic4'>
          <img src={softLightChiro2} className='image4'></img>
          <button className='connectButton'>CONNECT</button>
          <div className='lineWrapper4'>
            <div className='line4'>Design your</div>
            <div className='line5'>Custom Table</div>
            <div className='line6'>Build your table </div>
            <div className='line6'>with the specs that fit your needs </div>
            <button className='connectButton2'>FIND THE PERFECT TABLE</button>
          </div>
        </div>
        <div className='svgWrapper'>
          <ul>
            <li>MODELS</li>
            <li>PROCESS</li>
            <li>WHY CONNECT</li>
            <li>CONTACT</li>
            <li>GALLERY</li>
          </ul>
          <img src={trace1} className='trace1'></img>
        </div>
        <div className='ThrDwrapper'>
          <ThreeD1 />
        </div>
      </div>
    </div>
  )
}

export default Home
