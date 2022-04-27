/**
 * Fetch data to/from the server
 * @param {String} link
 * @param {Objects} options
 * @returns {Promise<Object>}
 */
const fetchData = async (link, options = {}) => {
  const response = await fetch(link, options);

  if (!response.ok) {
    throw new Error(response.error);
  }

  if (response.status === 204) return;

  const data = await response.json();

  return data;
};

export default fetchData;
