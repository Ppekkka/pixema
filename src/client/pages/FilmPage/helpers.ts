export const getColorOfFavSvg = (isFav: boolean) => {
  return isFav ? "white" : "#80858B";
};

export const getStringFromArr = (Genre: string) => {
  const genresArr = Genre.split(", ");
  return genresArr;
};
