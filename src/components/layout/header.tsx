import { Cursor } from 'components/cursor/cursor';
import { MENU } from 'config/config';
import Link from 'next/link';
import { Fragment, useEffect, useRef, useState } from 'react';

export type ActiveHeaderItem = 'hi' | 'work' | 'blog';
export interface MenuItem {
  title: string;
  emoji?: string;
  slug: string;
  effect?: boolean;
}

const Item = ({ slug, title, emoji, effect }: MenuItem) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [cursor, setCursor] = useState<boolean>(false);

  const onMouseEnter = () => setCursor(true);
  const onMouseLeave = () => setCursor(false);

  useEffect(() => {
    const { current } = ref;
    if (!current) return;
    current.addEventListener('mouseenter', onMouseEnter);
    current.addEventListener('mouseleave', onMouseLeave);
    return () => {
      if (!current) return;
      current.removeEventListener('mouseenter', onMouseEnter);
      current.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <Fragment>
      <Link href={slug}>
        <a
          ref={ref}
          className={[
            'text-base font-bold leading-6 rainbown',
            effect ? 'cursor-none' : 'cursor-pointer',
          ].join(' ')}
        >
          {title}
        </a>
      </Link>
      {effect && <Cursor show={cursor} icon={emoji} />}
    </Fragment>
  );
};

const Header = ({ active }: { active?: ActiveHeaderItem }) => {
  return (
    <nav className="flex items-center leading-6 md:justify-between">
      <div className="flex items-center">
        <Item slug="/" title="home." />
        {active && (
          <Fragment>
            <div className="hidden px-4 text-dark-muted sm:block">/</div>
            <span className="hidden text-base font-bold leading-6 sm:block">
              {MENU[active].title} {MENU[active].emoji}
            </span>
          </Fragment>
        )}
      </div>
      <div className="flex items-center justify-end">
        {Object.entries(MENU).map(([key, item], i) =>
          key !== active ? (
            <Fragment key={i}>
              <div className="w-4 md:w-12" />
              <Item
                slug={item.slug}
                title={item.title}
                emoji={item.emoji}
                effect
              />
            </Fragment>
          ) : null,
        )}
      </div>
    </nav>
  );
};

export { Header };
