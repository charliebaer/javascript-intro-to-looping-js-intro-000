function forLoop(array){
  for(let i=1;i<26;i++){
    array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`);
  }
return(array)
}
