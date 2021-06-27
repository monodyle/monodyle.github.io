import { config } from "config/config";
import styles from "./footer.module.css";

interface Props {
  illustration?: boolean;
}

const Footer = (props: Props) => {
  return props.illustration ? (
    <footer className="w-full h-[160px] relative overflow-hidden">
      <div className={styles.ground} />
      <div className={styles.cloud} />
      <div className={styles.sun} />
      <div className={styles.me} children="🌝" />
    </footer>
  ) : (
    <footer className="flex items-center justify-center w-full p-9">
      <div className="text-center text-middle">
        Hello, here the Monody's space!
        <br />
        You can{" "}
        <a
          href={config.kofi}
          className="underline"
          target="_blank"
        >
          buy me a coffee
        </a>{" "}
        if you feel enjoy this blog.
      </div>
    </footer>
  );
};

export { Footer };
