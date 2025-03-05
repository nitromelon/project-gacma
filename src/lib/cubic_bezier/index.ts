function get_bezier_point(value: number, a: number, b: number, c: number): number {
    return a * Math.pow(value, 3) + b * Math.pow(value, 2) + c * value;
}

export function cubic_bezier(
    value: number,
    p1x: number,
    p1y: number,
    p2x: number,
    p2y: number,
): [number, number] {
    const cx = 3 * p1x;
    const bx = 3 * (p2x - p1x) - cx;
    const ax = 1 - cx - bx;

    const cy = 3 * p1y;
    const by = 3 * (p2y - p1y) - cy;
    const ay = 1 - cy - by;

    return [get_bezier_point(value, ax, bx, cx), get_bezier_point(value, ay, by, cy)];
}
