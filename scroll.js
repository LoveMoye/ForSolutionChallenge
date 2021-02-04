function makeChart(ctx, config) {
    let chart = new Chart(ctx, config);
    return chart;
}


function scrollEvent() {
    let scrollArg = scrollArguments();
    let rect1, rect2;
    let chart1 = makeChart(scrollArg.secondEvent.ctx, scrollArg.secondEvent.chartConfig);
    let chart2 = makeChart(scrollArg.thirdEvent.ctx, scrollArg.thirdEvent.chartConfig);
    let chart3 = makeChart(scrollArg.fourthEvent.ctx, scrollArg.fourthEvent.chartConfig);
    window.addEventListener("scroll", (e) => {
        // first Event
        rect1 = scrollArg.statContainer[0].getBoundingClientRect();
        scrollArg.firstEvent.infoEvent(rect1);
        // second Event
        rect2 = scrollArg.statContainer[1].getBoundingClientRect();
        scrollArg.secondEvent.infoEvent(rect2, chart1);
        // third Event
        rect3 = scrollArg.statContainer[2].getBoundingClientRect();
        scrollArg.thirdEvent.infoEvent(rect3, chart2);
        // fourth Event
        rect4 = scrollArg.statContainer[3].getBoundingClientRect();
        scrollArg.fourthEvent.infoEvent(rect4, chart3);
    })
}

scrollEvent();