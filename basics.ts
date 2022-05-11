// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// ha nem adok type-t neki, akkor any lesz, az a default. Pl let age; akár ki is lehet írni, hogy let age: any;

// (----------------------------------------------)
// Primitives
// we want number string, boolean primitive types, so they start with lowercase

let age: number;

age = 12;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// let hobbies: null;
// hobbies = 12; hibát dob rá, ha bármire is átírnánk, ezért type: null-nak nem sok értelme van

// (----------------------------------------------)
// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

let person: {
    name: string;
    age: number;
};

person = {
    name: 'Max',
    age: 32
};

// person = {
//     isEmployee: TextTrackCue;
// }

let people: {
    name: string;
    age: number;
}[]; // array-t hoz létre, ahol minden tag egy object

// (----------------------------------------------)
// Type interference

let course = 'React - The Complete Guide'; //  Ha egyből assignolok egy value-t neki, akkor azt a typet fogadja el onnantól
// let course: string = 'React - The Complete Guide'; // Így is jó, de redundant...

// course = 12341;

// (----------------------------------------------)
// Union types - több typet is elfogad

let courses: string | number | string[] = 'React - The Complete Guide';

courses = 12341; // így már nincs vele baj

// (----------------------------------------------)
// Type alias

type Person = {
    name: string;
    age: number;
}; // nem kell mindig végigírni a "sémát", csak "belinkelem", mint mongoban

// let hobbit: {
//     name: string;
//     age: number;
// }; // helyett

let hobbit: Person;
let hobbitses: Person[]; // kombózni is lehet

// (----------------------------------------------)
// Functions & types

function add(a: number, b: number): number | string {
    return a + b;
}; // ha ráviszem functionra egeret, akkor kiírja, hogy 2 number megy be, 1 number jön ki alapból, a paraméterek után írhatjuk, hogy :milyen typekat akarunk

function print(value: any) {
    console.log(value);
}; // ha ráviszem functionre, kiírja, hogy return type void, mert nincs benne return statement

// Generics
//type variable-t fogunk használni, ami type-ken működik, nem valuekon

function insertAtBeginning<T>(array: T[], value: T) { //function *név*<T>--> ez "deklarálja", általában T for Type, de ki is lehet írni, ezt használjuk fel a későbbiekben, paraméterek, return type-nál
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// updatedArray[0].split(''); // ts nem dob rá hibát, hogy numbert nem tudja splitelni
stringArray[0].split(''); // így nem szól a hibáért, mert stringet tudja

// class = blueprint for objects
class Student {
    // ezt a részt vanillaJS-ben nem lehet megcsinálni!
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[];
    // constructor(first: string, last: string, age: number, courses: string[]) {
    //     this.firstName = first;
    //     this.lastName = last;
    //     this.age = age;
    //     this.courses = courses;
    // }
    // ehelyett úgy is lehet, hogy constructorban mindegyik elé odaírjuk, hogy public/private

    // constructor function/method, default method, is called when we instantiate a new object based on that class here
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        private courses: string[]
    ) {}

    enrol(courseName: string) { // how u add a method to such a class, method shorthand notation, nem kell kiírni function-t
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice();
    }
}

const student = new Student('Max', 'Schwarz', 32, ['Angular']);
student.enrol('React');
// student.courses => Angular, React

// typescripttel megmondhatjuk, hogy egy property v method public v private legyen... private csak a classon belül használható, public kívülről is. Defaultban mind public. Legyen pl courses private.
// student.courses // errort dob, mert private
student.listCourses(); // nem dob hibát

// (----------------------------------------------)
// Interfaces - object type definitions
// Exists only in ts
interface Human {
    firstName: string;
    age: number;

    greet: () => void;
};

let max: Human;

max = {
    firstName: 'Max',
    age: 32,
    greet() {
        console.log('Hello!');
    },
};

// Miért jobb ez, mint alias(/type). Ez egy alternatíva a type-ra, viszont van egy extra feature. Interface-t class is tud implementálni!

class Instructor implements Human {
    firstName: string;
    age: number;
    greet() {
        console.log('Hello!!!!')
    }
}