import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import App from "./components/App";
import getId from "./utils/getId";

const initialState = {
  dogs: [
    {
      id: getId(),
      image:
        "https://www.thebalanceeveryday.com/thmb/EuDuE_IIKqW3rRA6bcJhosbZoFU=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dog-looking-away-on-beach-542038257-5b71bf6d46e0fb0050d17d17.jpg",
      apparel_name: "Dog Coat",
      apparel_category: "Party Wear",
      price: 34.99,
      // sizes: ["S", "M", "L"],
      stars: 3
    },
    {
      id: getId(),
      image:
        "https://www.thebalanceeveryday.com/thmb/KgKUR3COrnL9kJw2QYzhSzt88X8=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/birds-and-golden-retriever-images-682848332-5b71bf9146e0fb00501f46f0.jpg",
      apparel_name: "Bandanna",
      apparel_category: "Party Wear",
      price: 34.99,
      // sizes: ["S", "M", "L"],
      stars: 3
    },
    {
      id: getId(),
      image:
        "https://www.thebalanceeveryday.com/thmb/BNRlIBWbbqI3EvSfZXLpEjWyYg8=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cute-puppy-534060795-5b71c2c446e0fb002cd5efbf.jpg",
      apparel_name: "Dog Pajama",
      apparel_category: "Party Wear",
      price: 34.99,
      // sizes: ["S", "M", "L"],
      stars: 3
    },
    {
      id: getId(),
      image:
        "https://www.thebalanceeveryday.com/thmb/PMBmtvDwQlLjQgPJEmjePgVDUhs=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/play-with-pets-652783036-5b71c35846e0fb0050d229c5.jpg",
      apparel_name: "Dog Shirt",
      apparel_category: "Casual Wear",
      price: 34.99,
      // sizes: ["S", "M", "L"],
      stars: 3
    },
    {
      id: getId(),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1is9WqqfXflDuxKpwC7pgml5OESzT1u13HQ&usqp=CAU",
      apparel_name: "Dog Coat",
      apparel_category: "Casual wear",
      price: 34.99,
      // sizes: ["S", "M", "L"],
      stars: 3
    },
    {
      id: getId(),
      image:
        "https://lh3.googleusercontent.com/proxy/angQ5hsHF7QXCsH3hfH15XYH_K0s3i2bWgU_0BhLCnEwag_FadSxiPdrva2hdYAvbeRWzVOsMb4cdzFIwvc6-uiTa-MHNbm1bUb0M3kpRej4ZLs5_WPPZeiCwgPYyvTVY6hlpl1drrVsx3aq4xoGEYnBo6M-E22aWLfQxHXE18Rb",
      apparel_name: "Dog Scarf",
      apparel_category: "Casual wear",
      price: 34.99,
      // sizes: ["S", "M", "L"],
      stars: 3
    },
    {
      id: getId(),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ69heHK2q0Xxa7-MP9S7Iw2KMC_fxfqTrZSQ&usqp=CAU",
      apparel_name: "Dog Hat",
      apparel_category: "Casual wear",
      price: 34.99,
      // sizes: ["S", "M", "L"],
      stars: 3
    },
    {
      id: getId(),
      image:
        "https://i.pinimg.com/236x/bd/0f/16/bd0f16c7ea21bdc36e32c823642aa25f.jpg",
      apparel_name: "Dog Sweater",
      apparel_category: "Casual wear",
      price: 34.99,
      // sizes: ["S", "M", "L"],
      stars: 3
    },
    {
      id: getId(),
      image:
        "https://i.pinimg.com/236x/4d/85/cd/4d85cd99d1aba1111d0e64476b1fa735.jpg",
      apparel_name: "Dog Sweater",
      apparel_category: "Casual wear",
      price: 34.99,
      // sizes: ["S", "M", "L"],
      stars: 3
    },
    {
      id: getId(),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRiG_SdXO_vkjwcM-0z4db-JaoSURcsqEwHkQ&usqp=CAU",
      apparel_name: "Dog Muffler",
      apparel_category: "Casual wear",
      price: 34.99,
      // sizes: ["S", "M", "L"],
      stars: 3
    }
  ],
  filter: "All"
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
