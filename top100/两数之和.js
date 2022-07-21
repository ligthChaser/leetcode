var nums = [3,2,4]
var target = 6;

function  result(nums, target) {
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        if(map.has(target-nums[i])){
            return console.log([map.get(target-nums[i]),i])
        }else{
            map.set(nums[i],i)
        }
    }
    return console.log([]);
};

result(nums,target);