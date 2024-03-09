export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0; // inclusive because 0 is first index
    let hi = haystack.length; // exclusive so does not include last index

    do {
        const m = Math.floor(lo + (hi - lo) / 2);
        const val = haystack[m];

        if (val === needle) {
            return true;
        } else if (val > needle) {
            // needle is somewhere in lower region
            hi = m;
        } else {
            // needle is somewhere in higher region
            lo = m + 1;
        }
    } while (lo < hi);

    return false;
}

// log(n)
