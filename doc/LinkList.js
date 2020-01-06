/**
 *
 *
 * @class Node
 * @param {any} data
 * @param {Node} next
 */
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }
    insertLast(data) {
        // 要遍历的
        let node = new Node(data);
        if (this.head) {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        } else {
            this.head = node;
        }
        this.size++;
    }
    insertAt(data, index) {
        // is index out of range
        if (index > 0 && index > this.size) return;
        if (index == 0) {
            this.insertFirst(data);
        }
        const node = new Node(data);
        let current, previous;
        // set current to first
        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current;
            count++;
            current = current.next;
        }
        node.next = current;
        previous.next = node;

        this.size++;
    }
    display() {
        let current = this.head;
        let linkedStr = '';
        while (current) {
            linkedStr += `${current.data} -> `;
            current = current.next;
        }
        console.log(linkedStr);
    }
}

(function main() {
    const ll = new LinkedList();
    // ll.insertLast(100);
    // ll.insertLast(200);
    // ll.insertLast(300);
    // ll.insertLast(400);
    ll.display();
})();
