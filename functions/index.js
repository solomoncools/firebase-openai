const OpenAI = require("openai");
const functions = require("firebase-functions");

exports.text = functions.https.onRequest({cors: true}, async (req, res) => {
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
    model: "chatgpt-4o-latest",
    messages: [{role: "user", content: query}],
    stream: true,
    temperature: 0.7,
    top_p: 1.0,
    frequency_penalty: 0.1,
    presence_penalty: 0.2,
  });
  const responses = [];
  for await (const chunk of stream) {
    responses.push(chunk);
  }
  return res.json({responses});
});

exports.image = functions.https.onRequest({cors: true}, async (req, res) => {
  const chunk1 = "sk-proj-aZmZi0U7rdIsb62FmDVVTiGE9V8wGLhmSZKNOOY";
  const chunk2 = "9coPS1vLr0ybP3Gk-I9aunUkUQLzx";
  const chunk3 = "_XlOVgT3BlbkFJA_F3HW0TFPkzgHxMD";
  const chunk4 = "i83eBS0URgX53OA6ekXih7Vc";
  const chunk5 = "VeIcTR9bFgBiVo0XlwnuguGvHUWhd8dEA";
  const openai = new OpenAI({
    apiKey: chunk1+chunk2+chunk3+chunk4+chunk5,
  });
  const query = decodeURI(req.query.prompt);
  const stream = await openai.images.generate({
    model: "dall-e-3",
    prompt: query,
    n: 1,
    size: "1024x1024",
    response_format: "b64_json",
  });
  const response = stream.data[0].b64_json;
  return res.json({response});
});
