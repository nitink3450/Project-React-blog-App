import React from "react"
import { lifestyle } from "../../HomeData"
import Heading from "../Heading/Heading"
import "./Card1.css";
const Card1 = () => {
  return (
    <>
      <section className='popularPost life'>
        <Heading title='LIFE STYLE' />
        <div className='card1'>
            {lifestyle.map((val) => {
              return (
                <div className='items'>
                  <div className='box shadow'>
                    <div className='images'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                      </div>
                      <div class='category category1'>
                        <span>{val.category}</span>
                      </div>
                    </div>
                    <div className='text'>
                      <h1 className='title'>{val.title.slice(0, 40)}...</h1>
                      <div className='date'>
                      <i class="fi fi-sr-calendar"></i>
                        <label>{val.date}</label>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </section>
    </>
  )
}

export default Card1;
