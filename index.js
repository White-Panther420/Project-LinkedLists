class LinkedList{
    constructor(){
        this.headPtr = null
    }
    
    addTEndOfLinkedList(nodeToInsert){
        if(this.headPtr === null){  //Empty linked lsit
            this.headPtr = nodeToInsert
        }else{  //One or more elements
            let tempPtr = this.headPtr
            while(tempPtr !== null){
                if(tempPtr.next === null){
                    tempPtr.next = nodeToInsert  //Insert at end of list
                    tempPtr = nodeToInsert //Move tempPt one node up to break out of loop after next line
                }
                tempPtr = tempPtr.next  //Move tempPtr to next node
            }
        }
    }
    addToStartOfLinkedList(nodeToInsert){
        if(this.headPtr === null){  //Empty linked lsit
            this.headPtr = nodeToInsert
        }else{  //One or more elements
            nodeToInsert.next = this.headPtr  
            this.headPtr = nodeToInsert
        }
    }
    getSizeOfList(){
        let tempPtr = this.headPtr
        let size=0
        while(tempPtr !== null){
            size++
            tempPtr = tempPtr.next  //Move tempPtr to next node
        }
        return size
    }
    getHeadNode(){
        if(this.headPtr === null){
            console.log("Empty Linked List")
        }else{
             return this.headPtr
        }
    }
    getTailNode(){
        if(this.headPtr === null){
            console.log("Empty Linked List")
        }else{
            let tempPtr = this.headPtr
            while(tempPtr !== null){
                if(tempPtr.next === null){
                    return tempPtr
                }
                tempPtr = tempPtr.next
            }
        }
    }
    getNodeAtIndex(index){
        const sizeOfList = this.getSizeOfList()
        if(index < 1 || index > sizeOfList){
            console.log("Error! Invalid Index")
        }else{
            let tempPtr = this.headPtr
            for(let i=1; i<index; i++){
                tempPtr = tempPtr.next
            }
            return tempPtr
        }
    }
    popNodeFromList(){
        if(this.headPtr === null){
            console.log("Error! Empty Linked List")
        }else{
            let tempPtr = this.headPtr
            while(tempPtr !== null){
                if(tempPtr.next.next === null){
                    tempPtr.next = null
                }
                tempPtr = tempPtr.next
            }
        }
    }
    searchForPerson(personFirstName, personLastName){
        if(this.headPtr === null){
            console.log("Error! Empty Linked List")
        }else{
            let tempPtr = this.headPtr
            while(tempPtr != null){
                if(tempPtr.firstName.toLowerCase() === personFirstName.toLowerCase()){
                if(tempPtr.lastName.toLowerCase() === personLastName.toLowerCase()){
                        return true
                    }
                }
                tempPtr = tempPtr.next
            }
            return false
        }
    }
    findPersonIndex(personFirstName, personLastName){
        if(this.headPtr === null){
            console.log("Error! Empty Linked List")
        }else{
            let index = 1
            let tempPtr = this.headPtr
            while(tempPtr != null){
                if(tempPtr.firstName.toLowerCase() === personFirstName.toLowerCase()){
                    if(tempPtr.lastName.toLowerCase() === personLastName.toLowerCase()){
                        return index
                    }
                }
                index++
                tempPtr = tempPtr.next
            }
            return null
        }
    }
    insertAt(nodeToInset, positionToInsert){
        const listSize = this.getSizeOfList()
        if(positionToInsert < 1 || positionToInsert > listSize){
            console.log("Cannot Insert! Invalid Index")
        }else{
            if(positionToInsert === 1){
                this.addToStartOfLinkedList(nodeToInset)
            }else if(positionToInsert === listSize){
                this.addTEndOfLinkedList(nodeToInset)
            }else{  //Adding in middle of list
                let tempPtr = this.headPtr
                for(let i=1; i<positionToInsert; i++){
                    tempPtr = tempPtr.next
                }
                nodeToInset.next = tempPtr.next
                tempPtr.next = nodeToInset
            }
        }
    }
    removeNodeFromStart(){
        if(this.headPtr === null){  //Empty linked lsit
            console.log("Error! Unable to delete node. List is empty")
        }else{  //One or more elements
            let tempNode = this.headPtr.next
            this.headPtr = tempNode
        }
    }
    removeAt(postionToRemove){
        const listSize = this.getSizeOfList()
        if(postionToRemove < 1 || postionToRemove > listSize){
            console.log("Cannot delete! Invalid index")
        }else{
            if(postionToRemove === 1){
                this.removeNodeFromStart()
            }else if(postionToRemove === listSize){
                this.popNodeFromList()
            }else{  //Removing in middle of list
                let tempPtr = this.headPtr.next
                let prevPtr = this.headPtr
                for(let i=1; i<postionToRemove-1; i++){
                    tempPtr = tempPtr.next  //Stop at node to delete
                    prevPtr = prevPtr.next  //Stop right before node to delete
                }
                prevPtr.next = tempPtr.next
                tempPtr = null
            }
        }
    }
    toString(){
        if(this.headPtr === null){
            console.log("Empty Linked list")
        }else{
            let tempPtr = this.headPtr
            while(tempPtr !== null){
                tempPtr.toString()
                tempPtr = tempPtr.next
            }
        }
    }
}

class Node{
    constructor(firstName, lastName, age, dateOfBirth){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.dateOfBirth = dateOfBirth
        this.next = null
    }

