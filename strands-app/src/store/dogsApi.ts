import axios from "axios";

const BASE_URL = "https://dog.ceo/api";

// Fetch all breeds
export const fetchBreedsAPI = async (): Promise<string[]> => {
  const response = await axios.get(`${BASE_URL}/breeds/list/all`);
  return Object.keys(response.data.message); // Extract only breed names
};

// Fetch images for each breed and count them
export const fetchImagesCountAPI = async (breeds: string[]): Promise<{ [key: string]: number }> => {
  const counts: { [key: string]: number } = {};
  let totalImages = 0;

  await Promise.all(
    breeds.map(async (breed) => {
      const response = await axios.get(`${BASE_URL}/breed/${breed}/images`);
      const count = response.data.message.length;
      counts[breed] = count;
      totalImages += count;
    })
  );

 // Convert counts to percentages and format them
    const percentages: { [key: string]: number } = {};
    breeds.forEach((breed) => {
        const percentage = (counts[breed] / totalImages) * 100;
        percentages[breed] = Number(percentage.toFixed(2));
    });

  return percentages;
};