import React, { useState, useEffect, useRef } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  Avatar,
  Collapse,
} from "@material-tailwind/react";
import Link from "next/link";
import { Grid } from "@nextui-org/react";
import { cookies } from "next/dist/client/components/headers";
import { getCookie } from "cookies-next";
import PersonalAvatar from "./avatar";
export default function NavbarHeader() {
  const [openNav, setOpenNav] = React.useState(false);
  const [dropDown, setDropDown] = useState(0);
  const [isHaveToken, setIsHaveToken] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  // const dropdown = useRef(null);

  // useEffect(() => {
  //   // only add the event listener when the dropdown is opened
  //   if (!showDropdown) return;
  //   function handleClick(event) {
  //     if (dropdown.current && !dropdown.current.contains(event.target)) {
  //       setShowDropdown(false);
  //     }
  //   }
  //   window.addEventListener("click", handleClick);
  //   // clean up
  //   return () => window.removeEventListener("click", handleClick);
  // }, [showDropdown]);

  const handleClickAvatar = () => {
    if (dropDown == 1) {
      <>
        <div
          id="dropdownInformation"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>Bonnie Green</div>
            <div className="font-medium truncate">name@flowbite.com</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownInformationButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
          </ul>
          <div className="py-2">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </div>
        </div>
        ;
      </>;
    }
  };
  useEffect(() => {
    getCookie("jwt_token") != null ? setIsHaveToken(1) : setIsHaveToken(0);
  }, []);

  const handleAvatar =
    isHaveToken == 0 ? (
      <div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <Link href="/login">Sign in</Link>
        </button>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <Link href="/register">Sign up</Link>
        </button>
      </div>
    ) : (
      <>
        <button className="w-10 h-10 rounded-full hover:bg-blue-800 focus:ring-4">
          <img
            className="w-10 h-10 rounded-full"
            src="/tali-hotel-logo.png"
            alt="avatar"
            onClick={() => setDropDown(1)}
            onChange={handleClickAvatar}
          />
        </button>
        {/* <button className="w-10 h-10 rounded-full hover:bg-blue-800 focus:ring-4">
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </button> */}
      </>
    );

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="lead"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center hover:text-orange-500">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="lead"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center hover:text-orange-500">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="lead"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center hover:text-orange-500">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="lead"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center hover:text-orange-500">
          Docs
        </a>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-semibold ${handleAvatar}"
      >
        <div>{handleAvatar}</div>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 text-9x">
        <div className="flex items-center justify-between text-blue-gray-900 text-20x">
          <Typography
            as="a"
            href="#"
            className="text-2xl font-bold mr-4 cursor-pointer py-1.5"
          >
            <div className="transform-gpu">
              <img
                className="nav-logo-brand w-full object-center"
                src="/tali-hotel-logo-brand.png"
                alt="logo image"
              />
            </div>
          </Typography>

          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span>Buy Now</span>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </Collapse>
      </Navbar>
      <div className="mx-auto max-w-screen-md py-12">
        <Card className="mb-12 overflow-hidden">
          <img
            alt="nature"
            className="h-[32rem] w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
          />
        </Card>
        <Typography variant="h2" color="blue-gray" className="mb-2">
          What is Material Tailwind
        </Typography>
        <Typography color="gray" className="font-normal">
          Can you help me out? you will get a lot of free exposure doing this
          can my website be in english?. There is too much white space do less
          with more, so that will be a conversation piece can you rework to make
          the pizza look more delicious other agencies charge much lesser can
          you make the blue bluer?. I think we need to start from scratch can my
          website be in english?, yet make it sexy i&apos;ll pay you in a week
          we don&apos;t need to pay upfront i hope you understand can you make
          it stand out more?. Make the font bigger can you help me out? you will
          get a lot of free exposure doing this that&apos;s going to be a chunk
          of change other agencies charge much lesser. Are you busy this
          weekend? I have a new project with a tight deadline that&apos;s going
          to be a chunk of change. There are more projects lined up charge extra
          the next time.
        </Typography>
      </div>
    </>
  );
}
