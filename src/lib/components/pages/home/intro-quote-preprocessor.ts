// ! DO NOT INCLUDE THIS FILE IN PROJECT. THIS IS SEPARATE PROGRAM.
// ? pnpm dlx ts-node .\intro-quote-preprocessor.ts
type Final = [string, boolean][];

const quote: [string, string] = ["It's not about the destination, it's about the ", "journey."];
let final: Final = quote[0].split("").map((value) => [value, false]);

final = final.concat(quote[1].split("").map((value) => [value, true]));

console.log(`const typewritter_template = ${JSON.stringify(final)};`);
console.log(`const typewritter_template_length = ${final.length}`);
