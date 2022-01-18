
function vowelFinder(word){
    let lowerCase= word.toLowerCase();
    let found=[];         //All the vowels found will be added to this list and the duplicates will be deleted later

    for(i=0;i<lowerCase.length;i++){
        if(lowerCase[i]=="a"||lowerCase[i]=="e"||lowerCase[i]=="i"||lowerCase[i]=="o"||lowerCase[i]=="u"){
            found.push((lowerCase[i]))     
        }
            }
             let newArray=new Set(found)                    //stores only the unique values in a Set Object and removes repeated values
             let result =Array.from(newArray)                //This line converts the Set object with unique values to an array so it can be printed.
             console.log("Vowels: "+ result.join(", "))    
        }
         vowelFinder("Umuzi")