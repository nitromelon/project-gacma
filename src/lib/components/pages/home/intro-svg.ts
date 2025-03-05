// ! DO NOT INCLUDE THIS FILE IN PROJECT. THIS IS SEPARATE PROGRAM.
// ? pnpm dlx ts-node .\intro-svg.ts

function transform_array(arr: number[]) {
    const result = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        const currentValue = arr[i];
        sum += currentValue;
        result.push(sum);
    }

    return result.map((value) => value);
}

// const START_EFFECT = 0.25; // 0.5 / 1
// const END_EFFECT = 0.75;

// const START_EFFECT_VALUE = 0;
// const END_EFFECT_VALUE = 1;

const M = 47.567359924316406;
const I = 5.928736686706543;
const N = 11.583383560180664;

const H1 = 0.42154598236083984;
const H2 = 0.3195093870162964;
const H3 = 4.080927848815918;
const H4 = 22.963605880737305;

const DOT_I = 0.72566157579422;

const T1 = 1.0439674854278564;
const T2 = 13.648391723632812;
const T3 = 0.7330931425094604;
const T4 = 15.45515251159668;

const U = 9.615026473999023;

const DS_U = 1.1317485;

const ALL_WORDS = [M, I, N, H1, H2, H3, H4, DOT_I, T1, T2, T3, T4, U, DS_U];
const variable = [
    "m",
    "i",
    "n",
    "h1",
    "h2",
    "h3",
    "h4",
    "dot_i",
    "t1",
    "t2",
    "t3",
    "t4",
    "u",
    "ds",
].map((value) => `${value}_progress`);

const ALL_PROCESSED_WORDS: [number[], number] = [
    ALL_WORDS,
    ALL_WORDS.reduce((prev, cur) => prev + cur),
];

const ALL_NORMALIZED_WORDS = ALL_PROCESSED_WORDS[0].map((value) => value / ALL_PROCESSED_WORDS[1]);
const TIMELINE = transform_array(ALL_NORMALIZED_WORDS);
TIMELINE.pop();
TIMELINE.push(1);

function map_funtion_name(index: number): (value: string) => string {
    if (index === 0) {
        return (value) => {
            return `Math.min(${value}, ${TIMELINE[index]}) * -${1 / TIMELINE[index]}`;
        };
    }

    const difference = TIMELINE[index] - TIMELINE[index - 1];
    const mul_by_what = 1 / difference;

    return (value) => {
        return `(minmax(${value}, ${TIMELINE[index - 1]}, ${TIMELINE[index]}) - ${TIMELINE[index - 1]}) * -${mul_by_what}`;
    };
}

for (let i = 0; i < TIMELINE.length; i++) {
    console.log(`\n${variable[i]}`);
    console.log(`* ${map_funtion_name(i)("normalized_progress")}`);
}
