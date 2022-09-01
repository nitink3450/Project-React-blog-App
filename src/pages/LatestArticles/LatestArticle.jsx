import React from "react"
import "./LatestArticle.css";
import '.././Home/LatestSide.css';
// import Slider from "react-slick"
import Heading from "../../Components/Heading/Heading";
import { LatestArticleData } from "../../HomeData"
import '../../App.css'
const LatestArticle = ({title}) => {
  // console.log(desc);
  // console.log(title);
  // console.log(date);
  
  return (
    <>
      <section className='music'>
        <Heading title={title} />
        <div className='content'>
            {LatestArticleData
              .filter((val) => val.category === "fun")
              .map((val) => {
                return (
                  <div className='items'>
                    <div className='box shadow flexSB flexDirection'>
                      <div className='images'>
                        <div className='img'>
                          <img src={val.cover} alt='' />
                        </div>
                        <div class=' category1'>
                          {/* <span>{category}</span> */}
                        </div>
                      </div>
                      <div className='text'>
                        <h1 className='title'>{val.title.slice(0, 40)}...</h1>
                        <div className='date'>
                        <i class="fi fi-sr-calendar"></i>
                          <label>{val.date}</label>
                        </div>
                        <p className='desc'>{val.desc.slice(0, 250)}...</p>
                        <div className='comment'>
                          <i class='fas fa-share'></i>
                          <label>Share </label>
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

export default LatestArticle;
