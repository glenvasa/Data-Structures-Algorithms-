// Day 25 Mission: Linked List

class Node {
  constructor(data, next = null) {
    (this.data = data), (this.next = next);
  }
}

class LinkedList {
  constructor() {
    (this.head = null), (this.size = 0);
  }

  addElement = (data) => {
    this.head = new Node(data, this.head);
    this.size++;
  };

  removeElement = (index) => {
    let curr = this.head;
    let prev;
    let count = 0;

    if (index === 0) {
      this.head = curr.next;
    } else {
      while (count < index) {
        count++;
        prev = curr;
        curr = curr.next;
      }

      prev.next = curr.next;
    }
    this.size--;
  };

  removeAllElements = () => {
    this.head = null;
    this.size = 0;
  };
}

const linkedList = new LinkedList();
linkedList.addElement(1);
linkedList.addElement(2);
linkedList.addElement(3);
linkedList.addElement(4);

console.log(linkedList)

linkedList.removeElement(0)
console.log(linkedList);

linkedList.removeAllElements();
console.log(linkedList);

