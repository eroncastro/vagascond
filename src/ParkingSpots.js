const buildingA = [
  { apartment: 11, building: 'a', garage: { spot: [22, 23], type: 'double', floor: -1 }, partner: { apartment: 63, building: 'a' } },
  { apartment: 12, building: 'a', garage: { spot: [27, 28], type: 'double', floor: -1 }, partner: { apartment: 96, building: 'a' } },
  { apartment: 13, building: 'a', garage: { spot: 275, type: 'uncovered', floor: -1 }, partner: null },
  { apartment: 14, building: 'a', garage: { spot: 287, type: 'uncovered', floor: -1 }, partner: null },
  { apartment: 15, building: 'a', garage: { spot: [75, 76], type: 'double', floor: -1 }, partner: { apartment: 102, building: 'a' } },
  { apartment: 16, building: 'a', garage: { spot: [33, 34], type: 'double', floor: -1 }, partner: { apartment: 17, building: 'a' } },
  { apartment: 17, building: 'a', garage: { spot: [33, 34], type: 'double', floor: -1 }, partner: { apartment: 16, building: 'a' } },
  { apartment: 18, building: 'a', garage: { spot: [37, 38], type: 'double', floor: -1 }, partner: { apartment: 23, building: 'a' } },
  { apartment: 21, building: 'a', garage: { spot: 276, type: 'uncovered', floor: -1 }, partner: null },
  { apartment: 22, building: 'a', garage: { spot: 5, type: 'single', floor: -1 }, partner: null },
  { apartment: 23, building: 'a', garage: { spot: [37, 38], type: 'double', floor: -1 }, partner: { apartment: 18, building: 'a' } },
  { apartment: 24, building: 'a', garage: { spot: 11, type: 'single', floor: -1 }, partner: null },
  { apartment: 25, building: 'a', garage: { spot: [24, 25], type: 'double', floor: -1 }, partner: { apartment: 26, building: 'a' } },
  { apartment: 26, building: 'a', garage: { spot: [24, 25], type: 'double', floor: -1 }, partner: { apartment: 25, building: 'a' } },
  { apartment: 27, building: 'a', garage: { spot: [49, 50], type: 'double', floor: -1 }, partner: { apartment: 28, building: 'a' } },
  { apartment: 28, building: 'a', garage: { spot: [49, 50], type: 'double', floor: -1 }, partner: { apartment: 27, building: 'a' } },
  { apartment: 31, building: 'a', garage: { spot: [35, 36], type: 'double', floor: -1 }, partner: { apartment: 81, building: 'a' } },
  { apartment: 32, building: 'a', garage: { spot: [43, 44], type: 'double', floor: -1 }, partner: { apartment: 37, building: 'a' } },
  { apartment: 33, building: 'a', garage: { spot: 277, type: 'uncovered', floor: -1 }, partner: null },
  { apartment: 34, building: 'a', garage: { spot: 278, type: 'uncovered', floor: -1 }, partner: null },
  { apartment: 35, building: 'a', garage: { spot: 279, type: 'uncovered', floor: -1 }, partner: null },
  { apartment: 36, building: 'a', garage: { spot: [29, 30], type: 'double', floor: -1 }, partner: { apartment: 65, building: 'a' } },
  { apartment: 37, building: 'a', garage: { spot: [43, 44], type: 'double', floor: -1 }, partner: { apartment: 32, building: 'a' } },
  { apartment: 38, building: 'a', garage: { spot: 280, type: 'uncovered', floor: -1 }, partner: null },
  { apartment: 41, building: 'a', garage: { spot: 69, type: 'single', floor: -1 }, partner: null },
  { apartment: 42, building: 'a', garage: { spot: [45, 46], type: 'double', floor: -1 }, partner: { apartment: 45, building: 'a' } },
  { apartment: 43, building: 'a', garage: { spot: 286, type: 'uncovered', floor: -1 }, partner: null },
  { apartment: 44, building: 'a', garage: { spot: 281, type: 'uncovered', floor: -1 }, partner: null },
  { apartment: 45, building: 'a', garage: { spot: [45, 46], type: 'double', floor: -1 }, partner: { apartment: 42, building: 'a' } },
  { apartment: 46, building: 'a', garage: { spot: [47, 48], type: 'double', floor: -1 }, partner: { apartment: 51, building: 'a' } },
  { apartment: 47, building: 'a', garage: { spot: [41, 42], type: 'double', floor: -1 }, partner: { apartment: 48, building: 'a' } },
  { apartment: 48, building: 'a', garage: { spot: [41, 42], type: 'double', floor: -1 }, partner: { apartment: 47, building: 'a' } },
  { apartment: 51, building: 'a', garage: { spot: [47, 48], type: 'double', floor: -1 }, partner: { apartment: 46, building: 'a' } },
  { apartment: 52, building: 'a', garage: { spot: 10, type: 'single', floor: -1 }, partner: null },
  { apartment: 53, building: 'a', garage: { spot: [39, 40], type: 'double', floor: -1 }, partner: { apartment: 55, building: 'a' } },
  { apartment: 54, building: 'a', garage: { spot: [18, 19], type: 'double', floor: -1 }, partner: { apartment: 118, building: 'a' } },
  { apartment: 55, building: 'a', garage: { spot: [39, 40], type: 'double', floor: -1 }, partner: { apartment: 53, building: 'a' } },
  { apartment: 56, building: 'a', garage: { spot: [51, 52], type: 'double', floor: -1 }, partner: { apartment: 57, building: 'a' } },
  { apartment: 57, building: 'a', garage: { spot: [51, 52], type: 'double', floor: -1 }, partner: { apartment: 56, building: 'a' } },
  { apartment: 58, building: 'a', garage: { spot: 8, type: 'single', floor: -1 }, partner: null },
  { apartment: 61, building: 'a', garage: { spot: [53, 54], type: 'double', floor: -1 }, partner: { apartment: 62, building: 'a' } },
  { apartment: 62, building: 'a', garage: { spot: [53, 54], type: 'double', floor: -1 }, partner: { apartment: 61, building: 'a' } },
  { apartment: 63, building: 'a', garage: { spot: [22, 23], type: 'double', floor: -1 }, partner: { apartment: 11, building: 'a' } },
  { apartment: 64, building: 'a', garage: { spot: 9, type: 'single', floor: -1 }, partner: null },
  { apartment: 65, building: 'a', garage: { spot: [29, 30], type: 'double', floor: -1 }, partner: { apartment: 36, building: 'a' } },
  { apartment: 66, building: 'a', garage: { spot: [55, 56], type: 'double', floor: -1 }, partner: { apartment: 67, building: 'a' } },
  { apartment: 67, building: 'a', garage: { spot: [55, 56], type: 'double', floor: -1 }, partner: { apartment: 66, building: 'a' } },
  { apartment: 68, building: 'a', garage: { spot: 6, type: 'single', floor: -1 }, partner: null },
  { apartment: 71, building: 'a', garage: { spot: 3, type: 'single', floor: -1 }, partner: null },
  { apartment: 72, building: 'a', garage: { spot: [63, 64], type: 'double', floor: -1 }, partner: { apartment: 95, building: 'a' } },
  { apartment: 73, building: 'a', garage: { spot: [57, 58], type: 'double', floor: -1 }, partner: { apartment: 78, building: 'a' } },
  { apartment: 74, building: 'a', garage: { spot: 72, type: 'single', floor: -1 }, partner: null },
  { apartment: 75, building: 'a', garage: { spot: 4, type: 'single', floor: -1 }, partner: null },
  { apartment: 76, building: 'a', garage: { spot: [20, 21], type: 'double', floor: -1 }, partner: { apartment: 77, building: 'a' } },
  { apartment: 77, building: 'a', garage: { spot: [20, 21], type: 'double', floor: -1 }, partner: { apartment: 76, building: 'a' } },
  { apartment: 78, building: 'a', garage: { spot: [57, 58], type: 'double', floor: -1 }, partner: { apartment: 73, building: 'a' } },
  { apartment: 81, building: 'a', garage: { spot: [35, 36], type: 'double', floor: -1 }, partner: { apartment: 31, building: 'a' } },
  { apartment: 82, building: 'a', garage: { spot: [79, 80], type: 'double', floor: -1 }, partner: { apartment: 113, building: 'a' } },
  { apartment: 83, building: 'a', garage: { spot: [31, 32], type: 'double', floor: -1 }, partner: { apartment: 84, building: 'a' } },
  { apartment: 84, building: 'a', garage: { spot: [31, 32], type: 'double', floor: -1 }, partner: { apartment: 83, building: 'a' } },
  { apartment: 85, building: 'a', garage: { spot: [61, 62], type: 'double', floor: -1 }, partner: { apartment: 92, building: 'a' } },
  { apartment: 86, building: 'a', garage: { spot: [59, 60], type: 'double', floor: -1 }, partner: { apartment: 87, building: 'a' } },
  { apartment: 87, building: 'a', garage: { spot: [59, 60], type: 'double', floor: -1 }, partner: { apartment: 86, building: 'a' } },
  { apartment: 88, building: 'a', garage: { spot: 17, type: 'single', floor: -1 }, partner: null },
  { apartment: 91, building: 'a', garage: { spot: 68, type: 'single', floor: -1 }, partner: null },
  { apartment: 92, building: 'a', garage: { spot: [61, 62], type: 'double', floor: -1 }, partner: { apartment: 85, building: 'a' } },
  { apartment: 93, building: 'a', garage: { spot: 2, type: 'single', floor: -1 }, partner: null },
  { apartment: 94, building: 'a', garage: { spot: 273, type: 'uncovered', floor: -1 }, partner: null },
  { apartment: 95, building: 'a', garage: { spot: [63, 64], type: 'double', floor: -1 }, partner: { apartment: 72, building: 'a' } },
  { apartment: 96, building: 'a', garage: { spot: [27, 28], type: 'double', floor: -1 }, partner: { apartment: 12, building: 'a' } },
  { apartment: 97, building: 'a', garage: { spot: [73, 74], type: 'double', floor: -1 }, partner: { apartment: 101, building: 'a' } },
  { apartment: 98, building: 'a', garage: { spot: 70, type: 'single', floor: -1 }, partner: null },
  { apartment: 101, building: 'a', garage: { spot: [73, 74], type: 'double', floor: -1 }, partner: { apartment: 97, building: 'a' } },
  { apartment: 102, building: 'a', garage: { spot: [75, 76], type: 'double', floor: -1 }, partner: { apartment: 15, building: 'a' } },
  { apartment: 103, building: 'a', garage: { spot: 15, type: 'single', floor: -1 }, partner: null },
  { apartment: 104, building: 'a', garage: { spot: 71, type: 'single', floor: -1 }, partner: null },
  { apartment: 105, building: 'a', garage: { spot: 7, type: 'single', floor: -1 }, partner: null },
  { apartment: 106, building: 'a', garage: { spot: 67, type: 'single', floor: -1 }, partner: null },
  { apartment: 107, building: 'a', garage: { spot: [12, 13], type: 'double', floor: -1 }, partner: { apartment: 127, building: 'a' } },
  { apartment: 108, building: 'a', garage: { spot: [77, 78], type: 'double', floor: -1 }, partner: { apartment: 111, building: 'a' } },
  { apartment: 111, building: 'a', garage: { spot: [77, 78], type: 'double', floor: -1 }, partner: { apartment: 108, building: 'a' } },
  { apartment: 112, building: 'a', garage: { spot: 1, type: 'single', floor: -1 }, partner: null },
  { apartment: 113, building: 'a', garage: { spot: [79, 80], type: 'double', floor: -1 }, partner: { apartment: 82, building: 'a' } },
  { apartment: 114, building: 'a', garage: { spot: 26, type: 'single', floor: -1 }, partner: null },
  { apartment: 115, building: 'a', garage: { spot: [81, 82], type: 'double', floor: -1 }, partner: { apartment: 116, building: 'a' } },
  { apartment: 116, building: 'a', garage: { spot: [81, 82], type: 'double', floor: -1 }, partner: { apartment: 115, building: 'a' } },
  { apartment: 117, building: 'a', garage: { spot: [83, 84], type: 'double', floor: -1 }, partner: { apartment: 121, building: 'a' } },
  { apartment: 118, building: 'a', garage: { spot: [18, 19], type: 'double', floor: -1 }, partner: { apartment: 54, building: 'a' } },
  { apartment: 121, building: 'a', garage: { spot: [83, 84], type: 'double', floor: -1 }, partner: { apartment: 117, building: 'a' } },
  { apartment: 122, building: 'a', garage: { spot: 14, type: 'single', floor: -1 }, partner: null },
  { apartment: 123, building: 'a', garage: { spot: [85, 86], type: 'double', floor: -1 }, partner: { apartment: 124, building: 'a' } },
  { apartment: 124, building: 'a', garage: { spot: [85, 86], type: 'double', floor: -1 }, partner: { apartment: 123, building: 'a' } },
  { apartment: 125, building: 'a', garage: { spot: [87, 88], type: 'double', floor: -1 }, partner: { apartment: 128, building: 'a' } },
  { apartment: 126, building: 'a', garage: { spot: 16, type: 'single', floor: -1 }, partner: null },
  { apartment: 127, building: 'a', garage: { spot: [12, 13], type: 'double', floor: -1 }, partner: { apartment: 107, building: 'a' } },
  { apartment: 128, building: 'a', garage: { spot: [87, 88], type: 'double', floor: -1 }, partner: { apartment: 125, building: 'a' } }
];

