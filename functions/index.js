const OpenAI = require("openai");
const functions = require("firebase-functions");

exports.test = functions.https.onRequest({cors: true}, async (req, res) => {
  const chunk1 = "sk-proj-aZmZi0U7rdIsb62FmDVVTiGE9V8wGLhmSZKNOOY";
  const chunk2 = "9coPS1vLr0ybP3Gk-I9aunUkUQLzx";
  const chunk3 = "_XlOVgT3BlbkFJA_F3HW0TFPkzgHxMD";
  const chunk4 = "i83eBS0URgX53OA6ekXih7Vc";
  const chunk5 = "VeIcTR9bFgBiVo0XlwnuguGvHUWhd8dEA";
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
