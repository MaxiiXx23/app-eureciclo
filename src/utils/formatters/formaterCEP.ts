export function formaterCEP(cep: string) {
  if (!cep) return

  // Remove tudo que não for número
  const cepFormatted = cep.replace(/[^0-9]/g, '')

  // Formata o CEP para o formato XXXX-XXX, se tiver 8 dígitos
  const cepInput =
    cepFormatted.length === 8
      ? cepFormatted.replace(/(\d{5})(\d{3})/, '$1-$2')
      : cepFormatted

  return {
    cepFormatted, // Somente números
    cepInput, // Formato com hífen
  }
}
