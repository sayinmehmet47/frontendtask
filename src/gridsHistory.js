import { useId } from 'react';

export default function GridsHistory(value) {
  const gridLocation = {
    1: [1, 1],
    2: [1, 2],
    3: [1, 3],
    4: [2, 1],
    5: [2, 2],
    6: [2, 3],
    7: [3, 1],
    8: [3, 2],
    9: [3, 3],
    0: [4, 2],
    '*': [4, 1],
    '#': [4, 3],
  };

  return { value, coordinates: gridLocation[value], date: Date.now() };
}
