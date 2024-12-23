export function formatGramsToKg(grams: number) {
  const kg = grams / 1000
  const kgFormmated = kg.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  return `${kgFormmated} kg`
}
