export const inArray = (arr: [], key: string, value: any) =>{
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === value) {
      return i;
    }
  }
  return -1;
}


export const ab2hex = (buffer: any) => {
  var hexArr = Array.prototype.map.call(
    new Uint8Array(buffer),
    function (bit) {
      return ('00' + bit.toString(16)).slice(-2)
    }
  )
  return hexArr.join('');
}


