import Link from "next/link"
import dynamic from "next/dynamic"

const ActiveLink = dynamic(() => import("./active-link"))

export default function Header({ menus }) {
  return (
    <header className="w-full">
      <div className="container mx-auto">
        <Link href="/" passHref>
          <a className="flex items-center pt-16 mb-4">
            <img src="/favicon-32x32.png" alt="logo" />
            <strong className="pl-2 font-mono">
              The Monody&apos;s Blog
            </strong>
          </a>
        </Link>

        <nav className="hidden tablet:block">
          <div className="flex items-center font-mono text-mid-gray">
            {menus.map((item, index) => {
              return (
                <div key={index}>
                  <ActiveLink href={item.path}>
                    {(active) => (
                      <span
                        className={[
                          "tracking-wide font-semibold",
                          active ? "text-primary" : "text-dark-gray",
                        ].join(" ")}
                      >
                        {item.title}
                      </span>
                    )}
                  </ActiveLink>

                  {index !== menus.length - 1 && (
                    <span className="px-4">/</span>
                  )}
                </div>
              )
            })}
          </div>
        </nav>
      </div>
    </header>
  )
}
