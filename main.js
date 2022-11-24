function Node(value=null, nextNode=null) {
  return {value, nextNode};
}

function LinkedList() {

  let headNode = Node();
  let currentNode;

  return {

    append(value) {
      if (headNode.value === null) {
        headNode = Node(value, null);
      } else {
        currentNode = headNode;

        while (currentNode.nextNode !== null) {
          currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = Node(value, null);
      }
    },

    prepend(value) {
      headNode = Node(value, headNode);
    },

    size() {
      if (headNode.value === null) return 0;
      let count = 1;
      currentNode = headNode;
      while (currentNode.nextNode !== null) {
        count++;
        currentNode = currentNode.nextNode;
      }
      return count;
    },

    head() {
      return headNode;
    },

    tail() {
      currentNode = headNode;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      return currentNode;
    },

    at(index) {
      let currentIndex = 0;
      currentNode = headNode;
      while (currentIndex !== index) {
        currentIndex++;
        currentNode = currentNode.nextNode;        
      }
      return currentNode;
    },

    pop() {
      this.at(this.size()-2).nextNode = null;
    },

    contains(value) {
      currentNode = headNode;
      while (currentNode.value !== value && currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      if (currentNode.value === value) return true;
      else return false;
    },

    find(value) {
      currentNode = headNode;
      let index = 0;
      while (currentNode.value !== value && currentNode.nextNode !== null) {
        index++;
        currentNode = currentNode.nextNode;
      }
      if (currentNode.value === value) return index;
      else return null;
    },

    toString() {
      if (headNode.value === null) return null;
      let output = '';
      currentNode = headNode;
      while (currentNode.nextNode !== null) {
        output += `( ${currentNode.value} ) -> `
        currentNode = currentNode.nextNode;
      }
        output += `( ${currentNode.value} ) -> null`
        return output;
    },

    insertAt(value, index) {
      this.at(index - 1).nextNode = Node(value, this.at(index));
    },

    removeAt(index) {
      this.at(index - 1).nextNode = this.at(index + 1);
    }
  }
}

const fruits = LinkedList();
fruits.append('apple');
fruits.append('banana');
fruits.append('cherry');
fruits.append('date');
fruits.append('elderberry');
// fruits.prepend('fig');
// console.log(fruits.size());
// console.log(fruits.head());
// console.log(fruits.contains('fig'));
// console.log(fruits.find('elderberry'));
// fruits.insertAt('zucchini', 2);
console.log(`${fruits}`);
fruits.removeAt(2);
console.log(`${fruits}`);
