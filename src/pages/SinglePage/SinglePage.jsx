import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Home1Data } from "../../HomeData";
import "../../Components/Side/Side.css";
import "./SinglePage.css";
// import "../../Components/Side/Side"
// import Side from '../../Components/Side/Side'
import SideBar from '../../pages/SideBar/SideBar';
import NotFound from '../NotFound/NotFound';
import '../../pages/SideBar/SideBar';

const SinglePage = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)
// console.log('id is',id);

  useEffect(() => {
    const item = Home1Data.find((item) => item.id === parseInt(id))
    if (item) {
      setItem(item)
    }
  },[id])

  return (
    <>
      {item ? (
        <main>
          <div className='container onePage'>
            <section className='mainContent details'>
              <h1 className='title'>{item.title}</h1>

              <div className='author'>
                <span>by</span>
                <img src={item.authorImg} alt='authorImg' />
                <p> {item.authorName} on</p>
                <label>{item.time}</label>
              </div>

              <div className='social'>
                <div className='socBox'>
                  <i className='fab fa-facebook-f'></i>
                  <span>SHARE</span>
                </div>
                <div className='socBox'>
                  <i className='fab fa-pinterest'></i>
                  <span>PINTEREST</span>
                </div>
                <div className='socBox'>
                  <i className='fab fa-twitter'></i>
                  <span>TWITTER</span>
                </div>
                <div className='socBox'>
                  <i className='fa fa-envelope'></i>
                  <span>MAIL</span>
                </div>
              </div>

              <div className='desctop'>
                {item.desc.map((val) => {
                  return (
                    <>
                      <p>{val.para1}</p>
                      <p>{val.para2}</p>
                    </>
                  )
                })}
              </div>
              <img src={item.cover} alt='coverImg' />
              {item.desc.map((val) => (
                <p>{val.para3}</p>
              ))}

              <div className='descbot'>
                {item.details.map((data) => {
                  return (
                    <>
                      <h1>{data.title}</h1>
                      <p>{data.para1}</p>
                    </>
                  )
                })}
              </div>

              <div className='quote'>
                <i className='fa fa-quote-left'></i>
                {item.details.map((data) => (
                  <p>{data.quote}</p>
                ))}
              </div>

              <div className='desctop'>
                {item.details.map((data) => {
                  return (
                    <>
                      <p>{data.para2}</p>
                      <p>{data.para3}</p>
                    </>
                  )
                })}
              </div>
            </section>
            <SideBar title={'TOP POSTS'}/>
            {/* <Side/> */}
          </div>
        </main>
      ) : (
        <NotFound/>
      )}
    </>
  )
}

export default SinglePage;
