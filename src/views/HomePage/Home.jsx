import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import SearchInput from "../../components/SearchInput/SearchInput";
import TagCard from "../../components/TagCard/TagCard";
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

  // filter config
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTags] = useState(null);

  useEffect(() => {
    if (restaurantsStore.restaurants.length) {
      const tagsList = restaurantsStore.restaurants.map((restaurant) => {
        return restaurant.tags;
      });
      let convertedTags = []
        .concat(...tagsList)
        .filter((v, i, a) => a.findIndex((t) => t.name === v.name) === i);
      setTags(convertedTags);
    }
  }, [restaurantsStore]);

  const onSelectTag = (tag) => {
    setSelectedTags(tag);
  };

  // search config
  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filteredRestaurants = restaurantsStore.restaurants.filter((el) => {
    if (inputText === "" && !selectedTag) {
      return el;
    } else if (inputText === "" && selectedTag) {
      return el.tags.find((tag) => {
        if (tag.name === selectedTag.name) {
          return el;
        }
      });
    } else {
      return el.name.toLowerCase().includes(inputText);
    }
  });

  return (
    <div className="container py-4">
      <SearchInput onSearch={inputHandler} />
      <div className="tags-list">
        {tags.length
          ? tags.map((tag, i) => {
              return <TagCard onSelectTag={onSelectTag} key={i} tag={tag} />;
            })
          : ""}
      </div>
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
