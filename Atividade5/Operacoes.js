window.onload = () => {
    const input = [1,2].map(
        (_,index) => parseFloat(prompt(`Insira o ${index + 1}o número`))
    )

    const output = `Soma: ${input[0] + input[1]}\nSubtração: ${input[0] - input[1]}\nProduto: ${input[0] * input[1]}\nDivisão: ${input[0] / input[1]}\nResto: ${input[0] % input[1]}`
    alert(output)
}