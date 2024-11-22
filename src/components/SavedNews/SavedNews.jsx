import React from "react";

import "./SavedNews.css";

import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import placeHolderImg from "../../assets/card_placeholder.png";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function SavedNews(props) {
  const { currentUser } = React.useContext(CurrentUserContext);
  return (
    <div className=" page__section saved-news">
      <SavedNewsHeader currentUser={currentUser} />
      <NewsCardList
        isLoggedIn={props.isLoggedIn}
        currentRoute={props.currentRoute}
        cards={[
          {
            img: placeHolderImg,
            title: "Carver has the best Birb",
            date: "November 21, 2024",
            body: "Carver really has the best Birb named Soren, you need to see how cute he is",
            author: "WTWR",
            keyword: "Facts",
            id: "1789",
          },
          {
            img: placeHolderImg,
            title: "Carver has the best Girlfriend Easily",
            date: "November 21, 2024",
            body: "Carver really has the best girlfriend Rachel, she is so amazing and wonderful and honestly just perfect for him. Carver couldn't possibly image a better girlfriend because one just simply couldn't exist. He loves Rachel more than anything else in the entire world",
            author: "WTWR",
            keyword: "The Truth",
            id: "17898",
          },
        ]}
      />
    </div>
  );
}
