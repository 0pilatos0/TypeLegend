
# Usage

Here are some of the utility functions and classes available in this library:

## Table of Contents

- [ArrayUtils](#arrayutils)
  - [chunk](#chunk)
  - [unique](#unique)
  - [range](#range)
  - [flatten](#flatten)

- [DateUtils](#dateutils)
  - [addDays](#adddays)
  - [currentDayName](#currentdayname)
  - [subtractDays](#subtractdays)
  - [currentDate](#currentdate)
  - [getWeekNumber](#getweeknumber)
  - [isLeapYear](#isleapyear)
  - [currentYear](#currentyear)
  - [currentMonthName](#currentmonthname)
  - [differenceInDays](#differenceindays)
  - [currentMonth](#currentmonth)
  - [currentDay](#currentday)

- [MathUtils](#mathutils)
  - [modulus](#modulus)
  - [ceil](#ceil)
  - [divide](#divide)
  - [floor](#floor)
  - [multiply](#multiply)
  - [isPrime](#isprime)
  - [sqrt](#sqrt)
  - [subtract](#subtract)
  - [add](#add)
  - [pow](#pow)

- [ObjectUtils](#objectutils)
  - [deepClone](#deepclone)
  - [pick](#pick)
  - [keys](#keys)
  - [values](#values)
  - [merge](#merge)

- [StringUtils](#stringutils)
  - [capitalize](#capitalize)
  - [camelCase](#camelcase)
  - [isPalindrome](#ispalindrome)
  - [reverse](#reverse)


## ArrayUtils

the following utility functions are available in the `ArrayUtils` class, they can be used as a static method on the `ArrayUtils` class or as a standalone function.


### chunk
```typescript
/**
 * Splits an array into smaller chunks of a specified size.
 *
 * @template T The type of elements in the array.
 * @param arr The array to be chunked.
 * @param size The size of each chunk. Default is 1.
 * @returns An array of chunks, where each chunk is an array of elements from the original array.
*/
```


### unique
```typescript
/**
 * Returns an array with unique elements from the input array.
 * @param arr The input array.
 * @returns An array with unique elements.
 * @template T The type of elements in the array.
*/
```


### range
```typescript
/**
 * Returns a new array containing a portion of the original array.
 * @template T The type of elements in the array.
 * @param  arr The original array.
 * @param  [start=0] The starting index (inclusive) of the portion to extract. Defaults to 0.
 * @param  [end=arr.length] The ending index (exclusive) of the portion to extract. Defaults to the length of the array.
 * @returns  A new array containing the extracted portion of the original array.
*/
```


### flatten
```typescript
/**
 * Flattens a multi-dimensional array into a 1-dimensional array.
 *
 * @param arr The multi-dimensional array to flatten.
 * @returns A new 1-dimensional array containing all the elements from the original array.
 * @template T The type of elements in the array.
*/
```



## DateUtils

the following utility functions are available in the `DateUtils` class, they can be used as a static method on the `DateUtils` class or as a standalone function.


### addDays
```typescript
/**
 * Adds the specified number of days to a given date.
 * @param date - The date to add days to.
 * @param days - The number of days to add.
 * @returns A new Date object representing the result of adding the specified number of days to the given date.
*/
```


### currentDayName
```typescript
/**
 * Returns the name of the current day of the week.
 * @returns  The name of the current day of the week.
*/
```


### subtractDays
```typescript
/**
 * Subtracts the specified number of days from a given date.
 *
 * @param date - The date to subtract days from.
 * @param days - The number of days to subtract.
 * @returns A new Date object representing the result of the subtraction.
*/
```


### currentDate
```typescript
/**
 * Returns the current date and time.
 * @returns  The current date and time.
*/
```


### getWeekNumber
```typescript
/**
 * Calculates the week number of a given date.
 *
 * @param date - The date for which to calculate the week number.
 * @returns The week number of the given date.
*/
```


### isLeapYear
```typescript
/**
 * Checks if a given year is a leap year.
 * @param date - The date object representing the year.
 * @returns A boolean value indicating whether the year is a leap year.
*/
```


### currentYear
```typescript
/**
 * Returns the current year as a number.
 * @returns  The current year.
*/
```


### currentMonthName
```typescript
/**
 * Returns the name of the current month.
 * @returns  The name of the current month.
*/
```


### differenceInDays
```typescript
/**
 * Calculates the difference in days between two dates.
 * @param dateLeft The first date.
 * @param dateRight The second date.
 * @returns The difference in days between the two dates.
*/
```


### currentMonth
```typescript
/**
 * Returns the current month as a number.
 * @returns  The current month as a number (1-12).
*/
```


### currentDay
```typescript
/**
 * Returns the current day of the month.
 * @returns  The current day of the month.
*/
```



## MathUtils

the following utility functions are available in the `MathUtils` class, they can be used as a static method on the `MathUtils` class or as a standalone function.


### modulus
```typescript
/**
 * Calculates the modulus of two numbers.
 *
 * @param a - The dividend.
 * @param b - The divisor.
 * @returns The remainder after dividing `a` by `b`.
*/
```


### ceil
```typescript
/**
 * Returns the smallest integer greater than or equal to a given number, rounded to a specified precision.
 * @param number - The number to round up.
 * @param precision - The number of decimal places to round up to. Defaults to 0.
 * @returns The rounded up number.
*/
```


### divide
```typescript
/**
 * Divides two numbers.
 * @param a The dividend.
 * @param b The divisor.
 * @returns The quotient of the two numbers.
*/
```


### floor
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


### multiply
```typescript
/**
 * Multiplies two numbers.
 * @param a The first number to multiply.
 * @param b The second number to multiply.
 * @returns The product of the two numbers.
*/
```


### isPrime
```typescript
/**
 * Checks if a number is prime.
 * @param a - The number to check.
 * @returns True if the number is prime, false otherwise.
*/
```


### sqrt
```typescript
/**
 * Calculates the square root of a number.
 * @param a - The number to calculate the square root of.
 * @returns The square root of the input number.
*/
```


### subtract
```typescript
/**
 * Subtracts two numbers.
 *
 * @param a The first number.
 * @param b The second number.
 * @returns The result of subtracting `b` from `a`.
*/
```


### add
```typescript
/**
 * Adds two numbers together.
 * @param a - The first number to add.
 * @param b - The second number to add.
 * @returns The sum of the two numbers.
*/
```


### pow
```typescript
/**
 * Calculates the power of a number.
 * @param a - The base number.
 * @param b - The exponent.
 * @returns The result of raising `a` to the power of `b`.
*/
```



## ObjectUtils

the following utility functions are available in the `ObjectUtils` class, they can be used as a static method on the `ObjectUtils` class or as a standalone function.


### deepClone
```typescript
/**
 * Creates a deep clone of an object.
 *
 * @param obj - The object to be cloned.
 * @returns A deep clone of the object.
*/
```


### pick
```typescript
/**
 * Creates a new object with only the specified keys from the original object.
 *
 * @template T - The type of the original object.
 * @template K - The type of the keys to pick from the original object.
 * @param obj - The original object.
 * @param keys - An array of keys to pick from the original object.
 * @returns A new object with only the specified keys from the original object.
*/
```


### keys
```typescript
/**
 * Returns an array of keys from the given object.
 *
 * @template T - The type of the object.
 * @param obj - The object to retrieve keys from.
 * @returns An array of keys from the object.
*/
```


### values
```typescript
/**
 * Returns an array of the values of an object.
 *
 * @template T - The type of the object.
 * @param obj - The object to extract values from.
 * @returns An array containing the values of the object.
*/
```


### merge
```typescript
/**
 * Merges two objects together.
 * @template T - The type of the first object.
 * @template U - The type of the second object.
 * @param  obj1 - The first object to merge.
 * @param  obj2 - The second object to merge.
 * @returns  - The merged object.
*/
```



## StringUtils

the following utility functions are available in the `StringUtils` class, they can be used as a static method on the `StringUtils` class or as a standalone function.


### capitalize
```typescript
/**
 * Capitalizes the first letter of a string and makes the rest of the string lowercase.
 * @param str - The string to be capitalized.
 * @returns The capitalized string.
*/
```


### camelCase
```typescript
/**
 * Converts a string to camelCase.
 *
 * @param  str - The input string to convert.
 * @returns  The camelCase version of the input string.
*/
```


### isPalindrome
```typescript
/**
 * Checks if a string is a palindrome.
 * @param str - The string to check.
 * @returns True if the string is a palindrome, false otherwise.
*/
```


### reverse
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

