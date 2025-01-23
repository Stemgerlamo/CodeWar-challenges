function same(aArr, bArr)
{
 	const normalize = (arr) =>
    arr
      .map(sub => sub.sort((a, b) => a - b)) 
      .sort((a, b) => a[0] - b[0] || a[1] - b[1]); 
  const normalizedA = normalize(aArr);
  const normalizedB = normalize(bArr);
  if (normalizedA.length !== normalizedB.length) return false;
  for (let i = 0; i < normalizedA.length; i++) {
    if (normalizedA[i][0] !== normalizedB[i][0] || normalizedA[i][1] !== normalizedB[i][1]) {
      return false;
    }
  }
  return true;
}