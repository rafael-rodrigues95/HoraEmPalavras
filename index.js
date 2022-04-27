function ExibeHora() {
	
  numExtenso();
  var currentdate = new Date();

  var H = currentdate.getHours();
  var M = currentdate.getMinutes();
  var periodo = "da manhã";

	//Teste
	//var H = 12;
	//var M = 25;
	
	let Me = (M < 10) ? "0" + M : M;
	let He = (H < 10) ? "0" + H : H;
	var time = He + ":" + Me;
	

  //--------------------------------------------

  if (H == 0) {
    H = 12;
  }

  if (H > 12) {
    H -= 12;
    periodo = "da tarde";
  }

  var minuto1;
  var hora;
  var singular = "s";

  if (H == 1) {
    hora = "uma";
    singular = "";
  } else if (H == 2) {
    hora = "duas";
  } else {
    hora = numExtenso(H);
  }

  var priCasa = M.toString().substr(0, 1);
  var segCasa = M.toString().slice(1);
  var minuto2 = numExtenso(parseInt(segCasa));


	if (M < 20) {
    minuto1 = numExtenso(M);
  } else {
    if (M >= 20 && M < 30) {
      minuto1 = "vinte";
    } else if (M >= 30 && M < 40) {
      minuto1 = "trinta";
    } else if (M >= 40 && M < 50) {
      minuto1 = "quarenta";
    } else if (M >= 50) {
      minuto1 = "cinquenta";
    }
  }


  if (priCasa !== "1" && segCasa !== "0") {
    var min = minuto1 + " e " + minuto2;
  } else {
    var min = minuto1;
  }

  if (M.toString().length === 1) {
    var min = minuto1;
  }

  document.getElementById("horaAgora").innerText = time;
  document.getElementById("horaAgora").textContent = time;
  if (H == 12 && M == "00") {
	periodo = "da tarde";
	document.getElementById("minutosAgora").innerHTML = "<strong>meio</strong> dia";  
  }else if (H == 12) {
	  periodo = "da tarde";
	  document.getElementById("minutosAgora").innerHTML = "<strong>meio</strong> dia e <br />" +
	  min +
      "<br /><strong>minutos</strong><br />" +
      periodo;  
  }else if (M == "00") {
    document.getElementById("minutosAgora").innerHTML =
      "<strong>" + hora + " hora" + singular + "</strong><br />" + periodo;
  } else if (M == 1){
    document.getElementById("minutosAgora").innerHTML =
      "<strong>" +
      hora +
      " hora" +
      singular +
      "</strong> e<br />" +
      min +
      "<br /><strong>minuto</strong><br />" +
      periodo;
  } else {
    document.getElementById("minutosAgora").innerHTML =
      "<strong>" +
      hora +
      " hora" +
      singular +
      "</strong> e<br />" +
      min +
      "<br /><strong>minutos</strong><br />" +
      periodo;
  }
	setTimeout(ExibeHora, 1000);
}


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
      default:
    }
    return n;
  }

ExibeHora();
