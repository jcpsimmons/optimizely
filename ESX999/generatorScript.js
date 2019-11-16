class Store {
  constructor(utag_data) {
    this.randomizer = Math.floor(Math.random() * 3 + 1) * 4;
    try {
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
      if (
        this.searchTerms.length +
          this.searchWords.length +
          this.searchTerms.length +
          this.viewedItems.length +
          this.likedItems.length +
          this.cartAdds.length <
          3 ||
        typeof this.searchTerms.length +
          this.searchWords.length +
          this.searchTerms.length +
          this.viewedItems.length +
          this.likedItems.length +
          this.cartAdds.length ===
          "undefined"
      ) {
        this.eligibility = false;
      } else {
        this.eligibility = true;
      }
    } catch (e) {
      this.eligibility = false;
    }
  }

  async generateRestfulProductsData() {
    let fillwords = [
      "boasts",
      "value",
      "doesn",
      "finish",
      "piece",
      "design",
      "style",
      "construction",
      "solid",
      "panel",
      "which",
      "while"
    ];
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
    // console.log("API queried");
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
    for (i = this.randomizer; i < this.titleCorpusSorted.length; i++) {
      if (Object.keys(this.relatedItems).length < 3) {
        let bloomreachQueryLink = `https://brm-core-0.brsrvr.com/api/v1/core/?account_id=5221&auth_key=o5xlkgn7my5fmr5c&domain_key=livingspaces_com&request_id=fd8d6a02a5764b7995c600e766a38bda&url=%2fbr-checker&_br_uid_2=uid%253D4961390647524%253Av%253D11.8%253Ats%253D1463613117510%253Ahc%253D3145&ptype=other&request_type=search&q=${this.titleCorpusSorted[i]}&start=0&rows=4&search_type=keyword&fl=title,pid,url,price,sale_price,reviews,reviews_count,thumb_image`;
        let response = await fetch(bloomreachQueryLink);
        let data = await response.json();
        if (data.response.numFound > 3) {
          this.relatedItems[this.titleCorpusSorted[i]] = data.response.docs;
        }
      }
    }
  }

  async getBestSellers() {
    this.bestSellers = [];
    let bloomreachQueryLink = `https://brm-core-0.brsrvr.com/api/v1/core/?account_id=5221&auth_key=o5xlkgn7my5fmr5c&domain_key=livingspaces_com&request_id=fd8d6a02a5764b7995c600e766a38bda&url=%2fbr-checker&request_type=search&q=best+sellers&start=${this.randomizer.toString()}&rows=12&search_type=keyword&fl=title,pid,url,price,sale_price,reviews,reviews_count,thumb_image`;
    let response = await fetch(bloomreachQueryLink);
    let data = await response.json();
    while (data.response.docs.length > 0) {
      let chunk = data.response.docs.splice(0, 4);
      this.bestSellers.push(chunk);
    }
  }

  async getRecentItems() {
    // Unfinished method - was going to grab recently released items
    function makeDateString(d) {
      month = (d.getMonth() + 1).toString();
      if (month.length == 1) {
        month = "0" + month;
      }
      d = [d.getFullYear(), month, d.getDate()];
      d = d
        .map(function(item) {
          return item.toString();
        })
        .join("");
      return d;
    }

    let today = new Date();
    today = makeDateString(today);
    let twoMonthsAgo = new Date();
    twoMonthsAgo.setDate(twoMonthsAgo.getDate() - 60);
    twoMonthsAgo = makeDateString(twoMonthsAgo);

    let reqUrl = `http://brm-core-0.brsrvr.com/api/v1/core/?account_id=5221&auth_key=o5xlkgn7my5fmr5c&domain_key=livingspaces_com&ptype=category&request_type=search&search_type=keyword&request_id=5bf4c900-a069-414a-abc0-cf5d78ea6868&url=https%3a%2f%2fwww.livingspaces.com%2fdepartments%2ffeatured%2fnew-arrivals&_br_uid_2=uid%3D4490539570488%3Av%3D12.0%3Ats%3D1561674361031%3Ahc%3D1377&q=&start=0&rows=4&fl=pid%2cskuid%2cbrand%2cdescription%2claunch_date%2cclearance%2ccrumbs%2cprice%2cthumb_image%2curl%2ctitle%2cinStockQuantity%2csku_thum_images&fq=launch_date_order:%5b${twoMonthsAgo}+TO+${today}%5d`;
    let response = await fetch(reqUrl);
    let data = await response.json();
    // STOPPED HERE THURSDAY - get the products data, put into HTML (probably just in this function) and assign it to a this object
  }

  generateLinks() {
    this.searchLinks = [];
    if (this.titleCorpusSorted.length > 10) {
      let arr = this.titleCorpusSorted;
      arr.splice(10, arr.length);
      this.searchLinks = arr.map(function(item) {
        return `<a href="https://www.livingspaces.com/search?term=${item}"><p>"${item}"</p></a>`;
      });
    }
    this.searchLinks =
      "<h2 class='subtitle'>View more items related to:</h2>" +
      this.searchLinks.join("");
  }

  generateHtml() {
    this.itemHtml = [];
    if (this.relatedItems) {
      for (var key in this.relatedItems) {
        if (this.relatedItems.hasOwnProperty(key)) {
          this.itemHtml.push(
            this.relatedItems[key].map(function(item) {
              return `<div class='col-xs-6 col-md-3'><a href='https://www.livingspaces.com/${item.pid}'><img class='img-responsive' src='${item.thumb_image}' alt='${item.title}'><p class='item-text'>${item.title}</p><p class='price-text'>$${item.sale_price}</p></a></div>`;
            })
          );
        }
      }
    } else {
      for (i = 0; i < this.bestSellers.length; i++) {
        this.itemHtml.push(
          this.bestSellers[i].map(function(item) {
            return `<div class='col-xs-6 col-md-3'><a href='https://www.livingspaces.com/${item.pid}'><img class='img-responsive' src='${item.thumb_image}' alt='${item.title}'><p class='item-text'>${item.title}</p><p class='price-text'>$${item.sale_price}</p></a></div>`;
          })
        );
      }
    }
    for (var i = 0; i < this.itemHtml.length; i++) {
      // Bootstrap Clearfix
      this.itemHtml[i].splice(2, 0, "<div class='clearfix'></div>");
      this.itemHtml[i] = this.itemHtml[i].join("");
    }
  }
}

