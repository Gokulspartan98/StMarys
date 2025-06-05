import React, { useState } from 'react'
import Hero from '../components/Hero'
import Programs from '../components/Programs'
import Title from '../components/Title'
import { titles, subTitles } from '../assets/constants';

import About from '../components/About'
import Campus from '../components/Campus'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import VideoFile from '../components/VideoFile';

const HomePage = () => {

    const [playState, setPlayState] = useState(false)

    return (
        <>
            <Hero />
            <div className='container'>
                <Title title={titles.program} subTitle={subTitles.program} />
                <Programs />
                <About setPlayState={setPlayState} />
                <Title title={titles.campus} subTitle={subTitles.campus} />
                <Campus />
                <Title title={titles.testimonials} subTitle={subTitles.testimonials} />
                <Testimonials />
                <Title title={titles.contact} subTitle={subTitles.contact} />
                <Contact />
                <Footer />
            </div>
                <VideoFile playState={playState} setPlayState={setPlayState} />
        </>
    )
}

export default HomePage