import React from 'react'
import Card1 from '../Components/Cards/Card1'
import LatestArticle from './LatestArticles/LatestArticle';
import SideBar from './SideBar/SideBar';
// import { Fitness } from '../HomeData';
const Bollywood = () => {
  // const [fitness, setFitness] = useState(Fitness)
  return (
    <>
    <h1 className='titleName'>🎥BOLLYWOOD🎥</h1>
            <section className='container'>
              {/* <Card1 /> */}
             </section>
            <section className='container LatestSide'>
                <LatestArticle title={'LATEST - BOLLYWOOD NEWS'}/>
                <SideBar title={'TOP-BOLLYWOOD POSTS'} />
              </section>
            <section className='container'>
              <Card1 />
             </section>  
    </>
  )
}
export default Bollywood;

