import React, { useState } from 'react'
import Card1 from '../Components/Cards/Card1'
import LatestArticle from './LatestArticles/LatestArticle';
import SideBar from './SideBar/SideBar';
// import { Fitness } from '../HomeData';
const Food = () => {
  // const [fitness, setFitness] = useState(Fitness)
  return (
    <>
    <h1 className='titleName'>🥗FOOD🥗</h1>
            <section className='container'>
              {/* <Card1 /> */}
             </section>
            <section className='container LatestSide'>
                <LatestArticle title={'LATEST - FOOD NEWS'} />
                <SideBar title={'TOP-FOOD POSTS'} />
              </section>
            <section className='container'>
              <Card1 />
             </section>  
    </>
  )
}
export default Food;
{/* <section className='container LatestSide'>
                <LatestArticle />
                <Tpost />
              </section>
              <section className='container'>
                <Life key={val.id} val={val} />
              </section> */}
