import "./home.css";
import FloatingAccents from "../../components/effacts/floatingAccents/FloatingAccents";

export const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <h1 className="home__title">Hi, I'm Rafael</h1>
        <p className="home__location-text">Long Prairie, MN</p>
        <p className="home__location-text">I'm a software engineer</p>

        <FloatingAccents />
      </div>
    </div>
  );
};

export default Home;
