const { expect } = require('chai');
const SinglyLinkedList = require('../src/singly-linked-list');

describe('Singly Linked List', () => {
  describe('constructor', () => {
    it('should have a head set to null', () => {
      const list = new SinglyLinkedList();
      expect(list.head).to.equal(null);
    });
  });
  describe('add', () => {
    it('should override head if it does not exist yet', () => {
      const list = new SinglyLinkedList();
      list.add('hello');

      expect(list.head).to.deep.equal({ data: 'hello', next: null });
    });

    it('should append the new element if head exists', () => {
      const list = new SinglyLinkedList();

      list.add('hello');
      list.add('world');

      expect(list.head.data).to.equal('hello');
      expect(list.head.next.data).to.equal('world');
    });
  });
  describe('addFirst', () => {
    it('should override head if it does not exist yet', () => {
      const list = new SinglyLinkedList();
      list.addFirst('hello');

      expect(list.head).to.deep.equal({ data: 'hello', next: null });
    });
    it('should prepend the new element if head exists', () => {
      const list = new SinglyLinkedList();

      list.addFirst('world');
      list.addFirst('hello');

      expect(list.head.next).to.deep.equal({ data: 'world', next: null });
    });
  });
  describe('clear', () => {
    it('should remove all elements of an empty list', () => {
      const list = new SinglyLinkedList();
      list.clear();

      expect(list.head).to.be.a('null');
    });
    it('should remove all elements of a filled list', () => {
      const list = new SinglyLinkedList();
      list.addFirst('world');
      list.addFirst('hello');
      list.clear();

      expect(list.head).to.be.a('null');
    });
  });
  describe('contains', () => {
    it('should return true if element exists', () => {
      const list = new SinglyLinkedList();
      list.addFirst('world');
      list.addFirst('hello');

      expect(list.contains('world')).to.be.true;
    });
    it('should return false if element does not exist', () => {
      const list = new SinglyLinkedList();
      list.addFirst('world');
      list.addFirst('hello');

      expect(list.contains('blubb')).to.be.false;
    });
    it('should return false if list is empty', () => {
      const list = new SinglyLinkedList();

      expect(list.contains('blubb')).to.be.false;
    })
  });
  describe('get', () => {

    it('should return the element at the specified position in a list if it exists', () => {
      const list = new SinglyLinkedList();
      list.add('world');
      list.add('hello');
      list.add('blubb');

      expect(list.get(1)).to.equal("hello");
      expect(list.get(0)).to.equal("world");
      expect(list.get(2)).to.equal("blubb");
    });
    it('should return undefined if element at specified position does not exist', () => {
      const list = new SinglyLinkedList();
      list.add('world');
      list.add('hello');
      list.add('blubb');

      expect(list.get(12)).to.be.undefined;
      expect(list.get(-5)).to.be.undefined;

    });
    it('should return undefined if list is empty', () => {
      const list = new SinglyLinkedList();
      expect(list.get(2)).to.be.undefined;
    })
  });
  describe('size', () => {
    it('should return the length of the list', () => {
      const list = new SinglyLinkedList();
      expect(list.size()).to.equal(0)

      list.add('world');
      list.add('hello');
      list.add('blubb');

      expect(list.size()).to.equal(3)
    })
  });
  describe('remove', () => {
    it('should remove the first element in list if no index is passed to fn', () => {
      const list = new SinglyLinkedList();

      list.add('world');
      list.add('hello');
      list.add('blubb');

      expect(list.remove()).to.equal('world');
      expect(list.head.data).to.equal('hello');
    });
    it('should return undefined if list is empty', () => {
      const list = new SinglyLinkedList();

      expect(list.remove()).to.be.undefined;

    });
    it('should return undefined if position of element is out of range', () => {
      const list = new SinglyLinkedList();

      list.add('world');
      list.add('hello');
      list.add('blubb');
      expect(list.remove(9)).to.be.undefined;
      expect(list.head.data).to.equal('world');
    });
    it('should return remove element in list at passed position', () => {
      const list = new SinglyLinkedList();

      list.add('world');
      list.add('hello');
      list.add('blubb');
      expect(list.remove(1)).to.equal('hello');
      expect(list.head.data).to.equal('world');
      expect(list.head.next.data).to.equal('blubb');
    })
  });
});
