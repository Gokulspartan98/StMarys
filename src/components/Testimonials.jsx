import { useRef } from 'react'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/16/solid'
import '../assets/css/Testimonial.css';
import userImage1 from '../assets/images/user-1.png';
import userImage2 from '../assets/images/user-3.png';

const Testimonials = () => {

    const slider = useRef()
    let tx = 0;

    const handlePrevImage = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const handleNextImage = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    return (
        <div className='testimonials'>
            <button className='prev-btn' onClick={handlePrevImage}>
                <ChevronLeftIcon className='size-5 text-white' />
            </button>
            <button className='next-btn' onClick={handleNextImage}>
                <ChevronRightIcon className='size-5 text-white' />
            </button>
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={userImage1} alt="user-img-1" />
                                <div>
                                    <h3>Sarah Jack</h3>
                                    <p>St Mary's, SPR</p>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at St Mary's was one of the best decisions I've ever made. The supportive community,
                                state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={userImage2} alt="user-img-2" />
                                <div>
                                    <h3>Sarah Jack</h3>
                                    <p>St Mary's, SPR</p>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at St Mary's was one of the best decisions I've ever made. The supportive community,
                                state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={userImage2} alt="user-img-2" />
                                <div>
                                    <h3>Sarah Jack</h3>
                                    <p>St Mary's, SPR</p>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at St Mary's was one of the best decisions I've ever made. The supportive community,
                                state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials