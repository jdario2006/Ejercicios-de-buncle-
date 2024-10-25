function mensaje() {
    let mnsaje = document.getElementById("msj").value;
    let repeticiones = parseInt(document.getElementById("repeticiones").value);
    let respuesta = document.getElementById("respuesta");
    if (isNaN(repeticiones) || repeticiones <= 0) {
        alert("Por favor ingrese un número válido de repeticiones.");
        return;
    }
    let text = "";
    for (let i = 1; i <= repeticiones; i++) {
        text += mnsaje + "\n";
    }
    respuesta.value = text; 
}
function multiplos() {
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let respuesta = document.getElementById("respuesta_multiplos");
    let resultado = "";
    for(let i = 1; i <= cantidad; i++){
        if(i % 7 ===0){
            resultado += "El numero "+i+" es multiplo de 7\n";
        } 
    }
    respuesta.value= resultado;
}
function multiplos_numeros() {
    let multi= parseInt(document.getElementById("multiplos").value);
    let cantidad= parseInt(document.getElementById("cant").value);
    let respuesta= document.getElementById("respu_multiplos");
    let resul= "";
    for(let i = 1; i <= cantidad; i++){
        if(i % multi ===0){
            resul +="El numero "+i+" es multiplo de "+multi+"\n";
        }
    }
    respuesta.value= resul;
}
function positivo() {
    let cantidad= parseInt(document.getElementById("cant_positivo").value);
    let r= document.getElementById("respu_positivo");
    let resulta= "";
    for(let i = 1; i <= cantidad; i++){
        if(i > 0){
            resulta += i + "\n";
        } 
    }
    r.value= resulta;
}
function pares() {
    let cantidad= parseInt(document.getElementById("cant_pares").value);
    let respues= document.getElementById("respues_pares");
    let resultado_pares= "";
    for(let i = 1; i <= cantidad; i++){
        if(i % 2 ===0){
            resultado_pares +="Los numeros pares son: "+i+ "\n";
        } 
    }
    respues.value= resultado_pares;
}
function divisores() {
    let divisor= parseInt(document.getElementById("divi").value);
    let respue= document.getElementById("respues_divisor");
    let resultado_divisores= "";
    for(let i = 1; i <= divisor; i++){
        if(divisor % i ===0){
            resultado_divisores +="Los numeros divisores de "+divisor+" son:"+i+ "\n";
        } 
    }
    respue.value= resultado_divisores;
}
function tabla_suma() {
    let respuest= document.getElementById("respu_suma");
    let suma="";
    let respues_suma= "";
    for(let i = 1; i <= 12; i++){
        suma= 10 + i;
        respues_suma += "La tabla de suma es "+`10 + ${i} = ${suma}`+"\n";
    }
    respuest.value= respues_suma;
}
function multiplicar() {
    let multiplica= parseInt(document.getElementById("multi").value);
    let inicial= parseInt(document.getElementById("ini").value);
    let final= parseInt(document.getElementById("fin").value);
    let re= document.getElementById("res_multi");
    let resp= "";
    let respu_multi= "";
    for(let i = inicial; i <= final; i++){
        resp= multiplica * i;
        respu_multi += `${multiplica} * ${i} = ${resp}`+"\n";
    }
    re.value= respu_multi;
}
function numeros_comprendidos() {
    let numero1= parseInt(document.getElementById("num1").value);
    let numero2= parseInt(document.getElementById("num2").value);
    let rsp= document.getElementById("rspu");
    let respt= "";
    if (isNaN(numero1) || isNaN(numero2)) {
        rsp.value = "Por favor, ingrese números válidos.";
        return;
    }
    while (numero1 > numero2) {
        alert("Ingrese un número menor o igual que el segundo.");
        numero2 = parseInt(prompt("Ingrese un número mayor que el primero:"));
    }
    for(let i = numero1; i<=numero2; i++){
        respt += i + (i < numero2 ? ", " : "");
    }
    rsp.value= "Los numeros comprendidos entre "+numero1+" y "+numero2+" son: " +respt;
}
function pares_comprendidos() {
    let numero1= parseInt(document.getElementById("numer1").value);
    let numero2= parseInt(document.getElementById("numer2").value);
    let rspta= document.getElementById("rspt");
    let respst= "";
    if (isNaN(numero1) || isNaN(numero2)) {
        rspta.value = "Por favor, ingrese números válidos.";
        return;
    }
    while (numero1 > numero2) {
        alert("Ingrese un número menor o igual que el segundo.");
        numero2 = parseInt(prompt("Ingrese un número mayor que el primero:"));
    }
    for(let i = numero1; i <= numero2; i++){
        if(i % 2 === 0) {
            respst += i + (i < numero2 ? ", " : "");
        }
    }
    rspta.value= "Los numeros pares comprendidos entre "+numero1+" y "+numero2+" son: " +respst;
}