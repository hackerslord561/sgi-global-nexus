import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function that intelligently merges Tailwind classes.
 * It prevents conflicts (e.g., if you pass 'px-4' and 'px-6', it knows to only keep 'px-6').
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}