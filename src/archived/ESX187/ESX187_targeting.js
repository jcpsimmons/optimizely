function pollingFn() {
  var images = Array.from(
    document.querySelectorAll(".row.thumb-list .thumb.img-click img")
  ).filter((img) => {
    return img.alt.search("360") == -1 && img.src.search("akamai") == -1;
  });
  return images.length >= 4; // need to target for this many for slider to work https://www.livingspaces.com/pdp-carson-white-5-piece-dining-set-254190
}

// TEST CALL
// pollingFn();
