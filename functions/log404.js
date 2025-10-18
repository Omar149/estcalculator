export async function onRequestPost(context) {
  const { request, env } = context;

  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const data = await request.json();
  const key = `404_${Date.now()}`;
  await env.KV.put(key, JSON.stringify(data));

  return new Response("Logged", { status: 200 });
}
