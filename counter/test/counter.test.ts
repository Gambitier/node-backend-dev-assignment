import { Counter } from '../counter';

describe('Given no initial value', () => {
  const [getCounterValue, incrementCounterValue] = Counter();

  test('counter to be initialized to 0', () => {
    const initialValue = getCounterValue();
    expect(initialValue).toEqual(0);
  });

  test('after incrementing counter, value should be 1', () => {
    incrementCounterValue();
    const incrementedValue = getCounterValue();
    expect(incrementedValue).toEqual(1);
  });
});

describe('Given no initial value 100', () => {
  const [getCounterValue, incrementCounterValue] = Counter(100);

  test('counter to be initialized to 100', () => {
    const initialValue = getCounterValue();
    expect(initialValue).toEqual(100);
  });

  test('after incrementing counter, value should be 101', () => {
    incrementCounterValue();
    const incrementedValue = getCounterValue();
    expect(incrementedValue).toEqual(101);
  });
});
