class Solution {

    public String encode(List<String> strs) {
        StringBuilder res = new StringBuilder();

        for (String s : strs) {
            res.append(s.length()).append('#').append(s);
        }

        return res.toString();
    }

    public List<String> decode(String str) {
        List<String> result = new ArrayList<>();
        int i = 0;

        while (i < str.length()) {
            int j = i;

            // find '#'
            while (str.charAt(j) != '#') {
                j++;
            }

            // length is from i to j-1
            int len = Integer.parseInt(str.substring(i, j));

            // actual word starts after '#'
            String word = str.substring(j + 1, j + 1 + len);
            result.add(word);

            // move i to next encoded string
            i = j + 1 + len;
        }

        return result;
    }
}