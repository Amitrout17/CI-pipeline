function A(x) {
  function B(y) {
    function c(z) {
      console.log(x + y + z);
    }
    c(3);
  }
  B(2);
}
A(2);