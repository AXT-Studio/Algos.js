

import * as assert from 'assert';
import { binary_search, lower_bound, upper_bound } from '../main.mjs';

const numCompare = (a, b) => a - b;

console.log('Running tests for binary_search...');

// Test cases for binary_search
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
assert.strictEqual(binary_search(arr1, 5, numCompare), true, 'Test 1-1 Failed: 5 should be in arr1');
assert.strictEqual(binary_search(arr1, 0, numCompare), false, 'Test 1-2 Failed: 0 should not be in arr1');
assert.strictEqual(binary_search(arr1, 11, numCompare), false, 'Test 1-3 Failed: 11 should not be in arr1');
assert.strictEqual(binary_search(arr1, 1, numCompare), true, 'Test 1-4 Failed: 1 should be in arr1 (first element)');
assert.strictEqual(binary_search(arr1, 10, numCompare), true, 'Test 1-5 Failed: 10 should be in arr1 (last element)');

const arr2 = [2, 2, 2, 2, 2];
assert.strictEqual(binary_search(arr2, 2, numCompare), true, 'Test 2-1 Failed: 2 should be in arr2');
assert.strictEqual(binary_search(arr2, 3, numCompare), false, 'Test 2-2 Failed: 3 should not be in arr2');

const arr3 = [];
assert.strictEqual(binary_search(arr3, 1, numCompare), false, 'Test 3-1 Failed: Should return false for empty array');

const arr4 = [1];
assert.strictEqual(binary_search(arr4, 1, numCompare), true, 'Test 4-1 Failed: 1 should be in arr4');
assert.strictEqual(binary_search(arr4, 0, numCompare), false, 'Test 4-2 Failed: 0 should not be in arr4');

const strArr = ['a', 'b', 'c', 'd', 'e'];
assert.strictEqual(binary_search(strArr, 'c'), true, 'Test 5-1 Failed: "c" should be in strArr');
assert.strictEqual(binary_search(strArr, 'f'), false, 'Test 5-2 Failed: "f" should not be in strArr');

console.log('All binary_search tests passed!');

console.log('\nRunning tests for lower_bound...');

// Test cases for lower_bound
const arr5 = [1, 2, 4, 5, 5, 6];
assert.strictEqual(lower_bound(arr5, 3, numCompare), 2, 'Test 6-1 Failed: lower_bound for 3 should be 2');
assert.strictEqual(lower_bound(arr5, 5, numCompare), 3, 'Test 6-2 Failed: lower_bound for 5 should be 3');
assert.strictEqual(lower_bound(arr5, 0, numCompare), 0, 'Test 6-3 Failed: lower_bound for 0 should be 0');
assert.strictEqual(lower_bound(arr5, 7, numCompare), 6, 'Test 6-4 Failed: lower_bound for 7 should be 6 (arr.length)');
assert.strictEqual(lower_bound(arr5, 1, numCompare), 0, 'Test 6-5 Failed: lower_bound for 1 should be 0');
assert.strictEqual(lower_bound(arr5, 6, numCompare), 5, 'Test 6-6 Failed: lower_bound for 6 should be 5');

const arr6 = [];
assert.strictEqual(lower_bound(arr6, 5, numCompare), 0, 'Test 7-1 Failed: lower_bound for empty array should be 0');

const arr7 = [3, 3, 3, 3];
assert.strictEqual(lower_bound(arr7, 3, numCompare), 0, 'Test 8-1 Failed: lower_bound for 3 in all-same-element array should be 0');
assert.strictEqual(lower_bound(arr7, 4, numCompare), 4, 'Test 8-2 Failed: lower_bound for 4 in all-same-element array should be 4');

console.log('All lower_bound tests passed!');

console.log('\nRunning tests for upper_bound...');

// Test cases for upper_bound
const arr8 = [1, 2, 4, 5, 5, 6];
assert.strictEqual(upper_bound(arr8, 3, numCompare), 2, 'Test 9-1 Failed: upper_bound for 3 should be 2');
assert.strictEqual(upper_bound(arr8, 5, numCompare), 5, 'Test 9-2 Failed: upper_bound for 5 should be 5');
assert.strictEqual(upper_bound(arr8, 0, numCompare), 0, 'Test 9-3 Failed: upper_bound for 0 should be 0');
assert.strictEqual(upper_bound(arr8, 7, numCompare), 6, 'Test 9-4 Failed: upper_bound for 7 should be 6 (arr.length)');
assert.strictEqual(upper_bound(arr8, 1, numCompare), 1, 'Test 9-5 Failed: upper_bound for 1 should be 1');
assert.strictEqual(upper_bound(arr8, 6, numCompare), 6, 'Test 9-6 Failed: upper_bound for 6 should be 6 (arr.length)');

const arr9 = [];
assert.strictEqual(upper_bound(arr9, 5, numCompare), 0, 'Test 10-1 Failed: upper_bound for empty array should be 0');

const arr10 = [3, 3, 3, 3];
assert.strictEqual(upper_bound(arr10, 3, numCompare), 4, 'Test 11-1 Failed: upper_bound for 3 in all-same-element array should be 4');
assert.strictEqual(upper_bound(arr10, 2, numCompare), 0, 'Test 11-2 Failed: upper_bound for 2 in all-same-element array should be 0');

// Test with custom compare function (already correct)
const arr11 = [10, 20, 30, 40, 50];
assert.strictEqual(binary_search(arr11, 30, numCompare), true, 'Test 12-1 Failed: Custom compare binary_search');
assert.strictEqual(lower_bound(arr11, 25, numCompare), 2, 'Test 12-2 Failed: Custom compare lower_bound');
assert.strictEqual(upper_bound(arr11, 25, numCompare), 2, 'Test 12-3 Failed: Custom compare upper_bound');

console.log('All upper_bound tests passed!');

console.log('\nAll tests completed successfully!');
