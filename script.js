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

function imgRenderer() {
    const people = [...(document.getElementsByClassName('img_person'))];
    let criterion = 0;
    if(people !== null) {
        window.addEventListener("scroll", e => {
            let statContainer = document.getElementsByClassName('statContainer');
            let rect = statContainer[0].getBoundingClientRect();
            let unit = window.innerHeight*(0.8-0.3)/20;
            let prev = window.innerHeight * 0.8;
            if(rect.top < window.innerHeight * 0.8 && 
                rect.top >= window.innerHeight * 0.4) {
                criterion = Math.ceil((prev - rect.top) / unit);
                deactivateAll();
                activatePart(criterion);
            } else if(rect.top >= window.innerHeight * 0.8) {
                deactivateAll();
            } else {
                activateAll();
            }
        
        })
    }   
}

imgRenderer();

function chartDraw() {
    let duration = 1500;
    window.addEventListener("scroll", e => {
        let statContainer = document.getElementsByClassName('statContainer');
        let rect = statContainer[1].getBoundingClientRect();
        // console.log("rect.top", rect.top);
        // console.log(rect.width, rect.height);
        // console.log("window.innerHeight", window.innerHeight*0.85);
        const canvas = document.getElementById("chart");
        const ctx = canvas.getContext("2d");
        if(rect.top < window.innerHeight*2/3 && rect.top >= -150) {
            let pieChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    datasets: [{
                        data: [88.1, 11.9],
                        backgroundColor: [
                            "#C1C1C1", "#8E8E8E"
                        ]
                    }],
                    labels: [
                        '후천적 원인(사고, 질환)', '선천적 원인'
                    ]
                },
                options: {
                    animation: {
                        duration: duration
                    }
                }
            })
            duration = 0;
        } else if (rect.top > window.innerHeight*0.85 || rect.top < -350) {
            ctx.clearRect(0,0,rect.width, rect.height);
            duration = 1500;
        }
    })
}

chartDraw();