import styles from "./styles.module.css";

function ProductListItem({ title, price, onClick }) {
  return (
    <div className={styles.listItem} onClick={onClick}>
      <div className={styles.itemTitle}>{title}</div>
      <div className={styles.itemPrice}>{price}₴</div>
    </div>
  );
}

export default ProductListItem;
