import Link from "next/link"

export default function MenuItem({ title, path, isActive }) {
  return (
    <Link href={path} passHref>
      <a>
        <li
          className={[
            "flex items-center tracking-wide h-10 px-6",
            isActive ? "bg-primary text-white" : "text-black hover:bg-solitude-214"
          ].join(" ")}
        >
          {title}
        </li>
      </a>
    </Link>
  )
}
