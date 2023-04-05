class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLL {
  constructor(value) {
    this.length = 1;
    let node = new Node(value);
    this.head = node;
    this.tail = node;
  }
  append(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    let newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  insertAtPosition(value, n) {
    if (n > this.length) {
      this.append(value);
    } else if (n <= 1) {
      this.prepend(value);
    }
    let prevNode = this.findNode(n - 1);
    let newNode = new Node(value);
    newNode.next = prevNode.next;
    newNode.prev = prevNode;
    prevNode.next.prev = newNode;
    prevNode.next = newNode;
    this.length++;
  }
  findNode(n) {
    let count = 1;
    let data = this.head;
    while (data) {
      if (n == count) {
        break;
      }
      data = data.next;
      count++;
    }
    return data;
  }

  print() {
    let data = this.head;
    while (data) {
      console.log(data);
      data = data.next;
    }
  }
  update(value, n) {
    let curNode = this.findNode(n);
    curNode.value = value;
  }
  delete(n) {
    let prevNode = this.findNode(n - 1);
    prevNode.next = prevNode.next.next;
    prevNode.next.prev = prevNode;
    this.length--;
  }
}

let list = new DoublyLL(5);
list.append(20);
list.insertAtPosition(10, 2);
list.update(15, 2);
list.delete(2);
list;
