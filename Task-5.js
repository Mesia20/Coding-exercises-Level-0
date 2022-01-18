function areaOfTriangle(x,y,z){
    //Heron's formula 
    var s = (x+y+z)/2;
    var area = Math.sqrt(s*(s-x)*(s-y)*(s-z));
    console.log(`The area of the triangle is ${area}sq.units!`) 
}
areaOfTriangle(4,5,3)