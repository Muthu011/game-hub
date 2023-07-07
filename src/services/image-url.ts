const getCroppedImageUrl = (url: string) => {
  if (!url) return "";
  const targe = "media/";

  const index = url.indexOf(targe) + targe.length;

  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
