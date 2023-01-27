import logo from "./logo.svg";

import "./index.css";
import "./App.css";
import { Header } from "./components";
import MainContainer from "./components/MainContainer";
import CreateContainer from "./components/CreateContainer";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./Context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { useEffect } from "react";
import { actionType } from "./Context/reducer";

function App() {

  const [{}, dispatch] = useStateValue();

  const fetchData = async() =>{
    await getAllFoodItems().then(data =>{
      dispatch({
        type:actionType.SET_FOOD_ITEMS,
        foodItems: data,
      })
    })
  }
  useEffect(()=>{fetchData()}, [])

  return (
    <AnimatePresence exitBeforeEnter>
      
      <div className="App w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="mt-16 md:mt-24 p-8 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
