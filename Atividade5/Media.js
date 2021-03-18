window.onload = () => {
    const notas = [1,2,3].map(
        (_, index) => parseFloat(prompt(`Insira a ${index + 1}a nota do aluno`))
    )

    const sum = notas.reduce(
        (acc, number) => {
            return acc + number
        }, 0
    );

    alert(sum / notas.length);
}