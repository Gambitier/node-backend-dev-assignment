interface CounterConstructor {
  (intialValue?: number): [
    getCounterValue: () => number,
    incrementCounterValue: () => void
  ];
}

export const Counter = function Counter(intialValue?: number) {
  let counter = intialValue ?? 0;

  const getCounterValue = function () {
    return counter;
  };

  const incrementCounterValue = function () {
    counter = counter + 1;
  };

  return [getCounterValue, incrementCounterValue];
} as CounterConstructor;
