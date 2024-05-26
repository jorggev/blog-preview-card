/* eslint-disable no-unused-vars */
import React from "react";
import Autor from "./components/autor/autor";
import Content from "./components/content/content";
import Image from "./components/blog-image/blogImage";
import './assets/colors/colors.css'
import './assets/fonts/fonts.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <Image />
      <Content />
      <Autor />
    </div>
  )
}

export default App;