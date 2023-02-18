// Write your code here
import {useState} from 'react'
import './index.css'

const ReviewCarousel = props => {
  const {reviewsList} = props
  const length1 = reviewsList.length
  const [index, setIndex] = useState(0)

  const handlePrevious = () => {
    const newIndex = index - 1
    setIndex(newIndex < 0 ? 0 : newIndex)
  }

  const handleNext = () => {
    const newIndex = index + 1
    setIndex(newIndex >= length1 ? 3 : newIndex)
  }
  console.log(index)
  const Url = reviewsList[index].imgUrl
  console.log(Url)

  return (
    <div className="bg-conatiner">
      <h1 className="heading">Reviews</h1>
      <div className="details-container">
        <button type="button" onClick={handlePrevious} data-testid="leftArrow">
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
            alt="left arrow"
          />
        </button>
        <div className="review-card">
          <div>
            <div className="imageOf-user">
              <img src={Url} alt={reviewsList[index].username} />
            </div>
            <p className="para2">{reviewsList[index].username}</p>
            <p className="para3">{reviewsList[index].companyName}</p>
            <p className="para4">{reviewsList[index].description}</p>
          </div>
        </div>
        <button type="button" onClick={handleNext} data-testid="rightArrow">
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
            alt="right arrow"
          />
        </button>
      </div>
    </div>
  )
}

export default ReviewCarousel
