export function formatCurrencyToFloat(value: string) {
  const numericValue = value.replace(/\D/g, '')

  if (!numericValue) return 0

  const floatValue = parseFloat(numericValue) / 100

  return floatValue
}
