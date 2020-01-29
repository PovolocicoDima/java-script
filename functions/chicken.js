function chichen() {
  return egg();
}
function egg() {
  return chichen();
}

console.log(chichen() + 'came first.');
