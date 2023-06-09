import { Input } from "@material-tailwind/react";
import { HttpStatusCode } from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { getCookies, setCookie, deleteCookie } from "cookies-next";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [jwtToken, setJwtToken] = useState("");

  const handleRegister = async () => {
    // Sau khi đăng kí thành công, chuyển hướng đến trang login
    router.push("/");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
    });
    const json = await response.json();
    console.log(json.status);

    if (json.status == HttpStatusCode.Ok) {
      toast.success("Đăng nhập thành công!");

      setTimeout(() => {
        handleRegister();
      }, 100);

      const data = json.data;
      const token = data.jwt_token;
      setJwtToken(token);
      setCookie("jwt_token", token);
    } else {
      toast.warning("Sai số điện thoại hoặc mật khẩu!");
      deleteCookie("jwt_token");
    }
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
            <h1 className="text-2xl font-bold">Welcome back!</h1>
            <p className="mt-2 text-gray-600">
              Please sign in to your account.
            </p>
          </div>
          <div className="mb-4 flex flex-col gap-6">
            <Input
              className="input-form font-bold"
              type="phone"
              size="lg"
              placeholder="Phone"
              minLength={10}
              maxLength={11}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              className="input-form font-bold"
              type="password"
              size="lg"
              placeholder="Password"
              pattern="[a-z0-9]{1,15}"
              minLength={4}
              maxLength={20}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
              <button
                type="submit"
                onClick={handleSubmit}
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
                href="/register"
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
