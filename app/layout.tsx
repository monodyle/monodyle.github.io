import "./globals.css"
import NavigationBar from "./navbar"

export const metadata = {
  title: "monody",
  description: "random guys from internet",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavigationBar />
        <main>{children}</main>
      </body>
    </html>
  )
}
