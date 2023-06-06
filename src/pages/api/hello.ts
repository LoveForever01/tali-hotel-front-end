// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios, { Axios } from "axios";
import { log } from "console";
import type { NextApiRequest, NextApiResponse } from "next";
import { Readable } from "stream";
import { json } from "stream/consumers";

type Data = {
  name: string;
};

export const config = {
  runtime: "edge",
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return axios.post("http://localhost:1802/api/users/create-user",req.body, )
  // return fetch("http://localhost:1802/api/users/create-user", {
  //   method: req.method,
  //   body: req.body,
  //   redirect: "manual",
  // });
}
