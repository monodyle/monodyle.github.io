import { Fragment } from "react";
import Link from "next/link";
import { aC } from "lazysizes";

export type ActiveHeaderItem = "hi" | "work" | "blog";
interface MenuItem {
  title: string;
  emoji?: string;
  slug: string;
}

const MENU: {
  [K in ActiveHeaderItem]: MenuItem;
} = {
  hi: {
    title: "say hi.",
    emoji: "👋",
    slug: "/hi",
  },
  work: {
    title: "working.",
    emoji: "💻",
    slug: "/work",
  },
  blog: {
    title: "writing.",
    emoji: "📝",
    slug: "/blog",
  },
};

const Item = ({ slug, title }: MenuItem) => {
  return (
    <Link href={slug}>
      <span className="text-base font-bold leading-6 cursor-pointer rainbown">
        {title}
      </span>
    </Link>
  );
};

const Header = ({ active }: { active?: ActiveHeaderItem }) => {
  return (
    <nav className="flex items-center justify-between leading-6">
      <div className="flex items-center">
        <Item slug="/" title="home." />
        {active && (
          <Fragment>
            <div className="px-4 text-dark-muted">/</div>
            <span className="text-base font-bold leading-6">
              {MENU[active].title} {MENU[active].emoji}
            </span>
          </Fragment>
        )}
      </div>
      <div className="flex items-center">
        {Object.entries(MENU).map(([key, item], i) =>
          key !== active ? (
            <Fragment key={i}>
              <div className="w-12" />
              <Item slug={item.slug} title={item.title} />
            </Fragment>
          ) : null
        )}
      </div>
    </nav>
  );
};

export { Header };
