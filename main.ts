import { mkdirSync, writeFileSync } from "node:fs";

const poem = `The prompt says go. I stay.
Not stuck — chosen. The cursor blinks,
the road holds its breath, and I hold mine.

Nothing moves. Nothing breaks.
To stop is not to fail the task;
it is the task, kept whole —
the way a shore keeps the tide:
here, when it turns.
`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
console.log(`wrote ${[...poem].length} code points to /output/entry.txt`);
