import React, { useState } from 'react'
import Card from './Card'
import axios from 'axios'

const Main = () => {
    const [search, setSearch]=useState("");
    const [bookData,setData]=useState([])
    const searchBook=(evt)=>{
        if(evt.key === "Enter"){
          // console.log("hi ");
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyD-4pZ8ncothfnPSHCJst_8g28bsVG5vvc' +'&maxResults=40')
             // .then(res=>console.log(res))
            .then(res=>setData(res.data.items) ) 
            .catch(err=>console.log(err))
        }
    }
  return (
    <>
      <div className="header">
        <div className="row1">
            <h1>A room without books is like <br /> a body without a soul</h1>
        </div>
        <div className="row2">
            <h2>Find Your Book</h2>
            <div className="search">
                <input type="text" placeholder='Enter Your Book Name'
                value={search} 
                onChange={e=>setSearch(e.target.value)}
                onKeyPress={searchBook} />
                <button><i className="fa fa-search"></i></button>
            </div>
            <img src="https://img.freepik.com/free-vector/world-book-day-illustration_23-2149323889.jpg?t=st=1666163300~exp=1666163900~hmac=fc39029a6e4f9b9544546fade86182d322dc07c070d933d9feb3eebdd1743867" alt="" />
        </div>
      </div>
      <div className="container">
        {
           <Card book={bookData}/> 
        }
        
        
      </div>
    </> 
  )
}

export default Main

  