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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
     mergeSortedList(list1, list2) {
        let dummy = new ListNode(0);
        let tail = dummy;

        while (list1 !== null && list2 !== null) {
            if (list1.val < list2.val) {
                tail.next = list1;
                list1 = list1.next;
            } else {
                tail.next = list2;
                list2 = list2.next;
            }
            tail = tail.next;
        }

        if (list1 !== null) {
            tail.next = list1;
        }
        if (list2 !== null) {
            tail.next = list2;
        }

        return dummy.next;
    }

    /**
     * Merge k sorted linked lists
     */
    mergeKLists(lists) {
        if (lists.length === 0) return null;

        let merged = lists[0];

        for (let i = 1; i < lists.length; i++) {
            merged = this.mergeSortedList(merged, lists[i]);
        }

        return merged;
    }
    
}
