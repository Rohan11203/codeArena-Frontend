export const REVERSE_STRING_SNIPPET = {
    "Reverse Words in a String": {
      javascript: `function reverseWords(s) {
          return s.trim().split(/\s+/).reverse().join(" "); // // return s.trim().split(/\s+/).reverse().join(" ");
        }
        
        console.log(reverseWords("the sky is blue")); // "blue is sky the"
        console.log(reverseWords("  hello world  ")); // "world hello"
        console.log(reverseWords("a good   example")); // "example good a"
      `,
  
      typescript: `function reverseWords(s: string): string {
          return s.trim().split(/\s+/).reverse().join(" "); // return s.trim().split(/\s+/).reverse().join(" ");
        }
        
        console.log(reverseWords("the sky is blue")); // "blue is sky the"
        console.log(reverseWords("  hello world  ")); // "world hello"
        console.log(reverseWords("a good   example")); // "example good a"
      `,
  
      python: `def reverse_words(s: str) -> str:
        return " ".join(s.strip().split()[::-1])
        
print(reverse_words("the sky is blue"))  # "blue is sky the"
print(reverse_words("  hello world  "))  # "world hello"
print(reverse_words("a good   example"))  # "example good a"
      `,
  
      java: `public class ReverseWords {
      public static String reverseWords(String s) {
          String[] words = s.trim().split("\\s+");
          StringBuilder result = new StringBuilder();
          for (int i = words.length - 1; i >= 0; i--) {
              result.append(words[i]).append(" ");
          }
          return result.toString().trim();
      }
  
      public static void main(String[] args) {
          System.out.println(reverseWords("the sky is blue"));  // "blue is sky the"
          System.out.println(reverseWords("  hello world  "));  // "world hello"
          System.out.println(reverseWords("a good   example")); // "example good a"
      }
  }
      `
    }
  };
  
