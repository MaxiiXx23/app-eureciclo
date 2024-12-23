const passwordRegex =
  /^(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]\\|,.<>/?])(?=.*[A-Z]).*$/

const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/
const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/
const numberCardRegex = /^\d{1,4}(\s\d{1,4}){0,3}$/

export { 
  passwordRegex, 
  phoneRegex, 
  cpfRegex, 
  cnpjRegex,
  numberCardRegex
}
