// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/3sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 思路
// 1、先排序  注意考虑nums == null || len<3
// 2、判断nums[i]是否大于零 大于零的话就break 可以等于零
// 3、去重 当nums[i] ==nums[i-1] continue
// 4、定义双指针 分别指向nums[i]右侧的两端 L R
// 5、将三个数相加 如果大于0  R-- 如果小于0 L++  如果等于0 就添加到数组  同时检测 L++ 与 R-- 是否等于  L 和 R(去重)

var nums = [-1,0,1,2,-1,-4];
 function result(nums){
    nums.sort((a,b)=>a-b);
    const len = nums.length;
    let arr=[];
    if(nums == null || len<3) return arr
    for(var i=0;i<len;i++){
        if(nums[i]>0) break;
        if(i>0 && nums[i]==nums[i-1]) continue;
        let L = i+1;
        let R = len-1
        while(L<R){
            var sum =nums[i] + nums[L] +nums[R];
            if(sum==0){
                arr.push([nums[i],nums[L],nums[R]])
                while(L<R && nums[L]==nums[L+1]) L++;
                while(L<R && nums[R]==nums[R-1]) R--;
                L++;
                R--;
            } else if(sum>0)R--;
              else if (sum<0)L++;
        }
    }
    return  console.log(arr);
 }
 result(nums);