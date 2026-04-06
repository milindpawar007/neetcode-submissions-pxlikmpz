class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    addNode(node) {
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
    }

    removeNode(node) {
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    movetoHead(node) {
        this.removeNode(node);
        this.addNode(node);
    }

    poptail() {
        const lrunode = this.tail.prev;
        this.removeNode(lrunode);
        return lrunode;
    }

    get(key) {
        let node = this.cache.get(key);
        if (!node) return -1;
        this.movetoHead(node);
        return node.value;
    }

    put(key, value) {
        let node = this.cache.get(key);

        if (node) {
            node.value = value;
            this.movetoHead(node);
        } else {
            let newNode = new Node(key, value);
            this.addNode(newNode);
            this.cache.set(key, newNode);

            if (this.cache.size > this.capacity) {
                let tail = this.poptail();
                this.cache.delete(tail.key);
            }
        }
    }
}
