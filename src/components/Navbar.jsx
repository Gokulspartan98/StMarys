import React, { useEffect, useState } from 'react'
import '../assets/css/Navbar.css';
import logo from '../assets/images/S.png'
import { Link } from 'react-scroll';
const Navbar = () => {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setScroll(true) : setScroll(false)
        })
    }, [scroll])
    return (
        <nav className={`container ${scroll && 'dark-nav shadow'}`}>
            <img src={logo} alt='school-logo' className='scl-logo' />
            <ul className=''>
                <li className=''>
                    <Link to='hero' offset={0} smooth={true} duration={500}>Home</Link></li>
                <li> <Link to='program' offset={-260} smooth={true} duration={500}>Courses</Link></li>
                <li> <Link to='about' offset={-150} smooth={true} duration={500}>About us</Link></li>
                <li> <Link to='campus' offset={-260} smooth={true} duration={500}>Campus</Link></li>
                <li> <Link to='testimonials' offset={-260} smooth={true} duration={500}>Testimonial</Link></li>
                <li>
                    <button className='btn'><Link to='contact' offset={-260} smooth={true} duration={500}> contact us</Link></button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar