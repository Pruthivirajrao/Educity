import React from 'react'
import "./About.css";
import about_img from "../../images/about.png"
import play_icon from "../../images/play-icon.png"

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} className='about-img' alt="" />
            <img src={play_icon} className="play-icon" alt="" />
        </div>
        <div className="about-right">
            <h3 style={{textTransform:"uppercase"}}>About University</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Embark on a transformative educational journey with our university's comprehensive eductaion programs. Our cutting-edge curriculum is designed to empower students with the knowledge,skills, and experiences needed to excel in the dynamic field of education</p>
            <p>With a focus of inovation, hands-on learning, and personalized mentorship, our programs preparer aspiring educators to make a meaningful impact in classrooms, schools, and communitioes</p>
            <p>Whether you aspire to become a teacther, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to acheive your goals and unlock your full potential in sgaping the future of education</p>
        </div>
    </div>
  )
}

export default About