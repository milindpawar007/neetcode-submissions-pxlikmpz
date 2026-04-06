class MinStack {
    constructor() {
       this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
         this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
          if (this.stack.length > 0) {
            return this.stack[this.stack.length - 1];
        }
    }

    /**
     * @return {number}
     */
    getMin() {

       if (this.stack.length === 0) return null;

        let min = Infinity;
        for (let val of this.stack) {
            min = Math.min(min, val);
        }
        return min;
    }
}
