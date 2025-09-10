export interface ScrollItemProps {
  type: "img" | "p";
  index: number;
  content: string;
  alt: string;
  link?: string;
  className?: string;
}

export interface HorizontalScrollProps {
  items: ScrollItemProps[];
  onItemClick?: (item: ScrollItemProps) => void;
  className?: string;
}
