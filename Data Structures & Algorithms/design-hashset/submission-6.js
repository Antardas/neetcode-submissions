class Node {
    key = null;
    next = null;
    constructor(key) {
        this.key = key;
    }
    
    setNext(next) {
        this.next = next;
    }
}


class MyHashSet {
    constructor() {
        this.set = [];
    }

    /**
     * @param {number} key
     * @return {number}
     */
    getHash(number){
        return 10_000 % number;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        const hash = this.getHash(key);
        const list = this.set[hash];

        if(!list) {
            this.set[hash] = new Node(key);
            return;
        }


        let cur = list;



        while(cur) {
            if(cur.key === key){
                return;
            }

            if(cur.next === null) {
                break;
            }

            cur = cur.next;
        }

        cur.next = new Node(key);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const hash = this.getHash(key);
        const list = this.set[hash];

        if(!list) {
            return null
        }

        let cur = list;

        while(cur) {
            if(cur.key === key) {
                if(cur.next == null){
                    this.set[hash] = null;
                }
            }
            if(cur.next === null) {
                return;
            }

            if(cur.next.key === key){
                cur.next = cur.next.next;
                return;
            }

            cur = cur.next;
        }

    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {

        const hash = this.getHash(key);
        const list = this.set[hash];
        if(!list) return false;
        let cur = list;
        console.log(cur)

        while(cur) {
            if(cur.key === key){
                return true;
            }

            if(cur.next === null) {
                return false;
            }

            cur = cur.next;
        }
        return false
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
