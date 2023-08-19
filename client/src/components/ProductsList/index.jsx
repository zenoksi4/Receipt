import { useDispatch, useSelector } from "react-redux";
import ProductListItem from "../ProductListItem";
import styles from "./styles.module.css";
import {
  addProductToReceipt,
  createReceipt,
} from "../../store/receipt/receiptSlice";

function ProductsList() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { receipt } = useSelector((state) => state.receipt);

  const addToReceipt = (productId) => {
    const receiptId = receipt.id;
    if (receiptId) {
      let isObjInReceipt = receipt.productsInReceipt.find(
        (product) => product.ProductId === productId
      );
      if (isObjInReceipt) {
        return;
      }
      dispatch(addProductToReceipt({ productId, receiptId }));
    } else {
      dispatch(createReceipt(productId));
    }
  };

  return (
    <div className={styles.listContainer}>
      <h1 className={styles.listTitle}>Товари</h1>
      {products &&
        products.map((product) => (
          <ProductListItem
            title={product.name}
            price={product.price}
            onClick={() => {
              addToReceipt(product.id);
            }}
          />
        ))}
    </div>
  );
}

export default ProductsList;
