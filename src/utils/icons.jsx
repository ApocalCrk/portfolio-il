import React from "react";
import uajyImage from "../assets/images/uajy.jpeg";
import mattcomImage from "../assets/images/mattcom.jpeg";
import hackerrankImage from "../assets/images/hackerrank.jpeg";
import garudaImage from "../assets/images/garuda.jpeg";
import baktiImage from "../assets/images/bakti.jpeg";
import smkHasanah from "../assets/images/smk.jpg";

export function UAJY() {
  return <img src={uajyImage} alt="UAJY" />;
}

export function Mattcom() {
  return <img src={mattcomImage} alt="Mattcom" />;
}

export function HackerRank() {
  return <img src={hackerrankImage} alt="HackerRank" />;
}

export function Garuda() {
  return <img src={garudaImage} alt="Garuda" />;
}

export function Bakti() {
  return <img src={baktiImage} alt="Bakti" />;
}

export function SMKHasanah() {
  return <img src={smkHasanah} alt="SMK Hasanah" />;
}
