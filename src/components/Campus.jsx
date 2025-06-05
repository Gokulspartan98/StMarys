import React from 'react'
import Title from './Title';
import '../assets/css/Campus.css';
import gallery1 from '../assets/images/gallery-1.png'
import gallery2 from '../assets/images/gallery-2.png'
import gallery3 from '../assets/images/gallery-3.png'
import gallery4 from '../assets/images/gallery-4.png'
import { ArrowRightCircleIcon } from '@heroicons/react/16/solid';
const Campus = () => {
    return (

        <div className='campus'>
            <div className="gallery">
                <img src={gallery1} alt='gallery-1' />
                <img src={gallery2} alt='gallery-2' />
                <img src={gallery3} alt='gallery-3' />
                <img src={gallery4} alt='gallery-4' />
            </div>
            <button className='btn btn-dark'>See More Here
                <span className='ml-4' style={{ marginLeft: "4px" }}>
                    <ArrowRightCircleIcon className='size-5' />
                </span>
            </button>
        </div>
    )
}

export default Campus