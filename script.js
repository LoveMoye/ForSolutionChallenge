const people = [...(document.getElementsByClassName("img_person"))];
people.forEach((person, i) => {
    person.dataset.index = i;
});

function activate(i) {
    people[i].classList.add("visible");
}

function activateAll() {
    people.forEach((person, i) => {
        activate(i);
    });
}

function activatePart(criterion) {
    for(let i = 0; i<criterion; i++) {
        activate(i);
    }
}

function deactivate(person) {
    person.classList.remove("visible");
}

function deactivateAll() {
    people.forEach((person) => {
        deactivate(person);
    });
}

// function imgRenderer() {
//     let statContainer = document.getElementsByClassName('statContainer');
//     let rect;
//     let criterion = 0;
//     let unit = window.innerHeight*(0.8-0.3)/20;
//     let prev = window.innerHeight * 0.8;
//     window.addEventListener("scroll", e => {
//         rect = statContainer[0].getBoundingClientRect();
//         if(rect.top < window.innerHeight * 0.8 && 
//             rect.top >= window.innerHeight * 0.4) {
//             criterion = Math.ceil((prev - rect.top) / unit);
//             deactivateAll();
//             activatePart(criterion);
//         } else if(rect.top >= window.innerHeight * 0.8 || rect.top < -250) {
//             deactivateAll();
//         } else {
//             activateAll();
//         }
    
//     }) 
// }

// // imgRenderer();

// function chartDraw() {
//     let duration = 1500;
//     let statContainer = document.getElementsByClassName('statContainer');
//     let rect;
//     // console.log("rect.top", rect.top);
//     // console.log(rect.width, rect.height);
//     // console.log("window.innerHeight", window.innerHeight*0.85);
//     const canvas = document.getElementById("chart1");
//     const ctx = canvas.getContext("2d");
//     window.addEventListener("scroll", e => {
//         rect = statContainer[1].getBoundingClientRect()
//         if(rect.top < window.innerHeight*2/3 && rect.top >= -150) {
//             let pieChart = new Chart(ctx, {
//                 type: 'pie',
//                 data: {
//                     datasets: [{
//                         data: [88.1, 11.9],
//                         backgroundColor: [
//                             "#C1C1C1", "#8E8E8E"
//                         ]
//                     }],
//                     labels: [
//                         '후천적 원인(사고, 질환)', '선천적 원인'
//                     ]
//                 },
//                 options: {
//                     animation: {
//                         duration: duration
//                     }
//                 }
//             })
//             duration = 0;
//         } else if (rect.top > window.innerHeight*0.85 || rect.top < -350) {
//             ctx.clearRect(0,0,rect.width, rect.height);
//             duration = 1500;
//         }
//     })
// }

// // chartDraw();

// function chartDraw2() {
//     let duration = 2000;
//     let statContainer = document.getElementsByClassName('statContainer');
//     let rect;
//     // console.log("rect.top", rect.top);
//     // console.log(rect.width, rect.height);
//     // console.log("window.innerHeight", window.innerHeight*0.85);
//     const canvas = document.getElementById("chart2");
//     const ctx = canvas.getContext("2d");
//     window.addEventListener("scroll", e => {
//         rect = statContainer[2].getBoundingClientRect();
//         if(rect.top < window.innerHeight*2/3 && rect.top >= -150) {
//             let barChart = new Chart(ctx, {
//                 type: 'bar',
//                 data: {
//                     datasets: [{
//                         data: [1.8, 18.3, 46.0, 33.9],
//                         // backgroundColor: [
//                         //     "#C1C1C1", "#8E8E8E"
//                         // ],
//                         label: "우리나라의 장애인에 대한 차별 인식(전체)"
//                     }],
//                     labels: [
//                         '전혀 없다', '별로 없다', '약간 있다', '매우 있다'
//                     ]
//                 },
//                 options: {
//                     animation: {
//                         duration: duration
//                     },
//                     scales: {
//                         xAxes: [{
//                             gridLines: {
//                                 display: false
//                             }
//                         }],
//                         yAxes: [{
//                             gridLines: {
//                                 display: false
//                             },
//                             ticks: {
//                                 display: false
//                             }
//                         }]
//                     }
//                 }
//             })
//             duration = 0;
//         } else if (rect.top > window.innerHeight*0.85 || rect.top < -350) {
//             ctx.clearRect(0,0,rect.width, rect.height);
//             duration = 1500;
//         }
//     })
// }

// // chartDraw2();

// function chartDraw3() {
//     let duration = 2000;
//     let statContainer = document.getElementsByClassName('statContainer');
//     let rect;
//     // console.log("rect.top", rect.top);
//     // console.log(rect.width, rect.height);
//     // console.log("window.innerHeight", window.innerHeight*0.85);
//     const canvas = document.getElementById("chart3");
//     const ctx = canvas.getContext("2d");
//     window.addEventListener("scroll", e => {
//         rect = statContainer[3].getBoundingClientRect();
//         if(rect.top < window.innerHeight*2/3 && rect.top >= -150) {
//             let barChart = new Chart(ctx, {
//                 type: 'bar',
//                 data: {
//                     datasets: [{
//                         data: [2.5, 33.3, 54.3, 9.9],
//                         // backgroundColor: [
//                         //     "#C1C1C1", "#8E8E8E"
//                         // ],
//                         label: "장애등록 후 국가나 사회로부터의 지원에 대한 인식(전체)"
//                     }],
//                     labels: [
//                         '매우 많음', '약간 받고 있음', '별로 받지 못하고 있음', '전혀 받지 못하고 있음'
//                     ]
//                 },
//                 options: {
//                     animation: {
//                         duration: duration
//                     },
//                     scales: {
//                         xAxes: [{
//                             gridLines: {
//                                 display: false
//                             }
//                         }],
//                         yAxes: [{
//                             gridLines: {
//                                 display: false
//                             },
//                             ticks: {
//                                 display: false
//                             }
//                         }]
//                     }
//                 }
//             })
//             duration = 0;
//         } else if (rect.top > window.innerHeight*0.85 || rect.top < -350) {
//             ctx.clearRect(0,0,rect.width, rect.height);
//             duration = 1500;
//         }
//     })
// }

// // chartDraw3();