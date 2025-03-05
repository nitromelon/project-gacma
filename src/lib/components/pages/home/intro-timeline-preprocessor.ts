// ! DO NOT INCLUDE THIS FILE IN PROJECT. THIS IS SEPARATE PROGRAM.
// ? pnpm dlx ts-node .\intro-timeline-preprocessor.ts

const time = [2024, 2023, 2022, 2020, 2018, 2016, 2009].map((value) => value.toString());

const final_time: number[][] = [];

for (let i = 0; i < 4; i++) {
    const element: number[] = [];
    for (let j = 0; j < time.length; j++) {
        const string = time[j][i];
        element.push(Number(string));
    }
    final_time.push(element);
}

console.log(`const timeline_years = ${JSON.stringify(final_time)};`);
