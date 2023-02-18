const num_bases = [
    { valor: 0, nombre: "Cero" },
    { valor: 1, nombre: "Uno" },
    { valor: 2, nombre: "Dos" },
    { valor: 3, nombre: "Tres" },
    { valor: 4, nombre: "Cuatro" },
    { valor: 5, nombre: "Cinco" },
    { valor: 6, nombre: "Seis" },
    { valor: 7, nombre: "Siete" },
    { valor: 8, nombre: "Ocho" },
    { valor: 9, nombre: "Nueve" },
    { valor: 10, nombre: "Diez" },
    { valor: 11, nombre: "Once" },
    { valor: 12, nombre: "Doce" },
    { valor: 13, nombre: "Trece" },
    { valor: 14, nombre: "Catorce" },
    { valor: 15, nombre: "Quince" },
    { valor: 16, nombre: "Dieciseis" },
    { valor: 17, nombre: "Diecisiete" },
    { valor: 18, nombre: "Dieciocho" },
    { valor: 19, nombre: "Diecinueve" },
    { valor: 20, nombre: "Veinte" },
    { valor: 21, nombre: "Veintiuno" },
    { valor: 22, nombre: "Veintidos" },
    { valor: 23, nombre: "Veintitrés" },
    { valor: 24, nombre: "Veinticuatro" },
    { valor: 25, nombre: "Veinticinco" },
    { valor: 26, nombre: "Veintiseis" },
    { valor: 27, nombre: "Veintisiete" },
    { valor: 28, nombre: "Veintiocho" },
    { valor: 29, nombre: "Veintinueve" },
    { valor: 30, nombre: "Treinta" },
    { valor: 40, nombre: "Cuarenta" },
    { valor: 50, nombre: "Cincuenta" },
    { valor: 60, nombre: "Sesenta" },
    { valor: 70, nombre: "Setenta" },
    { valor: 80, nombre: "Ochenta" },
    { valor: 90, nombre: "Noventa" },
    { valor: 100, nombre: "Ciento" },
    { valor: 200, nombre: "Doscientos" },
    { valor: 300, nombre: "Trescientos" },
    { valor: 400, nombre: "Cuatrocientos" },
    { valor: 500, nombre: "Quinientos" },
    { valor: 600, nombre: "Seiscientos" },
    { valor: 700, nombre: "Setecientos" },
    { valor: 800, nombre: "Ochocientos" },
    { valor: 900, nombre: "Novecientos" }
];


Main();

function Main() {

    let value = prompt("Ingresar un valor entre 1 y 999 a traducir: ");
    /* 
     * calc_unidades: 
     * Recibe el valor como parámetro, y devuelve un array con el número particionado en unidades.
     * ej. value=361. calc_unidades returns [300, 60, 1]
    */
    let arr_valores = calc_unidades(value);
    /*
     * check_values:
     * recibe el array de valores como parametro, devuelve el array modificado para los numeros entre 1 y 29 
     * los cuales son no combinables con los demás números.
    */
    let update_valores = check_values(arr_valores);

    /* 
     * translate:
     * recibe el array de valores como parámetro, y devuelve el array con los valores de las keys de la lista.
     * ej. 52 -> Cincuenta y dos.
    */
    let arr_str = translate(update_valores);

    /* 
     * clear_response:
     * recibe el array de strings como parámetro, y devuelve un string con correcciones gramaticales.
    */
    let respuesta = clear_response(arr_str);

    alert(respuesta);
}


function calc_unidades(val) {
    let arr_divido = [];
    let len = val.length + 1; /* Se le agrega 1 porque necesito contrarestar la sustraccion de la primera vuelta */
    for (let i = 0; i < val.length; i++) {
        arr_divido.push(val[i]);
        len -= 1;
        for (let j = 1; j < len; j++) {
            arr_divido[i] += parseInt("0");
        }
    }
    return arr_divido;
}

function check_values(arr_val) {
    switch (arr_val.length) {
        case 2:
            if (arr_val[0] >= 10 && arr_val[0] < 30) {
                let auxiliar = parseInt(arr_val[0]) + parseInt(arr_val[1]);
                arr_val.splice(0, 2, auxiliar);
                return arr_val;
            } else {
                return arr_val;
            }
            break;
        case 3:
            if (arr_val[1] >= "0" && arr_val[1] < "30") {
                let auxiliar = parseInt(arr_val[1]) + parseInt(arr_val[2]);
                arr_val.splice(1, 1, auxiliar.toString())
                arr_val.pop();
                return arr_val;
            } else {
                return arr_val;
            }
            break;
        default:
            return arr_val;
            break;
    }
}


function translate(val) {
    let sentence = [];

    if (val[val.length - 1] === "0") {
        val.pop();
    }

    val.forEach(value => {
        num_bases.forEach(num => {
            if (parseInt(value) === num.valor) {
                sentence.push(num.nombre);
            }
        })
    });

    console.log(val)
    console.log(val.length);

    if (val.length >= 2) {
        console.log("entre primero")
        if (val[1] >= "1" && val[1] < "30") {
            return sentence;
        } else {
            let auxiliar = sentence.length - 1;
            for (let i = 0; i < sentence.length; i++) {
                if (i === auxiliar) {
                    sentence.splice(i, 1, "y " + sentence[i])
                }
            }
            return sentence;
        }
    } else {
        if(sentence[0] === "Ciento"){
            sentence.splice(0, 1, "Cien");
        }
        return sentence;
    }
}

function clear_response(arr_str) {
    return arr_str.toString().toLowerCase().split(',').join(' ');
}
