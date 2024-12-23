export function formatValueToDecimalInput(value: string) {
  const numericValue = value.replace(/\D/g, '')

  // Converte para número de ponto flutuante
  const floatValue = parseFloat(numericValue) / 1000

  if (isNaN(floatValue)) return ''

  const valueKg = floatValue.toFixed(3).toString().replace('.', ',')

  return valueKg
}
