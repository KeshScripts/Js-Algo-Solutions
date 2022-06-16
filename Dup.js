let array = [4, 3, 2, 7, 8, 2, 3, 1];
let len = array.length;

const x = function DuplicatesOut(nums) {
  let result = [];

  for (let i = 0; i < len; i++) {
    let value = Math.abs(nums[i]) - 1;
    if (nums[value] < 0) {
      result.push(value + 1)
    } else {
      nums[value] *= -1;
    }
  }
  return result;
}

 console.log(x(array));

 
