import React from 'react'
import { Link } from 'react-router-dom'
import kate from "../../../assets/images/Internship-Kate-Desktop-Global.jpg"
import Aishwarya from "../../../assets/images/Internship-Aishwarya-Desktop-Global.jpg"
import Jake from "../../../assets/images/Internship-Jake-Desktop-Global.jpg"
import Resources from "../../../assets/images/Internship-Resources-Desktop-Global.jpg"
import FAQs from "../../../assets/images/Internship-FAQs-Desktop-Global.jpg"
function MainSec() {
  return (
    <section className='mainSec'>
      <div className="sec1">
        <h1>Make a Difference</h1>
        <h4>Apply your talents to help secure a cleaner, safer world as a Tesla intern.</h4>
        <Link to={"careers"}>Search Careers</Link>
      </div>
      <div className="sec2">
        <div className="row">
          <div className="box">
            <h1>Real Impact</h1>
            <p>Perform meaningful work from day one. We will challenge you to take on high-impact projects, expand your technical skills and exceed your own expectations. We expect interns to perform to the same level of excellence as our full-time employees—which is why we often hire them back.</p>
            <img src={kate} alt="Internship-Kate-Desktop-Global" />
          </div>
          <div className="text">
            <h2> <q>Tesla internships are exceptional because you are treated as a full‑time employee for three months. I felt empowered to make a change.</q></h2>
            <h5>Kate P.</h5>
            <p>Former Autopilot Computer Vision Intern</p>
            <p>Current Staff AI Product Manager</p>
          </div>
        </div>
        <div className="row">
          <div className="text">
            <h2> <q>A Tesla internship is best summarized by cool projects, high levels of responsibility, an incredible community of coworkers and unparalleled opportunities for personal growth.</q></h2>
            <h5>Aishwarya V.</h5>
            <p>Former Mechanical Engineering Intern</p>
            <p>Current Mechanical Engineer</p>
          </div>
          <div className="box">
            <img src={Aishwarya} alt="Internship-Aishwarya-Desktop-Global" />
          </div>
        </div>
        <div className="row">
        <div className="box">
            <img src={Jake} alt="Internship-Jake-Desktop-Global" />
          </div>
          <div className="text">
            <h2> <q>Tesla employees are just a bunch of nerds who love working on exciting products. As an intern, you can talk to anyone at the company, and they’ll be happy to share what they’re working on, and why it’s cool and challenging.</q></h2>
            <h5>Jake E.</h5>
            <p>Former Test Engineering Intern</p>
            <p>Current Senior Test Engineer</p>
          </div>
        </div>
      </div>
      <div className="sec3">
        <h1>An Inclusive Network</h1>
        <p>Experience one-on-one mentorship, interactive networking events and weekly seminars within our exceptional community of experts. Tesla interns collaborate across disciplines, borders and production lines to support our shared mission of accelerating the world’s transition to sustainable energy.</p>
        <div className="row">
          <div className="box">
            <img src={Resources} alt="Internship-Resources" />
            <h2>Resources</h2>
            <p><a href="#">Learn more</a> about applying, preparing for the technical interview and refining your resume.</p>
          </div>
          <div className="box">
            <img src={FAQs} alt="Internship-FAQs" />
            <h2>Frequently Asked Questions</h2>
            <p><a href="#">Learn more</a> about our selection process, timeline and eligibility requirements.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainSec