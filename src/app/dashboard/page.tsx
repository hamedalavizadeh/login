"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import styles from "./dashboard.module.scss"
import { UserIcon } from "@/components/icons/Icons"
import { AuthService } from "@/services/authService"

const DashboardPage = () => {
  const [user, setUser] = useState<{ name: string; phone: string } | null>(null)
  const router = useRouter()

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser()
    if (!currentUser) router.push("/auth")
    else setUser(currentUser)
  }, [])

  const handleLogout = () => {
    AuthService.logout()
    router.push("/auth")
  }

  if (!user) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loader}></div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.dashboardCard}>
        <div className={styles.header}>
          <h1 className={styles.title}>داشبورد</h1>
        </div>

        <div className={styles.welcomeSection}>
          <div className={styles.welcomeIcon}>
            <UserIcon />
          </div>
          <h2 className={styles.welcomeText}>
            <span className={styles.userName}>{user.name}</span> عزیز
          </h2>
          <p className={styles.message}>به پنل مدیریتی خود خوش آمدید</p>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.infoTitle}>شماره تلفن</div>
          <div className={styles.infoValue}>{user.phone}</div>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.infoTitle}>وضعیت حساب</div>
          <div className={styles.infoValue} style={{ color: "#00B69B" }}>
            فعال
          </div>
        </div>

        <button className={styles.logoutButton} onClick={handleLogout}>
          خروج از حساب
        </button>
      </div>
    </div>
  )
}

export default DashboardPage
