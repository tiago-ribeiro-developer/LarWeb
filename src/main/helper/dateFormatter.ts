/**
 * FormatDate
 *
 * Esta classe contém métodos utilitários para lidar com formatação de datas e horários.
 */
export const FormatDate = {
  /**
   * Converte uma string de data no formato ISO para o formato brasileiro 'dd/MM/yyyy'.
   *
   * @param dateTime - String de data no formato ISO (YYYY-MM-DDTHH:mm:ss).
   * @returns Data formatada no padrão brasileiro (dd/MM/yyyy).
   */
  formatToBrazilianDate(dateTime: string): string {
    const date = new Date(dateTime);
    if (isNaN(date.getTime())) {
      throw new Error("A string fornecida não é uma data válida.");
    }

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  },

  /**
   * Formata a data no formato 'yyyy-MM-dd' para passar na validação em C#.
   * Aceita datas nos formatos 'MM/dd/yyyy' ou 'yyyy-MM-dd' como entrada.
   *
   * @param dateInput - Data no formato 'MM/dd/yyyy' ou 'yyyy-MM-dd'.
   * @returns Uma string formatada no padrão 'yyyy-MM-dd'.
   */
  formatForValidation(dateInput: string): string {
    const mmDdYyyyPattern = /^\d{2}\/\d{2}\/\d{4}$/;
    const yyyyMmDdPattern = /^\d{4}-\d{2}-\d{2}$/;

    let date: Date;

    if (mmDdYyyyPattern.test(dateInput)) {
      const [month, day, year] = dateInput.split("/");
      date = new Date(
        Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(day)),
      );
    } else if (yyyyMmDdPattern.test(dateInput)) {
      date = new Date(dateInput + "T00:00:00Z"); // Adiciona o 'Z' para tratar como UTC
    } else {
      throw new Error("O formato de data deve ser MM/dd/yyyy ou yyyy-MM-dd.");
    }

    if (isNaN(date.getTime())) {
      throw new Error("A string fornecida não é uma data válida.");
    }

    const year = date.getUTCFullYear(); // Usa getUTCFullYear para obter o ano em UTC
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Usa getUTCMonth
    const day = String(date.getUTCDate()).padStart(2, "0"); // Usa getUTCDate

    return `${year}-${month}-${day}`;
  },

  /**
   * Formata uma string de data e horário para o formato 'YYYY-MM-DD'.
   * Aceita datas no formato 'dd/MM/yyyy' ou em qualquer formato reconhecível por JavaScript.
   *
   * @param dateTime - Data no formato 'dd/MM/yyyy' ou em um formato ISO reconhecível por JavaScript.
   * @returns Uma string contendo apenas a data no formato 'YYYY-MM-DD'.
   */
  formatToDateOnly(dateTime: string): string {
    // Verifica se a data está no formato 'dd/MM/yyyy'
    const ddMmYyyyPattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

    let date: Date;

    if (ddMmYyyyPattern.test(dateTime)) {
      // Converte o formato 'dd/MM/yyyy' para uma instância de Date
      const [day, month, year] = dateTime.split("/");
      date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day)); // Mês no JavaScript vai de 0 a 11
    } else {
      // Tenta criar a data a partir de um formato ISO ou reconhecido pelo JavaScript
      date = new Date(dateTime);
    }

    // Valida se a data gerada é válida
    if (isNaN(date.getTime())) {
      throw new Error("A string fornecida não é uma data válida.");
    }

    // Formata a data no padrão 'YYYY-MM-DD'
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  },
};
