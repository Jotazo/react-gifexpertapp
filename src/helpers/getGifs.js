const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const URL = `${API_URL}?api_key=${API_KEY}`;

const getGifs = async (category) => {
  const resp = await fetch(`${URL}&q=${category}&limit=10`);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};

export default getGifs;
