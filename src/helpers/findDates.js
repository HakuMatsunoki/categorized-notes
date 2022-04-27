/**
 * Find date strings in the text
 * @param {String} content
 * @returns {String}
 */
const findDates = (content) => {
  const dates = content.match(/(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}/g);

  const datesStr = dates ? dates.join(', ') : '';

  return datesStr;
};

export default findDates;
