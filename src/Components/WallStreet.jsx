import React from 'react'
import NavBar from './NavBar'
import {useState,useEffect} from 'react'
import style from './Css/Apple.module.css'
const WallStreet = () => {
  const [Data,setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=71046dfb5e3441d2b89ccac00736a420')
        if (!response.ok) {
          throw new Error('Failed to fetch articles')
        }
        const data = await response.json()
        setData(data.articles)
      } catch (error) {
        console.error(error)
        
      }
    }

    fetchData()
  }, [])
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

export default WallStreet
