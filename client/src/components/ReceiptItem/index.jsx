import styles from './styles.module.css'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";


function ReceiptItem({title, quantity, price}) {
    return (
        <div className={styles.receiptItem}>
          <div className={styles.itemTitle}>{title}</div>
          <div className={styles.itemQuantity}>
            <AiOutlinePlus className={styles.icons}/>
            {quantity}
            <AiOutlineMinus className={styles.icons}/>
          </div>
          <div className={styles.itemPrice}>{price}₴</div>
          <AiOutlineClose className={styles.icons}/>
        </div>
    );
  }

export default ReceiptItem;