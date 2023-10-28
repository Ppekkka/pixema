export const getRatingForFilters = (
  lengthOfFilmsArr: number,
  ratingFrom: number,
  ratingTo: number
) => {
  const numberOfRatigs = ratingTo - ratingFrom + 1;
  const numberOfParts = Math.ceil(lengthOfFilmsArr / numberOfRatigs);
  const numberOfFilmsInOnePart = Math.ceil(lengthOfFilmsArr / numberOfParts);

  const ratings = [];

  for (let i = 1; i <= lengthOfFilmsArr; i++) {
    const inWichPartIsFilm = Math.ceil(i / numberOfFilmsInOnePart);
    const rating = ratingFrom + inWichPartIsFilm - 1;
    ratings.push(rating);
  }

  return ratings;
};

