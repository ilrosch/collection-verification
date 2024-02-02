/* eslint-disable */
import {
  findLongestWord, sumUniqueNumbers, mergeArrays, hasProperty, getPropertyValue, invertObject,
} from '../index';

test('Testing function findLongestWord', () => {
  const test1 = ['Java', 'Python', 'JavaScript'];
  const test2 = ['football', 'basketball', 'tennis'];
  const test3 = ['sun', 'moon', 'stars'];
  const test4 = [];


  expect(findLongestWord(test1)).toBe('JavaScript');
  expect(findLongestWord(test2)).toBe('basketball');
  expect(findLongestWord(test3)).toBe('stars');
  expect(findLongestWord(test4)).toBe(null);
});

test('Testing function sumUniqueNumbers', () => {
  const test1 = [1, 2, 3, 2, 4, 3, 5];
  const test2 = [10, 20, 10, 20, 30];
  const test3 = [0, -1, -2, -1, -3];
  const test4 = [];

  expect(sumUniqueNumbers(test1)).toBe(15);
  expect(sumUniqueNumbers(test2)).toBe(60);
  expect(sumUniqueNumbers(test3)).toBe(-6);
  expect(sumUniqueNumbers(test4)).toBe(0);
});

test('Testing function mergeArrays', () => {
  expect(mergeArrays([1, 2, 3], [4, 5, 6], [7, 8, 9], [2, 3, 4])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(mergeArrays([1, 3, 5], [2, 4, 6], [3, 5, 7])).toEqual([1, 3, 5, 2, 4, 6, 7]);
  expect(mergeArrays([1, 1, 2, 2], [])).toEqual([1, 2]);
});

test('Testing function hasProperty', () => {
  expect(hasProperty({ name: 'Alice', age: 25 }, 'age')).toBe(true);
  expect(hasProperty({ name: 'Bob', country: 'France' }, 'gender')).toBe(false);
  expect(hasProperty({ type: 'fruit', color: 'red' }, 'color')).toBe(true);
});

test('Testing function getPropertyValue', () => {
  expect(getPropertyValue({ name: 'Alice', age: 25 }, 'name')).toBe('Alice');
  expect(getPropertyValue({ brand: 'Toyota', model: 'Camry' }, 'year')).toBe(undefined);
  expect(getPropertyValue({ type: 'laptop', brand: 'Dell' }, 'brand')).toBe('Dell');
});

test('Testing function invertObject', () => {
  const test1 = { a: 1, b: 2 };
  const test2 = { a: 1, b: 2, c: 1 };
  const test3 = { a: 1, b: 1, c: 1 };
  const test4 = {};

  expect(invertObject(test1)).toEqual({ 1: 'a', 2: 'b' });
  expect(invertObject(test2)).toEqual({ 1: 'c', 2: 'b' });
  expect(invertObject(test3)).toEqual({ 1: 'c' });
  expect(invertObject(test4)).toEqual({});
});
