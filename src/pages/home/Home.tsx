import "./Home.css";
import FloatingAccents from "../../components/effacts/floatingAccents/FloatingAccents";
import {
  HorizontalScroll,
  ScrollItemProps,
} from "../../components/effacts/horizontalScroll/HorizontalScroll";
import programmingLanguagesIcon from "../../utils/programmingLanguagesIcon";

export const Home = () => {
  const skills = [
    { name: "javascript", link: "https://www.w3schools.com/js/" },
    { name: "css", link: "https://www.w3schools.com/css/" },
    { name: "react", link: "https://react.dev/" },
    { name: "unity", link: "https://unity.com" },
    { name: "py", link: "https://www.python.org/" },
    { name: "figma", link: "https://www.figma.com/" },
    { name: "git", link: "https://github.com/" },
    { name: "cSharp", link: "https://www.w3schools.com/cs/index.php" },
  ];

  function handleItemClick(item: ScrollItemProps): void {
    if (item.link) window.open(item.link);
  }

  return (
    <div className="home">
      <div className="home__header">
        <h1 className="home__title">Hi, I'm Rafael</h1>
        <p className="home__location-text">Long Prairie, MN</p>
        <p className="home__location-text">I'm a software engineer</p>

        <FloatingAccents />
      </div>
      <HorizontalScroll
        className="HorizontalScroll"
        items={skills.map((lang, index) => ({
          type: "img",
          index: index,
          content: programmingLanguagesIcon[lang.name],
          alt: lang.name,
          link: lang.link,
        }))}
        onItemClick={handleItemClick}
      />
    </div>
  );
};

export default Home;
