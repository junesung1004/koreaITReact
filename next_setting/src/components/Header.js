import Link from "next/link";
import "./Header.css";

import logoImg from "@/assets/logo1.png";

import React from "react";
import HeaderBackground from "./HeaderBackground";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <HeaderBackground />
      <header>
        <h1>
          <Link href={"/"}>
            <img src="images/logo.webp" alt="로고" style={{ width: "50px", height: "50px" }} />
          </Link>
        </h1>
        <h1>
          <Link href={"/"}>
            <img src={logoImg.src} alt="로고" style={{ width: "50px", height: "50px" }} />
          </Link>
        </h1>
        <h1>
          <Link href={"/"}>
            <Image src={logoImg} alt="로고" style={{ width: "50px", height: "50px" }}></Image>
          </Link>
        </h1>
        <ul>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/blog"}>blog</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
