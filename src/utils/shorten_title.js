const shorten_title = (title) => {
  title = title.length > 45 ? title.substring(0, 45) : title;

  title =
    title.length === 45
      ? title.substring(
          0,
          Math.min(
            title.length,
            title.lastIndexOf(" ") // this prevents being cut off in the middle of words
          )
        ) + " . . ."
      : title;

  return title;
};

export default shorten_title;
