import {Routes, Route} from "react-router-dom";
import itemlistcontainer from "./components/itemlistcontainer";
import itemdetailcontainer from "./components/itemdetailcontainer";
import navbar from "./components/navbar";

function App() {
  return (
    <div>
      <navbar />

      <Routes>
        <Route path="/" element={<itemlistcontainer/>} />
        <Route  path="/category/:categoryId"element={ <itemlistcontainer/>}/>
        <Route path="/item/:id" element={<itemdetailcontainer />} /> 
      </Routes>
    </div>
  );
}
export default App
