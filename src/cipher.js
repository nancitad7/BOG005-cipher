const cipher = {

  encode: function (desplazamiento, mensaje1) {
    let resultado = "";
    if (desplazamiento === null || mensaje1 === null|| typeof desplazamiento!== "number"||typeof mensaje1!== "string"){

      throw new TypeError("ingresa tu mensaje");
    }

    for (let i = 0; i < mensaje1.length; i++) {

      if (desplazamiento && mensaje1) {
        let codigoAcci = mensaje1.charCodeAt(i);
        if (codigoAcci > 64 && codigoAcci < 91) {

          let mensajeCifrado = (((codigoAcci - 65 + parseInt(desplazamiento) % 26) % 26) + 65);
          resultado = resultado + String.fromCharCode(mensajeCifrado);
        }
        else {
          resultado = resultado + String.fromCharCode(codigoAcci);
        }
      }
    }
    return resultado
  },
  decode: function (desplazamiento, mensaje1) {
    //mensaje1 -> ABC, desplazarse -> 1

    let resultado = "";
    if (desplazamiento === null || mensaje1 === null|| typeof desplazamiento!== "number"||typeof mensaje1!== "string"){

      throw new TypeError("ingresa tu mensaje");
    }

    for (let i = 0; i < mensaje1.length; i++) {
      // ABC
      // 012 --> por aca navega la i
      if (desplazamiento && mensaje1) {
        let codigoAcci = mensaje1.charCodeAt(i);
        // codigoAcci -> 65 cuando i es 0 y asi sucesivamente
        if (codigoAcci > 33 && codigoAcci < 91) {

          let caracterDescifrado = (((codigoAcci + 65 - (parseInt(desplazamiento) % 26)) % 26) + 65);
          resultado = resultado + String.fromCharCode(caracterDescifrado);
        }
        else {
          resultado = resultado + String.fromCharCode(codigoAcci);
        }

      }
    }
    return resultado
  }
}

export default cipher;

