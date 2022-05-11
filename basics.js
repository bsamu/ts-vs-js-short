// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// ha nem adok type-t neki, akkor any lesz, az a default. Pl let age; akár ki is lehet írni, hogy let age: any;
// (----------------------------------------------)
// Primitives
// we want number string, boolean primitive types, so they start with lowercase
var age;
age = 12;
var userName;
userName = 'Max';
var isInstructor;
isInstructor = true;
// let hobbies: null;
// hobbies = 12; hibát dob rá, ha bármire is átírnánk, ezért type: null-nak nem sok értelme van
// (----------------------------------------------)
// More complex types
var hobbies;
hobbies = ['Sports', 'Cooking'];
var person;
person = {
    name: 'Max',
    age: 32
};
// person = {
//     isEmployee: TextTrackCue;
// }
var people; // array-t hoz létre, ahol minden tag egy object
// (----------------------------------------------)
// Type interference
var course = 'React - The Complete Guide'; //  Ha egyből assignolok egy value-t neki, akkor azt a typet fogadja el onnantól
// let course: string = 'React - The Complete Guide'; // Így is jó, de redundant...
// course = 12341;
// (----------------------------------------------)
// Union types - több typet is elfogad
var courses = 'React - The Complete Guide';
courses = 12341; // így már nincs vele baj
// let hobbit: {
//     name: string;
//     age: number;
// }; // helyett
var hobbit;
var hobbitses; // kombózni is lehet
// (----------------------------------------------)
// Functions & types
function add(a, b) {
    return a + b;
}
; // ha ráviszem functionra egeret, akkor kiírja, hogy 2 number megy be, 1 number jön ki alapból, a paraméterek után írhatjuk, hogy :milyen typekat akarunk
function print(value) {
    console.log(value);
}
; // ha ráviszem functionre, kiírja, hogy return type void, mert nincs benne return statement
// Generics
//type variable-t fogunk használni, ami type-ken működik, nem valuekon
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
var stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');
// updatedArray[0].split(''); // ts nem dob rá hibát, hogy numbert nem tudja splitelni
stringArray[0].split(''); // így nem szól a hibáért, mert stringet tudja
// class = blueprint for objects
var Student = /** @class */ (function () {
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
    function Student(firstName, lastName, age, courses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }
    Student.prototype.enrol = function (courseName) {
        this.courses.push(courseName);
    };
    Student.prototype.listCourses = function () {
        return this.courses.slice();
    };
    return Student;
}());
var student = new Student('Max', 'Schwarz', 32, ['Angular']);
student.enrol('React');
// student.courses => Angular, React
// typescripttel megmondhatjuk, hogy egy property v method public v private legyen... private csak a classon belül használható, public kívülről is. Defaultban mind public. Legyen pl courses private.
// student.courses // errort dob, mert private
student.listCourses(); // nem dob hibát
;
var max;
max = {
    firstName: 'Max',
    age: 32,
    greet: function () {
        console.log('Hello!');
    }
};
// Miért jobb ez, mint alias(/type). Ez egy alternatíva a type-ra, viszont van egy extra feature. Interface-t class is tud implementálni!
var Instructor = /** @class */ (function () {
    function Instructor() {
    }
    Instructor.prototype.greet = function () {
        console.log('Hello!!!!');
    };
    return Instructor;
}());
