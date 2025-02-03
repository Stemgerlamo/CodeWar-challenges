function validISBN10(isbn) {
    if (isbn.length!==10 || /[^\d]/g.test(String(isbn.match(/\w{9}/g))) ) return false;
    else{
               let average,sum=0;
  for(let i=0;i<isbn.length;i++){
      if(isbn[i]==='X')sum+=10*(i+1);
      else sum+=isbn[i]*(i+1);
  }
  average=sum/10;
  let result=sum%11===0?true:false;
    return result
    }
    }