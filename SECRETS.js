//? It is advisable to use environment variables instead of directly putting secrets in repository file but I have skipped this part as it would become complicated for many.
//? Alternatively you can download the repository instead or forking and upload it from your account and keep it private, in that way, your secrets will not be exposed to the public.

const APP_KEY = "ZENYNmRKLVlvYS12bzBSVGVyZnk6MTpjaQ";
const APP_SECRET = "ULx2-LwI7d7ESm9ONqmnn1FmscW-qt25ocgsuysJAtol23UY0m";
const ACCESS_TOKEN = "YOUR_TWITTER_ACCESS_TOKEN";
const ACCESS_SECRET = "YOUR_TWITTER_ACCESS_SECRET";
const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY";

const SECRETS = {
  APP_KEY,
  APP_SECRET,
  ACCESS_TOKEN,
  ACCESS_SECRET,
  GEMINI_API_KEY,
};

module.exports = SECRETS;
