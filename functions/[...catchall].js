export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  const response = await fetch(url.toString(), request);

  if (response.status === 404 && env.KV) {
    const key = `404_${Date.now()}`;
    const value = JSON.stringify({
      url: url.href,
      timestamp: new Date().toISOString(),
    });
    await env.KV.put(key, value);
    console.log("Logged 404:", url.href);
  }

  return response;
}
