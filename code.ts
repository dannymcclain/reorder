let mySelection = Array.from(figma.currentPage.selection);

const sortedSelection = mySelection.sort(function(a, b) {
  // return b.x - a.x;
  if (a.x < b.x) return 1;
  if (a.x > b.x) return -1;
});

// sortedSelection.forEach(function(item) {
//   console.log(item.name);
//   item.parent.appendChild(item);
// });

// what if you append the children, create a clone of the array, reverse it, and then update x
// positions? or maybe not even the cloning part?

sortedSelection.forEach(function(item) {
  // let newSort = sortedSelection.children.clone();
  // newSort.reverse();
  console.log(item.name);
  let currentIndex = sortedSelection.indexOf(item);
  if (currentIndex !== sortedSelection.length - 1) {
    let newXP =
      sortedSelection[currentIndex + 1].x +
      sortedSelection[currentIndex + 1].width +
      50;
    item.x = newXP;
  }
  item.parent.appendChild(item);
});
// sortedSelection.forEach(function(item) {
//   let i = sortedSelection.indexOf(item);
//   let pLength = item.parent.children.length - 1;
//   item.parent.insertChild(pLength - i, item);
// });

// figma.viewport.scrollAndZoomIntoView(mySelection);
figma.closePlugin("Sorted!");
