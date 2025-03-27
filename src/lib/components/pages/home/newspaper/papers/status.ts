// Hidden = display none or visibility hidden
// Visible = display x. Apply background color mask or filter

import { minmax } from "$lib/minmax";

// Center = display, no filter. Z-index higher than others
export const enum PaperStatus {
    HiddenLeft = -2,
    VisibleLeft = -1,
    Center = 0,
    VisibleRight = 1,
    HiddenRight = 2,
}

export function number_to_status(current_value: number, this_value: number): PaperStatus {
    return minmax(this_value - current_value, -2, 2);
}

export function get_status_opacity(status: PaperStatus): number {
    switch (status) {
        case PaperStatus.Center:
            return 1;
        case PaperStatus.VisibleLeft:
        case PaperStatus.VisibleRight:
            return 0.5;
        default:
            return 0;
    }
}
