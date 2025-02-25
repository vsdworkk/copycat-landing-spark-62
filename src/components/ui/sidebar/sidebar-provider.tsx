import * as React from "react"
import { SidebarContext } from "./sidebar-context"
import { useIsMobile } from "@/hooks/use-mobile"

interface SidebarProviderProps {
  children: React.ReactNode
}

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [state, setState] = React.useState<"expanded" | "collapsed">("expanded")
  const [open, setOpen] = React.useState(false)
  const [openMobile, setOpenMobile] = React.useState(false)
  const isMobile = useIsMobile()

  const toggleSidebar = React.useCallback(() => {
    setState((prevState) => (prevState === "collapsed" ? "expanded" : "collapsed"))
  }, [])

  const value = React.useMemo(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, isMobile, openMobile, toggleSidebar]
  )

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  )
}