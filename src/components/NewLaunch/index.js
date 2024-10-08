import './index.css'

const NewLaunch = props => {
    const {cardDetails} = props
    const {title, amount,discount, imgUrl, className} = cardDetails

    return (
        <li className={`card ${className}`}>
        <div>
            <spam className="spam-con">{discount}</spam>
            <img className="avatar" src={imgUrl} alt={title} />
            <h1 className="title">{title}</h1>
            <hr className="line" />
            <div className="details">
                <p className="amount">{amount}</p>
            </div>
            <button className="button">Add to Cart</button>
        </div>
        </li>
    )
}

export default NewLaunch