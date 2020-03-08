var testModule = (function () {
  let counter = 0;

  privateMetodo = function (foo) {
    console.log(foo)
  }
  return {
    incrementCounter: function () {
      return counter++;
    },

    resetCounter: function () {
      console.log(`Counter value prior to reset: ${counter}`);
      counter = 0;
      privateMetodo('Hola Lott');
    }
  };

})();

testModule.incrementCounter();

testModule.resetCounter();


