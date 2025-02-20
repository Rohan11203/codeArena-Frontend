export const TOW_SUM_SNIPPETS = {
  "Two Sum": {
    javascript: `function twoSum(nums, target) {
      const map = new Map(); // Stores the number and its index

      for (let i = 0; i < nums.length; i++) {
          const complement = target - nums[i];

          // Check if the complement is already in the map
          if (map.has(complement)) {
              return [map.get(complement), i]; // Return correct indices
          }

          // Store the current number and its index in the map
          map.set(nums[i], i);
      }

      return []; // If no solution is found
    }

    // Example Usage:
    console.log(twoSum([1, 5, 3, 7], 8)); // [0, 3]
    console.log(twoSum([3, 3], 6));       // [0, 1]
    `,

    typescript: `function twoSum(nums: number[], target: number): number[] {
    const numIndex: Record<number, number> = {}; // Object to store number and its index

    for (let i = 0; i < nums.length; i++) {
        const complement: number = target - nums[i];

        // Check if the complement exists in the object
        if (complement in numIndex) {
            return [numIndex[complement], i]; // Return correct indices
        }

        // Store the current number's index
        numIndex[nums[i]] = i;
    }

    return []; // If no solution is found
}

// Example Usage:
console.log(twoSum([1, 5, 3, 7], 8)); // [0, 3]
console.log(twoSum([3, 3], 6));       // [0, 1]

    `,

    java: `import java.util.HashMap;
    import java.util.Map;

    public class TwoSum {
        public static int[] twoSum(int[] nums, int target) {
            Map<Integer, Integer> map = new HashMap<>();

            for (int i = 0; i < nums.length; i++) {
                int complement = target - nums[i];

                if (map.containsKey(complement)) {
                    return new int[]{map.get(complement), i};
                }

                map.put(nums[i], i);
            }

            return new int[]{}; // If no solution is found
        }

        public static void main(String[] args) {
            int[] result1 = twoSum(new int[]{1, 5, 3, 7}, 8);
            int[] result2 = twoSum(new int[]{3, 3}, 6);

            System.out.println(java.util.Arrays.toString(result1)); // [0, 3]
            System.out.println(java.util.Arrays.toString(result2)); // [0, 1]
        }
    }
    `,

    python: `def two_sum(nums, target):
    num_map = {}  # Stores the number and its index

    for i, num in enumerate(nums):
        complement = target - num

        if complement in num_map:
            return [num_map[complement], i]

        num_map[num] = i

    return []  # If no solution is found

# Example Usage:
print(two_sum([1, 5, 3, 7], 8))  # [0, 3]
print(two_sum([3, 3], 6))        # [0, 1]
    `,
  },
};
