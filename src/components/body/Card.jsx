import React from 'react'
import { UPDATE_BLOG_DATA } from '../../constants/apiEndPoints'
import icon1 from "../../Icons/clapping.svg"
import icon2 from "../../Icons/heart-black.svg"
import icon3 from "../../Icons/heart-red.svg"
import makeRequest from '../../utils/makeRequest'
import { getFormattedDateFromUtcDate } from "../../utils/common"

const Card = ({ item }) => {

  const [clapCount, setClapCount] = React.useState(item.claps);
  const [like, setLike] = React.useState(item.liked);

  const increaseClapCount = async () => {
    try{
      await makeRequest(UPDATE_BLOG_DATA(item.id), {
        data: {claps: clapCount+1},
      })
      setClapCount(clapCount + 1);
    }
    catch(e) {
      // 
    }
    
  }

  const changeLike = async () => {
    try{
      await makeRequest(UPDATE_BLOG_DATA(item.id), {
        data: {liked: !like},
      })
      setLike(!like);
    }
    catch(e) {
      // 
    }
  }

  return (

    <div className='card' data-testid = 'card-test'>

      <img className='card-img' src={item.image} alt="abstract" />

      <div className="date-time">
        <p>{getFormattedDateFromUtcDate(item.date)}</p>
        <p>{item.readingTime}</p>
      </div>

      <h3 className="card-title"> {item.title} </h3>

      <p className="card-text"> {item.description} </p>

      <hr />

      <div className="interaction">

        <div className='claps'>
          <img className="icon-img" src={icon1} alt="clapping" onClick={increaseClapCount} />
          {clapCount}
        </div>

        <div className='like'>
          { !like && <img className="icon-img" src={icon2} alt="heart" onClick={changeLike} /> }
          {  like && <img className="icon-img" src={icon3} alt="heart" onClick={changeLike} /> }
        </div>

      </div>

    </div>
  )
}

export default Card