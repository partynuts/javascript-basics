// https://beginnersbook.com/2013/12/linkedlist-in-java-with-example/
// https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3

/*
    Structure

    List
    --> Head (data, next)
                       --> Node (data, next)
                                        --> Node (data, next)
                                                          --> null

    e.g.

    List
    -> Node(10, --> Node(20, --> Node(30, null)))
*/

module.exports = class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  // It is used to append the specified element to the end of a list.
  add(data) {
    if (!this.head) {
      this.head = new Node(data);
    } else {
      let node = this.head;

      while (node.next) {
        node = node.next;
      }

      node.next = new Node(data);
    }
  }

  // It is used to insert the given element at the beginning of a list.
  addFirst(data) {
    const node = new Node(data);

    node.next = this.head;
    this.head = node;
  }

  // It is used to remove all the elements from a list.
  clear() {
    this.head = null;
  }

  // It is used to return true if a list contains a specified element.
  contains(data) {
    if (this.head === null) {
      return false;
    } else {
      let node = this.head;
      do {
        if (node.data === data) {
          return true
        }
        node = node.next;
      } while (node);
      return false;
    }
  }

  // It is used to return the element at the specified position in a list.
  get(index) {
    if (this.head === null) {
      return undefined;
    } else {
      let node = this.head;
      let nodeIndex = 0;
      do {
        if (nodeIndex === index) {
          return node.data;
        }
        node = node.next;
        nodeIndex++;
      } while (node);
      return undefined;
    }
  }

  //
  // list.forEach((data, index, list) => consoel.log(data))
  //
  // forEach(fun) {
  //   if (this.head === null) {
  //     return undefined;
  //   } else {
  //     let node = this.head;
  //     let nodeIndex = 0;
  //     do {
  //       fun(node.data, nodeIndex, this)
  //       node = node.next;
  //       nodeIndex++;
  //     } while (node);
  //     return undefined;
  //   }
  // }

  // It is used to return the number of elements in a list.
  size() {
    let node = this.head;
    let nodeElement = 0;

    while (node) {
      nodeElement++;
      node = node.next;
    }

    return nodeElement;
  }

  // It is used to remove the element at the specified position in a list.
  remove(index = 0) {
    if (this.head === null) {
      return undefined;
    }
    if (index === 0) {
      const content = this.head.data;
      this.head = this.head.next;
      return content;
    }
    let prev = null;
    let node = this.head;
    let nodeIndex = 0;
    while (node) {
      if (nodeIndex === index) {
        prev.next = node.next;
        return node.data;
      } else {
        nodeIndex++;
        prev = node;
        node = node.next
      }
    }
  }
};

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

