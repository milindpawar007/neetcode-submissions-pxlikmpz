/*
// Definition for a Node.
class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
*/

class Solution {
    public Node copyRandomList(Node head) {
         Map<Node, Node> map = new HashMap<>();
         Node current = head;
         Node dummy= new Node(0);
         Node tail=dummy;
         while(current != null)
         {
            Node copynode= new Node(current.val);
            map.put(current,copynode);
            tail.next=copynode;
            tail=copynode;
            current= current.next;
         }
         current= head;
         Node copyCurrent = dummy.next;  
         while(current != null)
         {
            
            copyCurrent.random= map.get(current.random);
            
            current= current.next;
            copyCurrent= copyCurrent.next;
         }

         return dummy.next;

    }
}
