function maiorNumero(x, y, z) {
    if (x > y && x > z) {
        return x;
    }

    if (y > x && y > z) {
        return y;
    }

    return z;
}

window.onload = () => {
    const input = prompt('Insira os três números de uma vez:');
    const numeros = input.match(/\d+/g).map(input => parseFloat(input));
    alert(`O maior número é: ${maiorNumero(...numeros)}`);
}