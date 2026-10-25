function test() {
  if (true) {
    var y = 20; // y is block-scoped
    const z = 30; // z is also block-scoped
  }

  console.log(y);  // Error: y is not defined
  // console.log(z);  // Error: z is not defined
}

test();
