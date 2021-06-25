import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className="w-full h-[160px] relative overflow-hidden">
      <div className={styles.ground} />
      <div className={styles.cloud} />
      <div className={styles.sun} />
      <div className={styles.me} children="🌝" />
    </footer>
  );
};

export { Footer };
