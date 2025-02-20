import { KIDS_CANDIES_SNIPPETS } from "../kids-gretest-no-candies/constant";
import { MERGE_SNIPPETS } from "../merge-string-problem/constant";
import { REVERSE_STRING_SNIPPET } from "../reverse-string-problem/constant";
import { TOW_SUM_SNIPPETS } from "../two-sum-problem/constant";

export const PRODUCT_OF_ARRAY_SNIPPET = {
    "Product of Array Except Self": {
        javascript: `function productExceptSelf(nums) {
            let n = nums.length;
            let result = new Array(n).fill(1);
            
            let prefix = 1;
            for (let i = 0; i < n; i++) {
                result[i] = prefix;
                prefix *= nums[i];
            }
            
            let suffix = 1;
            for (let i = n - 1; i >= 0; i--) {
                result[i] *= suffix;
                suffix *= nums[i];
            }
            
            return result;
        }
        
        console.log(productExceptSelf([2, 3, 4, 5])); // [60, 40, 30, 24]
        console.log(productExceptSelf([10, 0, 5, 2])); // [0, 100, 0, 0]
        `,
        
        typescript: `function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const result: number[] = Array(n); // Create an empty array

    for (let i = 0; i < n; i++) {
        result[i] = 1; // Manually set all values to 1
    }

    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    return result;
}

console.log(productExceptSelf([2, 3, 4, 5])); // [60, 40, 30, 24]
console.log(productExceptSelf([10, 0, 5, 2])); // [0, 100, 0, 0]

        `,

        python: `def product_except_self(nums):
            n = len(nums)
            result = [1] * n

            prefix = 1
            for i in range(n):
                result[i] = prefix
                prefix *= nums[i]

            suffix = 1
            for i in range(n - 1, -1, -1):
                result[i] *= suffix
                suffix *= nums[i]

            return result

print(product_except_self([2, 3, 4, 5])) # [60, 40, 30, 24]
print(product_except_self([10, 0, 5, 2])) # [0, 100, 0, 0]
        `,

        java: `import java.util.Arrays; // Import required for Arrays.toString

public class ProductOfArray {
    public static int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];

        int prefix = 1;
        for (int i = 0; i < n; i++) {
            result[i] = prefix;
            prefix *= nums[i];
        }

        int suffix = 1;
        for (int i = n - 1; i >= 0; i--) {
            result[i] *= suffix;
            suffix *= nums[i];
        }

        return result;
    }

    public static void main(String[] args) {
        int[] arr1 = {2, 3, 4, 5};
        int[] arr2 = {10, 0, 5, 2};

        System.out.println(Arrays.toString(productExceptSelf(arr1))); // [60, 40, 30, 24]
        System.out.println(Arrays.toString(productExceptSelf(arr2))); // [0, 0, 0, 0]
    }
}

        `
    }
};

export const ALL_PROBLEM_SNIPPETS = { ...TOW_SUM_SNIPPETS, ...MERGE_SNIPPETS, ...KIDS_CANDIES_SNIPPETS, ...REVERSE_STRING_SNIPPET, ...PRODUCT_OF_ARRAY_SNIPPET };
