// Advent of Code - Day 1

import { readFile } from 'fs/promises';
import { part1, part2 } from '.';

(async function () {
  try {
    const input: string = await readFile('src/day01/resources/input.txt', 'utf8');

    console.log('--- Part One ---');
    console.log('Result', part1(input));

    console.log('--- Part Two ---');
    console.log('Result', part2(input));
  } catch (err) {
    console.error(err);
  }
})();
