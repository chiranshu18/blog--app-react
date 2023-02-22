import React from 'react'
// import data from "../../mockData/index.json"
import Card from "../body/Card"
import {GET_BLOG_DATA} from "../../constants/apiEndPoints"
import makeRequest from "../../utils/makeRequest"

const Body = () => {

  const [blogData, setBlogData] = React.useState([]);
  const [error, setError] = React.useState();

  React.useEffect(() => {
    makeRequest(GET_BLOG_DATA)
    .then((response) => setBlogData(response))
    .catch((e) => setError(e.message));
  }, []);
  if(error){
    return (
      <div className="blogDataError">
        <p>{error}</p>
      </div>
    );
  }

  return blogData ? (
    <div className='page-padding'>
        <section className='container'>
          {
            // data.map( (item) => ( <Card item = {item} /> ) )
            blogData.map((item) => {
             return  <Card key = {item.id} item = {item}/>
            })
          }
        </section>
    </div>
  ) : (
    <div className="blogDataLoader">
      <p>Loading...</p>
    </div>
  )
  

}

export default Body