import { useSelector } from "react-redux";
import ProductListItem from "../ProductListItem";
import styles from "./styles.module.css";

function ProductsList() {
  const { products } = useSelector((state) => state.products);

  return (
    <div className={styles.listContainer}>
      <h1 className={styles.listTitle}>Товари</h1>
      {products &&
        products.map((product) => (
          <ProductListItem title={product.name} price={product.price} />
        ))}
    </div>
  );
}

export default ProductsList;
