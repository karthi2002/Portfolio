// document.addEventListener('DOMContentLoaded', function () {
//     const textElement1 = document.getElementById('typing-text1');
//     const textContent1 = "I'm a full stack developer with a strong background in Java, React.js, Node.js, HTML, CSS, and Bootstrap. Proven track record in delivering high-quality, scalable web applications that exceed client expectations. Passionate about elegant problem-solving and staying current with web development trends. Let's connect and discuss how we can collaborate on exciting projects or exchange ideas about web development and emerging technologies.";

//     let currentIndex1 = 0;
//     let currentLine1 = '';
//     let currentLineIndex1 = 0;

//     function type() {
//         if (currentIndex1 < textContent1.length) {
//             const char = textContent1[currentIndex1];

//             // Check if adding the next word would exceed the width
//             if (char === ' ' && getTextWidth(currentLine1 + ' ' + textContent1.substring(currentIndex1 + 1).split(' ')[0]) >= textElement1.parentElement.offsetWidth * 0.75) {
//                 textElement1.innerHTML += '<br>';
//                 currentLine1 = '';
//                 currentLineIndex1 = 0;
//             } else {
//                 textElement1.innerHTML += char;
//                 currentLine1 += char;
//                 currentLineIndex1++;
//             }

//             currentIndex1++;
//             setTimeout(type, 1);
//         } else {
//             textElement1.style.borderRight = 'none';
//         }
//     }

//     function getTextWidth(text) {
//         const span = document.createElement('span');
//         span.style.visibility = 'hidden';
//         span.style.whiteSpace = 'nowrap';
//         span.innerHTML = text;
//         document.body.appendChild(span);
//         const width = span.offsetWidth;
//         document.body.removeChild(span);
//         return width;
//     }

//     type();
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const textElement2 = document.getElementById('typing-text2');
//     const textContent2 = "In addition to my professional expertise, I have a demonstrated commitment to continuous improvement and mastery of my craft. I completed the 100-day coding challenges on LeetCode, honing my skills in problem-solving and algorithmic thinking. Furthermore, I achieved a 4-star rating in data structures and algorithms on HackerRank, showcasing my dedication to excellence and proficiency in foundational concepts. Let's leverage this combined experience and expertise to create innovative solutions and drive success in our projects.";

//     let currentIndex2 = 0;
//     let currentLine2 = '';
//     let currentLineIndex2 = 0;

//     function type() {
//         if (currentIndex2 < textContent2.length) {
//             const char = textContent2[currentIndex2];

//             // Check if adding the next word would exceed the width
//             if (char === ' ' && getTextWidth(currentLine2 + ' ' + textContent2.substring(currentIndex2 + 2).split(' ')[0]) >= textElement2.parentElement.offsetWidth * 0.75) {
//                 textElement2.innerHTML += '<br>';
//                 currentLine2 = '';
//                 currentLineIndex2 = 0;
//             } else {
//                 textElement2.innerHTML += char;
//                 currentLine2 += char;
//                 currentLineIndex2++;
//             }

//             currentIndex2++;
//             setTimeout(type, 1);
//         } else {
//             textElement2.style.borderRight = 'none';
//         }
//     }

//     function getTextWidth(text) {
//         const span = document.createElement('span');
//         span.style.visibility = 'hidden';
//         span.style.whiteSpace = 'nowrap';
//         span.innerHTML = text;
//         document.body.appendChild(span);
//         const width = span.offsetWidth;
//         document.body.removeChild(span);
//         return width;
//     }

//     type();
// });


document.addEventListener("DOMContentLoaded", function() {
    var navbarLinks = document.querySelectorAll('.nav-link');

    navbarLinks.forEach(function(navbarLink) {
        navbarLink.addEventListener('click', function(event) {
            navbarLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});
