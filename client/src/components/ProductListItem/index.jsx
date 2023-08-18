import styles from './styles.module.css'


function ProductListItem({title, price}) {
    return (
        <div className={styles.listItem}>
          <div className={styles.itemTitle}>
            {title}
          </div>
          <div className={styles.itemPrice}>
            {price}₴
          </div>
        </div>
    );
  }

export default ProductListItem;