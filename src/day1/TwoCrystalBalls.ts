export default function two_crystal_balls(breaks: boolean[]): number {
    // breaks is a bunch of falses until trues
    // eg. [0000000111111]

    // Size of jumping gaps
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jmpAmount;
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            // found the break. break;
            break;
        }
    }

    // decrement i to previous value
    i -= jmpAmount;

    for (let j = 0; j < jmpAmount && i < breaks.length; ++j, ++i) {
        // j is the jump amount increment
        if (breaks[i]) {
            return i; // i has index information
        }
    }

    return -1;

}
