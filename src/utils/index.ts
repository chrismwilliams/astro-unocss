const locale: Intl.LocalesArgument = "en-GB";

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "long",
  year: "numeric",
};

const dateFormat = new Intl.DateTimeFormat(locale, dateFormatOptions);

export function transformDate(date: number | Date | undefined) {
  return dateFormat.format(date);
}