// Loading Graphic Logic
function loadingState(bool) {
  if (bool) {
    document.getElementById("loadingSpinner").style.display = "block";
    document.getElementById("productsArea").style.display = "none";
  } else {
    document.getElementById("loadingSpinner").style.display = "none";
    document.getElementById("productsArea").style.display = "block";
  }
}

// Holder function for Async success
async function containerFcn() {
  loadingState(true);
  x = new Store(utag_data);
  if (x.eligibility) {
    await x.generateRestfulProductsData();
    await x.getRelatedProducts();
    x.generateLinks();
  } else {
    await x.getBestSellers();
  }
  x.generateHtml();
  document.getElementById("RelatedToItemsYouveViewed").innerHTML =
    x.itemHtml[0];
  document.getElementById("MoreItemsToConsider").innerHTML = x.itemHtml[1];
  document.getElementById("BasedOnYourRecentHistory").innerHTML = x.itemHtml[2];
  document.getElementById("RelatedLinks").innerHTML = x.searchLinks;
  loadingState(false);
}

var anotherInterval = setInterval(function() {
  if (
    typeof utag_data !== "undefined" &&
    typeof window.jQuery !== "undefined"
  ) {
    clearInterval(anotherInterval);
    if (utag_data.site_type == "desktop") {
      $(".product-slider").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000
      });
    } else {
      $(".product-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000
      });
    }
    containerFcn();
  }
}, 4000);
