import type { Config, Context } from "@netlify/edge-functions";

export default async function handler(req: Request, context: Context) {
  const body = await req.text()
  const reply = body.replace('REPLACE_ME_BLEASE', 'https://unpkg.com/jquery@3.3.1/dist/jquery.min.js')
  return new Response(reply, {
    status: 200,
    headers: { "Content-Type": "text/html" },
  });
}

export const config: Config = {
  path: "/*",
};
