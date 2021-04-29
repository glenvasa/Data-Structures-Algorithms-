// Day 25 Misson: Linked List

const linkedList = {
  head:  {
        value: 4,
        next: {
            value: 6,
            next: {
                value: 8,
                next: {
                    value: 2,
                    next: null
                }
            }
        }
    }
}

console.log(linkedList.length);

const addElement = (element) => {
            for (let [key] of Object.keys(linkedList.head)) {
                    if(linkedList.head.next === null){
                        linkedList.head.next = element
                    }
                   else {
                      


                  
                   }
                  }
              console.log(linkedList);    
}

addElement({value: 10, next: null})