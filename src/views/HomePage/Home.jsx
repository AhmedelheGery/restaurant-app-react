import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import SearchInput from "../../components/SearchInput/SearchInput";
import { getRestaurants } from "../../redux/actions/restaurants";
import "./Home.css";

const Home = () => {

  useEffect(() => {
    fetchData();
  }, []);

  const restaurantsStore = useSelector((state) => state.restaurantsReducer);

  const disptach = useDispatch();

  const fetchData = () => {
    disptach(getRestaurants());
  };

  // search config
  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filteredRestaurants = restaurantsStore.restaurants.filter((el) => {
    if (inputText === "") {
      return el;
    } else {
      return el.name.toLowerCase().includes(inputText);
    }
  });

  return (
    <div className="container py-4">
      <SearchInput onSearch={inputHandler} />
      <h2 className="title mb-4">Restaurants</h2>
      <div className="restaurants-list">
        {filteredRestaurants.length ? (
          filteredRestaurants.map((restaurant, i) => {
            return (
              <Link
                className="card-link"
                to={`/restaurant/${restaurant.name}`}
                key={i}
              >
                <RestaurantCard restaurant={restaurant} />
              </Link>
            );
          })
        ) : (
          <p>No matching data</p>
        )}
      </div>
    </div>
  );
};

export default Home;
