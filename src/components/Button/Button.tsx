import React from "react"
import styles from "./Button.module.scss"

interface ButtonProps {
  onClick: () => void
  children: React.ReactNode
  loading?: boolean
  disabled?: boolean
}

export const Button = ({
  onClick,
  children,
  loading = false,
  disabled = false,
}: ButtonProps) => (
  <button
    className={styles.button}
    onClick={onClick}
    disabled={disabled || loading}>
    {loading ? <div className={styles.loader}></div> : children}
  </button>
)
