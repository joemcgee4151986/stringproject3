function capitalize(s){
    let even = '';
    let odd = '';
    
    for (let i = 0; i< s.length; i++){ // s is string
      if (i % 2 === 0){
        even += s.toUpperCase()[i];
        odd +=s[i];
      } else{
        even += s[i];
        odd +=s.toUpperCase()[i];
      }
    }
    return [even,odd];
  };