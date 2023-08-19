import styles from "./styles.module.css";

function Button({ className, children, disabled, onClick = () => {} }) {
  return (
    <button
      disabled={disabled}
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
