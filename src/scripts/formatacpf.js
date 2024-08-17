export const formataCPF = function formatarCPF(valor) {

  valor = valor.replace(/\D/g, '');

  if (valor.length <= 11) {
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }

  return valor;
}