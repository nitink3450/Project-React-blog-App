import React, { useState } from 'react'
import Card1 from '../Components/Cards/Card1'
import LatestArticle from './LatestArticles/LatestArticle';
import SideBar from './SideBar/SideBar';
// import { Fitness } from '../HomeData';
const Hollywood = () => {
  // const [fitness, setFitness] = useState(Fitness)
  return (
    <>
    <h1 className='titleName'>🎞️HOLLYWOOD🎞️</h1>
            <section className='container'>
              {/* <Card1 /> */}
             </section>
            <section className='container LatestSide'>
                <LatestArticle title={'LATEST - HOLLYWOOD NEWS'} />
                <SideBar title={'TOP-HOLLYWOOD POSTS'}/>
              </section>
            <section className='container'>
              <Card1 />
             </section>  
    </>
  )
}
export default Hollywood;
{/* <section className='container LatestSide'>
                <LatestArticle />
                <Tpost />
              </section>
              <section className='container'>
                <Life key={val.id} val={val} />
              </section> */}
