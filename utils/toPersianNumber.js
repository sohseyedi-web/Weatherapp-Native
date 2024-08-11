const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function toPersianNumbers(n) {
  return n.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
}
