import './index.css'

const ThumbnailItem = props => {
  const {imagesDetails} = props
  const {imageUrl, thumbnailUrl} = imagesDetails

  const getImgs = () => {
    getThumbnailImgs(thumbnailUrl)
  }

  return (
    <div>
      <li className="img-container">
        <img className="images" src={imageUrl} alt="images" />
      </li>
    </div>
  )
}

export default ThumbnailItem
