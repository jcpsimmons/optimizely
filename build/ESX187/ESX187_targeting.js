function pollingFn() {
  var images = Array.from(document.querySelectorAll(".row.thumb-list .thumb.img-click img")).filter(function (img) {
    return img.alt.search("360") == -1 && img.src.search("akamai") == -1;
  });
  return images.length >= 4;
}