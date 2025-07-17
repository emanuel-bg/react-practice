export const getGifs = async (category) => {
  const api_key = "W1aRuZjU64675GfMFyXkB6zv42wcXBr0";
  const query = category;
  const limit = 10;
  const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${api_key}&limit=${limit}`;
  const res = await fetch(url);
  const { data } = await res.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  console.log(gifs);
  return gifs;
};
