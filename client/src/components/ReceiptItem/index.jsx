import { useDispatch } from "react-redux";
import styles from "./styles.module.css";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { changeQuantity } from "../../store/receipt/receiptSlice";

function ReceiptItem({ title, quantity, price, productId, receiptId }) {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(
      changeQuantity({
        productId,
        receiptId,
        action: "add",
        quantity: 1,
      })
    );
  };
  const decrement = () => {
    dispatch(
      changeQuantity({
        productId,
        receiptId,
        action: quantity === 1 ? "delete" : "remove",
        quantity: quantity === 1 ? 0 : 1,
      })
    );
  };

  const deleteProduct = () => {
    dispatch(
      changeQuantity({
        productId,
        receiptId,
        action: "delete",
        quantity: 0,
      })
    );
  };

  return (
    <div className={styles.receiptItem}>
      <div className={styles.itemTitle}>{title}</div>
      <div className={styles.itemQuantity}>
        <AiOutlinePlus className={styles.icons} onClick={increment} />
        {quantity}
        <AiOutlineMinus className={styles.icons} onClick={decrement} />
      </div>
      <div className={styles.itemPrice}>{price}₴</div>
      <AiOutlineClose className={styles.icons} onClick={deleteProduct} />
    </div>
  );
}

export default ReceiptItem;
