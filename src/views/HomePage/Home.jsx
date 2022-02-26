import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRestaurants } from "../../redux/actions/restaurants";

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
    <div className="container">
      <h1 className="text-center primary">Home Page</h1>
      <div className="restaurant">
        <Link to={`/restaurant/${1}`}>Go to restaurant</Link>
      </div>
    </div>
  );
};

export default Home;
