import { Portal, Transition } from "@headlessui/react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
import { useTheme } from "next-themes"
import { encode } from "qss"
import React from "react"

export default function Organization({ name, logo, url }) {
  const { theme, systemTheme } = useTheme()
  const isDark = theme === "dark" || (theme === "system" && systemTheme === "dark")
  const width = 200
  const height = 125
  const layout = "fixed"
  const params = encode({
    url,
    screenshot: true,
    meta: false,
    embed: "screenshot.url",
    colorScheme: isDark ? "dark" : "light",
    "viewport.isMobile": true,
    "viewport.width": width * 3,
    "viewport.height": height * 3,
  })

  const src = `https://api.microlink.io/?${params}`

  const [isOpen, setIsOpen] = React.useState(false)

  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <>
      {isMounted ? (
        <Portal>
          <div className="hidden">
            <img
              src={src}
              width={width}
              height={height}
            />
          </div>
        </Portal>
      ) : null}

      <HoverCardPrimitive.Root
        openDelay={50}
        onOpenChange={(open) => {
          setIsOpen(open)
        }}
      >
        <HoverCardPrimitive.Trigger href={url} target="_blank">
            <div className="flex flex-row rounded-full border border-gray-400 p-1 w-fitcontent h-10 text-lg font-bold">
                <img className={`${logo ? 'block' : 'hidden'} w-8 h-8 border border-gray-400 rounded-full self-center`} src={logo ?? ''} alt={`${name}'s logo within a circle next to the text with the name of ${name}`} />
                <div className="px-2 font-phantom-sans font-bold">{name}</div>
            </div>
        </HoverCardPrimitive.Trigger>

        <HoverCardPrimitive.Content side="top" align="center" sideOffset={10}>
          <Transition
            show={isOpen}
            appear={true}
            enter="transform transition duration-300 origin-bottom ease-out"
            enterFrom="opacity-0 translate-y-2 scale-0"
            enterTo="opacity-100 translate-y-0 scale-100"
            className="shadow-xl rounded-xl"
          >
            <a
              href={url}
              className="block p-1 bg-white border border-transparent shadow rounded-xl hover:border-red-600"
              style={{ fontSize: 0 }}
            >
              <img
                src={src}
                width={width}
                height={height}
                className="rounded-lg"
              />
            </a>
          </Transition>
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Root>
    </>
  )
}