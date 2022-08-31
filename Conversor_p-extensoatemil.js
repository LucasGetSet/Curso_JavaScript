// 1. Escrever por extenso um número pedido;
// 2. Pedir um número e escrever por extenso todos os números até alí;

function converteExtenso(numero)
{
    const unidades = ["", "primeiro ", "segundo ", "terceiro ", "quarto ", "quinto ", "sexto ", "sétimo ", "oitavo ", "nono "];
    const dezenas = ["", "décimo ", "vigésimo ", "trigésimo ", "quadragésimo ", "quinquagésimo ", "sexagésimo ","septuagésimo ", "octogésimo ", "nonagésimo "];
    const centenas = ["", "centécimo ", "ducentésimo ", "tricentésimo ", "quadrigentésimo ", "quingentésimo ", "sexcentésimo ","septigentésimo ", "octongentésimo ", "nongetésimo"];
    const milhares = ["", "milésimo ", "segundo milésimo ", "terceiro milésimo ", "quarto milésimo ", "quinto milésimo ", "sexto milésimo ", "sétimo milésimo ", "oitavo milésimo ", "nono milésimo "];

    let unidade = unidades[Math.floor(numero%10)];
    let dezena = dezenas[Math.floor(numero%100/10)];
    let centena = centenas[Math.floor(numero%1000/100)];
    let milhar = milhares[Math.floor(numero%10000/1000)];
    let retorno = `${milhar}${centena}${dezena}${unidade}`;
    
    return retorno.charAt(0).toUpperCase() + retorno.slice(1);
}


let numero = window.prompt("Escreva um número de 1 á 9999:")
console.log(`O número ${numero} equivale ao extenso:`)
console.log(converteExtenso(numero));
