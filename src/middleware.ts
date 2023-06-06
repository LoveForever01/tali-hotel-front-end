import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, event: NextFetchEvent) {
  event.waitUntil(
    fetch("http://localhost:1802", {
      method: "POST",
      body: JSON.stringify({ pathname: req.nextUrl.pathname }),
    })
  );

  return NextResponse.next();
}
