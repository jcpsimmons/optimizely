// Test data
var utag_data = {};
utag_data["cp.lsf-search-term"] =
  "dining tables,dining table,dining table,sectional couch,sectional couch,sectional couches,red thing,sectional couches,sectional couch,dresser,coffee table,bunk beds,tv stand,dining chairs,ottoman,rugs,sectionals,sleeper sofa,dining table,ottoman,ottoman,coffee table,brown thing";

//

const colors = [
  "black",
  "brown",
  "tan",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "violet"
];

class Store {
  constructor(utag_data) {
    this.searchTerms = utag_data["cp.lsf-search-term"].split(",");
    this.searchWords = this.searchTerms.split(/,| /);
    this.searchColors = this.searchWords.filter(function(term) {
      return colors.includes(term);
    });
  }
}

x = new Store(utag_data);
