import ContentWrapper from "./components/ContentWrapper";
import ProductsList from "./components/ProductsList";
import ReceiptContainer from "./components/ReceiptContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "./store/products/productsSlice";
import Loader from "./components/Loader";

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <ContentWrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ProductsList />
          <ReceiptContainer />
        </>
      )}
    </ContentWrapper>
  );
}

export default App;
