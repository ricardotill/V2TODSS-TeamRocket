/**
 * getALlData transaction
 * @param {org.example.basic.getALlData} huisarts
 * @transaction
 */
function getALlData(huisarts) {
    var jsonObj = serializer.toJSON(huisarts);
    console.log("Huisarts: ", huisarts);
    console.log("Ask Huisarts: ", jsonObj);    
}