import ProductListItem from '../ProductListItem';
import styles from './styles.module.css'


function ProductsList() {
    return (
      <div className={styles.listContainer}>
        <h1 className={styles.listTitle}>
          Товари
        </h1>

        <ProductListItem title='Пельмені "Домашні" АЙС' price={13.5}/>
        <ProductListItem title='Пельмені "Домашні" АЙС' price={13.5}/>
        <ProductListItem title='Пельмені "Домашні" АЙС' price={13.5}/>
        <ProductListItem title='Пельмені "Домашні" АЙС' price={13.5}/>
        <ProductListItem title='Пельмені "Домашні" АЙС' price={13.5}/>
        <ProductListItem title='Пельмені "Домашні" АЙС' price={13.5}/>
        <ProductListItem title='Пельмені "Домашні" АЙС' price={13.5}/>
        <ProductListItem title='Пельмені "Домашні" АЙС' price={13.5}/>
        <ProductListItem title='Пельмені "Домашні" АЙС' price={13.5}/>
        <ProductListItem title='Пельмені "Домашні" АЙС' price={13.5}/>


      </div>
    );
  }

export default ProductsList;