
# Usage

Here are some of the utility functions and classes available in this library:

## Table of Contents

- [BenchmarkUtils](#benchmarkutils)
  - [benchmarkAsync](#benchmarkasync)
  - [benchmarkIterations](#benchmarkiterations)
  - [benchmark](#benchmark)

- [ArrayUtils](#arrayutils)
  - [sample](#sample)
  - [intersect](#intersect)
  - [shuffle](#shuffle)
  - [chunk](#chunk)
  - [random](#random)
  - [unique](#unique)
  - [range](#range)
  - [flatten](#flatten)

- [DateUtils](#dateutils)
  - [addDays](#adddays)
  - [currentDayName](#currentdayname)
  - [isBefore](#isbefore)
  - [subtractDays](#subtractdays)
  - [currentDate](#currentdate)
  - [getWeekNumber](#getweeknumber)
  - [isLeapYear](#isleapyear)
  - [addMonths](#addmonths)
  - [currentYear](#currentyear)
  - [currentMonthName](#currentmonthname)
  - [isWeekend](#isweekend)
  - [differenceInDays](#differenceindays)
  - [currentMonth](#currentmonth)
  - [currentDay](#currentday)

- [FunctionUtils](#functionutils)
  - [throttle](#throttle)
  - [debounce](#debounce)
  - [curry](#curry)
  - [compose](#compose)
  - [memoize](#memoize)

- [RegexUtils](#regexutils)
  - [isEmail](#isemail)
  - [matchAll](#matchall)

- [MathUtils](#mathutils)
  - [modulus](#modulus)
  - [average](#average)
  - [factorial](#factorial)
  - [median](#median)
  - [percentOf](#percentof)
  - [randomInt](#randomint)
  - [lcm](#lcm)
  - [gdc](#gdc)
  - [ceil](#ceil)
  - [divide](#divide)
  - [floor](#floor)
  - [multiply](#multiply)
  - [isPrime](#isprime)
  - [sqrt](#sqrt)
  - [subtract](#subtract)
  - [add](#add)
  - [pow](#pow)

- [NumberUtils](#numberutils)
  - [toRoman](#toroman)
  - [toBinary](#tobinary)
  - [toOrdinal](#toordinal)
  - [fromRoman](#fromroman)
  - [randomNumber](#randomnumber)
  - [fromHex](#fromhex)
  - [toHex](#tohex)
  - [fromOrdinal](#fromordinal)
  - [isOdd](#isodd)
  - [isEven](#iseven)
  - [formatCurrency](#formatcurrency)
  - [fromBinary](#frombinary)

- [ObjectUtils](#objectutils)
  - [deepClone](#deepclone)
  - [pick](#pick)
  - [keys](#keys)
  - [hasKey](#haskey)
  - [mapKeys](#mapkeys)
  - [values](#values)
  - [merge](#merge)
  - [omit](#omit)

- [StringUtils](#stringutils)
  - [capitalize](#capitalize)
  - [countOccurrences](#countoccurrences)
  - [camelCase](#camelcase)
  - [isPalindrome](#ispalindrome)
  - [reverse](#reverse)
  - [truncate](#truncate)


## BenchmarkUtils

the following utility functions are available in the `BenchmarkUtils` class, they can be used as a static method on the `BenchmarkUtils` class or as a standalone function.


### benchmarkAsync
```typescript
/**
 * Measures the execution time of an asynchronous function.
 * @param fn - The asynchronous function to be benchmarked.
 * @param args - The arguments to be passed to the function.
 * @returns A promise that resolves with the execution time in milliseconds.
*/
```


### benchmarkIterations
```typescript
/**
 * Measures the execution time of a function by running it multiple times.
 *
 * @param fn - The function to be benchmarked.
 * @param iterations - The number of times the function should be executed.
 * @param args - The arguments to be passed to the function.
 * @returns The total execution time in milliseconds.
*/
```


### benchmark
```typescript
/**
 * Measures the execution time of a function.
 * @param fn - The function to be benchmarked.
 * @param args - The arguments to be passed to the function.
 * @returns The execution time in milliseconds.
*/
```



## ArrayUtils

the following utility functions are available in the `ArrayUtils` class, they can be used as a static method on the `ArrayUtils` class or as a standalone function.


### sample
```typescript
/**
 * Returns a random sample of elements from an array.
 * @param arr The array to sample from.
 * @param sampleSize The number of elements to include in the sample.
 * @returns An array containing a random sample of elements from the input array.
*/
```


### intersect
```typescript
/**
 * Returns an array containing the elements that are present in both input arrays.
 *
 * @template T - The type of the elements in the arrays.
 * @param a - The first input array.
 * @param b - The second input array.
 * @returns An array containing the elements that are present in both input arrays.
*/
```


### shuffle
```typescript
/**
 * Shuffles the elements of an array in place.
 *
 * @param arr - The array to be shuffled.
 * @returns A new array with the elements shuffled.
 * @template T - The type of elements in the array.
*/
```


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


### random
```typescript
/**
 * Returns a random element from the given array.
 * @param arr The array from which to select a random element.
 * @returns A random element from the array.
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


### isBefore
```typescript
/**
 * Checks if date `a` is before date `b`.
 *
 * @param a - The first date to compare.
 * @param b - The second date to compare.
 * @returns `true` if `a` is before `b`, `false` otherwise.
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


### addMonths
```typescript
/**
 * Adds the specified number of months to a given date.
 *
 * @param  date - The date to which the months should be added.
 * @param  months - The number of months to add.
 * @returns  - The new date after adding the specified number of months.
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


### isWeekend
```typescript
/**
 * Checks if a given date falls on a weekend.
 * @param  date - The date to check.
 * @returns  - Returns true if the date falls on a weekend, otherwise returns false.
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



## FunctionUtils

the following utility functions are available in the `FunctionUtils` class, they can be used as a static method on the `FunctionUtils` class or as a standalone function.


### throttle
```typescript
/**
 * Creates a throttled version of the given function.
 * The throttled function will only be invoked at most once within the specified time limit.
 *
 * @template T - The type of the original function.
 * @param  func - The original function to be throttled.
 * @param  limit - The time limit in milliseconds.
 * @returns  - The throttled function.
*/
```


### debounce
```typescript
/**
 * Creates a debounced version of the provided function.
 * The debounced function delays invoking the original function until after a specified amount of time has passed since the last time it was invoked.
 *
 * @template T - The type of the original function.
 * @param  func - The original function to be debounced.
 * @param  waitFor - The amount of time to wait before invoking the original function.
 * @returns  - The debounced function.
*/
```


### curry
```typescript
/**
 * Curries a function, allowing partial application of arguments.
 * @param fn - The function to curry.
 * @returns A curried function that can be called with partial arguments.
*/
```


### compose
```typescript
/**
 * Composes multiple functions into a single function.
 *
 * @template T - The type of the argument and return value.
 * @param  fns - The functions to compose.
 * @returns  - The composed function.
*/
```


### memoize
```typescript
/**
 * Memoizes a function by caching its results based on the arguments.
 * @param fn The function to memoize.
 * @returns The memoized function.
*/
```



## RegexUtils

the following utility functions are available in the `RegexUtils` class, they can be used as a static method on the `RegexUtils` class or as a standalone function.


### isEmail
```typescript
/**
 * Checks if a given string is a valid email address.
 * @param email - The email address to be validated.
 * @returns A boolean indicating whether the email is valid or not.
*/
```


### matchAll
```typescript
/**
 * Returns an array of all matches of a regular expression in a string.
 *
 * @template T - The type of the matched strings.
 * @param  str - The input string to search for matches.
 * @param  regex - The regular expression to match against the input string.
 * @returns  - An array of matched strings.
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


### average
```typescript
/**
 * Calculates the average of an array of numbers.
 * @param arr - The array of numbers.
 * @returns The average value.
*/
```


### factorial
```typescript
/**
 * Calculates the factorial of a given number.
 * @param n - The number to calculate the factorial for.
 * @returns The factorial of the given number.
 * @throws  If the given number is negative.
*/
```


### median
```typescript
/**
 * Calculates the median value of an array of numbers.
 *
 * @param arr - The array of numbers.
 * @returns The median value.
*/
```


### percentOf
```typescript
/**
 * Calculates the percentage of a number in relation to another number.
 *
 * @param a - The number to calculate the percentage of.
 * @param b - The total number to calculate the percentage against.
 * @returns The calculated percentage.
*/
```


### randomInt
```typescript
/**
 * Generates a random integer between the specified minimum and maximum values (inclusive).
 *
 * @param min - The minimum value of the range.
 * @param max - The maximum value of the range.
 * @returns A random integer between the minimum and maximum values.
*/
```


### lcm
```typescript
/**
 * Calculates the least common multiple (LCM) of two numbers.
 *
 * @param a - The first number.
 * @param b - The second number.
 * @returns The least common multiple of `a` and `b`.
*/
```


### gdc
```typescript
/**
 * Calculates the greatest common divisor (GCD) of two numbers.
 *
 * @param a - The first number.
 * @param b - The second number.
 * @returns The greatest common divisor of `a` and `b`.
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



## NumberUtils

the following utility functions are available in the `NumberUtils` class, they can be used as a static method on the `NumberUtils` class or as a standalone function.


### toRoman
```typescript
/**
 * Converts a number to its Roman numeral representation.
 * @param num - The number to be converted to Roman numeral.
 * @returns A string representing the Roman numeral.
*/
```


### toBinary
```typescript
/**
 * Converts a number to its binary representation.
 * @param value - The number to convert.
 * @returns The binary representation of the number.
*/
```


### toOrdinal
```typescript
/**
 * Converts a number to its ordinal representation.
 *
 * @param num - The number to convert.
 * @returns The ordinal representation of the number.
*/
```


### fromRoman
```typescript
/**
 * Converts a Roman numeral string to a number.
 *
 * @param str - The Roman numeral string to convert.
 * @returns The converted number.
*/
```


### randomNumber
```typescript
/**
 * Generates a random number between the specified minimum and maximum values (inclusive).
 * @param min The minimum value of the range.
 * @param max The maximum value of the range.
 * @returns A random number between the minimum and maximum values.
*/
```


### fromHex
```typescript
/**
 * Converts a hexadecimal string to a number.
 *
 * @param hexString - The hexadecimal string to convert.
 * @returns The converted number.
*/
```


### toHex
```typescript
/**
 * Converts a number to its hexadecimal representation.
 * @param value - The number to convert.
 * @returns The hexadecimal representation of the number.
*/
```


### fromOrdinal
```typescript
/**
 * Converts a string representing an ordinal number to its corresponding numeric value.
 *
 * @param n - The string representing the ordinal number. (e.g. "1st", "2nd", "3rd", "4th", etc.)
 * @returns The numeric value of the ordinal number.
*/
```


### isOdd
```typescript
/**
 * Checks if a number is odd.
 * @param n - The number to check.
 * @returns True if the number is odd, false otherwise.
*/
```


### isEven
```typescript
/**
 * Checks if a number is even.
 * @param n - The number to check.
 * @returns True if the number is even, false otherwise.
*/
```


### formatCurrency
```typescript
/**
 * Formats a number as currency.
 *
 * @param num - The number to format.
 * @param currency - The currency symbol to use (default: "$").
 * @returns The formatted currency string.
*/
```


### fromBinary
```typescript
/**
 * Converts a binary string to a number.
 *
 * @param binaryString The binary string to convert.
 * @returns The converted number.
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


### hasKey
```typescript
/**
 * Checks if an object has a specific key.
 *
 * @param obj - The object to check.
 * @param key - The key to check for.
 * @returns A boolean indicating whether the object has the specified key.
*/
```


### mapKeys
```typescript
/**
 * Maps the keys of an object using a provided function.
 *
 * @param obj - The object whose keys will be mapped.
 * @param fn - The function to apply to each key-value pair. It takes the key and value as arguments and returns the new key.
 * @returns A new object with the mapped keys.
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


### omit
```typescript
/**
 * Creates a new object with the specified keys omitted.
 *
 * @param obj - The object from which to omit keys.
 * @param keys - An array of keys to omit from the object.
 * @returns A new object with the specified keys omitted.
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


### countOccurrences
```typescript
/**
 * Counts the number of occurrences of a substring within a string.
 *
 * @param str - The string to search within.
 * @param substr - The substring to count occurrences of.
 * @returns The number of occurrences of the substring within the string.
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


### truncate
```typescript
/**
 * Truncates a string to a specified length and appends an optional ending.
 * @param str The string to truncate.
 * @param length The maximum length of the truncated string.
 * @param ending The optional ending to append to the truncated string. Default is "...".
 * @returns The truncated string.
*/
```


    

## License

This library is licensed under the MIT License.

