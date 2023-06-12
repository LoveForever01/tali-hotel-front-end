import { getCookie } from "cookies-next";
import Link from "next/link";

export default function PersonalAvatar() {
  return getCookie("jwt_token") == null ? (
    <>
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
    </>
  ) : (
    <>
      <img
        className="w-10 h-10 rounded-full"
        src="/tali-hotel-logo.png"
        alt="Rounded avatar"
        // onClick={() => handleClickAvatar(1)
        // }
      />
    </>
  );
}
