/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {

        let dummy= new ListNode(-1);
        dummy.next=head;

        let firstptr= dummy;
        let secondptr= dummy;

        for(let i=0;i<=n;i++){
            firstptr= firstptr.next;
        }

        while(firstptr!==null){
             firstptr= firstptr.next;
             secondptr= secondptr.next;
        }

        secondptr.next= secondptr.next.next;

        return dummy.next
    }
}
