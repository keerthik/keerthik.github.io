exports.handler = async (event, context) => {
  const statusCode = 200;
  const headers = {
    "Access-Control-Allow-origin" : "*",
    "Access-Control-Allow-Headers": "Content-Type"
  };
  if (event.httpMethod !== "POST") {
    return { 
      statusCode,
      headers,
      body: "Waiting for POST"
    };
  }
  console.log(JSON.stringify(event.headers));
  return {
    statusCode,
    headers,
    body: JSON.stringify(event.headers)
  };
};