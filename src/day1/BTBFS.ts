export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    // uses a queue (FIFO)
    const q: (BinaryNode<number> | null)[] = [head];

    while (q.length) {
        // First out
        const curr = q.shift() as BinaryNode<number> | undefined | null;
        if (!curr) {
            continue;
        }

        // search
        if (curr.value === needle) {
            return true;
        }

        // left in
        q.push(curr.left);
        // right in
        q.push(curr.right);
    }

    return false;
}
