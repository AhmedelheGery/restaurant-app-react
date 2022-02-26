import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "./RestaurantDetails.css";

const RestaurantDetails = () => {
  const restaurantsStore = useSelector((state) => state.restaurantsReducer);
  const [restaurantData, setRestaurantData] = useState(null);
  const { name } = useParams();
  const renderRestaurant = () => {
    return (
      restaurantsStore.restaurants.length &&
      restaurantsStore.restaurants.map(
        (restaurant) =>
          restaurant.name === name && setRestaurantData(restaurant)
      )
    );
  };

  useEffect(() => {
    renderRestaurant();
  }, []);

  return (
    <div className="container">
      {restaurantData ? (
        <div className="card restaurant-details">
          <div className="logo">
            <img
              className="card-img-top "
              src={restaurantData.logo}
              alt={restaurantData.name}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{restaurantData.description}</h5>
            <hr />
            {/* items  */}
            {restaurantData.items.length ? (
              <>
                <h3>Items</h3>
                <div className="items-list">
                  {restaurantData.items.map((item,i) => {
                    return (
                      <div key={i} className="card text-white bg-dark mb-3 item">
                        <div className="card-header">{item.name}</div>
                        <div className="card-body">
                          <h5 className="card-title">{item.price}</h5>
                          <p className="card-text">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <hr />
              </>
            ) : (
              <p>No items for {restaurantData.name}</p>
            )}
            {/* branches  */}
            {restaurantData.branches.length ? (
              <>
                <h3>Branches</h3>
                <div className="branches-list">
                  {restaurantData.branches.map((branch,i) => {
                    return <p key={i}>{branch.name}</p>;
                  })}
                </div>
              </>
            ) : (
              <p>No branch for {restaurantData.name}</p>
            )}
          </div>
        </div>
      ) : (
        (<h2 className="text-center py-5">Press back to refresh data</h2>)
      )}
      <Link className="btn btn-outline-dark d-grid my-4" to="/">
        Back to home
      </Link>
    </div>
  );
};

export default RestaurantDetails;
