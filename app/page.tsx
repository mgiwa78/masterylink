import Image from "next/image";
import styles from "./page.module.css";
import Loader from "@/app/Loader";
import Header from "@/components/Header";
import Body from "@/components/Body";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}
