const sv1 = {
    firstName: 'John',
    gender: 'male',
    degree: 'Bachelor',
    english: 'English'
};
getInfo(sv1);
const sv2 = {
    name: 'John',
    gender: 'male',
    degree: 'Bachelor',
    english: 'English'
};
getInfo(sv2);

function getInfo(obj) {
    let { firstName = "Quân", degree = "NA" } = obj;
    console.log(`firstName: ${firstName}`);
    console.log(`degree: ${degree}`);
}