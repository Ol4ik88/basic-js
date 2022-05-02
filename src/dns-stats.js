const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	let dns={};
  for(let i=0;i<domains.length;i++){
	  let arrDNS=domains[i].split('.');
	  let temp='';
	  let count=0;
	  for(let j=arrDNS.length-1;j>=0;j--){
			temp += '.'+arrDNS[j];
			if( temp in dns){
				count=dns[temp];
				dns[temp]=count+1;
			}else 
			 dns[temp]=1;
	  }
	
  }
  
  return dns;
}

module.exports = {
  getDNSStats
};
