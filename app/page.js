"use client";
import Header from "@/components/Header";
import Navbar from "../components/Navbar";
import About from "@/components/About";
import Work from "@/components/Work";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode, setisDarkMode] = useState(true);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme:dark)").matches)
    ) {
      setisDarkMode(true);
    } else {
      setisDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);
  return (
    <>
      <Navbar isDarkMode={isDarkMode} setisDarkMode={setisDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contacts isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
