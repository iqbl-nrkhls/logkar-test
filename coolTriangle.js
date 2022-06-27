const generateCoolTriangle = (high) => {
  for (let i = 0; i < high; i++) {
    if (i === 0){
      console.log('*');
    } else if (i === high - 1) {
      console.log('*'.repeat(high));
    } else {
      console.log(`*${' '.repeat(i - 1)}*`);
    }
  }
}

generateCoolTriangle(8);