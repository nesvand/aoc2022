// Advent of Code - Day 20 - Part Two

export function part2(input: string): number {
  const steps = input
    .split('\n')
    .filter(Boolean)
    .map((x, i) => ({ originalPosition: i, value: parseInt(x, 10) * 811589153 }));
  const state = [...steps];

  for (let i = 0; i < 10; i++) {
    for (const step of steps) {
      const itemIndex = state.indexOf(step);
      const n = step.value;
      state.splice(itemIndex, 1);
      state.splice((itemIndex + n) % state.length, 0, step);
    }
  }

  const i = state.findIndex(x => x.value === 0);

  return state[(i + 1000) % state.length].value + state[(i + 2000) % state.length].value + state[(i + 3000) % state.length].value;
}
