// ==UserScript==
// @name         Favourite courses
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  try to take over the world!
// @author       Me
// @match        https://courses.cs.ut.ee/courses/index/2022/fall
// @match        https://courses.cs.ut.ee/courses
// @match        https://courses.cs.ut.ee
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // NB! Use javascript source code when using letters with diacritics or Cyrillic letters, e.g.: \u00FC
    let courseNames = ["Eestikeelne kommunikatsioon arvutiteaduses", "Sissejuhatus andmeteadusesse", "Praktika informaatikas", "Tehisintellekt", "Programmeerimine"];
    console.log(courseNames);

    let contentElement = document.getElementsByClassName("content")[0];
    let courseListToAdd = document.createElement("ul");
    let arrayOfCourses = [];
    courseListToAdd.className = "course-list";

    for (let course of contentElement.getElementsByClassName("course-list")[0].children) {
        let courseCode = course.getElementsByClassName("course-code")[0].innerText;
        let courseName = course.innerText.replace(courseCode + "\n", "");
        if (courseNames.includes(courseName)) {
            arrayOfCourses.push(course);
        }
    }

    for (let course of arrayOfCourses) {
        courseListToAdd.append(course);
    }

    contentElement.prepend(document.createElement("br"));
    contentElement.prepend(courseListToAdd);

    let header = document.createElement("h2");
    header.innerText = "Favourites";
    contentElement.prepend(header);
})();
