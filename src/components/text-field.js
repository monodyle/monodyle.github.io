export default function TextField({
  multiline,
  label,
  helpText,
  errorText,
  className,
  ...props
}) {
  const hasError = Boolean(errorText)
  return (
    <label className={["block", className].join(" ")}>
      {label && <div className="font-semibold">{label}</div>}
      {helpText && (
        <div className="text-xs tracking-wide text-dark-gray">{helpText}</div>
      )}
      {!multiline && (
        <input
          type="text"
          {...props}
          className={[
            "w-full h-10 px-3 mt-1 text-base border focus:border-black rounded outline-none",
            !hasError ? "border-mid-gray" : "border-error"
          ].join(" ")}
        />
      )}
      {multiline && (
        <textarea
          rows="8"
          {...props}
          className={[
            "w-full block px-3 py-2 mt-1 text-base border focus:border-black rounded outline-none",
            !hasError ? "border-mid-gray" : "border-error"
          ].join(" ")}
        />
      )}
      {hasError && (
        <div className="mt-1 text-xs tracking-wide text-error">{errorText}</div>
      )}
    </label>
  )
}
