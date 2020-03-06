function ESX081() {
  window.FuzzySet = function (arr, useLevenshtein, gramSizeLower, gramSizeUpper) {
    var fuzzyset = {};
    arr = arr || [];
    fuzzyset.gramSizeLower = gramSizeLower || 2;
    fuzzyset.gramSizeUpper = gramSizeUpper || 3;

    fuzzyset.useLevenshtein = function () {
      if (typeof useLevenshtein !== "boolean") {
        return true;
      }

      return useLevenshtein;
    }();

    fuzzyset.exactSet = {};
    fuzzyset.matchDict = {};
    fuzzyset.items = {};

    var levenshtein = function levenshtein(str1, str2) {
      var current = [],
          prev,
          value;

      for (var i = 0; i <= str2.length; i++) {
        for (var j = 0; j <= str1.length; j++) {
          if (i && j) {
            if (str1.charAt(j - 1) === str2.charAt(i - 1)) value = prev;else value = Math.min(current[j], current[j - 1], prev) + 1;
          } else value = i + j;
          prev = current[j];
          current[j] = value;
        }
      }

      return current.pop();
    };

    var _distance = function _distance(str1, str2) {
      if (str1 === null && str2 === null) throw "Trying to compare two null values";
      if (str1 === null || str2 === null) return 0;
      str1 = String(str1);
      str2 = String(str2);
      var distance = levenshtein(str1, str2);

      if (str1.length > str2.length) {
        return 1 - distance / str1.length;
      } else {
        return 1 - distance / str2.length;
      }
    };

    var _nonWordRe = /[^a-zA-Z0-9\u00C0-\u00FF, ]+/g;

    var _iterateGrams = function _iterateGrams(value, gramSize) {
      gramSize = gramSize || 2;
      var simplified = "-" + value.toLowerCase().replace(_nonWordRe, "") + "-",
          lenDiff = gramSize - simplified.length,
          results = [];

      if (lenDiff > 0) {
        for (var i = 0; i < lenDiff; ++i) {
          simplified += "-";
        }
      }

      for (var i = 0; i < simplified.length - gramSize + 1; ++i) {
        results.push(simplified.slice(i, i + gramSize));
      }

      return results;
    };

    var _gramCounter = function _gramCounter(value, gramSize) {
      gramSize = gramSize || 2;

      var result = {},
          grams = _iterateGrams(value, gramSize),
          i = 0;

      for (i; i < grams.length; ++i) {
        if (grams[i] in result) {
          result[grams[i]] += 1;
        } else {
          result[grams[i]] = 1;
        }
      }

      return result;
    };

    fuzzyset.get = function (value, defaultValue, minMatchScore) {
      if (minMatchScore === undefined) {
        minMatchScore = 0.33;
      }

      var result = this._get(value, minMatchScore);

      if (!result && typeof defaultValue !== "undefined") {
        return defaultValue;
      }

      return result;
    };

    fuzzyset._get = function (value, minMatchScore) {
      var normalizedValue = this._normalizeStr(value),
          result = this.exactSet[normalizedValue];

      if (result) {
        return [[1, result]];
      }

      var results = [];

      for (var gramSize = this.gramSizeUpper; gramSize >= this.gramSizeLower; --gramSize) {
        results = this.__get(value, gramSize, minMatchScore);

        if (results && results.length > 0) {
          return results;
        }
      }

      return null;
    };

    fuzzyset.__get = function (value, gramSize, minMatchScore) {
      var normalizedValue = this._normalizeStr(value),
          matches = {},
          gramCounts = _gramCounter(normalizedValue, gramSize),
          items = this.items[gramSize],
          sumOfSquareGramCounts = 0,
          gram,
          gramCount,
          i,
          index,
          otherGramCount;

      for (gram in gramCounts) {
        gramCount = gramCounts[gram];
        sumOfSquareGramCounts += Math.pow(gramCount, 2);

        if (gram in this.matchDict) {
          for (i = 0; i < this.matchDict[gram].length; ++i) {
            index = this.matchDict[gram][i][0];
            otherGramCount = this.matchDict[gram][i][1];

            if (index in matches) {
              matches[index] += gramCount * otherGramCount;
            } else {
              matches[index] = gramCount * otherGramCount;
            }
          }
        }
      }

      function isEmptyObject(obj) {
        for (var prop in obj) {
          if (obj.hasOwnProperty(prop)) return false;
        }

        return true;
      }

      if (isEmptyObject(matches)) {
        return null;
      }

      var vectorNormal = Math.sqrt(sumOfSquareGramCounts),
          results = [],
          matchScore;

      for (var matchIndex in matches) {
        matchScore = matches[matchIndex];
        results.push([matchScore / (vectorNormal * items[matchIndex][0]), items[matchIndex][1]]);
      }

      var sortDescending = function sortDescending(a, b) {
        if (a[0] < b[0]) {
          return 1;
        } else if (a[0] > b[0]) {
          return -1;
        } else {
          return 0;
        }
      };

      results.sort(sortDescending);

      if (this.useLevenshtein) {
        var newResults = [],
            endIndex = Math.min(50, results.length);

        for (var i = 0; i < endIndex; ++i) {
          newResults.push([_distance(results[i][1], normalizedValue), results[i][1]]);
        }

        results = newResults;
        results.sort(sortDescending);
      }

      var newResults = [];
      results.forEach(function (scoreWordPair) {
        if (scoreWordPair[0] >= minMatchScore) {
          newResults.push([scoreWordPair[0], this.exactSet[scoreWordPair[1]]]);
        }
      }.bind(this));
      return newResults;
    };

    fuzzyset.add = function (value) {
      var normalizedValue = this._normalizeStr(value);

      if (normalizedValue in this.exactSet) {
        return false;
      }

      var i = this.gramSizeLower;

      for (i; i < this.gramSizeUpper + 1; ++i) {
        this._add(value, i);
      }
    };

    fuzzyset._add = function (value, gramSize) {
      var normalizedValue = this._normalizeStr(value),
          items = this.items[gramSize] || [],
          index = items.length;

      items.push(0);

      var gramCounts = _gramCounter(normalizedValue, gramSize),
          sumOfSquareGramCounts = 0,
          gram,
          gramCount;

      for (gram in gramCounts) {
        gramCount = gramCounts[gram];
        sumOfSquareGramCounts += Math.pow(gramCount, 2);

        if (gram in this.matchDict) {
          this.matchDict[gram].push([index, gramCount]);
        } else {
          this.matchDict[gram] = [[index, gramCount]];
        }
      }

      var vectorNormal = Math.sqrt(sumOfSquareGramCounts);
      items[index] = [vectorNormal, normalizedValue];
      this.items[gramSize] = items;
      this.exactSet[normalizedValue] = value;
    };

    fuzzyset._normalizeStr = function (str) {
      if (Object.prototype.toString.call(str) !== "[object String]") throw "Must use a string as argument to FuzzySet functions";
      return str.toLowerCase();
    };

    fuzzyset.length = function () {
      var count = 0,
          prop;

      for (prop in this.exactSet) {
        if (this.exactSet.hasOwnProperty(prop)) {
          count += 1;
        }
      }

      return count;
    };

    fuzzyset.isEmpty = function () {
      for (var prop in this.exactSet) {
        if (this.exactSet.hasOwnProperty(prop)) {
          return false;
        }
      }

      return true;
    };

    fuzzyset.values = function () {
      var values = [],
          prop;

      for (prop in this.exactSet) {
        if (this.exactSet.hasOwnProperty(prop)) {
          values.push(this.exactSet[prop]);
        }
      }

      return values;
    };

    var i = fuzzyset.gramSizeLower;

    for (i; i < fuzzyset.gramSizeUpper + 1; ++i) {
      fuzzyset.items[i] = [];
    }

    for (i = 0; i < arr.length; ++i) {
      fuzzyset.add(arr[i]);
    }

    return fuzzyset;
  };

  var root = this;

  if (typeof module !== "undefined" && module.exports) {
    module.exports = FuzzySet;

    if (root) {
      root.FuzzySet = FuzzySet;
    }
  } else {
    root.FuzzySet = FuzzySet;
  }

  var url = "https://www.livingspaces.com/inspiration/ideas-advice/archived";
  var articles_search = {};
  var suggestions = FuzzySet();
  $(".blog-navigation").after('<div class="container"><div class="centerblock"> <div class="search_boxWrapper"> <input autocomplete="off" type="text" name="article_search" id="article_search" placeholder="Search ideas + advice articles" class="form-control" /></div> </div> <ul class="list-group" id="result"></ul> <br /> </div>');
  window.$.get(url, function (response) {
    $(response).find("#articleList li").each(function (i, obj) {
      var article_title = $(obj).find("a").text();
      var article_url = $(obj).find("a").attr("href");
      articles_search[article_title] = article_url;
    });
    window.$.each(articles_search, function (key, value) {
      suggestions.add(key.toString());
    });
  });
  $("#article_search").keyup(function () {
    getArticleList();
    var suggestionTitle = suggestions.get($("#article_search").val());

    if (suggestionTitle !== null) {
      var loopLength = function () {
        if (suggestionTitle.length > 4) {
          return 4;
        }

        return suggestionTitle.length;
      }();

      for (var i = 0; i < loopLength; i++) {
        if ($(".article_li:contains(" + suggestionTitle[i][1] + ")").length > 0) {
          $(".article_li:contains(" + suggestionTitle[i][1] + ")").remove();
        }

        $("#result").prepend('<li class="list-group-item link-class" onclick="search_link()"><a style="display:block;" href="' + articles_search[suggestionTitle[i][1]] + '">' + suggestionTitle[i][1] + "</a></li>");
      }
    }
  }).focus(function () {
    getArticleList();
  });
  $("#article_search").blur(function () {
    setTimeout(function () {
      $("#result").html("");
      $("#state").val("");
    }, 500);
  });
  $("#result").on("click", "li", function () {
    var click_text = $(this).text().split("|");
    $("#article_search").val($.trim(click_text[0]));
    $("#result").html("");
  });

  function getArticleList() {
    $("#result").html("");
    $("#state").val("");
    var searchField = $("#article_search").val();
    var expression = new RegExp(searchField, "i");
    $.each(articles_search, function (key, value) {
      if (key.toString().search(expression) != -1 || value.search(expression) != -1) {
        $("#result").append('<li class="list-group-item link-class article_li" onclick="search_link()"><a class="articleLinkTag" style="display:block;" href="' + value + '"> ' + key.toString() + ' <span class="rangle">&rsaquo;</span></a></li>');
      }
    });
  }

  $("body").on("touchstart", function (e) {
    var subject = $("#article_search");
    var subject2 = $("#result");

    if (e.target.id != subject.attr("id") && e.target.id != subject2.attr("id") && !$(e.target).hasClass("articleLinkTag")) {
      setTimeout(function () {
        $("#result").html("");
        $("#state").val("");
      }, 200);
    }
  });
}

if (window.jQuery) {
  ESX081();
} else {
  document.addEventListener("jQueryLoaded", function () {
    ESX081();
  });
}