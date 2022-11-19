// 1. PK - indexBOMData *type* **ID**
// 2. FK - parentID *type* **GUID**
// 3. FK - childID *type* **GUID**
// 4.    - qty *type* Number

function newBOMData(parentID, childID, QTY) {
    const obj ={};
    obj.indexBOMData = newBOMDataID();
    obj.parentID = parentID;
    obj.childID = childID;
    obj.qty = QTY;
    return obj;
}


//future - creates new UID for BOMData object
//future - check value against table to ensure unique-ness
function newBOMDataID() {
    return 0;
}