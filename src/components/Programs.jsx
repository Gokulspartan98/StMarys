import React from 'react'
import '../assets/css/Programs.css'
import program_1 from '../assets/images/program_1.png'
import program_1_icon from '../assets/images/program_1_icon.png'
import program_2 from '../assets/images/program_2.png'
import program_2_icon from '../assets/images/program_2_icon.png'
import program_3 from '../assets/images/program_3.png'
import program_3_icon from '../assets/images/program_3_icon.png'

const Programs = () => {
    return (
        <div className='programs'>
            <div className='program'>
                <img src={program_1} alt="program_1_img" />
                <div className='caption'>
                    <img src={program_1_icon} alt="program_1_icon" />
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className='program'>
                <img src={program_2} alt="program_2_img" />
                <div className='caption'>
                    <img src={program_2_icon} alt="program_2_icon" />
                    <p>Masters Degree</p>
                </div>
            </div>
            <div className='program'>
                <img src={program_3} alt="program_3_img" />
                <div className='caption'>
                    <img src={program_3_icon} alt="program_3_icon" />
                    <p>Post Graduation</p>
                </div>
            </div>

        </div>
    )
}

export default Programs