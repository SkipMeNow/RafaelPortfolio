import styles from "./horizontalScroll.module.css";

export interface ScrollItemProps {
  type: "img" | "p";
  index: number;
  content: string;
  alt: string;
  link?: string;
  className?: string;
}

interface HorizontalScrollProps {
  items: ScrollItemProps[];
  onItemClick?: (item: ScrollItemProps) => void;
  className?: string;
}

export const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
  items,
  onItemClick,
  className,
}) => {
  // Duplicate images for seamless scroll loop
  const scrollItems = [...items, ...items];

  return (
    <div className={`${styles.scrollContainer} ${className}`}>
      <div className={styles.scrollTrack}>
        {scrollItems?.map((item, index) => {
          const handleClick = () => {
            if (onItemClick) onItemClick(item);
          };
          switch (item.type) {
            case "img":
              return (
                <div key={`div-${item.index}-${index}`} className={styles.item}>
                  <img
                    key={`img-${item.index}-${index}`}
                    src={item.content}
                    alt={item.alt || ""}
                    className={`${styles.icon} ${item.className}`}
                    onClick={handleClick}
                  />
                </div>
              );
            case "p":
              return (
                <p
                  key={`p-${item.index}-${index}`}
                  className={`${styles.scrollText} ${item.className}`}
                >
                  {item.content}
                </p>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};
