export const GET = () =>
  new Response(
    JSON.stringify({
      data: "hello, there!",
    })
  );
