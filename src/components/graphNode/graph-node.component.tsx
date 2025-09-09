import { GraphNodeProps } from "./graph-node.types";
import styles from "./graph-node.module.css";

export function GraphNode({
  hasBottom = false,
  hasTop = false,
  label,
  description,
  icon,
}: GraphNodeProps) {
  return (
    <div className={styles.node}>
      <div className={styles.lines}>
        {hasTop && <div className={styles.topLine} />}
        <div className={styles.centerLine} />
        <div className={styles.centerDot} />
        {hasBottom && <div className={styles.bottomLine} />}
      </div>

      <div className={styles.node__content}>
        {icon && (
          <img className={styles.content__icon} src={icon} alt={label} />
        )}
        <div className={styles.content__content}>
          <h3 className={styles.label}>{label}</h3>
          {description && <p className={styles.description}>{description}</p>}
        </div>
      </div>
    </div>
  );
}
