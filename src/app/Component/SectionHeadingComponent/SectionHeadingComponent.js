import styles from "./Heading.module.css";

export default function SectionHeadingComponent({
  name,
  number,
  mbottom,
  mtop,
}) {
  return (
    <div
      style={{
        marginTop: mtop,
        paddingBottom: mbottom,
      }}
    >
      <div className={styles.heading}></div>
      <div className={styles.detail}>
        <div>{name}</div>
        <div>{number}</div>
      </div>
    </div>
  );
}
