type ConvertToPersianProps = {
  num?: number | string;
};
export default function ConvertToPersian({
  num,
}: ConvertToPersianProps): string {
  const farsiDigits = "۰۱۲۳۴۵۶۷۸۹";
  const regex = /\d/g;
  return Number(num)
    ?.toLocaleString()
    ?.toString()
    ?.replace(regex, (digit: string) => farsiDigits[parseInt(digit)]);
}
