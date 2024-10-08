import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const CardItem = props => {
  const {cardDetails} = props
  const {title, amount,price,discount, imgUrl, className} = cardDetails

  return (
    <li className={`card ${className}`}>
      <div>
        <img className="avatar" src={imgUrl} alt={title} />
        <FontAwesomeIcon className="icon" icon={faHeart} />
        <h1 className="title">{title}</h1>
        <hr className="line" />
        <div className="details">
            <p className="amount">{amount}</p>
            <p className="price">{price}</p>
            <p className="discount">{discount}</p>
        </div>
        <button className="button">Add to Cart</button>
      </div>
    </li>
  )
}

export default CardItem
