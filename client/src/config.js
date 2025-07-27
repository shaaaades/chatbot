import configCreds from "./config.json"
const subDomain = window.location.hostname !== "localhost" ? window.location.hostname.split(".")[0] : "localhost";
let stage = subDomain;

let geminiAiAPI = configCreds[stage].geminiAiAPI;

export default {
  geminiAiAPI
}