const employee = {
    name : "David Chumo",
    street : "Kihunguro"
}

function updateEmployeeWithKeyAndValue(empObj, key, value){
    return {
        ...empObj,
        [key]: value
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(empObj, key, value){
    empObj[key] =value;
    return empObj;
}

function deleteFromEmployeeByKey(empObj, keyToDelete){
    const newEmployeeObj = { ...empObj};
    delete newEmployeeObj[keyToDelete];
    return newEmployeeObj;
}

function destructivelyDeleteFromEmployeeByKey(empObj, keytoDelete){
    delete empObj[keytoDelete]
    return empObj;
}
