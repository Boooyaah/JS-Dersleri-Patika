// **** const now=new Date()
// **** console.log(now)
// **** console.log(typeof(now))

// **** console.log(` Year: ${now.getFullYear()}`)
// **** console.log(` Month: ${now.getMonth()+1}`)
// **** console.log(` Date: ${now.getDate()}`)
// **** console.log(` Hours: ${now.getHours()}`)
// **** console.log(` Minutes: ${now.getMinutes()}`)
// **** console.log(` Seconds: ${now.getSeconds()}`)
// **** console.log(` MiliSeconds: ${now.getMilliseconds()}`)
// **** console.log(`Today: ${now.toDateString()}`)


// ! Timestamp kullanımı.. 

const startDate=new Date('19/07/2021 09:45:00');
const now=new Date()

console.log(startDate);
const diff=now.getTime(ranges)-startDate.getTime()
console.log(diff)