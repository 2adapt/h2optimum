/**
 * 
 * @param {*} selectedD Devices selected in checkboxes
 * @param {*} D All the devices associated with current installation
 * @param {*} Generate Function to generate plot
 */
function refreshGraph(selectedD, D, Generate){
    var devis = [];
    for (const property in selectedD) {
        if(selectedD[property] == true){
            let device = D.find(obj => {
                return obj.id == property;
            });
            devis.push(device);
        }
    }
    Generate(devis);
}

function unpack(prop, array){
    const Values = array.map(obj => obj[prop] == -127 ? null : obj[prop]);
    return Values;
}

/**
 * 
 * @param {*} dates The dates to use in from to
 * @param {*} devis Devices to update
 * @param {*} P Plotly Instance
 * @param {*} graphContainer Container to update
 * @param {*} units Units to update (t, tar, h or b)
 */
async function updateGraph(dates, devis, P, graphContainer, units){
    var traceDataUpdate = [];
    var numTraces = [];
    for(let device of devis){
        var searchParams = new URLSearchParams({
            fromDate: dates[0],
            toDate: dates[1],
            deviceMac: device.mac,
        });

        let res = await fetch(`https://api.2adapt.pt/v1/get-measurements?${searchParams.toString()}`);
        let list = await res.json();

        units.forEach(unit => {
            var traceName = getTraceName(unit);

            var unitToUpdate = list.filter(obj => obj.type === unit);

            var traceUpdate = {
                x: unpack('ts', unitToUpdate),
                y: unpack('val', unitToUpdate),
                name: device.description + traceName,
                type: 'scatter'
            };

            traceDataUpdate.push(traceUpdate);
        });
    };

    for (var i = 0; i < traceDataUpdate.length; i++){
        numTraces.push(i);
    }

    P.animate(graphContainer,{
        data: traceDataUpdate,
        traces: numTraces,
        layout: {
            xaxis: {range: [dates[0], dates[1]]}
        }
        }, {
        transition: {
            duration: 1000,
            easing: 'cubic-in-out'
        },
        frame: {
            duration: 1000
        }
    });
}

function getTraceName(unitCode){
    if(unitCode == 't'){
        return ' - Temp. solo';
    } else if(unitCode == 'tar'){
        return ' - Temp. ar';
    } else if(unitCode == 'h'){
        return ' - Humidade';
    } else if(unitCode == 'b'){
        return ' - Bateria';
    } else {
        return ' - Desconhecido';
    }
}

export {
    refreshGraph,
    unpack,
    updateGraph,
    getTraceName
}