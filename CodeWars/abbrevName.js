function abbrevName(name) {
  return name
    .split(" ")
    .map((ele) => ele[0].toUpperCase())
    .join(".");
}
