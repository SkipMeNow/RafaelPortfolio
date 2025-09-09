import styles from "./experience.module.css";
import { GraphNodeProps } from "../../components/graphNode/graph-node.types";
import { GraphNode } from "../../components/graphNode/graph-node.component";

export const Experience = () => {
  const nodes: GraphNodeProps[] = [
    {
      id: 1,
      label: "CSS",
      hasBottom: true,
      hasTop: false,
      icon: "/src/assets/icons/figma.png",
      description: "",
    },
    {
      id: 2,
      label: "CSS",
      hasBottom: true,
      hasTop: true,
      icon: "/src/assets/icons/figma.png",
      description: "",
    },
    {
      id: 3,
      label: "CSS",
      hasBottom: false,
      hasTop: true,
      icon: "/src/assets/icons/figma.png",
      description: "",
    },
  ];
  return (
    <div className={styles.experience}>
      {nodes.map((item) => (
        <GraphNode key={item.id} {...item} />
      ))}
    </div>
  );
};
export default Experience;
{
  /* 

     */
}
