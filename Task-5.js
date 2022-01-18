function areaOfTriangle(x,y,z){
    //Heron's formula 
    let s = (x+y+z)/2;
    let area = Math.sqrt(s*(s-x)*(s-y)*(s-z));
    return area
}
areaOfTriangle(4,5,3)