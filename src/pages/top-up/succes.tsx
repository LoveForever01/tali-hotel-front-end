import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

export default function Success() {
  return (
    <>
      <div
        className="px-4 py-3 leading-normal text-green-700 bg-green-100 rounded-lg"
        role="alert"
      >
        <p className="font-bold">You are the visitor 1000!</p>
        <p>A simple alert with text and header. Check it out!</p>
      </div>
    </>
  );
}
