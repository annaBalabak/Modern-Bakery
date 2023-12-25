import React, { memo, useMemo } from "react";
import styles from "./Button.module.css";

const Button = memo(
  ({
    label,
    variant = "primary",
    type = "button",
    icon: Icon,
    onClick,
    disabled = false,
  }) => {
    const buttonClasses = useMemo(() => {
      const classes = [styles.button, styles[variant]];
      return classes.join(" ");
    }, [variant]);

    return (
      <button
        className={buttonClasses}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        <div className={styles.btnContainer}>
          <span className={styles.label}>{label}</span>
          <span className={styles.icon}>
            {Icon && <Icon className={styles.iconSvg} />}
          </span>
        </div>
      </button>
    );
  }
);

export default Button;
