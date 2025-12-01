"use client"

import { useEffect } from "react"
import React from "react"


export const AxeProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      import("@axe-core/react").then(async axe => {
        const ReactDOM = await import("react-dom")
        axe.default(React, ReactDOM, 1000)
      })
    }
  }, [])

  return <>{children}</>
}
