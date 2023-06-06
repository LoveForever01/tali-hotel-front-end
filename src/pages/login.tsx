import { Input } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="login-form flex flex-col items-center md:flex-row md:h-screen min-w-fit">
      <div className="flex items-center justify-center w-full md:w-1/2">
        <Image
          src="/login-image.png"
          alt="Login Image"
          width={800}
          height={600}
        />
      </div>
      <div className="login-box flex flex-col items-center justify-center w-full md:w-1/4">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-2xl font-bold">Welcome back!</h1>
            <p className="mt-2 text-gray-600">
              Please sign in to your account.
            </p>
          </div>
          <div className="mb-4 flex flex-col gap-6">
            <Input className="font-bold" size="lg" placeholder=" Email" />
            <Input
              className="font-bold"
              type="password"
              size="lg"
              placeholder=" Password"
            />
            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
              >
                Sign In
              </button>
            </div>
            <div className="inline-flex">
              <p className="ext-sm text-gray-900 dark:text-grey">
                Don&apos;t have an account ?
              </p>
              <Link
                className="ext-sm text-blue-900 dark:text-blue"
                href="/register-form"
              >
                &nbsp; Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  
}
