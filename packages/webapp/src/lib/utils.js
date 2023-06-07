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

export {
    refreshGraph
}