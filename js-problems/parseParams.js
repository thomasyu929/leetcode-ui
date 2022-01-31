/**
 * 
 * @param {string} url
 * @returns
 */
function parseParams(url) {
  const paramsStr = /.+\?(.+)$/.exec(url)[1];
  const paramsArr = paramsStr.split('&');
  
  let paramsObj = {};
  paramsArr.forEach(param => {
    if (/=/.test(param)) {
      let [key, value] = param.split('=');
      val = decodeURIComponent(val);
      val = /^\d+$/.test(val) ? parseFloat(val) : val;

      if (paramsObj.hasOwnProperty(key)) {
        paramsObj[key] = [].concat(paramsObj[key], val);
      }
      else {
        paramsObj[key] = val;
      }
    }
    else {
      paramsObj[param] = true;
    }
  })

  return paramsObj;
}