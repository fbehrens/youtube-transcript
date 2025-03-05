import { YoutubeTranscript } from "../src/index.ts";
console.log(await YoutubeTranscript.fetchTranscript(Deno.args[0]));
