import { withAccelerate } from "npm:@prisma/extension-accelerate";
import { PrismaClient } from "./generated/client/index.ts";

const prisma = new PrismaClient().$extends(withAccelerate());

async function handler(request: Request) {
  // Ignore /favicon.ico requests:
  const url = new URL(request.url);
  if (url.pathname === "/favicon.ico") {
    return new Response(null, { status: 204 });
  }

  console.log("Request received.");

  const log = await prisma.log.create({
    data: {
      level: "Info",
      message: `${request.method} ${request.url}`,
      meta: {
        headers: JSON.stringify(request.headers),
      },
    },
  });
  const body = JSON.stringify(log, null, 2);
  return new Response(body, {
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

Deno.serve(handler);
