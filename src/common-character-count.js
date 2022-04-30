const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	let str1, str2;
	let indexChar;
	let count=0;
	if(s1 && s2){
		if (s1.length>s2.length){
			str1=s2.split('');
			str2=s1.split('');
		} else {
			str1=s1.split('');
			str2=s2.split('');
		}
		for(let i=0;i<str1.length;i++){
			indexChar=str2.indexOf(str1[i]);
			if(indexChar !==-1){
				str2.splice(indexChar,1);
				count++;
			}
		}
	}
	return count;
}

module.exports = {
  getCommonCharacterCount
};
