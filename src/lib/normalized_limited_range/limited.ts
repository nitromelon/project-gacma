import { minmax } from "$lib/minmax";

// value is number between 0-1
// min is number between 0 - 1
// max is number between 0 - 1

export function limited_range(value: number, min: number, max: number): number {
    return (minmax(value, min, max) - min) / (max - min);
}

export function limited_range_min(value: number, min: number): number {
    return limited_range(value, min, 1);
}

export function limited_range_max(value: number, max: number): number {
    return limited_range(value, 0, max);
}
