import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import SignInPopup from "../SignInPopup/SignInPopup";
import SignUpPopup from "../SignUpPopup/SignUpPopup";
import SignUpSuccessPopup from "../SignUpSuccessPopup/SignUpSuccessPopup";
import HeaderPopup from "../HeaderPopup/HeaderPopup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [isSearching, setIsSearching] = React.useState(false);
  const [hasSearched, setHasSearched] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({
    name: "Carver",
    email: "example-email.com",
    _id: "12345",
  });
  const [currentRoute, setCurrentRoute] = React.useState("Saved");
  const [activeModal, setActiveModal] = React.useState("");

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleOpenModal = (modal) => {
    setActiveModal(modal);
  };

  const onSearch = (evt) => {
    evt.preventDefault();
    setHasSearched(true);
    //Search with API
  };

  const handleSignIn = (evt) => {
    evt.preventDefault();
    setIsLoggedIn(true);
    handleCloseModal();
  };

  const handleLogOut = (evt) => {
    evt.preventDefault();
    setIsLoggedIn(false);
  };

  const handleNavigateSaved = (evt) => {
    setCurrentRoute("Saved");
  };

  React.useEffect(() => {
    if (activeModal === "") {
      return;
    }

    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        handleCloseModal();
      }
    };

    const handleClickClose = (evt) => {
      if (
        evt.target.classList.contains("modal") ||
        evt.target.classList.contains("modal__close")
      ) {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("click", handleClickClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("click", handleClickClose);
    };
  }, [activeModal]);

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <Header
        isLoggedIn={isLoggedIn}
        currentRoute={currentRoute}
        activeTab={currentRoute}
        setCurrentRoute={setCurrentRoute}
        activeModal={activeModal}
        openModal={handleOpenModal}
        handleLogOut={handleLogOut}
        handleNavigateSaved={handleNavigateSaved}
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
              isSearching={isSearching}
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
      <SignUpSuccessPopup activeModal={activeModal} />
      <SignInPopup
        activeModal={activeModal}
        swapModal={() => {
          handleOpenModal("sign-up");
        }}
        handleSignIn={handleSignIn}
      />
      <SignUpPopup
        activeModal={activeModal}
        swapModal={() => {
          handleOpenModal("sign-in");
        }}
      />
      <HeaderPopup activeModal={activeModal} openModal={handleOpenModal} />
    </CurrentUserContext.Provider>
  );
}

export default App;
