import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

export default function Fail() {
  return (
    <>
      <div
        className="mb-4 rounded-lg bg-danger-100 px-6 py-5 text-base text-danger-700"
        role="alert"
      >
        A simple danger alert with
        <a href="#!" className="font-bold text-danger-700">
          an example link
        </a>
        . Give it a click if you like.
      </div>
    </>
  );
}
