import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import App from "./components/App";
// import getId from "./utils/getId";

const initialState = {
  dogs: [
    {
      id: 1, //getId(),
      image:
        "https://www.thebalanceeveryday.com/thmb/EuDuE_IIKqW3rRA6bcJhosbZoFU=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dog-looking-away-on-beach-542038257-5b71bf6d46e0fb0050d17d17.jpg",
      apparel_name: "Dog Coat",
      apparel_category: "Party Wear",
      price: 34.99,
      // sizes: ["S", "M", "L"],
      stars: 3
    },
    {
      id: 2, //getId(),
      image:
        "https://www.thebalanceeveryday.com/thmb/KgKUR3COrnL9kJw2QYzhSzt88X8=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/birds-and-golden-retriever-images-682848332-5b71bf9146e0fb00501f46f0.jpg",
      apparel_name: "Bandanna",
      apparel_category: "Party Wear",
      price: 34.99,
      // sizes: ["S", "M", "L"],
      stars: 3
    },
    {
      id: 3, //getId(),
      image:
        "https://www.thebalanceeveryday.com/thmb/BNRlIBWbbqI3EvSfZXLpEjWyYg8=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cute-puppy-534060795-5b71c2c446e0fb002cd5efbf.jpg",
      apparel_name: "Dog Pajama",
      apparel_category: "Party Wear",
      price: 34.99,
      // sizes: ["S", "M", "L"],
      stars: 3
    },
    {
      id: 4, //getId(),
      image:
        "https://www.thebalanceeveryday.com/thmb/PMBmtvDwQlLjQgPJEmjePgVDUhs=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/play-with-pets-652783036-5b71c35846e0fb0050d229c5.jpg",
      apparel_name: "Dog Shirt",
      apparel_category: "Casual Wear",
      price: 34.99,
      // sizes: ["S", "M", "L"],
      stars: 3
    },
    {
      id: 5, //getId(),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1is9WqqfXflDuxKpwC7pgml5OESzT1u13HQ&usqp=CAU",
      apparel_name: "Dog Coat",
      apparel_category: "Casual wear",
      price: 34.99,
      // sizes: ["S", "M", "L"],
      stars: 3
    },
    {
      id: 6, //getId(),
      image:
        "data:image/jpeg;base64,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",
      apparel_name: "Dog Scarf",
      apparel_category: "Casual wear",
      price: 34.99,
      // sizes: ["S", "M", "L"],
      stars: 3
    },
    {
      id: 7, //getId(),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ69heHK2q0Xxa7-MP9S7Iw2KMC_fxfqTrZSQ&usqp=CAU",
      apparel_name: "Dog Hat",
      apparel_category: "Casual wear",
      price: 34.99,
      // sizes: ["S", "M", "L"],
      stars: 3
    },
    {
      id: 8, //getId(),
      image:
        "https://i.pinimg.com/236x/bd/0f/16/bd0f16c7ea21bdc36e32c823642aa25f.jpg",
      apparel_name: "Dog Sweater",
      apparel_category: "Casual wear",
      price: 34.99,
      // sizes: ["S", "M", "L"],
      stars: 3
    },
    {
      id: 9, //getId(),
      image:
        "https://i.pinimg.com/236x/4d/85/cd/4d85cd99d1aba1111d0e64476b1fa735.jpg",
      apparel_name: "Dog Sweater",
      apparel_category: "Casual wear",
      price: 34.99,
      // sizes: ["S", "M", "L"],
      stars: 3
    },
    {
      id: 10, //getId(),
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
