import React from "react";
import styles from "./Input.module.scss";

interface InputProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
  maxLength?: number;
}

export const Input = ({
  type,
  value,
  onChange,
  placeholder,
  error,
  maxLength,
}: InputProps) => (
  <div className={styles.inputContainer}>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${styles.input} ${error ? styles.error : ""}`}
      maxLength={maxLength}
    />
    {error && <span className={styles.errorMessage}>{error}</span>}
  </div>
);