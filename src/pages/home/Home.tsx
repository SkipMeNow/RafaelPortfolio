import "./Home.css";
import FloatingAccents from "../../components/effacts/floatingAccents/FloatingAccents";
import { HorizontalScroll } from "../../components/effacts/horizontalScroll/HorizontalScroll";
import icons from "../../utils/programmingLanguagesIcon";
import programmingLanguagesIcon from "../../utils/programmingLanguagesIcon";

export const Home = () => {
  const skills = ["javascript", "css", "react", "javascript", "css", "react"];

  return (
    <div className="home">
      <div className="home__header">
        <h1 className="home__title">Hi, I'm Rafael</h1>
        <p className="home__location-text">Long Prairie, MN</p>
        <p className="home__location-text">I'm a software engineer</p>

        <FloatingAccents />
      </div>
      <HorizontalScroll
        images={skills.map((lang, index) => ({
          index: index,
          src: programmingLanguagesIcon[lang],
          alt: lang,
        }))}
      />
    </div>
  );
};

export default Home;
