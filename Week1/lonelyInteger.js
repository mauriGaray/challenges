function lonelyinteger(a) {
  let testigo = 0;
  let cont = 0;
  for (let i = 0; i < a.length; i++) {
    testigo = a[i];
    for (let j = 0; j < a.length; j++) {
      if (a[j] === testigo) {
        cont = cont + 1;
      }
    }
    if (cont === 1) {
      console.log(a[i]);
      return a[i];
    }
    cont = 0;
  }
}
// Me olvidé de reiniciar el cont en cada iteración mayor.
lonelyinteger([1, 2, 3, 4, 4, 15, 3, 2, 1]);
