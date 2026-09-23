// Datas de publicação ficam nos dados no formato ISO (AAAA-MM-DD), que é o exigido pelo Google.
// Aqui só convertemos para exibição em pt-BR, SEM usar Date (evita erro de fuso horário: 29/08 virar 28/08).
const ISO_DATE = /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

export function isValidPublishedDate(value?: string): value is string {
  return typeof value === 'string' && ISO_DATE.test(value);
}

export function formatPublishedDate(value?: string): string {
  const match = typeof value === 'string' ? value.match(ISO_DATE) : null;
  if (!match) return '';
  return `${match[3]}/${match[2]}/${match[1]}`;
}
