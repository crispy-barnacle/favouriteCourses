// ==UserScript==
// @name         Favourite courses
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Me
// @match        https://courses.cs.ut.ee/courses/index/2022/spring
// @match        https://courses.cs.ut.ee/courses
// @match        https://courses.cs.ut.ee
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var courseNames = ["Automaadid, keeled ja translaatorid", "Andmeturve", "Süsteemihaldus", "Objektorienteeritud programmeerimine", "Tarkvara testimine", "Inimise ja arvuti interaktsioon"];
    console.log(courseNames);

    var contentElement = document.getElementsByClassName("content")[0];
    var courseListToAdd = document.createElement("ul");
    courseListToAdd.className = "course-list";

    for (var course of contentElement.getElementsByClassName("course-list")[0].children) {
        var courseCode = course.getElementsByClassName("course-code")[0].innerText;
        var courseName = course.innerText.replace(courseCode + "\n", "");
        if (courseNames.includes(courseName)) {
            courseListToAdd.append(course);
        }
    }
    contentElement.prepend(document.createElement("br"));
    contentElement.prepend(courseListToAdd);

    var header = document.createElement("h2");
    header.innerText = "Favourites";
    contentElement.prepend(header);
})();
