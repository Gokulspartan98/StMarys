import React from 'react'
import '../assets/css/about.css'
import about_img from '../assets/images/about_img.png';
import play_icon from '../assets/images/play-icon.png';

const About = ({ setPlayState }) => {


    return (
        <div className='about container'>
            <div className="about-left">
                <img src={about_img} alt="about_img" className='about-img' />
                <img src={play_icon} alt="play-icon" className='play-icon' onClick={() => setPlayState(true)} />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>embark on a transformative educational journey with our university's comprehensive education programs.
                    Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences
                    needed to excel in the dynamic field of education.</p>
                <p> With a focus on innovation, hands-on learning, and personalized mentorship,
                    our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
                <p> Whether you aspire to become a teacher, administrator, counselor, or educational leader,
                    our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
            </div>
        </div>
    )
}

export default About