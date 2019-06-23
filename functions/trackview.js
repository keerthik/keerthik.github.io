exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  callback(null, {
    statusCode: 200,
    body: `{'headers':${event.headers.toString()}}`
  });
};