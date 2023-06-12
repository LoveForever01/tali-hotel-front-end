import {
  Button,
  Card,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react";
import { log } from "console";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import register from "./api/register";
import { HttpStatusCode } from "axios";
import Success from "./top-up/succes";
import Fail from "./top-up/fail";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function Register() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [toDo, setTodo] = useState(0);
  const router = useRouter();

  const handleRegister = async () => {
    // Sau khi đăng kí thành công, chuyển hướng đến trang login
    router.push("/login");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        first_name: firstName,
        last_name: lastName,
        password: password,
        phone: phone,
        role_id: 1,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
    });
    setTodo(response.status);

    // Xử lý đăng kí thành công
    if (toDo == HttpStatusCode.Ok) {
      toast.success("Đăng kí thành công!");
      setTimeout(() => {
        handleRegister();
      }, 2000);
    } else {
      toast.warning("Đăng kí thất bại!");
    }

    return response.status;
  };

  return (
    <div className="login-form flex flex-col items-center md:flex-row md:h-screen min-w-fit">
      <div className="flex items-center justify-center w-full md:w-1/2">
        <Image
          src="/login_files/login-image.png"
          alt="Login Image"
          width={800}
          height={600}
        />
      </div>
      <div className="login-box flex flex-col items-center justify-center w-full md:w-1/4">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-2xl font-bold">Sign Up</h1>
            <p className="mt-2 text-gray-600">
              Please sign in to your account.
            </p>
          </div>
          <div className="mb-4 flex flex-col gap-6">
            <Input
              className="input-form"
              type="name"
              size="lg"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              minLength={4}
              maxLength={20}
            />
            <Input
              className="input-form"
              type="name"
              size="lg"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              minLength={2}
              maxLength={20}
            />
            <Input
              className="input-form"
              type="email"
              size="lg"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              minLength={4}
              maxLength={20}
            />
            <Input
              className="input-form"
              size="lg"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              minLength={10}
              maxLength={11}
            />
            <Input
              className="input-form"
              type="password"
              size="lg"
              placeholder="Password"
              value={password}
              pattern="[a-z0-9]{1,15}"
              onChange={(e) => setPassword(e.target.value)}
              minLength={4}
              maxLength={20}
            />
            <div className="flex items-center items-start mb-4">
              <input
                id="checkbox-1"
                aria-describedby="checkbox-1"
                type="checkbox"
                className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
              />
              <label
                htmlFor="checkbox-1"
                className="text-sm ml-3 font-medium text-gray-900"
              >
                I agree to the{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  terms and conditions
                </a>
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
                onClick={handleSubmit}
              >
                Register
              </button>
              {/* {toDo == HttpStatusCode.Ok && handleRegister } */}
            </div>
            <div className="inline-flex">
              <p className="ext-sm text-gray-900 dark:text-grey">
                Already have an account ?
              </p>
              <Link
                className="ext-sm text-blue-900 dark:text-blue"
                href="/login"
              >
                &nbsp; Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
