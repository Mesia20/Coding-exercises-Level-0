function areaOfTriangle(side1,side2,side3){
    //Heron's formula 
    const s = (side1+side2+side3)/2;
    const area = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
    return area
}
areaOfTriangle(4,5,3)