import React, { useState } from 'react'
import Card1 from '../Components/Cards/Card1'
import LatestArticle from './LatestArticles/LatestArticle';
import SideBar from './SideBar/SideBar';
// import { Fitness } from '../HomeData';
const Fitness1 = () => {
  // const [fitness, setFitness] = useState(Fitness)
  return (
    <>
    <h1 className='titleName'>💪FITNESS💪</h1>
            <section className='container'>
              {/* <Card1 /> */}
             </section>
            <section className='container LatestSide'>
                <LatestArticle title={'LATEST - FITNESS NEWS'} />
                <SideBar title={'TOP-FITNESS POSTS'}/>
              </section>
            <section className='container'>
              <Card1 />
             </section>  
    </>
  )
}
export default Fitness1
{/* <section className='container LatestSide'>
                <LatestArticle />
                <Tpost />
              </section>
              <section className='container'>
                <Life key={val.id} val={val} />
              </section> */}
