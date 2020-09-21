const emptyImage =
  "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png";

export default function normalizeImageUrl(images) {
  const imageUrl = images[2]["#text"];
  if (imageUrl === "") return emptyImage;

  const lastIndex = imageUrl.lastIndexOf(".");
  return imageUrl.substr(0, lastIndex);
}
