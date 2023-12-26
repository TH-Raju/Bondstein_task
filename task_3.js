let findIndicesForSum = (targetSum, numbers) => {
  let leftIndex = 0;
  let rightIndex = numbers.length - 1;

  while (leftIndex < rightIndex) {
    const currentSum = numbers[leftIndex] + numbers[rightIndex];

    if (currentSum === targetSum) {
      return [leftIndex, rightIndex];
    } else if (currentSum < targetSum) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }

  return "No indices Found!!!";
};

const targetSum = 9;
const sortedNum = [2, 4, 5, 6, 8, 12];
const result = findIndicesForSum(targetSum, sortedNum);
console.log(result);
