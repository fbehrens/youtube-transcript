import { YoutubeTranscript } from '../src/youtube-transcript';
console.log(await YoutubeTranscript.fetchTranscript(Deno.args[0]));
