
function ExibeHora(){
	
	numExtenso();
	
	//--------------------------------------------
	// Pegando a hora atual do sistema.
	
	var currentdate = new Date();

	var H = currentdate.getHours();
	var M = currentdate.getMinutes();
	var periodo = "da manhã";

	
	//--------------------------------------------
	// Impede que o navegador exibe zero horas
	
	if (H == 0){
		H = 12;
	}
	
	if (H > 12){
		H -= 12;
		periodo = "da tarde";
	}
	
	//-------------------------------------------
	// Criação de variáveis e definição da String hora 
	// trocando de "um" para "uma" e de "dois" para "duas"
	
	var minuto1;
	var hora;
	var singular = "s";
	
	if (H == 1) {
		hora = "uma";
		singular = "";
	}else if (H == 2) {
		hora = "duas";
	}else{
		hora = numExtenso(H);
	}
	
	//-------------------------------------------
	// Separa o primeiro e segundo dígitos da hora
	// e dos minutos e converte para texto em extenso
	
	var priCasa = M.toString().substr(0, 1);
	var segCasa = M.toString().slice(1);
	var minuto2 = numExtenso(parseInt(segCasa));
	
	if (M < 20){
		
		minuto1 = numExtenso(M);
		
	}else{		
		if (M >= 20 && M < 30) {
			minuto1 = "vinte";
		}else if (M >= 30 && M < 40) {
			minuto1 = "trinta";
		}else if (M >= 40 && M < 50) {
			minuto1 = "quarenta";
		}else if (M >= 50) {
			minuto1 = "cinquenta";
		}
	}
	
	
	//-------------------------------------------
	// Função que pega o número e o converte para texto
	
	function numExtenso(n) {
		switch (n) {
		case 1:
			n = "um";
			break;
		case 2:
			n = "dois";
			break;
		case 3:
			n = "três";
			break;
		case 4:
			n = "quatro";
			break;
		case 5:
			n = "cinco";
			break;
		case 6:
			n = "seis";
			break;
		case 7:
			n = "sete";
			break;
		case 8:
			n = "oito";
			break;
		case 9:
			n = "nove";
			break;
		case 10:
			n = "dez";
			break;
		case 11:
			n = "onze";
			break;
		case 12:
			n = "doze";
			break;
		case 13:
			n = "treze";
			break;
		case 14:
			n = "catorze";
			break;
		case 15:
			n = "quinze";
			break;
		case 16:
			n = "dezesseis";
			break;
		case 17:
			n = "dezessete";
			break;
		case 18:
			n = "dezoito";
			break;
		case 19:
			n = "dezenove";
			break;
		}
		return n;
	}
        
    //-------------------------------------------
	// Exibe a hora de acordo com a dezena (dez, vinte, trinta e cinco...)
	
	if (M >= 1 && M <= 20){
		var min = minuto1;
	}else if (segCasa == "0"){
		var min = minuto1;
	}else{
		var min = minuto1 + " e " + minuto2;
	}
	
	//-------------------------------------------
	// Formata a exibição da hora e dos minutos
	
	if (M == 00){
		document.getElementById("minutosAgora").innerHTML = "<br /><p id='destaque'><span>" + hora + " hora" + singular + "</span><br />" 
		+ periodo + "</p><br />";
	}else{
		document.getElementById("minutosAgora").innerHTML = "<br /><p id='destaque'><span>" + hora + 
		" hora" + singular + "</span> e</p>" + min + "<span><p id='destaque'><span>minutos</span></p><br />";
    }
    setTimeout(ExibeHora, 1000);
	
}

ExibeHora();

