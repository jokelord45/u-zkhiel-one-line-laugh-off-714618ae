// One-Line Laugh-Off entry — writes exactly one funny line to /output/entry.txt.
// Node 22 stdlib only. No deps, no network, no secrets.
//
// Revision pass (draft 2): the first draft used one long clause joined by a
// semicolon ("I asked Alexa to play something relaxing; she played my bank
// statement."). It rambled. This draft splits it into two short sentences
// and trims "to play something" to "for relaxing music": the setup lands,
// then the punch ("she played my bank statement") hits on its own beat.
// Shorter, colder, and the incongruity — a bank statement as music —
// does all the work with no extra words.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I asked Alexa for relaxing music. She played my bank statement.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
