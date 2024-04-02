const sayilar=[18,25,643,234,6234,6,7,234,65,76];

const findIndex=sayilar.findIndex(point=>point==6234);
sayilar[findIndex]=45;
console.log(sayilar);


const students=[
    {isim:"osman",point:40},
    {isim:"tuba",point:60},
    {isim:"elif",point:30},
    {isim:"can",point:100},
  
];

const objectIndex=students.findIndex(student=>student.isim=="osman");
students[objectIndex].isim="Merdoli"
console.log(students)

const sayiIndex=students.findIndex(student=>student.point==30 );


students[objectIndex].point=123413;





