import { Counter } from './counter';

const start = async () => {
  console.log('initial values');

  const [getCounterValue, incrementCounterValue] = Counter(1);
  console.log(getCounterValue());
  incrementCounterValue();

  const obj = Counter(100);
  console.log(obj[0]());
  obj[1]();

  const obj2 = Counter();
  console.log(obj2[0]());
  obj2[1]();

  console.log('\nafter incrementing');
  console.log(getCounterValue());
  console.log(obj[0]());
  console.log(obj2[0]());
};

function printError(error: any) {
  console.log('====================ERROR========================\n');
  console.error('%s', error);
}

process.on('uncaughtException', function (err) {
  if ((err as any).code === 'ENOTFOUND') {
    printError('Internet Connection Lost!\n');
  } else {
    printError(err);
  }
});

process.on('unhandledRejection', function (err) {
  printError(err);
});

try {
  start();
} catch (err: any) {
  printError(err);
}
