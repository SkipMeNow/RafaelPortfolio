import styles from "./HorizontalScroll.module.css";

interface HorizontalScrollImageProps {
  index: number;
  src: string;
  alt: string;
}

interface HorizontalScrollProps {
  minimumRequired?: number;
  images?: HorizontalScrollImageProps[];
  texts?: string[];
}

export const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
  minimumRequired = 6,
  images = [],
  texts = [],
}) => {
  const shouldAnimate = images.length > minimumRequired;
  console.log(shouldAnimate);
  const scrollItems = images;

  return (
    <div className={styles.scrollContainer}>
      <div
        className={`${styles.scrollTrack} ${
          shouldAnimate ? styles.animate : ""
        }`}
      >
        {scrollItems.map((lang, index) => (
          <img
            className={styles.icon}
            key={`${lang.alt}-${lang.index}-${index}`}
            src={lang.src}
            alt={lang.alt}
          />
        ))}
        {texts.map((text, index) => (
          <span key={`text-${index}`} className={styles.scrollText}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};
