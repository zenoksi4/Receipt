import ContentWrapper from "./components/ContentWrapper";
import ProductsList from "./components/ProductsList";
import ReceiptContainer from "./components/ReceiptContainer";

function App() {
  return (
    <ContentWrapper>
      <ProductsList/>
      <ReceiptContainer/>
    </ContentWrapper>
  );
}

export default App;
