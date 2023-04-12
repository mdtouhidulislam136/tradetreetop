import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductScreen from "./screens/ProductScreen";
import Cart from "./redux/slices/cart";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/products" element={<ProductScreen />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </main>
      </Router>
    </ChakraProvider>
  );
}

export default App;
