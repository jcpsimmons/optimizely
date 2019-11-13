class Store {
  constructor(utag_data) {
    this.searchTerms = utag_data["cp.lsf-search-term"].split(",");
    this.searchWords = utag_data["cp.lsf-search-term"].split(/,| /);
    this.likedItems = JSON.parse(utag_data["cp.lsf-liked-items"]);
    this.viewedItems = JSON.parse(utag_data["cp.lsf-recently-viewed-list"]);
    this.cartAdds = utag_data["cp.lsf-cartadds"].split(",");
    let colors = [
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
    this.searchColors = this.searchWords.filter(term => {
      return colors.includes(term);
    });
  }

  async generateRestfulProductsData() {
    let fillwords = ["boasts", "value", "doesn", "finish", "piece"];
    this.apiData = {};
    this.titleCorpus = [];
    let queryArr = [];
    let queryString = queryArr
      .concat(this.likedItems, this.viewedItems, this.cartAdds)
      .map(item => {
        if (item.search("cv") > 0) {
          return item.split("cv")[0];
        } else {
          return item;
        }
      })
      .slice(0, 100)
      .join(",");
    queryString =
      "https://www.livingspaces.com/api/restfulproducts?pid=" + queryString;
    let response = await fetch(queryString);
    let data = await response.json();
    this.rawData = data.products;
    for (i = 0; i < this.rawData.length; i++) {
      this.apiData[this.rawData[i].pid] = this.rawData[i];
      this.titleCorpus.push(this.rawData[i].title);
      this.titleCorpus.push(this.rawData[i].romanceCopy);
    }
    this.titleCorpus = this.titleCorpus
      .join(" ")
      .toLowerCase()
      .replace("  ", " ")
      .replace(/\d+/g, "")
      .replace(/\W/g, " ")
      .split(" ");
    let wordProbz = {};
    this.titleCorpus.forEach(key => {
      if (
        key.length > 4 &&
        !key.endsWith("y") &&
        !key.endsWith("s") &&
        fillwords.indexOf(key) == -1
      ) {
        if (wordProbz.hasOwnProperty(key)) {
          wordProbz[key]++;
        } else {
          wordProbz[key] = 1;
        }
      }
    });
    this.titleCorpus = wordProbz;
    console.log("API queried");
    this.titleCorpusSorted = Object.keys(wordProbz).sort(function(a, b) {
      return wordProbz[b] - wordProbz[a];
    });
    return true;
  }

  titleCase(str) {
    str = str.toLowerCase().split(" ");
    var final = [];
    for (i = 0; i < str.length; i++) {
      final.push(str[i].charAt(0).toUpperCase() + str[i].slice(1));
    }
    return final.join(" ");
  }

  async getRelatedProducts() {
    this.relatedItems = {};
    for (i = 0; i < this.titleCorpusSorted.length; i++) {
      if (Object.keys(this.relatedItems).length < 10) {
        let bloomreachQueryLink = `https://brm-core-0.brsrvr.com/api/v1/core/?account_id=5221&auth_key=o5xlkgn7my5fmr5c&domain_key=livingspaces_com&request_id=fd8d6a02a5764b7995c600e766a38bda&url=%2fbr-checker&_br_uid_2=uid%253D4961390647524%253Av%253D11.8%253Ats%253D1463613117510%253Ahc%253D3145&ptype=other&request_type=search&q=${this.titleCorpusSorted[i]}&start=0&rows=13&search_type=keyword&fl=title,pid,url,price,sale_price,reviews,reviews_count,thumb_image`;
        let response = await fetch(bloomreachQueryLink);
        let data = await response.json();
        if (data.response.numFound > 10) {
          this.relatedItems[this.titleCorpusSorted[i]] = data.response.docs;
        }
      }
    }
  }

  generateHTML = () => {};
}

x = new Store(utag_data);
await x.generateRestfulProductsData();
await x.getRelatedProducts();