const buildingB = [
  { apartment: 11, building: 'b', garage: { spot: [65, 66], type: 'double', floor: -1 }, partner: { apartment: 13, building: 'b' } },
  { apartment: 12, building: 'b', garage: { spot: 282, type: 'uncovered', floor: -1 }, partner: null },
  { apartment: 13, building: 'b', garage: { spot: [65, 66], type: 'double', floor: -1 }, partner: { apartment: 11, building: 'b' } },
  { apartment: 14, building: 'b', garage: { spot: [120, 121], type: 'uncovered', floor: -1 }, partner: { apartment: 21, building: 'b' } },
  { apartment: 15, building: 'b', garage: { spot: 104, type: 'single', floor: -1 }, partner: null },
  { apartment: 16, building: 'b', garage: { spot: 108, type: 'single', floor: -1 }, partner: null },
  { apartment: 17, building: 'b', garage: { spot: 98, type: 'single', floor: -1 }, partner: null },
  { apartment: 18, building: 'b', garage: { spot: 283, type: 'uncovered', floor: -1 }, partner: null },
  { apartment: 21, building: 'b', garage: { spot: [120, 121], type: 'double', floor: -1 }, partner: { apartment: 14, building: 'b' } },
  { apartment: 22, building: 'b', garage: { spot: [124, 125], type: 'double', floor: -1 }, partner: { apartment: 24, building: 'b' } },
  { apartment: 23, building: 'b', garage: { spot: [210, 211], type: 'double', floor: -2 }, partner: { apartment: 28, building: 'b' } },
  { apartment: 24, building: 'b', garage: { spot: [124, 125], type: 'double', floor: -1 }, partner: { apartment: 22, building: 'b' } },
  { apartment: 25, building: 'b', garage: { spot: [216, 217], type: 'double', floor: -2 }, partner: { apartment: 83, building: 'b' } },
  { apartment: 26, building: 'b', garage: { spot: [126, 127], type: 'double', floor: -1 }, partner: { apartment: 31, building: 'b' } },
  { apartment: 27, building: 'b', garage: { spot: [130, 131], type: 'double', floor: -1 }, partner: { apartment: 42, building: 'b' } },
  { apartment: 28, building: 'b', garage: { spot: [210, 211], type: 'double', floor: -2 }, partner: { apartment: 23, building: 'b' } },
  { apartment: 31, building: 'b', garage: { spot: [126, 127], type: 'double', floor: -1 }, partner: { apartment: 26, building: 'b' } },
  { apartment: 32, building: 'b', garage: { spot: 284, type: 'uncovered', floor: -1 }, partner: null },
  { apartment: 33, building: 'b', garage: { spot: [203, 204], type: 'double', floor: -2 }, partner: { apartment: 46, building: 'b' } },
  { apartment: 34, building: 'b', garage: { spot: 194, type: 'single', floor: -2 }, partner: null },
  { apartment: 35, building: 'b', garage: { spot: [128, 129], type: 'double', floor: -1 }, partner: { apartment: 36, building: 'b' } },
  { apartment: 36, building: 'b', garage: { spot: [128, 129], type: 'double', floor: -1 }, partner: { apartment: 35, building: 'b' } },
  { apartment: 37, building: 'b', garage: { spot: 274, type: 'uncovered', floor: -1 }, partner: null },
  { apartment: 38, building: 'b', garage: { spot: 109, type: 'single', floor: -1 }, partner: null },
  { apartment: 41, building: 'b', garage: { spot: [167, 168], type: 'double', floor: -1 }, partner: { apartment: 104, building: 'b' } },
  { apartment: 42, building: 'b', garage: { spot: [130, 131], type: 'double', floor: -1 }, partner: { apartment: 27, building: 'b' } },
  { apartment: 43, building: 'b', garage: { spot: 103, type: 'single', floor: -1 }, partner: null },
  { apartment: 44, building: 'b', garage: { spot: [165, 166], type: 'double', floor: -1 }, partner: { apartment: 45, building: 'b' } },
  { apartment: 45, building: 'b', garage: { spot: [165, 166], type: 'double', floor: -1 }, partner: { apartment: 44, building: 'b' } },
  { apartment: 46, building: 'b', garage: { spot: [203, 204], type: 'double', floor: -2 }, partner: { apartment: 33, building: 'b' } },
  { apartment: 47, building: 'b', garage: { spot: 202, type: 'single', floor: -2 }, partner: null },
  { apartment: 48, building: 'b', garage: { spot: 92, type: 'single', floor: -1 }, partner: null },
  { apartment: 51, building: 'b', garage: { spot: [122, 123], type: 'double', floor: -1 }, partner: { apartment: 54, building: 'b' } },
  { apartment: 52, building: 'b', garage: { spot: [195, 196], type: 'double', floor: -2 }, partner: { apartment: 53, building: 'b' } },
  { apartment: 53, building: 'b', garage: { spot: [195, 196], type: 'double', floor: -2 }, partner: { apartment: 52, building: 'b' } },
  { apartment: 54, building: 'b', garage: { spot: [122, 123], type: 'double', floor: -1 }, partner: { apartment: 51, building: 'b' } },
  { apartment: 55, building: 'b', garage: { spot: [197, 198], type: 'double', floor: -2 }, partner: { apartment: 61, building: 'b' } },
  { apartment: 56, building: 'b', garage: { spot: [101, 102], type: 'double', floor: -1 }, partner: { apartment: 77, building: 'b' } },
  { apartment: 57, building: 'b', garage: { spot: 200, type: 'single', floor: -2 }, partner: null },
  { apartment: 58, building: 'b', garage: { spot: 107, type: 'single', floor: -1 }, partner: null },
  { apartment: 61, building: 'b', garage: { spot: [197, 198], type: 'double', floor: -2 }, partner: { apartment: 55, building: 'b' } },
  { apartment: 62, building: 'b', garage: { spot: [205, 206], type: 'double', floor: -2 }, partner: { apartment: 63, building: 'b' } },
  { apartment: 63, building: 'b', garage: { spot: [205, 206], type: 'double', floor: -2 }, partner: { apartment: 62, building: 'b' } },
  { apartment: 64, building: 'b', garage: { spot: 199, type: 'single', floor: -2 }, partner: null },
  { apartment: 65, building: 'b', garage: { spot: [212, 213], type: 'double', floor: -2 }, partner: { apartment: 66, building: 'b' } },
  { apartment: 66, building: 'b', garage: { spot: [212, 213], type: 'double', floor: -2 }, partner: { apartment: 65, building: 'b' } },
  { apartment: 67, building: 'b', garage: { spot: 209, type: 'single', floor: -2 }, partner: null },
  { apartment: 68, building: 'b', garage: { spot: [214, 215], type: 'double', floor: -2 }, partner: { apartment: 72, building: 'b' } },
  { apartment: 71, building: 'b', garage: { spot: [113, 114], type: 'double', floor: -1 }, partner: { apartment: 123, building: 'b' } },
  { apartment: 72, building: 'b', garage: { spot: [214, 215], type: 'double', floor: -2 }, partner: { apartment: 68, building: 'b' } },
  { apartment: 73, building: 'b', garage: { spot: [94, 95], type: 'double', floor: -1 }, partner: { apartment: 81, building: 'b' } },
  { apartment: 74, building: 'b', garage: { spot: 96, type: 'single', floor: -1 }, partner: null },
  { apartment: 75, building: 'b', garage: { spot: [218, 219], type: 'double', floor: -2 }, partner: { apartment: 76, building: 'b'} },
  { apartment: 76, building: 'b', garage: { spot: [218, 219], type: 'double', floor: -2 }, partner: { apartment: 75, building: 'b' } },
  { apartment: 77, building: 'b', garage: { spot: [101, 102], type: 'double', floor: -1 }, partner: { apartment: 56, building: 'b' } },
  { apartment: 78, building: 'b', garage: { spot: [223, 224], type: 'double', floor: -2 }, partner: { apartment: 82, building: 'b' } },
  { apartment: 81, building: 'b', garage: { spot: [94, 95], type: 'double', floor: -1 }, partner: { apartment: 73, building: 'b' } },
  { apartment: 82, building: 'b', garage: { spot: [223, 224], type: 'double', floor: -2 }, partner: { apartment: 78, building: 'b' } },
  { apartment: 83, building: 'b', garage: { spot: [216, 217], type: 'double', floor: -2 }, partner: { apartment: 25, building: 'b' } },
  { apartment: 84, building: 'b', garage: { spot: [221, 222], type: 'double', floor: -2 }, partner: { apartment: 86, building: 'b' } },
  { apartment: 85, building: 'b', garage: { spot: 115, type: 'single', floor: -1 }, partner: null },
  { apartment: 86, building: 'b', garage: { spot: [221, 222], type: 'double', floor: -2 }, partner: { apartment: 84, building: 'b' } },
  { apartment: 87, building: 'b', garage: { spot: [225, 226], type: 'double', floor: -2 }, partner: { apartment: 88, building: 'b' } },
  { apartment: 88, building: 'b', garage: { spot: [225, 226], type: 'double', floor: -2 }, partner: { apartment: 87, building: 'b' } },
  { apartment: 91, building: 'b', garage: { spot: 99, type: 'single', floor: -1 }, partner: null },
  { apartment: 92, building: 'b', garage: { spot: [227, 228], type: 'double', floor: -2 }, partner: { apartment: 98, building: 'b' } },
  { apartment: 93, building: 'b', garage: { spot: [118, 119], type: 'double', floor: -1 }, partner: { apartment: 96, building: 'b' } },
  { apartment: 94, building: 'b', garage: { spot: [233, 234], type: 'double', floor: -2 }, partner: { apartment: 116, building: 'b' } },
  { apartment: 95, building: 'b', garage: { spot: 111, type: 'single', floor: -1 }, partner: null },
  { apartment: 96, building: 'b', garage: { spot: [118, 119], type: 'double', floor: -1 }, partner: { apartment: 93, building: 'b' } },
  { apartment: 97, building: 'b', garage: { spot: 93, type: 'single', floor: -1 }, partner: null },
  { apartment: 98, building: 'b', garage: { spot: [227, 228], type: 'double', floor: -2 }, partner: { apartment: 92, building: 'b' } },
  { apartment: 101, building: 'b', garage: { spot: 106, type: 'single', floor: -1 }, partner: null },
  { apartment: 102, building: 'b', garage: { spot: [116, 117], type: 'double', floor: -1 }, partner: { apartment: 103, building: 'b' } },
  { apartment: 103, building: 'b', garage: { spot: [116, 117], type: 'double', floor: -1 }, partner: { apartment: 102, building: 'b' } },
  { apartment: 104, building: 'b', garage: { spot: [167, 168], type: 'double', floor: -1 }, partner: { apartment: 41, building: 'b' } },
  { apartment: 105, building: 'b', garage: { spot: [229, 230], type: 'double', floor: -2 }, partner: { apartment: 105, building: 'b' } },
  { apartment: 106, building: 'b', garage: { spot: 110, type: 'single', floor: -1 }, partner: null },
  { apartment: 107, building: 'b', garage: { spot: [229, 230], type: 'double', floor: -2 }, partner: { apartment: 105, building: 'b' } },
  { apartment: 108, building: 'b', garage: { spot: 112, type: 'single', floor: -1 }, partner: null },
  { apartment: 111, building: 'b', garage: { spot: 89, type: 'single', floor: -1 }, partner: null },
  { apartment: 112, building: 'b', garage: { spot: [231, 232], type: 'double', floor: -2 }, partner: { apartment: 114, building: 'b' } },
  { apartment: 113, building: 'b', garage: { spot: 105, type: 'single', floor: -1 }, partner: null },
  { apartment: 114, building: 'b', garage: { spot: [231, 232], type: 'double', floor: -1 }, partner: { apartment: 112, building: 'b' } },
  { apartment: 115, building: 'b', garage: { spot: 90, type: 'single', floor: -1 }, partner: null },
  { apartment: 116, building: 'b', garage: { spot: [233, 234], type: 'double', floor: -2 }, partner: { apartment: 94, building: 'b' } },
  { apartment: 117, building: 'b', garage: { spot: [235, 236], type: 'double', floor: -2 }, partner: { apartment: 118, building: 'b' } },
  { apartment: 118, building: 'b', garage: { spot: [235, 236], type: 'double', floor: -2 }, partner: { apartment: 117, building: 'b' } },
  { apartment: 121, building: 'b', garage: { spot: 100, type: 'single', floor: -1 }, partner: null },
  { apartment: 122, building: 'b', garage: { spot: 220, type: 'single', floor: -2 }, partner: null },
  { apartment: 123, building: 'b', garage: { spot: [113, 114], type: 'double', floor: -1 }, partner: { apartment: 71, building: 'b' } },
  { apartment: 124, building: 'b', garage: { spot: [207, 208], type: 'double', floor: -2 }, partner: { apartment: 125, building: 'b' } },
  { apartment: 125, building: 'b', garage: { spot: [207, 208], type: 'double', floor: -2 }, partner: { apartment: 124, building: 'b' } },
  { apartment: 126, building: 'b', garage: { spot: 201, type: 'single', floor: -2 }, partner: null },
  { apartment: 127, building: 'b', garage: { spot: 91, type: 'single', floor: -1 }, partner: null },
  { apartment: 128, building: 'b', garage: { spot: 97, type: 'single', floor: -1 }, partner: null },
];

