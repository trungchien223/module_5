let courses = [
    { id: 1, title: "ReactJS Tutorial", rating: 4.2 },
    { id: 2, title: "Angular Tutorial", rating: 3.8 },
    { id: 3, title: "VueJS Tutorial", rating: 4.5 },
    { id: 4, title: "NodeJS Tutorial", rating: 3.9 },
    { id: 5, title: "JavaScript Basics", rating: 4.0 }
];
let addedCourses = [
    { id: 6, title: "PHP Tutorial", rating: 3 },
    { id: 7, title: "C# Tutorial", rating: 2 },
    { id: 8, title: "Docker Tutorial", rating: 3.8 }
];
let mergeCourses = [...courses,...addedCourses];
console.log(mergeCourses);