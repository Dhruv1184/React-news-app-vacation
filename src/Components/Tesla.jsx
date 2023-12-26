import React from 'react'
import NavBar from './NavBar'
import {useState,useEffect} from 'react'
import style from './Css/Apple.module.css'
const Tesla = () => {
  const [Data,setData] = useState([])
  useEffect(()=>{
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-12-24&sortBy=publishedAt&apiKey=71046dfb5e3441d2b89ccac00736a420')
    .then(Data=>Data.json())
    .then(res =>{
      setData(res.articles)
    })
  },[])
  console.log(Data)
  return (
    <div>
    <NavBar/>
    <div >

      {Data.map((item,index)=>{
        return(
          <div key={index} className={style.box}>
            <div className={style.p}>
              <img src={item.urlToImage} alt="" className={style.img} />
              <p>{item.author}</p>
              <a href={item.url}><button >Read More</button></a>
            </div>
              <div className={style.dis}>
                <h1>{item.title}</h1>
                <p className={style.content}>{item.content}</p>
                <div className={style.content}>{item.description}</div>
              </div>
          </div>
        )
      })}
    </div>
   </div>
  )
}

export default Tesla
