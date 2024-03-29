import "@/app/globals.css"

import { siteConfig } from "@/config/site"
import { inter } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import Footerlessons from "@/components/Footerlessons"
import mobileFooter from "@/components/mobilefooter"


//  Metadata
export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    favicon: "/favicon.ico",
    icon: "/favicon.ico",
  },
  image: '/homepage.png',
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    image: '/homepage.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" className="scroll-smooth">
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            inter.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
            </div>
            <TailwindIndicator />
            <Footerlessons/>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}