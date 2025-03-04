/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 *
 * List of ISO language codes:
 * @link http://www.lingoes.net/en/translator/langcode.htm
 */

const formatter = (locale, currency, value) => { // locale, currency are created here
  let formattedValue = new Intl.NumberFormat(locale, { style: "currency", currency: currency }).format(
    value,
  );

  return formattedValue;
}

const tipCalculator = (sum, percentage, locale, currency,) => { // passed into tipCalc
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  // used inside log
  console.log(`
      Sum before tip: ${formatter(locale, currency, sum)}
      Tip percentage: ${percentage}%
      Tip:            ${formatter(locale, currency, tip.toFixed(2))}
      Total:          ${formatter(locale, currency, total.toFixed(2))}
    `);
};

tipCalculator(29.95, 18, 'en-UK', 'GBP'); // actual values are propagate from here
