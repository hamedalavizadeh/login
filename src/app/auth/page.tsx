"use client"

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import styles from "./auth.module.scss"
import { LogoIcon } from "@/components/icons/Icons"
import { AuthService } from "@/services/authService"
import { Input } from "@/components/Input/Input"
import { Checkbox } from "@/components/Checkbox/Checkbox"
import { Button } from "@/components/Button/Button"

const AuthPage = () => {
  const [phone, setPhone] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async () => {
    if (!AuthService.validatePhone(phone)) {
      setError("شماره تلفن معتبر نیست (فرمت صحیح: 09123456789)")
      return
    }

    setLoading(true)
    setError(null)

    try {
      await AuthService.login(phone)
      router.push("/dashboard")
    } catch (err) {
      setError("خطا در ارتباط با سرور")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logoContainer}>
          <LogoIcon />
        </div>
        <h1 className={styles.title}>ورود به حساب کاربری</h1>
        <p className={styles.subtitle}>
          خوش آمدید! لطفاً اطلاعات خود را وارد کنید
        </p>

        <div className={styles.divider} />

        <div>
          <label className={styles.inputLabel}>
            شماره تلفن<span className={styles.star}>*</span>
          </label>
          <Input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="09123456789"
            error={error || undefined}
            maxLength={11}
          />
        </div>

        <Button
          onClick={handleLogin}
          loading={loading}
          disabled={phone.length < 11}>
          ورود
        </Button>
      </div>
    </div>
  )
}

export default AuthPage
