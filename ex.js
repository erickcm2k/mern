const car = {
  engine: {
    model: "asvvs",
    hp: 300,
  },
  seats: {
    total: 7,
    foldable: 2,
  },
};

const copy = {
  ...car,
};
const modified = {
  ...car,
  engine: {
      ...car.engine,
    model: "abcde",
    serial: '3j4r3'
  },
};

console.log(car);
console.log(copy);
console.log(modified);
