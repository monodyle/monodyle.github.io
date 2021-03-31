import NextLink from "next/link"

export const CodeBlock = ({ children, filename }) => {
  return (
    <div
      className={[
        "mb-10 mt-4 pb-4 overflow-x-auto border border-mid-gray rounded-md",
        filename ? "pt-12" : "pt-4"
      ].join(" ")}
    >
      {filename && (
        <div className="absolute top-0 left-0 flex items-center w-full h-10 px-4 select-none">
          {/* <div className="flex items-center">
            <svg width="54" height="14">
              <use xlinkHref="/assets/icons.svg#control" />
            </svg>
          </div> */}
          <div className="flex-1 text-center text-dark-gray">{filename}</div>
        </div>
      )}
      <code className="block float-left min-w-full px-4">{children}</code>
    </div>
  )
}

export const Image = ({ title, src, alt, ...props }) => {
  return (
    <figure className="flex flex-col items-center max-w-full my-10 tablet:my-12 desktop:my-16">
      <img {...props} alt={alt} data-src={src} className="rounded lazyload" />
      {title && (
        <figcaption className="px-2 mt-4 text-xs tracking-wide text-center tablet:text-sm desktop:text-base">
          {title}
        </figcaption>
      )}
    </figure>
  )
}

export const Paragraph = ({ children, ...props }) => {
  // This will prevent the validateDOM error
  // e.g. <figure> insise <p> tag
  if (children.type && children.type.displayName) {
    return children
  }

  return <p {...props}>{children}</p>
}

export const Link = ({ href, children, ...props }) => {
  if (children.length < 1) {
    return null
  }

  if (!href.startsWith("/")) {
    return (
      <a
        {...props}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline text-primary"
      >
        {children}
      </a>
    )
  }

  return (
    <NextLink href={href} passHref>
      <a {...props} className="no-underline text-primary">
        {children}
      </a>
    </NextLink>
  )
}

export const Heading = ({ as: Component }) => ({ children, id }) => {
  return (
    <Component>
      <span id={id} className="absolute invisible block pt-8 -mt-8" />
      <a key="content" href={`#${id}`}>
        {children}
      </a>
      <svg key="anchor" width="16" height="24" strokeWidth="1.5">
        <use xlinkHref="/assets/icons.svg#link" />
      </svg>
    </Component>
  )
}

const MdxComponents = {
  code: CodeBlock,
  img: Image,
  p: Paragraph,
  a: Link,
  h2: Heading({ as: "h2" }),
  h3: Heading({ as: "h3" }),
}

export default MdxComponents
