import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [hasSearched, setHasSearched] = React.useState(false);
  const [useDarkTheme, setUseDarkTheme] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: "Carver",
    email: "example-email.com",
    _id: "12345",
  });
  const [currentRoute, setCurrentRoute] = React.useState("Home");

  const onSearch = (evt) => {
    evt.preventDefault();
    setHasSearched(true);
    //Search with API
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <Header
        isLoggedIn={isLoggedIn}
        useDarkTheme={useDarkTheme}
        activeTab={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              isLoggedIn={isLoggedIn}
              hasSearched={hasSearched}
              currentRoute={currentRoute}
              onSearch={onSearch}
            />
          }
        />
        <Route
          path="/saved-news"
          element={
            <SavedNews isLoggedIn={isLoggedIn} currentRoute={currentRoute} />
          }
        />
      </Routes>
      <Footer />
    </CurrentUserContext.Provider>
  );
}

export default App;
