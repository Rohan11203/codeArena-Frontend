import TestCases from "../../CodeEditor/TestCases";

export const PROBLEM_SNIPPETS = {
  'Two Sum': {
    javascript: `function twoSum(nums, target) {
      const map = new Map(); // Stores the difference (target - current number) and its index

      for (let i = 0; i < nums.length; i++) {
          const complement = target - nums[i];

          // Check if the complement is already in the map
          if (map.has(complement)) {
              return [map.get(complement), i];
          }

          // Store the current number and its index in the map
          map.set(nums[i], i);
      }

      // If no solution is found (although the problem guarantees a solution)
      return [];
    }
    // Example Usage:
    console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
    console.log(twoSum([3, 2, 4], 6));      // [1, 2]
    console.log(twoSum([3, 3], 6));         // [0, 1]
    `,
  },
  'Reverse a String': {
    javascript: `function reverseString(str) {
      return str.split('').reverse().join('');
    }
    // Example Usage:
    console.log(reverseString("hello")); // "olleh"
    console.log(reverseString("world")); // "dlrow"
    `,
  },
  'Merge Strings Alternately': {
    javascript: `function mergeAlternately(word1, word2) {
      let result = '';
      let i = 0, j = 0;
      while (i < word1.length || j < word2.length) {
          if (i < word1.length) result += word1[i++];
          if (j < word2.length) result += word2[j++];
      }
      return result;
    }
    // Example Usage:
    console.log(mergeAlternately("abc", "xyz")); // "axbycz"
    `,
  },
  'Palindrome Number': {
    javascript: `function isPalindrome(num) {
      const reversedNum = parseInt(num.toString().split('').reverse().join(''), 10);
      return num === reversedNum;
    }
    // Example Usage:
    console.log(isPalindrome(121)); // true
    console.log(isPalindrome(-121)); // false
    console.log(isPalindrome(10)); // false
    `,
  },
  'Valid Parentheses': {
    javascript: `function isValid(s) {
      const stack = [];
      const mapping = {
          '(': ')',
          '[': ']',
          '{': '}',
      };

      for (let char of s) {
          if (mapping[char]) {
              stack.push(char);
          } else {
              const top = stack.pop();
              if (mapping[top] !== char) {
                  return false;
              }
          }
      }
      return stack.length === 0;
    }
    // Example Usage:
    console.log(isValid("()")); // true
    console.log(isValid("()[]{}")); // true
    console.log(isValid("(]")); // false
    `,
  },
};
