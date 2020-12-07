let selectedCommand = figma.command;
let mySelection = Array.from(figma.currentPage.selection);

if (mySelection.length > 1) {
  switch (selectedCommand) {
    case "reorderX":
      const sortedByX = mySelection.sort(function(a, b) {
        if (a.x < b.x) return 1;
        if (a.x > b.x) return -1;
      });

      sortedByX.forEach(function(item) {
        item.parent.appendChild(item);
      });
      figma.closePlugin("→ Reordered by X-Position.");
      break;
    case "reorderY":
      const sortedByY = mySelection.sort(function(a, b) {
        if (a.y < b.y) return 1;
        if (a.y > b.y) return -1;
      });

      sortedByY.forEach(function(item) {
        item.parent.appendChild(item);
      });
      figma.closePlugin("↓ Reordered by Y-Position.");
    default:
      figma.closePlugin("Something didn't work.");
  }
} else figma.closePlugin("Please select at least 2 layers.");
