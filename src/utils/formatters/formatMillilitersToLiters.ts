export function formatMillilitersToLiters(milliliters: number) {
  const liters = milliliters / 1000
  const litersFormmated = liters.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  return `${litersFormmated} L`
}
