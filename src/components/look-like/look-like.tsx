import {
  CSSProperties,
  useCallback,
  useEffect,
  useRef,
  useState,
  Fragment,
} from 'react';
import Image from 'next/image';
import styles from './look-like.module.css';
import { config } from 'config/config';

const map = (
  mouse: number,
  minA: number,
  maxA: number,
  minB: number,
  maxB: number,
) => minB + ((mouse - minA) * (maxB - minB)) / (maxA - minA);

const LookLike = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>({});

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;
    const { offsetX, offsetY } = e;
    const rotate = {
      y: map(offsetX, 0, 180, -25, 25),
      x: map(offsetY, 0, 250, 25, -25),
    };
    const brightness = map(offsetY, 0, 250, 1.5, 0.5);
    setStyle({
      transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      filter: `brightness(${brightness})`,
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    setStyle({
      transform: 'rotateX(0deg) rotateY(0deg)',
      filter: 'brightness(1)',
    });
  }, []);

  useEffect(() => {
    const { current } = ref;
    if (!current) return;
    current.addEventListener('mousemove', onMouseMove);
    current.addEventListener('mouseleave', onMouseLeave);
    return () => {
      if (!current) return;
      current.removeEventListener('mousemove', onMouseMove);
      current.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [onMouseLeave, onMouseMove]);

  return (
    <Fragment>
      <div className={styles.card} ref={ref}>
        <div className={styles.effect} style={style}>
          <Image
            src="/assets/me.png"
            alt="Look like this!"
            width={256}
            height={384}
          />
        </div>
      </div>
    </Fragment>
  );
};

export { LookLike };
