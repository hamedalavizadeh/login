import React from "react"
import styles from "./Checkbox.module.scss"
import { CheckIcon } from "@/components/icons/Icons"

interface CheckboxProps {
  label: string
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox = ({ label, checked, onChange }: CheckboxProps) => (
  <label className={styles.checkboxContainer}>
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className={styles.hiddenCheckbox}
    />
    <span className={styles.customCheckbox}>{checked && <CheckIcon />}</span>
    <span className={styles.labelText}>{label}</span>
  </label>
)
