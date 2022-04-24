function validate(data, rules) {

    let errors = [];

    for (let rul in rules){ // проверка правила required (bool)
        for (let rul2 in rules[rul]){
            if (rul2 === 'required'){
                if (rul in data && data[rul] !== null) {
                } else {let required = {field: rul, value: data[rul], rule: 'required'}
                    errors.push(required);
                    return {result: false, errors: errors};
                }
            }
        }
    }
    for (let dataKey in data) { //наименования в дате
        for (let rulesKey in rules) { //все значения в правилах
            if (dataKey === rulesKey) { //сравнение наименований в дате и правилах
                for (let parameter in rules[rulesKey]){ //наименования в правилах
                    let parameterValue = rules[rulesKey][parameter]; //значение входящего правила
                    let dataValue = data[dataKey]; //значение входящих данных
                    if (parameter === 'minLength'){ // проверка правила minLength (number)
                        if (parameterValue <= dataValue.length){
                        }
                        else {let minLength = {field: dataKey, value: dataValue, rule: 'minLength'}
                            errors.push(minLength);
                        }
                    }
                    if (parameter === 'maxLength'){ // проверка правила maxLength (number)
                        if (parameterValue >= dataValue.length){
                        }
                        else {
                            let maxLength = {field: dataKey, value: dataValue, rule: 'maxLength'}
                            errors.push(maxLength);
                        }
                    }
                    if (parameter === 'min'){ // проверка правила min (number)
                        if (parameterValue <= dataValue){
                        }
                        else {
                            let min = {field: dataKey, value: dataValue, rule: 'min'}
                            errors.push(min);
                        }
                    }
                    if (parameter === 'max') { //проверка правила max (number)
                        if (parameterValue >= dataValue) {
                        } else {
                            let max = {field: dataKey, value: dataValue, rule: 'max'}
                            errors.push(max);
                        }
                    }
                    if (parameter === 'isString') { //проверка правила isString (bool)
                        if (parameterValue === true && typeof dataValue === "string"){}
                        else if (parameterValue === false && typeof dataValue !== "string"){}
                        else {let isString = {field: dataKey, value: dataValue, rule: 'isString'}
                            errors.push(isString);
                        }
                    }
                    if (parameter === 'isNumber') { //проверка правила isNumber (bool)
                        if (parameterValue === true && typeof dataValue === "number" && !isNaN(dataValue)){}
                        else if (parameterValue === false && typeof dataValue !== "number" && !isNaN(dataValue)){}
                        else {let isNumber = {field: dataKey, value: dataValue, rule: 'isNumber'}
                            errors.push(isNumber);
                        }
                    }
                    if (parameter === 'isBoolean') { //проверка правила isBoolean (bool)
                        if (parameterValue === true && typeof dataValue === "boolean"){}
                        else if (parameterValue === false && typeof dataValue !== "boolean"){}
                        else {let isBoolean = {field: dataKey, value: dataValue, rule: 'isBoolean'}
                            errors.push(isBoolean);
                        }
                    }
                    if (parameter === 'isEmail') {//проверка правила isEmail (bool)
                        let eMail = /.+@.+\..+/i;
                        if (dataValue.match(eMail)){}
                        else {let isEmail = {field: dataKey, value: dataValue, rule: 'isEmail'}
                            errors.push(isEmail);
                        }
                    }
                }
            }
        }
    }
    if (errors.length === 0){
        return {result: true, errors: errors};
    } else {
        return {result: false, errors: errors};
    }
}