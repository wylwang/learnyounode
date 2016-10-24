var sumret = 0;
for (i = 2; i < process.argv.length; i++) {
  sumret = Number(sumret) + Number(process.argv[i]);
}
console.log(sumret);
