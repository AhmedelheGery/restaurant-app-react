import { Link } from "react-router-dom";

const Home = () => {
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
