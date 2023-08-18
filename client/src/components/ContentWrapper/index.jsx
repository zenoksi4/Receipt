import styles from './styles.module.css'


function ContentWrapper({children}) {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.contentWrapper}>
            {children}

        </div>
      </div>
    );
  }

export default ContentWrapper;