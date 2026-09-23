import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import HeroSection from "./components/HeroSection";
import "./App.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
    <Navbar/>
      <HeroSection />,
      <About />
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
    </>
  );
}
