const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
	if (!Array.isArray(arr)){
		throw new Error('\'arr\' parameter must be an instance of the Array!');
	}else {
		if (!arr.length){
			return [];
		}
		let newArr=arr.slice();
		let element;
		console.log(newArr);
		for(let i=0;i<newArr.length;i++){
			switch (newArr[i]) {

				case '--discard-next':
					if((i+1<arr.length)){
						newArr.splice(i,2);
						i=i-1;
					}
					else{
						newArr.splice(i,1);
					}
				break;
				case '--discard-prev':
					if((i>0)){
						element=arr[arr.indexOf('--discard-prev')-1];
						if(newArr.includes(element) ){
						newArr.splice(i-1,2);
						}else {
							newArr.splice(i,1);
						}
					}else{
						newArr.splice(i,1);
					}
				break;
				case '--double-next': 
					if((i+1<arr.length)){
						element=newArr[i+1];
						newArr.splice(i,1,element);
					}else{
						newArr.splice(i,1);
					}
				break;
				case '--double-prev':
					if((i>0)){
						element=arr[arr.indexOf('--double-prev')-1];
						if(newArr.includes(element) ){
						newArr.splice(i,1,element);
						}else{
							newArr.splice(i,1);
						}
					}else{
						newArr.splice(i,1);
					}
				break;
			}
		}
		return newArr;
	}
}
module.exports = {
  transform
};
