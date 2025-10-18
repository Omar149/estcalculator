export async function onRequest(context) {
  console.log("Function hit!");
  return new Response("Test function is running.");
}
