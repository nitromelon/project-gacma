// value is number between 0 - 1
// min is any number
// max is any number

export function normalized_range(value: number, min: number, max: number): number {
    return min + (max - min) * value;
}
