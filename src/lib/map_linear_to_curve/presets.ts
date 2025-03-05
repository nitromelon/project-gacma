import { cubic_bezier } from ".";

export function fast_cubic_bezier(value: number): [number, number] {
    return cubic_bezier(value, 0, 1, 0, 1);
}
