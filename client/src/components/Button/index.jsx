import styles from './styles.module.css'

function Button({ 
    className,
    children,
    onClick = () => {},
  }) {
    return (
      <button 
        className={`${styles.button} ${className}`} 
        onClick={onClick} 
      >
        {children}
      </button>
    );
  }
  
export default Button;