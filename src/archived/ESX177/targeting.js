function pollingFn() {
  if (
    [
      "https://www.livingspaces.com/departments/home-decor",
      "https://www.livingspaces.com/departments/rugs",
      "https://www.livingspaces.com/departments/home-decor/pillows",
      "https://www.livingspaces.com/departments/rugs/type",
      "https://www.livingspaces.com/departments/rugs/size",
      "https://www.livingspaces.com/departments/rugs/shape",
      "https://www.livingspaces.com/departments/rugs/color",
      "https://www.livingspaces.com/departments/lighting",
      "https://www.livingspaces.com/departments/wall-art",
      "https://www.livingspaces.com/departments/wall-art/by-type",
      "https://www.livingspaces.com/departments/wall-art/by-rooms",
      "https://www.livingspaces.com/departments/wall-art/by-styles"
    ].indexOf(window.location.href) >= 0
  ) {
    return true;
  }
}
