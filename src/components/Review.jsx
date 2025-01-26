import "./Review.css"

function Review(props)
{
    

    return(
        <>
        <div className="reviewcontainer">
        <div className="reviewrating">Rating: {props.data.rating}</div>
        <div className="comment">{props.data.comment}</div>
        <div className="extra">{props.data.date}</div>
        <div className="extra">{props.data.reviewerName}</div>
        <div className="extra">{props.data.reviewerEmail}</div>
        </div>
        </>
    )
}

export default Review;