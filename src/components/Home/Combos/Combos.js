import React from 'react'
import Slider from "react-slick";
import './Combos.scss'
import { ComboCard } from '../ComboCard/ComboCard';

export const Combos = ({ wallet }) => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        
    };
    return (
        <div className="combos">
            <b className="combos__title"> Các gói hội viên mới</b>
            <div className="combos__slick">
                <Slider {...settings} >
                    <ComboCard />
                    <ComboCard />
                    <ComboCard />
                    <ComboCard />
                    <ComboCard />
                    <ComboCard />
                </Slider>
            </div>
        </div>
    )
}