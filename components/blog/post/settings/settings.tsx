import { Popover } from "@headlessui/react"
import { FontOptions, ContextProps, useSettings } from "./context"
import s from "./settings.module.css"
import { Fragment } from "react"

const fontOptions: { value: FontOptions; label: string }[] = [
  { value: "serif", label: "Serif" },
  { value: "sans", label: "Sans" },
  { value: "monospace", label: "Mono" },
]

const FontSetting = (props: ContextProps) => (
  <Fragment>
    <label className={s.label}>Font</label>
    <div className={s.buttonGroup}>
      {fontOptions.map((option) => (
        <button
          key={option.value}
          className={[
            s.option,
            props.settings.font === option.value ? s.active : "",
          ].join(" ")}
          onClick={() =>
            props.save({ ...props.settings, font: option.value })
          }
          style={{ fontFamily: `var(--${option.value})` }}
        >
          {option.label}
        </button>
      ))}
    </div>
    <div className={s.space} />
  </Fragment>
)

const SizeSetting = (props: ContextProps) => (
  <Fragment>
    <label className={s.label}>Size</label>
    <div className={s.buttonGroup}>
      <button
        className={s.option}
        disabled={props.settings.size <= 14}
        onClick={() =>
          props.save({
            ...props.settings,
            size: props.settings.size - 2,
          })
        }
      >
        A-
      </button>
      <div className={s.option}>{props.settings.size}</div>
      <button
        className={s.option}
        disabled={props.settings.size >= 24}
        onClick={() =>
          props.save({
            ...props.settings,
            size: props.settings.size + 2,
          })
        }
      >
        A+
      </button>
    </div>
  </Fragment>
)

export const PostSettings = () => {
  const { settings, save: saveSettings } = useSettings()

  return (
    <Popover className={s.container}>
      <Popover.Button
        className={s.button}
        title="Settings"
        aria-label="Settings"
      >
        Âa
      </Popover.Button>
      <Popover.Panel className={s.panel}>
        <FontSetting settings={settings} save={saveSettings} />
        <SizeSetting settings={settings} save={saveSettings} />
      </Popover.Panel>
    </Popover>
  )
}
