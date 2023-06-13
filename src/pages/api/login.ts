// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios, { Axios } from "axios";
import { log } from "console";
import type { NextApiRequest, NextApiResponse } from "next";
import { Readable } from "stream";
import { json } from "stream/consumers";

type User = {
  username?: string;
  password?: string;
};

export const config = {
  runtime: "edge",
};

export default async function handler(request: Request, response: Response) {
  const data: User = await request.json();

  response = await fetch("http://localhost:1802/api/auth/signin", {
    method: request.method,
    body: JSON.stringify(data),
    headers: new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
    }),
  });
  return response;
}
