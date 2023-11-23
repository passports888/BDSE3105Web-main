d3.csv('BestSellerinEachAgeGroup.csv').then(
    res => {
        drawBarChart(res);
    }

);

function drawBarChart(res) {
    let myGraph = document.getElementById('myGraph');
    //調整bin數量
    binCount = 25;

    max = 45;
    min = 10;

    let trace1 = {
        marker: {
            opacity: 0.7,
            width: 1,
            line: {
                width: 1
            },
        },

    };

    trace1.type = "bar";
    trace1.x = [];
    trace1.y = [];
    for (let i = 0; i < res.length; i++) {
        trace1.x[i] = res[i][''];
        trace1.y[i] = res[i]['16~23'];
        trace1.title = '16~23';
        trace1.name = '16~23';
        console.log(res[i][''])
    };

    let data = [];
    data.push(trace1);

    let trace2 = {
        marker: {
            opacity: 0.7,
            width: 1,
            line: {
                width: 1
            },
        },

    };

    trace2.type = "bar";
    trace2.x = [];
    trace2.y = [];
    for (let i = 0; i < res.length; i++) {
        trace2.x[i] = res[i][''];
        trace2.y[i] = res[i]['24~31'];
        trace2.title = '24~31';
        trace2.name = '24~31';
    };
    data.push(trace2);

    let trace3 = {
        marker: {
            opacity: 0.7,
            width: 1,
            line: {
                width: 1
            },
        },

    };

    trace3.type = "bar";
    trace3.x = [];
    trace3.y = [];
    for (let i = 0; i < res.length; i++) {
        trace3.x[i] = res[i][''];
        trace3.y[i] = res[i]['32~48'];
        trace3.title = '32~48'
        trace3.name = '32~48'
    };
    data.push(trace3);

    let trace4 = {
        marker: {
            opacity: 0.7,
            width: 1,
            line: {
                width: 1
            },
        },

    };

    trace4.type = "bar";
    trace4.x = [];
    trace4.y = [];
    for (let i = 0; i < res.length; i++) {
        trace4.x[i] = res[i][''];
        trace4.y[i] = res[i]['49~99'];
        trace4.title = '49~99'
        trace4.name = '49~99'
    };
    data.push(trace4);



    let layout = {
        margin: {
            t: 100
        },
        bargap: 0.1,
        title: {
            text: "   ",
            font: {
                size: 30
            }
        },
        xaxis: {
            type: 'category',
            tickangle: 90,
            showticklabels: false  
        },
        yaxis: {
            title: {
                text: 'Numbers of people',
                font: {
                    size: 20
                }
            }
        },
    };

    Plotly.newPlot(myGraph, data, layout);
};