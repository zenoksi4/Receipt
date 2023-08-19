import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import ReceiptItem from "../ReceiptItem";
import styles from "./styles.module.css";
import { closeReceipt } from "../../store/receipt/receiptSlice";

function ReceiptContainer() {
  const { receipt } = useSelector((state) => state.receipt);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const onCloseReceipt = () => {
    dispatch(closeReceipt(receipt.id));
  };

  return (
    <div className={styles.receiptContainer}>
      <div className={styles.receiptItemsContainer}>
        <div className={styles.receiptTitles}>
          <div>Найменування</div>
          <div>Кількість</div>
          <div>Вартість</div>
        </div>

        {receipt.productsInReceipt &&
          receipt.productsInReceipt.map((productInReceipt) => {
            let product = products.find(
              (product) => product.id === productInReceipt.ProductId
            );
            return (
              productInReceipt && (
                <ReceiptItem
                  title={product.name}
                  quantity={productInReceipt.quantity}
                  price={productInReceipt.price}
                  productId={productInReceipt.ProductId}
                  receiptId={receipt.id}
                />
              )
            );
          })}
      </div>

      <div className={styles.receiptFooter}>
        <div>До сплати: {receipt.total.toFixed(2)}₴</div>
        {receipt.closed && (
          <span>
            Чек закритий: {new Date(receipt.closed).toISOString().split("T")[0]}
          </span>
        )}
        <Button
          className={`${styles.receiptButton}`}
          disabled={!receipt.total}
          onClick={onCloseReceipt}
        >
          Сплатити
        </Button>
      </div>
    </div>
  );
}

export default ReceiptContainer;
