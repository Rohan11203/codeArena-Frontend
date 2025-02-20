

export const KIDS_CANDIES_SNIPPETS = {
    "Kids With the Greatest Number of Candies": {
      javascript: `function kidsWithCandies(candies, extraCandies) {
          let maxCandies = Math.max(...candies);
          return candies.map(candy => candy + extraCandies >= maxCandies);
      }
      
      console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); // [true, true, true, false, true]
      console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)); // [true, false, false, false, false]
      console.log(kidsWithCandies([12, 1, 12], 10));   // [true, false, true]
      `,
  
      typescript: `function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
          let maxCandies: number = Math.max(...candies);
          return candies.map(candy => candy + extraCandies >= maxCandies);
      }
      
      console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); // [true, true, true, false, true]
      console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)); // [true, false, false, false, false]
      console.log(kidsWithCandies([12, 1, 12], 10));   // [true, false, true]
      `,
  
      python: `def kids_with_candies(candies, extra_candies):
          max_candies = max(candies)
          return [candy + extra_candies >= max_candies for candy in candies]
      
print(kids_with_candies([2, 3, 5, 1, 3], 3)) # [True, True, True, False, True]
print(kids_with_candies([4, 2, 1, 1, 2], 1)) # [True, False, False, False, False]
print(kids_with_candies([12, 1, 12], 10))   # [True, False, True]
      `,
  
      java: `import java.util.*;
  
  public class KidsWithCandies {
      public static List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
          int maxCandies = Arrays.stream(candies).max().getAsInt();
          List<Boolean> result = new ArrayList<>();
          
          for (int candy : candies) {
              result.add(candy + extraCandies >= maxCandies);
          }
          return result;
      }
      
      public static void main(String[] args) {
          System.out.println(kidsWithCandies(new int[]{2, 3, 5, 1, 3}, 3)); // [true, true, true, false, true]
          System.out.println(kidsWithCandies(new int[]{4, 2, 1, 1, 2}, 1)); // [true, false, false, false, false]
          System.out.println(kidsWithCandies(new int[]{12, 1, 12}, 10));   // [true, false, true]
      }
  }
      `
    }
  };
