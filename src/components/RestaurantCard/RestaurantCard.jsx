import "./RestaurantCard.css"

const RestaurantCard = ({restaurant}) => {
  return (
    <div className="card-wrapper">
         <div className="content">
              <div className="logo">
                <img src={restaurant.logo} alt={restaurant.name} />
              </div>
              <div className="info">
                <p className="title">{restaurant.name}</p>
                <div className="tags">
                  {
                    restaurant.tags.length
                    &&
                    restaurant.tags.map((tag,i)=>{
                     return <p className="tag" key={i}>{tag.name},</p>
                    })
                  }
                </div>
              </div>
            </div>
    </div>
  )
}

export default RestaurantCard