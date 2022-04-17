function max(num1,num2,num3){
    if (num1>num2 && num1>num3){
        return ("Maximum number is: "+ num1) 
    } else if(num2>num1 && num2>num3){
        return ("Maximum number is: "+num2)
    }else {
        return ("Maximum number is: "+ num3) 
    
    }
}max(2,5,100)