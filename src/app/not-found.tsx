"use client"

import { AuthService } from "@/services/authService"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"

const notFound = () => {
  const Router = useRouter()

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser()
    if (!currentUser) Router.push("/auth")
  }, [])
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}>
      Not Found Page
    </div>
  )
}

export default notFound
