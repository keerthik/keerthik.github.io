exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {"Access-Control-Allow-Origin": "*"},
    body: "Hello, Sandbox"
  };
};