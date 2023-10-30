export const getColorOfFavSvg = (isFav: boolean) => {
  return isFav ? "#7b61ff" : "#80858B";
};

export const getStringFromArr = (Genre: string) => {
  const genresArr = Genre.split(", ");
  return genresArr;
};