    toString(){
        console.log(`|${this.firstName}, ${this.lastName}, ${this.age}, ${this.dateOfBirth}| ->`)
    }
}

const newLinkedList = new LinkedList()
const reversedNewLinkedList = new LinkedList()
const people = [
    {
      firstName: "John",
      lastName: "Doe",
      age: 30,
      dateOfBirth: "1993-05-15"
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      age: 25,
      dateOfBirth: "1998-02-20"
    },
    {
      firstName: "Michael",
      lastName: "Johnson",
      age: 40,
      dateOfBirth: "1983-11-10"
    },
    {
      firstName: "Emily",
      lastName: "Brown",
      age: 28,
      dateOfBirth: "1995-09-05"
    },
    {
      firstName: "David",
      lastName: "Wilson",
      age: 35,
      dateOfBirth: "1988-07-18"
    },
    {
      firstName: "Sarah",
      lastName: "Jones",
      age: 22,
      dateOfBirth: "2001-03-30"
    },
    {
      firstName: "Robert",
      lastName: "Garcia",
      age: 33,
      dateOfBirth: "1989-12-25"
    },
    {
      firstName: "Olivia",
      lastName: "Martinez",
      age: 27,
      dateOfBirth: "1996-04-12"
    },
    {
      firstName: "William",
      lastName: "Anderson",
      age: 45,
      dateOfBirth: "1978-09-28"
    },
    {
      firstName: "Ava",
      lastName: "Taylor",
      age: 31,
      dateOfBirth: "1992-08-07"
    },
    {
      firstName: "James",
      lastName: "Clark",
      age: 29,
      dateOfBirth: "1994-06-22"
    },
    {
      firstName: "Sophia",
      lastName: "Thomas",
      age: 26,
      dateOfBirth: "1997-01-14"
    },
    {
      firstName: "Joseph",
      lastName: "White",
      age: 37,
      dateOfBirth: "1986-10-03"
    },
    {
      firstName: "Emma",
      lastName: "Lee",
      age: 23,
      dateOfBirth: "2000-12-08"
    },
    {
      firstName: "Daniel",
      lastName: "Harris",
      age: 32,
      dateOfBirth: "1989-04-19"
    },
    {
      firstName: "Mia",
      lastName: "Nelson",
      age: 24,
      dateOfBirth: "1999-02-11"
    },
    {
      firstName: "Christopher",
      lastName: "King",
      age: 34,
      dateOfBirth: "1987-07-02"
    },
    {
      firstName: "Ella",
      lastName: "Adams",
      age: 29,
      dateOfBirth: "1994-08-26"
    },
    {
      firstName: "Matthew",
      lastName: "Moore",
      age: 36,
      dateOfBirth: "1986-03-17"
    },
    {
      firstName: "Lily",
      lastName: "Parker",
      age: 27,
      dateOfBirth: "1996-11-09"
    }
  ];
for(let i=0; i<people.length; i++){
  const newNode = new Node(people[i].firstName, 
                            people[i].lastName,
                            people[i].age,
                            people[i].dateOfBirth)
    newLinkedList.addTEndOfLinkedList(newNode)
};

console.log("Added to end")
newLinkedList.toString()
console.log("Added to begining")
const person1 = new Node("John", "Doe", 30, "1993-05-15");
reversedNewLinkedList.addToStartOfLinkedList(person1);

const person2 = new Node("Jane", "Smith", 25, "1998-02-20");
reversedNewLinkedList.addToStartOfLinkedList(person2);

const person3 = new Node("Michael", "Johnson", 40, "1983-11-10");
reversedNewLinkedList.addToStartOfLinkedList(person3);

const person4 = new Node("Emily", "Brown", 28, "1995-09-05");
reversedNewLinkedList.addToStartOfLinkedList(person4);

const person5 = new Node("David", "Wilson", 35, "1988-07-18");
reversedNewLinkedList.addToStartOfLinkedList(person5);
reversedNewLinkedList.toString()

console.log("Size, Head, and Tail for newLinkedList: " + newLinkedList.getSizeOfList())
newLinkedList.getHeadNode().toString()
newLinkedList.getTailNode().toString()
console.log("Index of 8th node")
newLinkedList.getNodeAtIndex(8).toString()
newLinkedList.popNodeFromList()
newLinkedList.toString()

console.log("NOW TO POP FROM REVERSED LIST")
reversedNewLinkedList.popNodeFromList()
reversedNewLinkedList.popNodeFromList()

console.log("SEARCH NEW LINKED LIST")
console.log(newLinkedList.searchForPerson("Olivia", "Martinez"))
console.log(newLinkedList.findPersonIndex("Olivia", "Martinez"))


reversedNewLinkedList.toString()
console.log("INSERT AT FOR REVERSED LISZT")
let newPerson = new Node("NEW", "PERSON", "25", "06-28-1996")
let newPerson2 = new Node("NEW2", "PERSON2", "25", "06-28-1996")
let newPerson3 = new Node("NEW3", "PERSON33", "25", "06-28-1996")

reversedNewLinkedList.insertAt(newPerson, 1)
reversedNewLinkedList.insertAt(newPerson2, 3)
reversedNewLinkedList.insertAt(newPerson3, 5)
reversedNewLinkedList.toString()

console.log("REMOVING NEW PEOPLE")
reversedNewLinkedList.removeAt(1)
reversedNewLinkedList.removeAt(3)
reversedNewLinkedList.removeAt(5)


reversedNewLinkedList.toString()