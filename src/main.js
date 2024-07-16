import createShapeit from "./shapeit";

if (typeof window !== "undefined") {
  window.createShapeit = createShapeit;
} else {
  const uglySquare = [
    [-0.1, 0],
    [4.9, 0.2],
    [10.1, -0.1],
    [10.2, 4.9],
    [9.9, 9.8],
    [5.1, 9.9],
    [0.1, 10],
    [-0.1, 4.7],
    [0.1, -0.1],
  ];

  const prettySquare = createShapeit(uglySquare);

  console.log(prettySquare);
  console.log(prettySquare.name);
}
