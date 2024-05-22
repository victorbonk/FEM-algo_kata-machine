// Check if 2 trees are same in shape and structure
export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    // Depth first search preserves shape.
    // Breadth first search does not.

    // Going to use Depth First Search.

    // structural check. both null. true
    if (a === null && b === null) {
        return true;
    }

    // structural check. not both null. false
    if (a === null || b === null) {
        return false;
    }

    // value check. not same value. false
    if (a.value !== b.value) {
        return false;
    }

    return compare(a.left, b.left) && compare(a.right, b.right);
}
