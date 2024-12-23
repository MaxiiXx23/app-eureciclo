export function formatValueDecimalToFloat(value: string) {
  const numericValue = value.replace(/\D/g, '')

  if (!numericValue) return 0

  const floatValue = parseFloat(numericValue) / 1000

  return floatValue
}
