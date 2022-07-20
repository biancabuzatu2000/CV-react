import './css/rating-dots.scss'
import React from "react";

export const RatingDots = function ({value}) {
    const dots = Array.from(Array(10).keys())
    return (
        <div className='rating-dots'>
            {
                dots.map((val,index) => (
                    <span className={index < +value ? 'rated':''} key={val} />
                ))
            }
        </div>
    )
}