Main();

function Main() {
    let cajaAhorro = prompt("Ingresar valor total de su caja de ahorro.")
    let opcion = 0;
    
    alert("Ingresar el número de la opción que solicite \nPresione OK para continuar");
    while (opcion != 4) {
        opcion = menu();
        if(opcion != 4){
            switch (opcion) {
                case "1":
                    cajaAhorro = agregar(cajaAhorro);
                    alert("Operación Exitosa!\nPosee un saldo total de $" + cajaAhorro);
                    break;
                case "2":
                    consultar(cajaAhorro);
                    break;
                case "3":
                    cajaAhorro = retirar(cajaAhorro);
                    alert("Operación Exitosa!\nPosee un saldo total de $" + cajaAhorro);
                    break;
                default:
                    alert("Valor incorrecto. Ingrese un valor válido de las opciones.")
                    break;
            }
        } else {
            alert("Gracias por elegirnos! Adiós.")
        }
    }
}

function menu(cA) {
    let opcion = 0;

    return opcion = prompt("1) Agregar saldo.\n2) Consultar saldo.\n3) Retirar un monto.\n4) Fin");
}

function agregar(cA) {
    let cA_int = parseInt(cA);
    let aux = parseInt(prompt("Opción elegida: (1) Agregar saldo.\nIngresar valor que desea agregar: "));
    return cA_int + aux;
}

function consultar(cA) {
    alert("Opción elegida: (2) Consultar saldo.\nUsted tiene en su caja de ahorro un total de $" + cA + " disponibles.");
}

function retirar(cA) {
    let saldoRet = prompt("Opción elegida: (3) Retirar un monto.\nIngresar valor que desea retirar: ");
    if (saldoRet < cA) {
        calcUnidades(saldoRet);
    } else {
        return "Valor invalido. No puede retirar un monto mayor del que posee";
    }
    return cA - saldoRet;
}

function calcUnidades(retiro) {
    let arrAux = [];
    let len = retiro.length + 1; /* Se le agrega 1 porque necesito contrarestar la sustraccion de la primera vuelta */
    for (let i = 0; i < retiro.length ; i++) {
        arrAux.push(retiro[i]);
        len -= 1;
        for (let j = 1; j < len; j++) {
            arrAux[i] += parseInt("0");
        }
    }
    calcBilletes(arrAux);
}

function calcBilletes(montos) {
    let bil_mil = [];
    let bil_cien = []; 
    let bil_diez = [];
    let tot_mil = 0;
    let tot_cien = 0;
    let tot_diez = 0;
    let error = 0;
    montos.forEach(e => {
        if(e>=1000){
            bil_mil.push(e/1000);
        } 
        if(e<=999 && e>=100){
            bil_cien.push(e/100);
        }
        if(e<100 && e>=10){
            bil_diez.push(e/10);
        }
        if(e<=9){
            error = e;
        }
    });
    bil_mil.forEach(e => { tot_mil += e; });
    bil_cien.forEach(e => { tot_cien += e; });
    bil_diez.forEach(e => { tot_diez += e; });

    alert("Se te ha dado:\n-"+tot_mil+" billetes de $1000.\n-"+tot_cien+" billetes de $100.\n-"+tot_diez+" billetes de $10");
    if(error!=0){
        alert("No se puede retirar el monto $"+error+" porque no podemos otorgar divisas menores a 10.");
    }
}



