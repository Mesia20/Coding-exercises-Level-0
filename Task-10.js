function commonChar(a,b){
    let matchedChars=[];      //The matched characters will be stored 
    let lowerCaseA=a.toLowerCase(); //This will make sure all inputted words are lowerCase
    let lowerCaseB= b.toLowerCase();
    for(i=0;i<lowerCaseA.length;i++){ 
        for(j=0;j<lowerCaseB.length;j++){
            if(lowerCaseA[i]==lowerCaseB[j]){
                matchedChars.push(lowerCaseA[i])
            }
        }
    }
        console.log("Common letters: "+ matchedChars.join(", "));           
    }
    
commonChar("HOUSE","computers")