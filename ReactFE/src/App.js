import "./App.css";
import { React, useState } from "react";
import { Home } from "./Home";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GetSearchData } from "./Components/GetSearchData";
import MovieDetails from "./Components/MovieDetails";
import WatchList from "./Components/WatchList"
import { Provider } from 'react-redux';
import store from './redux/store';



function App() {
  

  const [currentForm, setCurrentForm] = useState('login');
  const [query, setQuery] = useState();

  const toggleForm = (forName) => {
    setCurrentForm(forName);
  }
  return (
    <div className="App">
      {
        // currentForm == "login" ?<Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>  
        <BrowserRouter>
          <Routes>
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/" exact element={<Home setQuery={setQuery} />} />
          </Routes>


        </BrowserRouter>
      }
    </div>
    // <Provider store={store}>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Home setQuery={setQuery} />} />
    //       <Route path="/search" element={<GetSearchData query={query} />} />
    //       <Route path="/details/:movieId" element={<MovieDetails />} />
    //       <Route path="watchList/:movieId" element={<WatchList query={query} />} />

    //     </Routes>
    //   </BrowserRouter></Provider>


  )
}

export default App;