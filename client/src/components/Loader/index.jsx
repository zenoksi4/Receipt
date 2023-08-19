import styles from './styles.module.css'


function Loader({className}) {
    return (
      <div className={`${styles.spinner} ${className}`}>
        
      </div>
    );
  }
  
export default Loader;