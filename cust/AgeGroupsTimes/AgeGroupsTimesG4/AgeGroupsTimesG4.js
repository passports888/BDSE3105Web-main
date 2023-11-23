d3.csv('AgeGroupsTimesG4.csv').then(
    res => {
        drawBarChart(res);
    }

);

function drawBarChart(res) {
    let myGraph = document.getElementById('myGraph');
    //調整bin數量
    binCount = 25;

    max = 55;
    min = 10;
    for (let i = 0; i < res.length; i++) {
        if (res[i]['0'] > max) {
            max = res[i]['0'];
        }
        if (res[i]['0'] < min) {
            min = res[i]['0'];
        }
    }
    console.log(max);
    console.log(min);
   
    let trace1 = {
        // xbins: {
        //     size: (max - min) / binCount,
        //     start: min,
        //     end: max
        // },
        marker: {
            opacity: 0.7,
            width: 1,
            line: {
                color: "blue",
                width: 1
            },
            color: "lightblue"
        },

    };

    trace1.type = "histogram";
    trace1.x = []
    trace1.histnorm = 'count';

    for (let i = 0; i < res.length; i++) {
        trace1.x.push(res[i]['0']);
    }

    let data = [];
    data.push(trace1);



    let layout = {
        margin: {
            t: 50
        },
        bargap: 0.1,
        title: {
            text: "Age 49~99",
            font: {
                size: 30
            }
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