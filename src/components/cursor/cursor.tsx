import { useCallback, useEffect, useState } from "react";
import styles from "./cursor.module.css";

interface Props {
  show?: boolean;
  icon?: string;
  circle?: boolean;
}

const Cursor = ({ show, icon, circle }: Props) => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const onMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      className={[
        styles.cursor,
        show ? "" : styles.hide,
        circle ? styles.circle : "",
      ].join(" ")}
      style={{ left: position.x, top: position.y }}
    >
      <div className={styles.icon}>
        {icon === "👋" ? <div className={styles.wave} children={icon} /> : icon}
      </div>
    </div>
  );
};

export { Cursor };
