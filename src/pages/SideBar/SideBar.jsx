import React from "react"
import { tpost } from "../../HomeData"
import Heading from "../../Components/Heading/Heading"
import "./SideBar.css"
import Social from '../../Components/Cards/Social';
const SideBar = ({title}) => {
  return (
    <>
      <section className='tpost '>
      <Social/>
        <Heading title={title} />
        {tpost.map((val) => {
          return (
            <div className='box shadow flexSB'>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <div className='text'>
                <h1 className='title'>{val.title.slice(0, 35)}...</h1>
                <span>a year ago</span>
              </div>
            </div>
          )
        })}
        
      </section>
    </>
  )
}

export default SideBar
