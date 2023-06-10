import {
  Button,
  Card,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react";

import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";


// async function submit(
//   email: string,
//   firstName: string,
//   lastName: string,
//   password: string
// ) {
//   try {
//     const res = await fetch("http://localhost:1802/api/users/create-user", {
//       method: "POST",
//       body: JSON.({
//         email: email,
//         first_name: firstName,
//         last_name: lastName,
//         password: password,
//       }),
//     });
//     return res;
//   } catch (error) {
//     throw new Error("Failed to fetch data");
//   }

//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   // Recommendation: handle errors
// }

export default function Register() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [isSubmit, setIsSubmit] = useState(false);
  const [isEmptyFirstName, setIsEmptyFirstName] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsSubmit(true);
    setIsEmptyFirstName(firstName === '');


    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        first_name: firstName,
        last_name: lastName,
        password: password,
        phone: phone,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
    });

    const date = await response.json();
    console.log(date);

  };

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    setFirstName(e.target.value);
    setIsEmptyFirstName(value === '');
  };

  console.log(isSubmit);
  console.log(isEmptyFirstName);

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
              className={isSubmit && firstName === "" ? "error-input" : "input-form"}
              type="name"
              size="lg"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => handleInputChange(e)}
              // required
              minLength={4}
              maxLength={20}
            />

            {isSubmit && firstName === '' && <p className="error-text" >Vui lòng nhập giá trị!</p>}

            <Input
              className={isSubmit && lastName === "" ? "error-input" : "input-form"}
              type="name"
              size="lg"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              minLength={2}
              maxLength={20}
            />

            {isSubmit && lastName === '' && <p className="error-text" >Vui lòng nhập giá trị!</p>}

            <Input
              className={isSubmit && email === "" ? "error-input" : "input-form"}
              type="email"
              size="lg"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              minLength={4}
              maxLength={20}
            />
            {isSubmit && email === '' && <p className="error-text" >Vui lòng nhập giá trị!</p>}

            <Input
              className={isSubmit && phone === "" ? "error-input" : "input-form"}
              size="lg"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              minLength={10}
              maxLength={11}
            />
            {isSubmit && phone === '' && <p className="error-text" >Vui lòng nhập giá trị!</p>}


            <Input
              className={isSubmit && password === "" ? "error-input" : "input-form"}
              type="password"
              size="lg"
              placeholder="Password"
              value={password}
              pattern="[a-z0-9]{1,15}"
              onChange={(e) => setPassword(e.target.value)}
              minLength={4}
              maxLength={20}
            />
            {isSubmit && password === '' && <p className="error-text" >Vui lòng nhập giá trị!</p>}



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
                onClick={(e) => handleSubmit(e)}
              >
                Register
              </button>
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
