export const normalizePhoneNumber = (value: string | undefined) => {
    if (!value) return ''
  
    return value
      .replace(/[\D]/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})(\d+?)/, '$1')
  }
  
export const normalizeCnpjOrCpfNumber = (value: string | undefined) => {
    if (!value) return ''
  
    value = value.replace(/\D/g, '')
  
    if (value.length <= 11) {
      value = value.replace(/(\d{3})(\d)/, '$1.$2')
      value = value.replace(/(\d{3})(\d)/, '$1.$2')
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    } else {
      value = value.replace(/^(\d{2})(\d)/, '$1.$2')
      value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
      value = value.replace(/\.(\d{3})(\d)/, '.$1/$2')
      value = value.replace(/(\d{4})(\d)/, '$1-$2')
    }
  
    return value
  }
  
  export const normalizeCnpjNumber = (value: string | undefined) => {
    if (!value) return ''
  
    return value
      .replace(/[\D]/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
  }
  
  export const normalizeMoney = (value: string | undefined) => {
    if (!value) return ''
  
    return value
      .replace(/[\D]/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
  }
  
  export const normalizeCurrency = (value: number) => {
    // Formata como moeda brasileira
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }
  
export function maskNumber(value: string) {
    if (!value) return 0
  
    const finalValue = value.replace(/[^0-9]/g, '')
  
    return Number(finalValue)
}

export function normalizeDate(value: string) {
  // Remove qualquer caractere que não seja dígito
  const digitsOnly = value.replace(/\D/g, '');

  // Aplica o formato DD/MM/YYYY
  const formattedDate = digitsOnly
    .replace(/^(\d{2})(\d)/, '$1/$2')  // Adiciona a primeira barra após DD
    .replace(/^(\d{2}\/\d{2})(\d)/, '$1/$2'); // Adiciona a segunda barra após MM

  // Limita o comprimento ao formato DD/MM/YYYY
  return formattedDate.substring(0, 10);
}

export function normalizeCreditCardInput(value: string) {
  // Remove todos os caracteres que não são números
  const digitsOnly = value.replace(/\D/g, '');

  // Aplica a máscara de cartão de crédito no formato 1234 5678 9012 3456
  return digitsOnly
    .replace(/(\d{4})(?=\d)/g, '$1 ') // Adiciona um espaço a cada grupo de 4 dígitos
    .trim(); // Remove espaços extras no final
}

export function normalizeExpirationCard(value: string) {
  // Remove qualquer caractere que não seja dígito
  const digitsOnly = value.replace(/\D/g, '');

  // Aplica o formato DD/MM/YYYY
  const formattedDate = digitsOnly
    .replace(/^(\d{2})(\d)/, '$1/$2')  // Adiciona a primeira barra após DD

  return formattedDate.substring(0, 5);
} 