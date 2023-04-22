import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import SingleProductScreen from "./screens/SingleProductScreen";
import  Footer  from "./components/Footer";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/products" element={<ProductScreen />}></Route>
            <Route
              path="/product/:id"
              element={<SingleProductScreen />}
            ></Route>
            {/* <Route
              path="/product/:id"
              element={<SingleProductScreen />}
            ></Route> */}
            <Route path="/cart" element={<CartScreen />}></Route>
          </Routes>
        </main>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
