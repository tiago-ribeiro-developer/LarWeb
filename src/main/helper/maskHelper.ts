export const maskUtils = {

  /**
   * Formata um número de celular para o formato (999)99999-9999 sem espaços.
   *
   * @param value - A string de entrada representando o número de celular.
   * @returns Uma string formatada como (999)99999-9999 ou uma string vazia se o valor for nulo ou indefinido.
   */
  celular(value: string) {
    if (!value) {
      return '';
    }
    return value
      .replace(/\D/g, '') // Remove caracteres não numéricos
      .replace(/^(\d{3})(\d)/, '($1)$2') // Adiciona parênteses nos três primeiros dígitos
      .replace(/(\d{5})(\d{1,4})/, '$1-$2') // Adiciona o hífen após os primeiros cinco dígitos
      .replace(/(-\d{4})\d+?$/, '$1'); // Limita o número total de dígitos a 11
  },

  /**
   * Formata um CPF para o formato 999.999.999-99.
   *
   * @param value - A string de entrada representando o CPF.
   * @returns Uma string formatada como 999.999.999-99.
   */
  cpf(value: string) {
    return value
      .replace(/\D/g, '') // Remove caracteres não numéricos
      .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona o ponto após três dígitos
      .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona o segundo ponto
      .replace(/(\d{3})(\d{1,2})/, '$1-$2') // Adiciona o hífen antes dos dois últimos dígitos
      .replace(/(-\d{2})\d+?$/, '$1'); // Limita o número total de dígitos a 11
  },
};
