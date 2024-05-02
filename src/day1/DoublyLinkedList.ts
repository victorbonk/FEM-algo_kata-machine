type Node<T> = {
    value: T,
    prev?: Node<T>,
    next?: Node<T>
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    
    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        if (!this.head) {
            this.head = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;

        this.head = node;
    }
    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error('invalid position');
        } else if (idx === this.length) {
            this.append(item);
            return;
        } else if (idx === 0) {
            this.prepend(item);
            return;
        }

        this.length++;
        const node = { value: item } as Node<T>;
        const temp = this.head as Node<T>;
        for (let i = 0, temp && i < idx; ++i) {
            temp = temp.next as Node<T>;
        }
        
        // TODO: TS errors
        node.prev = temp.prev;
        node.next = temp;

        if (temp.prev) {
            temp.prev.next = node;
            temp.prev = node;
        }


    }
    append(item: T): void {

    }
    remove(item: T): T | undefined {

    }
    get(idx: number): T | undefined {

    }
    removeAt(idx: number): T | undefined {

    }
}
