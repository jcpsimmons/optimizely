function pollingFn() {
  return document.referrer === "https://www.livingspaces.com/shopping-cart" && !!utag_data["cp.lsf-cartadds"] && document.location.href.search("shopping-cart") === -1;
}