import React from 'react'
import data from "../../mockData/index.json"
import Card from "../body/Card"
// import img from "../../Images/abstract.png"

const Body = () => {
  return (
    <div className='page-padding'>
        <section className='container'>
          {
            data.map( (item) => ( <Card item = {item} /> ) )
          }
        </section>
    </div>
  )
}

export default Body