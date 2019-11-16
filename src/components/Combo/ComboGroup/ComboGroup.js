import React from 'react'
import { ComboDetailCard } from './ComboDetailCard/ComboDetailCard'
import Slider from 'react-slick'

export const ComboGroup = ({ combos, policy }) => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <Slider {...settings} >
            {combos.map(combo => <ComboDetailCard key={combo._id} combo={combo} />)}
        </Slider>
    )
}