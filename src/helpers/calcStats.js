import { categories } from '../constants/enums';

/**
 * Calculate and create object with statistics
 * @param {Object} list
 * @returns {Object}
 */
const calcStats = (list) => {
  const catKeys = Object.keys(categories);

  const stats = list.reduce(
    (acc, item) => {
      !item.archived ? acc[item.category][0]++ : acc[item.category][1]++;

      return acc;
    },
    {
      [catKeys[0]]: [0, 0],
      [catKeys[1]]: [0, 0],
      [catKeys[2]]: [0, 0],
      [catKeys[3]]: [0, 0]
    }
  );

  return Object.keys(stats).map((key) => {
    return {
      _id: key,
      category: key,
      active: stats[key][0],
      archive: stats[key][1]
    };
  });
};

export default calcStats;
