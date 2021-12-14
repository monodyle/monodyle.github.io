import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"

export type FontOptions = "monospace" | "serif" | "sans"
export interface Settings {
  font: FontOptions
  size: number
}

export interface ContextProps {
  settings: Settings
  save: (settings: Settings) => void
}

const defaultSettings: Settings = {
  font: "monospace",
  size: 18,
}

const getInitSettings = (): Settings => {
  let settings = { ...defaultSettings, ready: true }
  const storedSettings = localStorage.getItem("settings")
  if (storedSettings) settings = JSON.parse(storedSettings)

  return settings
}

const settingsContext = createContext<ContextProps>(null as any)

const useProvideSettings = () => {
  const [settings, setSettings] = useState<Settings>(defaultSettings)
  useEffect(() => {
    setSettings(getInitSettings())
  }, [])

  const save = (values: Settings) => {
    setSettings(values)
    localStorage.setItem("settings", String(values))
  }

  return { settings, save }
}

const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const settings = useProvideSettings()
  return (
    <settingsContext.Provider value={settings}>
      {children}
    </settingsContext.Provider>
  )
}

const useSettings = () => {
  const context = useContext(settingsContext)
  if (context === undefined) {
    throw new Error("useSettings must be used within SettingsProvider")
  }
  return context
}

export { SettingsProvider, useSettings }
