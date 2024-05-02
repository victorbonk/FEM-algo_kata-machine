function qs(arr: number[], lo: number, hi: number): void {
    // base case
    if (lo >= hi) {
        return;
    }

    const pivotIdx = partition(arr, lo, hi);

    // call quicksort on both sides
    // does not include pivot index
    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];
    let idx = lo - 1;

    // walk from low to high(pivot) - 1
    for (let i = lo; i < hi; ++i) {
        if (arr[i] <= pivot) {
            idx++;

            // swap
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }

    idx++;
    // move pivot to new position
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    // return index of the new pivot
    return idx;
}

export default function quick_sort(arr: number[]): void {
    // 1. partition
    // 2. quick sort
    
    // [lo, hi] (both inclusive)
    qs(arr, 0, arr.length - 1);
}
