function pollingFn() {
  if (
    [
      "https://www.livingspaces.com/departments/furniture",
      "https://www.livingspaces.com/departments",
      "https://www.livingspaces.com/departments/furniture/living-room",
      "https://www.livingspaces.com/departments/furniture/bedroom",
      "https://www.livingspaces.com/departments/furniture/dining-room",
      "https://www.livingspaces.com/departments/furniture/home-office",
      "https://www.livingspaces.com/departments/mattresses",
      "https://www.livingspaces.com/departments/mattresses/size",
      "https://www.livingspaces.com/departments/mattresses/foundations",
      "https://www.livingspaces.com/departments/mattresses/accessories",
      "https://www.livingspaces.com/departments/mattresses/type",
      "https://www.livingspaces.com/departments/mattresses/comfort-level",
      "https://www.livingspaces.com/departments/mattresses/brand",
      "https://www.livingspaces.com/departments/kids",
      "https://www.livingspaces.com/departments/kids/furniture",
      "https://www.livingspaces.com/departments/kids/room-decor",
      "https://www.livingspaces.com/departments/kids/sleep",
      "https://www.livingspaces.com/departments/outdoor"
    ].indexOf(window.location.href) >= 0
  ) {
    return true;
  }
}
