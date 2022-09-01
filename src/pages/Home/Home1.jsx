// import React, { useState } from "react";
import { Home1Data } from "../../HomeData";
import "./Home1.css";
import '../../App.css';
import './LatestSide.css';
import SideBar from '../SideBar/SideBar';
import HomeCard from "./HomeCard";
import LatestArticle from "../LatestArticles/LatestArticle";
import Card1 from '../../Components/Cards/Card1';
const Home1 = () => {
  // const [items, setIems] = useState(Home1Data)

  return (
    <>
      <section className='hero'>
        <div className='container'>
          {Home1Data.map((item) => {
            return (
              <>
                <HomeCard key={item.id} item={item} />
              </>
            )
          })}
        </div>
      </section>
      <section className='container'>
      <Card1/>
      </section>
      <section className='container LatestSide'>
      <LatestArticle title={'LATEST ARTICLES'}/>
      <SideBar title={'TOP POSTS'}/>
      </section>
      <section className='container'>
      <Card1/>
      </section>
    </>
  )
}

export default Home1;
