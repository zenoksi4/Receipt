import Button from '../Button';
import ReceiptItem from '../ReceiptItem';
import styles from './styles.module.css'

function ReceiptContainer() {
    return (
      <div className={styles.receiptContainer}>
        <div className={styles.receiptItemsContainer}>
        <div className={styles.receiptTitles}>
          <div>Найменування</div>
          <div>Кількість</div>
          <div>Вартість</div>
        </div>

        <ReceiptItem title='Пельмені "Домашні" АЙС' quantity={2} price={123.5}/>

        
        </div>

        <div className={styles.receiptFooter}>
          <div>
            До сплати: 123.5₴
          </div>
          <Button className={styles.receiptButton}>Сплатити</Button>
        </div>

      </div>
    );
  }

export default ReceiptContainer;