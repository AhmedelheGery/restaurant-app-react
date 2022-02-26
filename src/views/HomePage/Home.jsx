import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { getRestaurants } from "../../redux/actions/restaurants";
import "./Home.css";
const Home = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const disptach = useDispatch();
  const fetchData = () => {
    disptach(getRestaurants());
  };

  const restaurantsStore = useSelector((state) => state.restaurantsReducer);
  console.log("restaurantsStore", restaurantsStore);

  return (
    <div className="container py-4">
      <h2 className="title mb-4">Restaurants</h2>
      <div className="restaurants-list">
        {restaurantsStore.restaurants.length &&
          restaurantsStore.restaurants.map((restaurant, i) => {
            return (
              <Link
                className="card-link"
                to={`/restaurant/${restaurant.name}`}
                key={i}
              >
                <RestaurantCard restaurant={restaurant} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
