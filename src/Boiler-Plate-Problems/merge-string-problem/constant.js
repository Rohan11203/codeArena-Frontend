
export const MERGE_SNIPPETS = {
  "Merge Strings": {
    javascript: `function mergeStrings(word1, word2) {
        let result = "";
        let i = 0, j = 0;
  
        while (i < word1.length || j < word2.length) {
            if (i < word1.length) result += word1[i++];
            if (j < word2.length) result += word2[j++];
        }
  
        return result;
      }
  
      console.log(mergeStrings("abc", "pqr")); // "apbqcr"
      console.log(mergeStrings("ab", "pqrs")); // "apbqrs"
      console.log(mergeStrings("abcd","pq"));
      `,

    typescript: `function mergeStrings(word1: string, word2: string): string {
        let result: string = "";
        let i: number = 0, j: number = 0;
  
        while (i < word1.length || j < word2.length) {
            if (i < word1.length) result += word1[i++];
            if (j < word2.length) result += word2[j++];
        }
  
        return result;
      }
  
      console.log(mergeStrings("abc", "pqr")); // "apbqcr"
      console.log(mergeStrings("ab", "pqrs")); // "apbqrs"
      console.log(mergeStrings("abcd","pq"));
      `,

    python: `def merge_strings(word1: str, word2: str) -> str:
      result = []
      i, j = 0, 0
  
      while i < len(word1) or j < len(word2):
          if i < len(word1):
              result.append(word1[i])
              i += 1
          if j < len(word2):
              result.append(word2[j])
              j += 1
  
      return "".join(result)
  
print(merge_strings("abc", "pqr"))  # "apbqcr"
print(merge_strings("ab", "pqrs"))  # "apbqrs"
print(merge_strings("abcd", "pq"))
      `,
      java: `public class MergeStrings {
    public static String mergeStrings(String word1, String word2) {
        StringBuilder result = new StringBuilder();
        int i = 0, j = 0;

        while (i < word1.length() || j < word2.length()) {
            if (i < word1.length()) result.append(word1.charAt(i++));
            if (j < word2.length()) result.append(word2.charAt(j++));
        }

        return result.toString();
    }

    public static void main(String[] args) {
        System.out.println(mergeStrings("abc", "pqr"));  // Output: "apbqcr"
        System.out.println(mergeStrings("ab", "pqrs"));  // Output: "apbqrs"
        System.out.println(mergeStrings("abcd", "pq"));  // Output: 
    }
}
`
  },
};
