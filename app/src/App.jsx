import {Routes, Route} from "react-router-dom";
import itemlistcontainer from "./components/itemlistcontainer";
import itemdetailcontainer from "./components/itemdetailcontainer";
import navbar from "./components/navbar";
import Cartprovider from "./context/cartprovider";
import Checkout from "./components/checkout";

function App() {
  return (
    <Cartprovider>
      <navbar />

      <Routes>
        <Route path="/" element={<itemlistcontainer/>} />
        <Route  path="/category/:categoryId"element={ <itemlistcontainer/>}/>
        <Route path="/item/:id" element={<itemdetailcontainer />} /> 
        <Route path="/checkout" element={<checkout/>} />
      </Routes>
    </Cartprovider>
  );
}
export default App
