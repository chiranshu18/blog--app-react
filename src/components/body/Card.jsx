import React from 'react'
import icon1 from "../../Icons/clapping.svg"
import icon2 from "../../Icons/heart-black.svg"
import icon3 from "../../Icons/heart-red.svg"

const Card = ({ item }) => {

  const [clapCount, setClapCount] = React.useState(item.claps);
  const [like, setLike] = React.useState(false);

  const increaseClapCount = () => {
    setClapCount(clapCount + 1);
  }

  const changeLike = () => {
    setLike(!like);
  }

  return (

    <div className='card'>
      <img className='card-img' src={require(`../../Images/${item.image}`)} alt="abstract" />

      <div className="date-time">
        <p>{item.date}</p>
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

          {
            !like && <img className="icon-img" src={icon2} alt="heart" onClick={changeLike} />
          }
          {
            like && <img className="icon-img" src={icon3} alt="heart" onClick={changeLike} />

          }

        </div>

      </div>

    </div>
  )
}

export default Card