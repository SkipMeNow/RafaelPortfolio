import "./home.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <h1 className="home__title">Hi, I'm Rafael</h1>
        <p className="home__location-text">Long Prairie, MN</p>
        <p className="home__location-text">I'm a software engineer</p>

        <div className="home__accent-rect home__accent--1">
          <div className="home__accent-rect-inner" />
        </div>
        <div className="home__accent-rect home__accent--2">
          <div className="home__accent-rect-inner" />
        </div>

        <div className="home__accent-rect home__accent--3">
          <div className="home__accent-rect-inner" />
        </div>

        <div className="home__accent-rect home__accent--4">
          <div className="home__accent-rect-inner" />
        </div>

        <div className="home__accent-rect home__accent--5">
          <div className="home__accent-rect-inner" />
        </div>

        <div className="home__accent-rect home__accent--6">
          <div className="home__accent-rect-inner" />
        </div>
        <div className="home__accent-rect home__accent--7">
          <div className="home__accent-rect-inner" />
        </div>
      </div>
    </div>
  );
};

export default Home;
