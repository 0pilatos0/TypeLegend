
#Usage

Here are some of the utility functions and classes available in this library:


## DateUtils

### addDays.ts
```typescript
/**
* Adds the specified number of days to a given date.
 * @param date - The date to add days to.
 * @param days - The number of days to add.
 * @returns A new Date object representing the result of adding the specified number of days to the given date.
*/
```


### currentDayName.ts
```typescript
/**
* Returns the name of the current day of the week.
 * @returns {string} The name of the current day of the week.
*/
```


### subtractDays.ts
```typescript
/**
* Subtracts the specified number of days from a given date.
 *
 * @param date - The date to subtract days from.
 * @param days - The number of days to subtract.
 * @returns A new Date object representing the result of the subtraction.
*/
```


### currentDate.ts
```typescript
/**
* Returns the current date and time.
 * @returns {Date} The current date and time.
*/
```


### getWeekNumber.ts
```typescript
/**
* Calculates the week number of a given date.
 *
 * @param date - The date for which to calculate the week number.
 * @returns The week number of the given date.
*/
```


### isLeapYear.ts
```typescript
/**
* Checks if a given year is a leap year.
 * @param date - The date object representing the year.
 * @returns A boolean value indicating whether the year is a leap year.
*/
```


### currentYear.ts
```typescript
/**
* Returns the current year as a number.
 * @returns {number} The current year.
*/
```


### currentMonthName.ts
```typescript
/**
* Returns the name of the current month.
 * @returns {string} The name of the current month.
*/
```


### differenceInDays.ts
```typescript
/**
* Calculates the difference in days between two dates.
 * @param dateLeft The first date.
 * @param dateRight The second date.
 * @returns The difference in days between the two dates.
*/
```


### currentMonth.ts
```typescript
/**
* Returns the current month as a number.
 * @returns {number} The current month as a number (1-12).
*/
```


### currentDay.ts
```typescript
/**
* Returns the current day of the month.
 * @returns {number} The current day of the month.
*/
```



## MathUtils

### modulus.ts
```typescript
/**
* Calculates the modulus of two numbers.
 *
 * @param a - The dividend.
 * @param b - The divisor.
 * @returns The remainder after dividing `a` by `b`.
*/
```


### ceil.ts
```typescript
/**
* Returns the smallest integer greater than or equal to a given number, rounded to a specified precision.
 * @param number - The number to round up.
 * @param precision - The number of decimal places to round up to. Defaults to 0.
 * @returns The rounded up number.
*/
```


### divide.ts
```typescript
/**
* Divides two numbers.
 * @param a The dividend.
 * @param b The divisor.
 * @returns The quotient of the two numbers.
*/
```


### floor.ts
```typescript
/**
* Returns the largest integer less than or equal to a given number, with optional precision.
 *
 * @param number - The number to round down.
 * @param precision - The number of decimal places to preserve. Defaults to 0.
 * @returns The rounded down number.
 *
 * @example
 * ```
 * floor(4.9); // 4
 * floor(4.12345, 3); // 4.123
 * ```
*/
```


### multiply.ts
```typescript
/**
* Multiplies two numbers.
 * @param a The first number to multiply.
 * @param b The second number to multiply.
 * @returns The product of the two numbers.
*/
```


### isPrime.ts
```typescript
/**
* Checks if a number is prime.
 * @param a - The number to check.
 * @returns True if the number is prime, false otherwise.
*/
```


### sqrt.ts
```typescript
/**
* Calculates the square root of a number.
 * @param a - The number to calculate the square root of.
 * @returns The square root of the input number.
*/
```


### subtract.ts
```typescript
/**
* Subtracts two numbers.
 *
 * @param a The first number.
 * @param b The second number.
 * @returns The result of subtracting `b` from `a`.
*/
```


### add.ts
```typescript
/**
* Adds two numbers together.
 * @param a - The first number to add.
 * @param b - The second number to add.
 * @returns The sum of the two numbers.
*/
```


### pow.ts
```typescript
/**
* Calculates the power of a number.
 * @param a - The base number.
 * @param b - The exponent.
 * @returns The result of raising `a` to the power of `b`.
*/
```



## StringUtils

### capitalize.ts
```typescript
/**
* Capitalizes the first letter of a string and makes the rest of the string lowercase.
 * @param str - The string to be capitalized.
 * @returns The capitalized string.
*/
```


### camelCase.ts
```typescript
/**
* Converts a string to camelCase.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The camelCase version of the input string.
* Replaces non-letter characters with camelCase formatting.
   *
   * @param {string} word - The matched word or character.
   * @param {number} index - The index of the matched word or character.
   * @returns {string} The replacement for the matched word or character.
*/
```


### isPalindrome.ts
```typescript
/**
* Checks if a string is a palindrome.
 * @param str - The string to check.
 * @returns True if the string is a palindrome, false otherwise.
*/
```


### reverse.ts
```typescript
/**
* Reverses a given string.
 *
 * @param str - The string to be reversed.
 * @returns The reversed string.
*/
```


    

## License

This library is licensed under the MIT License.

