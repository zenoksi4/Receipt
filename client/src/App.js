import ContentWrapper from "./components/ContentWrapper";
import ProductsList from "./components/ProductsList";
import ReceiptContainer from "./components/ReceiptContainer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "./store/products/productsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())

  }, [dispatch]);

  return (
    <ContentWrapper>
      <ProductsList/>
      <ReceiptContainer/>
    </ContentWrapper>
  );
}

export default App;
