/**
 * Fetch data to/from the server
 * @param {String} link
 * @param {Objects} options
 * @returns {Promise<Object>}
 */
const fetchData = async (link, options = {}) => {
  const response = await fetch(link, options);

  if (!response.ok) {
    const error = await response.json();

    throw new Error(error.message);
  }

  if (response.status === 204) return;

  const data = await response.json();

  return data;
};

export default fetchData;
