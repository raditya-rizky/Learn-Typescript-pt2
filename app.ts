function add(n1: number, n2: number, type: string) {
  let result: string;
  if (type === "addition") {
    return (result = `The result of the ${type} of ${n1} and ${n2} is ${
      n1 + n2
    }`);
  } else if (type === "substractions") {
    return (result = `The result of the ${type} of ${n1} and ${n2} is ${
      n1 - n2
    }`);
  } else if (type === "division") {
    return (result = `The result of the ${type} of ${n1} and ${n2} is ${
      n1 / n2
    }`);
  } else if (type === "multiplication") {
    return (result = `The result of the ${type} of ${n1} and ${n2} is ${
      n1 * n2
    }`);
  }
  return;
}

console.log(add(12, 15, "division"));
