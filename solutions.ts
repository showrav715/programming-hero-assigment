
const multiplyValue = (number: number, multiplier?: number): number => {
    if(multiplier || multiplier === 0){
        return number * multiplier;
    }
    return number * 2;
}


const processInput = (value : string | number | boolean)=>{
    if(typeof value === "string"){
        return value.trim().toLowerCase();
    }
    if(typeof value == "number"){
        return value*10;
    }

    if(typeof value === "boolean"){
        return value == true ? 'Active' : 'Inactive';
    }

    return value;

}

const formatCoordinate = (cordinate: readonly [number,number,string]): string => {

    const [latitude,longitude,locationName] = cordinate;

    return `Location: ${locationName} (${latitude},${longitude})`;
}


const concatenateArrays = <T>(...arrays:T[][]):T[] =>{

    const output:T[] = [];
    for(const array of arrays){
        output.push(...array)
    }

    return output;

}



interface Course{
    title : string,
    students: number,
    isPublished: boolean
}

const getPopularCourses =  (courses:Course[],minStudents : number):Course[]=>{

    const filter = courses.filter((course)=>{
        return course.isPublished == true && course.students >= minStudents 
    })
    return filter
}

const pluckValues = <T, K extends keyof T>  (items: T[],key : K): T[K][]=>{
    const output : T[K][] = [];
    for( let x = 0; x < items.length; x++){
        output.push(items[x][key])
    }
    return output
}


class Employee{
    constructor(protected name : string,private baseSalary :number){

    }

     getDetails() :string{
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee{
    constructor(name:string,baseSalary:number,private deperment : string){
        super(name,baseSalary)
    }

    getRoleInfo():string{
        return `Manager of ${this.deperment}: ${this.name}`
    }


}




const validateAgeAsync = (age: number): Promise<string> => {
    return new Promise((response, error) => {
        if (age < 18) {
            error(new Error("Access Denied: Must be 18 or older"));
        } else {
            setTimeout( () => {
                response("Access Granted");
            }, 1000);
        }
    });
}
