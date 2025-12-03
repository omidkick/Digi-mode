const PERSIAN_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"] as const;

/**
 * Converts a number to Persian format with commas and adds "تومان" suffix
 * @example formatPriceInToman(1234567) => "۱,۲۳۴,۵۶۷ تومان"
 */
export function formatPriceInToman(value: number | string): string {
  const valueWithCommas = addThousandsSeparator(value);
  const persianValue = convertToPersianDigits(valueWithCommas);
  return `${persianValue} تومان`;
}

/**
 * Adds comma separators to a number for thousands
 * @example addThousandsSeparator(1234567) => "1,234,567"
 */
function addThousandsSeparator(value: number | string): string {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Converts English/Arabic digits to Persian digits
 * @example convertToPersianDigits("123") => "۱۲۳"
 */
export function convertToPersianDigits(value: number | string): string {
  return value.toString().replace(/\d/g, (digit: string) => PERSIAN_DIGITS[parseInt(digit)]);
}