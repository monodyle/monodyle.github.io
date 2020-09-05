import classcat from "classcat"

import ActiveLink from "./active-link"

export default function BottomNavigation({ menus, ...props }) {
  return (
    <nav
      {...props}
      className={classcat([
        "w-full h-16 bg-white border-t border-mid-gray select-none",
        props.className,
      ])}
    >
      <div className="flex justify-between w-full max-w-sm px-2 mx-auto">
        {menus.map((item) => (
          <ActiveLink key={item.path} href={item.path}>
            {(active) => (
              <div
                className={classcat([
                  "flex flex-col items-center justify-center w-16 h-16 relative",
                  {
                    "text-black": !active,
                    "text-primary": active,
                  },
                ])}
              >
                <h5 className="mt-1 text-xs font-medium tracking-wide">
                  {item.title}
                </h5>
              </div>
            )}
          </ActiveLink>
        ))}
      </div>
    </nav>
  )
}
