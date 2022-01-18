function commonChar(a,b){
    var matchedChars=[];      //The matched characters will be stored 
    
    for(i=0;i<a.length;i++){ 
        for(j=0;j<b.length;j++){
            if(a[i]==b[j]){
                matchedChars.push(a[i])
            }
        }
    }
        console.log("Common letters: "+ matchedChars.join(", "));           
    }
    
commonChar("house","computers")