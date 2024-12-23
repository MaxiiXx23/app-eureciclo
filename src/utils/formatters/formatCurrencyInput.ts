// Função para formatar os valores como reais
export const formatCurrencyInput = (value: string) => {
  // Remove todos os caracteres que não sejam números
  const numericValue = value.replace(/\D/g, '')

  // Converte para número de ponto flutuante
  const floatValue = parseFloat(numericValue) / 100

  if (isNaN(floatValue)) return ''

  // Formata como moeda brasileira
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(floatValue)
}
