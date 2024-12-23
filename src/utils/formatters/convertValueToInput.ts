export function convertValueToInput(value: number) {
  // Converte para número de ponto flutuante

  const valueKg = value.toFixed(3).toString().replace('.', ',')

  return valueKg
}
