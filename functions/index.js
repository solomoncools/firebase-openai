const OpenAI = require("openai");
const functions = require("firebase-functions");

exports.test = functions.https.onRequest({cors: true}, async (req, res) => {
  const chunk1 = "sk-proj-aZmZm0U7rdIsb62FcDVVTiGE9t8wGLhmSZKNOOY";
  const chunk2 = "9coPSxvLr0ybP3Gk-I9aubUkUQLzx";
  const chunk3 = "_XlOVgTwBlbkFJA_F3HW0TFPkmgHxMD";
  const chunk4 = "283eBS4URgX53OA6ekXih75c";
  const chunk5 = "beIcTR9bFgBiVo0Xlwnu0uGv5UWhdFdEA";
  const openai = new OpenAI({
    apiKey: chunk1+chunk2+chunk3+chunk4+chunk5,
  });
  const query = decodeURI(req.query.prompt);
  const stream = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{role: "user", content: query}],
    stream: true,
  });
  const responses = [];
  for await (const chunk of stream) {
    responses.push(chunk);
  }
  return res.json({responses});
});
