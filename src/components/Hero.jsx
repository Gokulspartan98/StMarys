import React from 'react'
import '../assets/css/hero.css';
import { ArrowRightCircleIcon } from '@heroicons/react/16/solid';
const Hero = () => {
    return (
        <section className='hero container'>
            <div className='hero-text'>
                <h1 className=''>We ensure better education for better world</h1>
                <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                    content here', making it look like readable English.</p>
                <button className='btn'>Explore more
                    <span className='ml-2'>
                        <ArrowRightCircleIcon className='size-5'/>
                    </span>
                </button>


            </div>
        </section>
    )
}

export default Hero