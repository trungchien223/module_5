let courses = [
    { id: 1, title: "ReactJS Tutorial", rating: 4.2 },
    { id: 2, title: "Angular Tutorial", rating: 3.8 },
    { id: 3, title: "VueJS Tutorial", rating: 4.5 },
    { id: 4, title: "NodeJS Tutorial", rating: 3.9 },
    { id: 5, title: "JavaScript Basics", rating: 4.0 }
];
let highRating = courses.filter(course=>course.rating >= 4);
console.log(highRating);