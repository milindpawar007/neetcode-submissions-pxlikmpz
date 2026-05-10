class Solution {

    public int largestRectangleArea(int[] heights) {

        int ans = 0;
        int n = heights.length;

        int[] leftArray = new int[n];
        int[] rightArray = new int[n];

        Stack<Integer> stack = new Stack<>();

        // Next Smaller Element (Right Boundary)
        for (int i = n - 1; i >= 0; i--) {

            while (!stack.isEmpty() && heights[stack.peek()] >= heights[i]) {
                stack.pop();
            }

            rightArray[i] = stack.isEmpty() ? n : stack.peek();

            stack.push(i);
        }

        stack.clear();

        // Previous Smaller Element (Left Boundary)
        for (int i = 0; i < n; i++) {

            while (!stack.isEmpty() && heights[stack.peek()] >= heights[i]) {
                stack.pop();
            }

            leftArray[i] = stack.isEmpty() ? -1 : stack.peek();

            stack.push(i);
        }

        // Calculate Area
        for (int i = 0; i < n; i++) {

            int width = rightArray[i] - leftArray[i] - 1;

            int area = heights[i] * width;

            ans = Math.max(ans, area);
        }

        return ans;
    }
}