const buildingC = [
  { apartment: 11, building: 'c', garage: { spot: [143, 144], type: 'double', floor: -1 }, partner: { apartment: 114, building: 'c' } },
  { apartment: 12, building: 'c', garage: { spot: [246, 247], type: 'double', floor: -2 }, partner: { apartment: 127, building: 'c' } },
  { apartment: 13, building: 'c', garage: { spot: [136, 137], type: 'double', floor: -1 }, partner: { apartment: 17, building: 'c' } },
  { apartment: 14, building: 'c', garage: { spot: [240, 241], type: 'double', floor: -2 }, partner: { apartment: 15, building: 'c' } },
  { apartment: 15, building: 'c', garage: { spot: [240, 241], type: 'double', floor: -2 }, partner: { apartment: 14, building: 'c' } },
  { apartment: 16, building: 'c', garage: { spot: 134, type: 'single', floor: -1 }, partner: null },
  { apartment: 17, building: 'c', garage: { spot: [136, 137], type: 'double', floor: -1 }, partner: { apartment: 13, building: 'c' } },
  { apartment: 18, building: 'c', garage: { spot: [154, 155], type: 'double', floor: -1 }, partner: { apartment: 25, building: 'c' } },
  { apartment: 21, building: 'c', garage: { spot: 147, type: 'single', floor: -1 }, partner: null },
  { apartment: 22, building: 'c', garage: { spot: 285, type: 'uncovered', floor: -1 }, partner: null },
  { apartment: 23, building: 'c', garage: { spot: [177, 178], type: 'double', floor: -1 }, partner: { apartment: 31, building: 'c' } },
  { apartment: 24, building: 'c', garage: { spot: [151, 152], type: 'double', floor: -1 }, partner: { apartment: 26, building: 'c' } },
  { apartment: 25, building: 'c', garage: { spot: [154, 155], type: 'double', floor: -1 }, partner: { apartment: 18, building: 'c' } },
  { apartment: 26, building: 'c', garage: { spot: [151, 152], type: 'double', floor: -1 }, partner: { apartment: 24, building: 'c' } },
  { apartment: 27, building: 'c', garage: { spot: 169, type: 'single', floor: -1 }, partner: null },
  { apartment: 28, building: 'c', garage: { spot: 192, type: 'single', floor: -1 }, partner: null },
  { apartment: 31, building: 'c', garage: { spot: [177, 178], type: 'double', floor: -1 }, partner: { apartment: 23, building: 'c' } },
  { apartment: 32, building: 'c', garage: { spot: [138, 139], type: 'double', floor: -1 }, partner: { apartment: 33, building: 'c' } },
  { apartment: 33, building: 'c', garage: { spot: [138, 139], type: 'double', floor: -1 }, partner: { apartment: 32, building: 'c' } },
  { apartment: 34, building: 'c', garage: { spot: [248, 249], type: 'double', floor: -1 }, partner: { apartment: 36, building: 'c' } },
  { apartment: 35, building: 'c', garage: { spot: 252, type: 'single', floor: -2 }, partner: null },
  { apartment: 36, building: 'c', garage: { spot: [248, 249], type: 'double', floor: -1 }, partner: { apartment: 34, building: 'c' } },
  { apartment: 37, building: 'c', garage: { spot: [163, 164], type: 'double', floor: -1 }, partner: { apartment: 38, building: 'c' } },
  { apartment: 38, building: 'c', garage: { spot: [163, 164], type: 'double', floor: -1 }, partner: { apartment: 37, building: 'c' } },
  { apartment: 41, building: 'c', garage: { spot: [181, 182], type: 'double', floor: -1 }, partner: { apartment: 43, building: 'c' } },
  { apartment: 42, building: 'c', garage: { spot: 288, type: 'uncovered', floor: -1 }, partner: null },
  { apartment: 43, building: 'c', garage: { spot: [181, 182], type: 'double', floor: -1 }, partner: { apartment: 41, building: 'c' } },
  { apartment: 44, building: 'c', garage: { spot: [179, 180], type: 'double', floor: -1 }, partner: { apartment: 64, building: 'c' } },
  { apartment: 45, building: 'c', garage: { spot: 191, type: 'single', floor: -1 }, partner: null },
  { apartment: 46, building: 'c', garage: { spot: 170, type: 'single', floor: -1 }, partner: null },
  { apartment: 47, building: 'c', garage: { spot: 142, type: 'single', floor: -1 }, partner: null },
  { apartment: 48, building: 'c', garage: { spot: 193, type: 'single', floor: -1 }, partner: null },
  { apartment: 51, building: 'c', garage: { spot: [183, 184], type: 'double', floor: -1 }, partner: { apartment: 52, building: 'c' } },
  { apartment: 52, building: 'c', garage: { spot: [183, 184], type: 'single', floor: -1 }, partner: null },
  { apartment: 53, building: 'c', garage: { spot: 140, type: 'single', floor: -1 }, partner: null },
  { apartment: 54, building: 'c', garage: { spot: 253, type: 'single', floor: -1 }, partner: null },
  { apartment: 55, building: 'c', garage: { spot: 173, type: 'single', floor: -1 }, partner: null },
  { apartment: 56, building: 'c', garage: { spot: 153, type: 'single', floor: -1 }, partner: null },
  { apartment: 57, building: 'c', garage: { spot: 174, type: 'single', floor: -1 }, partner: null },
  { apartment: 58, building: 'c', garage: { spot: [148, 149], type: 'double', floor: -1 }, partner: { apartment: 61, building: 'c' } },
  { apartment: 61, building: 'c', garage: { spot: [148, 149], type: 'double', floor: -1 }, partner: { apartment: 58, building: 'c' } },
  { apartment: 62, building: 'c', garage: { spot: [254, 255], type: 'double', floor: -1 }, partner: { apartment: 73, building: 'c' } },
  { apartment: 63, building: 'c', garage: { spot: [159, 160], type: 'double', floor: -1 }, partner: { apartment: 65, building: 'c' } },
  { apartment: 64, building: 'c', garage: { spot: [179, 180], type: 'double', floor: -1 }, partner: { apartment: 44, building: 'c' } },
  { apartment: 65, building: 'c', garage: { spot: [159, 160], type: 'double', floor: -1 }, partner: { apartment: 63, building: 'c' } },
  { apartment: 66, building: 'c', garage: { spot: [244, 245], type: 'double', floor: -1 }, partner: { apartment: 67, building: 'c' } },
  { apartment: 67, building: 'c', garage: { spot: [244, 245], type: 'double', floor: -1 }, partner: { apartment: 66, building: 'c' } },
  { apartment: 68, building: 'c', garage: { spot: 186, type: 'single', floor: -1 }, partner: null },
  { apartment: 71, building: 'c', garage: { spot: [189, 190], type: 'double', floor: -1 }, partner: { apartment: 74, building: 'c' } },
  { apartment: 72, building: 'c', garage: { spot: [175, 176], type: 'double', floor: -1 }, partner: { apartment: 76, building: 'c' } },
  { apartment: 73, building: 'c', garage: { spot: [254, 255], type: 'double', floor: -1 }, partner: { apartment: 62, building: 'c' } },
  { apartment: 74, building: 'c', garage: { spot: [189, 190], type: 'double', floor: -1 }, partner: { apartment: 71, building: 'c' } },
  { apartment: 75, building: 'c', garage: { spot: [267, 268], type: 'double', floor: -1 }, partner: { apartment: 111, building: 'c' } },
  { apartment: 76, building: 'c', garage: { spot: [175, 176], type: 'double', floor: -1 }, partner: { apartment: 72, building: 'c' } },
  { apartment: 77, building: 'c', garage: { spot: [161, 162], type: 'double', floor: -1 }, partner: { apartment: 78, building: 'c' } },
  { apartment: 78, building: 'c', garage: { spot: [161, 162], type: 'double', floor: -1 }, partner: { apartment: 77, building: 'c' } },
  { apartment: 81, building: 'c', garage: { spot: [250, 251], type: 'double', floor: -1 }, partner: { apartment: 82, building: 'c' } },
  { apartment: 82, building: 'c', garage: { spot: [250, 251], type: 'double', floor: -1 }, partner: { apartment: 81, building: 'c' } },
  { apartment: 83, building: 'c', garage: { spot: [242, 243], type: 'double', floor: -1 }, partner: { apartment: 115, building: 'c' } },
  { apartment: 84, building: 'c', garage: { spot: 171, type: 'single', floor: -1 }, partner: null },
  { apartment: 85, building: 'c', garage: { spot: [256, 257], type: 'double', floor: -1 }, partner: { apartment: 86, building: 'c' } },
  { apartment: 86, building: 'c', garage: { spot: [256, 257], type: 'double', floor: -1 }, partner: { apartment: 85, building: 'c' } },
  { apartment: 87, building: 'c', garage: { spot: 133, type: 'single', floor: -1 }, partner: null },
  { apartment: 88, building: 'c', garage: { spot: 132, type: 'single', floor: -1 }, partner: null },
  { apartment: 91, building: 'c', garage: { spot: [258, 259], type: 'double', floor: -1 }, partner: { apartment: 92, building: 'c' } },
  { apartment: 92, building: 'c', garage: { spot: [258, 259], type: 'double', floor: -1 }, partner: { apartment: 91, building: 'c' } },
  { apartment: 93, building: 'c', garage: { spot: 156, type: 'single', floor: -1 }, partner: null },
  { apartment: 94, building: 'c', garage: { spot: 172, type: 'single', floor: -1 }, partner: null },
  { apartment: 95, building: 'c', garage: { spot: [187, 188], type: 'double', floor: -1 }, partner: { apartment: 124, building: 'c' } },
  { apartment: 96, building: 'c', garage: { spot: [263, 264], type: 'double', floor: -1 }, partner: { apartment: 97, building: 'c' } },
  { apartment: 97, building: 'c', garage: { spot: [263, 264], type: 'double', floor: -1 }, partner: { apartment: 96, building: 'c' } },
  { apartment: 98, building: 'c', garage: { spot: [265, 266], type: 'double', floor: -1 }, partner: { apartment: 101, building: 'c' } },
  { apartment: 101, building: 'c', garage: { spot: [265, 266], type: 'double', floor: -1 }, partner: { apartment: 98, building: 'c' } },
  { apartment: 102, building: 'c', garage: { spot: 150, type: 'single', floor: -1 }, partner: null },
  { apartment: 103, building: 'c', garage: { spot: 146, type: 'single', floor: -1 }, partner: null },
  { apartment: 104, building: 'c', garage: { spot: [261, 262], type: 'double', floor: -1 }, partner: { apartment: 108, building: 'c' } },
  { apartment: 105, building: 'c', garage: { spot: 239, type: 'single', floor: -1 }, partner: null },
  { apartment: 106, building: 'c', garage: { spot: 185, type: 'single', floor: -1 }, partner: null },
  { apartment: 107, building: 'c', garage: { spot: 135, type: 'single', floor: -1 }, partner: null },
  { apartment: 108, building: 'c', garage: { spot: [261, 262], type: 'double', floor: -1 }, partner: { apartment: 104, building: 'c' } },
  { apartment: 111, building: 'c', garage: { spot: [267, 268], type: 'double', floor: -1 }, partner: { apartment: 75, building: 'c' } },
  { apartment: 112, building: 'c', garage: { spot: [269, 270], type: 'double', floor: -1 }, partner: { apartment: 113, building: 'c' } },
  { apartment: 113, building: 'c', garage: { spot: [269, 270], type: 'double', floor: -1 }, partner: { apartment: 112, building: 'c' } },
  { apartment: 114, building: 'c', garage: { spot: [242, 243], type: 'double', floor: -1 }, partner: { apartment: 11, building: 'c' } },
  { apartment: 115, building: 'c', garage: { spot: [242, 243], type: 'double', floor: -1 }, partner: { apartment: 83, building: 'c' } },
  { apartment: 116, building: 'c', garage: { spot: 141, type: 'single', floor: -1 }, partner: null },
  { apartment: 117, building: 'c', garage: { spot: 145, type: 'single', floor: -1 }, partner: null },
  { apartment: 118, building: 'c', garage: { spot: 260, type: 'single', floor: -1 }, partner: null },
  { apartment: 121, building: 'c', garage: { spot: [271, 272], type: 'double', floor: -1 }, partner: { apartment: 125, building: 'c' } },
  { apartment: 122, building: 'c', garage: { spot: 238, type: 'single', floor: -1 }, partner: null },
  { apartment: 123, building: 'c', garage: { spot: 237, type: 'double', floor: -1 }, partner: null },
  { apartment: 124, building: 'c', garage: { spot: [187, 188], type: 'double', floor: -1 }, partner: { apartment: 95, building: 'c' } },
  { apartment: 125, building: 'c', garage: { spot: [271, 272], type: 'double', floor: -1 }, partner: { apartment: 121, building: 'c' } },
  { apartment: 126, building: 'c', garage: { spot: [157, 158], type: 'single', floor: -1 }, partner: { apartment: 128, building: 'c' } },
  { apartment: 127, building: 'c', garage: { spot: [246, 247], type: 'double', floor: -1 }, partner: { apartment: 12, building: 'c' } },
  { apartment: 128, building: 'c', garage: { spot: [157, 158], type: 'double', floor: -1 }, partner: { apartment: 126, building: 'c' } },
];

export default [...buildingA, ...buildingB, ...buildingC];
