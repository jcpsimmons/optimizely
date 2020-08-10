var BannerTarget =
  utag_data.site_type === "desktop"
    ? $(".add-product-to-cart")
    : $("#product-detail-page-vue");
//Insert Elements Logo
function otbLogo() {
  if ($(".product-info-component .img-wrapper").length) {
    $(".product-info-component .img-wrapper").append(
      '<img class="pv-tp-logo-top-elements img-responsive" src="/globalassets/images/pv_logos/pdp_brand/pdp_logo_elements.png" alt="Elements" />'
    );
  } else {
    $("#imgSlider").append(
      '<img class="pv-tp-logo-top-elements img-responsive" src="/globalassets/images/pv_logos/pdp_brand/pdp_logo_elements.png" alt="Elements" />'
    );
  }
}
//Grey Display not included.
function mattressGreyBase() {
  if (typeof utag_data.site_type !== undefined) {
    if (utag_data.site_type === "desktop") {
      $(".product-info-component .row .img-wrapper").append(
        '<div class="pv-grey-displaybase">* Grey display base not included</div>'
      );
    }
    if (utag_data.site_type === "mobile") {
      $("#imgSlider").append(
        '<div class="pv-grey-displaybase">* Grey display base not included</div>'
      );
    }
  }
}
// Rug UPS Shipping notification
/*function rugParcelBanner() {
	if (typeof utag_data.category_id !== undefined) {
		if (utag_data.category_id === "rugs") {
			BannerTarget.before('<div id="promo_rug_ups" class="upsBanner-link"><p><span><a href="/company/shipping-faqs#rd-ups"><i class="fa fa-truck" aria-hidden="true"></i> Get your rug shipped for less &rsaquo;</span></a></p></div>');
		}
	}
}*/
//	Helper Function for mattress300BannerDynamic
function bannerAppend() {
  if (utag_data.site_type === "desktop") {
    BannerTarget.before(
      '<div id="promo_card_banner" class="mattressBanner-link"><p><span>Get a $300 Living Spaces Card</span> with your purchase.</p> <a href="/departments/mattresses/promotions#lsCard">Learn more &rsaquo;</a></div>'
    );
  } else {
    BannerTarget.before(
      '<div id="promo_card_banner" class="mattressBanner-link"><p><a href="/departments/mattresses/promotions#lsCard"><span>$300 Living Spaces Card</span> with your purchase &rsaquo;</a></p></div>'
    );
  }
}

function sleepTrial() {
  var trialDays = $('th:contains("Sleep Trial")')
    .next("td")
    .text()
    .trim();
  BannerTarget.before(
    '<div id="promo_sleep_trial" class="mattressBanner-link"><p><span><i class="fa fa-check-circle" aria-hidden="true"></i> Sleep Trial ' +
      trialDays +
      '</span> <a href="/company/store-policies#sleep_trial">Learn more &rsaquo;</a></p> </div>'
  );
}
//Banner and Logo placer
function mattress300BannerDynamic() {
  var prodSku = window.lsSKU;
  var baseUrl =
    "https://www.livingspaces.com/api/restfulproducts?pid=" + prodSku;
  var n = $("h1.title").text();
  if (typeof utag_data.category_id !== undefined) {
    if (
      utag_data.category_id === "mattresses" ||
      utag_data.category_id === "box springs/foundations" ||
      utag_data.category_id === "sleep accessories"
    ) {
      $.getJSON(baseUrl, function(data) {
        if (data.products != undefined) {
          var ff = data.products;
          $.each(ff, function(i) {
            switch (this.mattressBrand) {
              case "Simmons":
                if ($(".product-info-component .img-wrapper").length) {
                  $(".product-info-component .img-wrapper").append(
                    '<img class="pv-tp-logo-top img-responsive" src="/globalassets/images/pv_logos/simmons.jpg" alt="Simmons" />'
                  );
                } else {
                  $("#imgSlider").append(
                    '<img class="pv-tp-logo-top img-responsive" src="/globalassets/images/pv_logos/simmons.jpg" alt="Simmons" />'
                  );
                }
                break;
              case "Serta Perfect Sleeper":
                if ($(".product-info-component .img-wrapper").length) {
                  $(".product-info-component .img-wrapper").append(
                    '<img class="pv-tp-logo-top img-responsive" src="/globalassets/images/pv_logos/pdp_brand/pdp_logo_serta.png" alt="Serta Perfect Sleeper" />'
                  );
                } else {
                  $("#imgSlider").append(
                    '<img class="pv-tp-logo-top img-responsive" src="/globalassets/images/pv_logos/pdp_brand/pdp_logo_serta.png" alt="Serta Perfect Sleeper" />'
                  );
                }
                break;
              case "Serta iComfort":
                if ($(".product-info-component .img-wrapper").length) {
                  $(".product-info-component .img-wrapper").append(
                    '<img class="pv-tp-logo-top img-responsive" src="/globalassets/images/pv_logos/pdp_brand/pdp_logo_icomfort.png" alt="Serta iComfort" />'
                  );
                } else {
                  $("#imgSlider").append(
                    '<img class="pv-tp-logo-top img-responsive" src="/globalassets/images/pv_logos/pdp_brand/pdp_logo_icomfort.png" alt="Serta iComfort" />'
                  );
                }
                break;
              case "Stearns and Foster":
                if ($(".product-info-component .img-wrapper").length) {
                  $(".product-info-component .img-wrapper").append(
                    '<img class="pv-tp-logo-top img-responsive" src="/globalassets/images/pv_logos/pdp_brand/pdp_logo_sf.png" alt="Stearns and Foster" />'
                  );
                } else {
                  $("#imgSlider").append(
                    '<img class="pv-tp-logo-top img-responsive" src="/globalassets/images/pv_logos/pdp_brand/pdp_logo_sf.png" alt="Stearns and Foster" />'
                  );
                }
                break;
              case "Sealy Posturepedic":
                if ($(".product-info-component .img-wrapper").length) {
                  $(".product-info-component .img-wrapper").append(
                    '<img class="pv-tp-logo-top img-responsive" src="/globalassets/images/pv_logos/sealy.jpg" alt="Sealy Posturepedic" />'
                  );
                } else {
                  $("#imgSlider").append(
                    '<img class="pv-tp-logo-top img-responsive" src="/globalassets/images/pv_logos/sealy.jpg" alt="Sealy Posturepedic" />'
                  );
                }
                break;
              case "Revive":
                if ($(".product-info-component .img-wrapper").length) {
                  $(".product-info-component .img-wrapper").append(
                    '<img id="revive_logo" class="pv-tp-logo-top img-responsive" src="/globalassets/images/pv_logos/pdp_brand/pdp_logo_revive.png" alt="Revive" />'
                  );
                } else {
                  $("#imgSlider").append(
                    '<img id="revive_logo" class="pv-tp-logo-top img-responsive" src="/globalassets/images/pv_logos/pdp_brand/pdp_logo_revive.png" alt="Revive" />'
                  );
                }
                removeLogo();
                break;
              case "Circadian":
                if ($(".product-info-component .img-wrapper").length) {
                  $(".product-info-component .img-wrapper").append(
                    '<img class="pv-tp-logo-top img-responsive" src="/globalassets/images/pv_logos/circadian.jpg" alt="Circadian" />'
                  );
                } else {
                  $("#imgSlider").append(
                    '<img class="pv-tp-logo-top img-responsive" src="/globalassets/images/pv_logos/circadian.jpg" alt="Circadian" />'
                  );
                }
                break;
              case "Tempur-Pedic":
                if ($(".product-info-component .img-wrapper").length) {
                  $(".product-info-component .img-wrapper").append(
                    '<img class="pv-tp-logo-top img-responsive" src="/globalassets/images/pv_logos/pdp_brand/pdp_logo_tempur.png" alt="Tempur-Pedic" />'
                  );
                } else {
                  $("#imgSlider").append(
                    '<img class="pv-tp-logo-top img-responsive" src="/globalassets/images/pv_logos/pdp_brand/pdp_logo_tempur.png" alt="Tempur-Pedic" />'
                  );
                }
                break;
              case "Beautyrest":
                if ($(".product-info-component .img-wrapper").length) {
                  $(".product-info-component .img-wrapper").append(
                    '<img class="pv-tp-logo-top img-responsive" src="/globalassets/images/pv_logos/globalassets/images/pv_logos/pdp_brand/pdp_logo_beautyrest.png" alt="beautyrest" />'
                  );
                } else {
                  $("#imgSlider").append(
                    '<img class="pv-tp-logo-top img-responsive" src="/globalassets/images/pv_logos/pdp_brand/pdp_logo_beautyrest.png" alt="beautyrest" />'
                  );
                }
                if ($('img[src*="/beautysleep_tracker.jpg"]').length) {
                  $("#productDetails")
                    .parent()
                    .after(
                      '<section class="br_smartbundle_wrapper"> <a target="_blank" href="/globalassets/images/lp/2018/12/BR18_SMART_BED_BUNDLE-Sell_Sheet.pdf"> <img class="img-responsive hidden-xs" alt="Beautyrest smart bed" src="/globalassets/images/lp/2018/12/1228_reviveredeemsm.jpg"> <img class="img-responsive visible-xs" alt="Beautyrest smart bed" src="/globalassets/images/lp/2018/12/1228_reviveredeemsm_mobile.jpg"> <p class="sr-only">Don\'t forget to make your bed a smart bed when it\'s delivered. 1 - receive delivery of aneligible beautyrest product, 2 visit beautyrestpromo.com for easy redemption, 3 receive your beautyrest sleeptracker in 7 to 10 days. For more details Check PDF</p> </a> </section>'
                    );
                }
                break;
              default:
                break;
            }
            if (utag_data.category_id === "mattresses") {
              if (
                this.clearance != "Clearance" &&
                parseInt(this.price.salePrice) >= 999 &&
                (this.product_level4 === "Mattress Set" ||
                  this.product_level4 === "Mattress") &&
                utag_data.clearance != "clearance"
              ) {
                switch (this.mattressBrand) {
                  case "Simmons":
                    if (this.group_level3 === "Hybrid Mattresses") {
                      //bannerAppend();
                      if (
                        $('th:contains("Sleep Trial")').length > 0 &&
                        $('th:contains("Sleep Trial")')
                          .next()
                          .text().toLowerCase !== "not included"
                      ) {
                        sleepTrial();
                      }
                    }
                    break;
                  case "Serta iComfort":
                    //bannerAppend();
                    if (
                      $('th:contains("Sleep Trial")').length > 0 &&
                      $('th:contains("Sleep Trial")')
                        .next()
                        .text().toLowerCase !== "not included"
                    ) {
                      sleepTrial();
                    }
                    break;
                  case "Tempur-Pedic":
                    //bannerAppend();
                    if (
                      $('th:contains("Sleep Trial")').length > 0 &&
                      $('th:contains("Sleep Trial")')
                        .next()
                        .text().toLowerCase !== "not included"
                    ) {
                      sleepTrial();
                    }
                    break;
                  case "Stearns and Foster":
                    //bannerAppend();
                    if (
                      $('th:contains("Sleep Trial")').length > 0 &&
                      $('th:contains("Sleep Trial")')
                        .next()
                        .text().toLowerCase !== "not included"
                    ) {
                      sleepTrial();
                    }
                    break;
                  case "Beautyrest":
                    //bannerAppend();
                    if (
                      $('th:contains("Sleep Trial")').length > 0 &&
                      $('th:contains("Sleep Trial")')
                        .next()
                        .text().toLowerCase !== "not included"
                    ) {
                      sleepTrial();
                    }
                    break;
                  default:
                }
              }
            }
          });
        }
      });
    }
  }
}

// HIDE OLAPIC ON MATTRESS PAGES
/*function hideMattressOlapic() {
	if (typeof utag_data.category_id !== undefined) {
		if (utag_data.category_id === "mattresses" || utag_data.category_id === "box springs/foundations" || utag_data.category_id === "sleep accessories") {
			$(".collapse-link:contains('Customer Photo Gallery')").parent().css({
				"display": "none"
			});
		}
	}
}*/

function getPidQuery(pidArr) {
  var pidQuery = "";

  $.each(pidArr, function(index, value) {
    if (pidQuery !== "") pidQuery += "OR";
    pidQuery += "%22" + value + "%22";
  });

  return pidQuery;
  //return "%2266366%22OR%22203342%22OR%22205547%22OR%2286811%22";
}

//mattress function filter.
function mattressUpdate() {
  if (typeof utag_data.category_id !== undefined) {
    if (
      (utag_data.category_id === "mattresses" ||
        utag_data.category_id === "box springs/foundations") &&
      utag_data.product_attribute !== "adjustable base"
    ) {
      mattressGreyBase();
      // if ($("th:contains('Recommended Foundations')")) {
      // 	updateRecLinks();
      // 	recommendedFoundations();
      // }
    }
  }
}
//Element OTB updates
function otbUpdates() {
  if (typeof utag_data.category_id !== undefined) {
    if (
      utag_data.category_id === "one time buy furniture" ||
      utag_data.category_id === "one time buy accessories"
    ) {
      otbLogo();
      // if ($('.btn:contains("Email Me")').length > 0) {
      // 	$('.out-stock span:nth-child(2)').remove();
      // 	$('.btn:contains("Email Me")').remove();
      // 	if (utag_data.site_type === 'desktop') {
      // 		$('.like-product').parent().remove();
      // 	} else if (utag_data.site_type === 'mobile') {
      // 		$('#liked-widget-vue-container').addClass('visible-hidden');
      // 	}
      // }
    }
  }
}

function magnoliaProduct() {
  if (
    $("h1.title")
      .text()
      .includes("Joanna Gaines")
  ) {
    $(
      'a[data-target="#sameDayDeliveryModal"], a[data-target="#businessDaysModal"]'
    ).attr("class", "dont-display");
  }
}

function discontinueItem() {
  if (
    utag_data.product_status === "dropped" &&
    $('.btn:contains("Email Me")').length > 0
  ) {
    if (utag_data.site_type === "desktop") {
      $(".like-product")
        .parent()
        .remove();
    } else if (utag_data.site_type === "mobile") {
      $("#liked-widget-vue-container").addClass("visible-hidden");
    }
    $("#product-detail-page-vue > section").html(
      "<span class='dcItem'>Sorry, this item is discontinued and won't be restocked.</span>"
    );
  } else if (
    utag_data.product_status === "dropped" &&
    $("#btnAddToCart").length == 0 &&
    $(
      'a[data-target="#displayedSoresModal"]:contains(This product is only available in store)'
    ) &&
    $("#displayedSoresModal .modal-body div.row").length == 0
  ) {
    $(".like-holder").replaceWith(
      '<section class="out-stock-wrapper inline-block"><span class="dcItem">Sorry, this item is discontinued and won\'t be restocked.</span></section>'
    );
    $(
      'a[data-target="#displayedSoresModal"]:contains(This product is only available in store)'
    ).replaceWith("");
  }
  //HIDE OMNI CHANNEL WHENEVER ITEM IS OUT OF STOCK - https://www.pivotaltracker.com/story/show/174077558
  if ($('.btn:contains("Email Me")').length > 0) {
    $("#omniinventory").before(
      "<style>#omniinventory {display:none!important}</style>"
    );
  }
}

// Tracks Items added to cart and creates or updates cookie.
function trackAddToCart() {
  EventBus.$on("productAddedToCart", function(data) {
    var skuAddedToCart = data.sku;
    if ($.cookie("lsf-cartadds") === undefined) {
      $.cookie("lsf-cartadds", skuAddedToCart, {
        expires: 20 * 365,
      });
    } else if (!$.cookie("lsf-cartadds").includes(skuAddedToCart)) {
      var currentVal = $.cookie("lsf-cartadds");
      var newVal = skuAddedToCart + "," + currentVal;
      $.cookie("lsf-cartadds", newVal, {
        expires: 20 * 365,
      });
    }
  });
}

function inStoreSpecialOrder() {
  if (
    $(
      'span.special-order:contains("Custom colors & fabrics available in store")'
    ).length > 0
  ) {
    $(".page-content").append(
      '<div class="modal fade in" id="so_modal" tabindex="-1" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button> <div class="modal-body"> <h2>How to Customize this Item in Store</h2> <p>You can customize this item at no extra cost and receive it in as little as 2 weeks in selected areas! Simply <a class="so_link" href="/stores">visit any store</a> and ask your sales associate about our Special Order fabric and configuration options.</p> </div> </div> </div></div>'
    );
    $(".special-order").attr({
      "data-toggle": "modal",
      "data-target": "#so_modal",
    });
  }
}

//Addding Warning Sign for AS IS, OTB and ASIS-SO
var sPageURL = window.location.search.substring(1);
var lsSKU = window.serverSideViewModel.sku;
var cookieList;

function mlScanCheck() {
  if (sPageURL.indexOf("mlscan=") >= 0) {
    if (
      $.cookie("lsf-scans") !== undefined &&
      $.cookie("lsf-scans").length > 0
    ) {
      var scanCookieList = $.cookie("lsf-scans").split(",");
      if (jQuery.inArray(lsSKU, scanCookieList) == -1) {
        var cookieContent = $.cookie("lsf-scans");
        cookieList = lsSKU + "," + cookieContent;
        updateScanCookie(cookieList);
      }
    } else {
      cookieList = lsSKU;
      updateScanCookie(cookieList);
    }
  }
}

function itemWarningTypeGen() {
  if (sPageURL.indexOf("productstatus") >= 0) {
    var strId = getParam("storeid");
    if (
      $.cookie("lsf-scans") !== undefined &&
      $.cookie("lsf-scans").length > 0
    ) {
      var scanCookieList = $.cookie("lsf-scans").split(",");
      if (jQuery.inArray(lsSKU, scanCookieList) == -1) {
        var cookieContent = $.cookie("lsf-scans");
        cookieList = lsSKU + "," + cookieContent;
      }
    } else {
      cookieList = lsSKU;
    }
    updateStrCookie(strId);
    updateMyStoreId(strId);
    updateScanCookie(cookieList);
    switch (getParam("productstatus")) {
      case "asis":
        $(".product-info-component").before(
          '<div class="item_warning"><p>You have scanned an “As-Is” item. The price you see in the store might be different. This piece can only be purchased in the store. Please see a Sales Associate for assistance.</p></div>'
        );
        break;
      case "otb":
        //Only show if Product its out of stock
        if ($("#btnAddToCart").length <= 0) {
          $(".product-info-component").before(
            '<div class="item_warning"><p>You have scanned a “One-Time-Buy” item. These one-of-a-kind items have limited stock and unique features. The piece you see can only be purchased in a store. Please see a Sales Associate for assistance.</p></div>'
          );
        }
        break;
      case "asis-so":
        $(".product-info-component").before(
          '<div class="item_warning"><p>You have scanned a “Special Order Cancellation” item. The color and price you see in the store might be different. This piece can only be purchased in the store. Please see a Sales Associate for assistance.</p></div>'
        );
        break;
    }
  }
}

function getParam(sParam) {
  var sURLVariables = sPageURL.split("&");
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] == sParam) return sParameterName[1];
  }
  return "";
}

function updateScanCookie(cookieList) {
  $.cookie("lsf-scans", cookieList, {
    expires: 20 * 365,
    path: "/",
  });
}

function updateMyStoreId(strId) {
  $.cookie("lsf-my-store-id", strId, {
    expires: 20 * 365,
    path: "/",
  });
}

function updateStrCookie(strId) {
  $.cookie("lsf-str-attr", strId, {
    expires: 3,
    path: "/",
  });
}

function removeDuplicateCopy() {
  var target_1 = $(".more-content")
    .text()
    .replace(/\s/g, "")
    .toLowerCase();
  var target_2 = $("h1.title")
    .text()
    .replace(/\s/g, "")
    .toLowerCase();
  if (target_1 == target_2) {
    $(".more-content").remove();
  }
}
var Reviewcounter;
var reviewCount = parseInt($('meta[itemprop="reviewCount"]').attr("content"));

function checkReviewCount() {
  if (Reviewcounter < 15) {
    setTimeout(checkReviewCount, 3000);
  } else {
    if (reviewCount > 10) {
      $("body").addClass("review_body_wrapper");
    }
  }
}

// Cylindo Add to cart Tracker
/*var featureList = [];
var viewerInstance = null;
function createFeatureList(initializer) {
	featureList = [];
	$('.holder-img.selected-img').each(function (i, obj) {
		var selectedColor = $(obj).find('.mCS_img_loaded').attr('alt'),
			selectedCategoryNumber = parseInt($(obj).parents('.swatches-holder').find('.swatch-number').text()) - 1,
			selectedCategoryName = $(obj).parents('.swatches-holder').find('.swatch-section-title').text(),
			specialOrderComponentGroup = window.specialOrderComponentGroups,
			selectedSpecialOrderComponentArray = specialOrderComponentGroup[selectedCategoryNumber].SpecialOrderComponents;
		for (var i = 0; i < selectedSpecialOrderComponentArray.length; i++) {
			if (selectedSpecialOrderComponentArray[i].DisplayName == selectedColor) {
				featureList.push(selectedCategoryName);
				featureList.push(selectedSpecialOrderComponentArray[i].Name);
			}
		}
	});
	if (initializer) {
		cylindoTracking(featureList);
	} else {
		updateFeatureOnClick(featureList);
	}

}
function cylindoTracking(featureArray) {
	var opts = {
		'accountID': window.cylindoAccountId,
		'SKU': window.serverSideViewModel.parentSku == "" ? window.serverSideViewModel.sku : window.serverSideViewModel.parentSku,
		'features': featureArray,
		'viewerType': window.cylindoViewerType,
		'country': 'us',
		'containerID': "#cylindo-viewer",
		'cylindoContent': !0,
		'thumbs': !1,
		'fullscreen': !0,
		'missingCombinationErrorText': "Image of current fabric selection coming soon"
	}
	if (cylindo) {
		cylindo.on('ready', function () {
			viewerInstance = cylindo.viewer.create(opts);
		});
	}
}

function updateFeatureOnClick(featureArray) {
	viewerInstance.setFeatures(featureArray)
}*/

// Swap Position of MoreLikeThis & Accessorize for Mattress Only
function swapMltWithAwti() {
  if (
    $(".collapse-link:contains(Accessorize with these Items)").length > 0 &&
    $("#moreLikeThis").length > 0 &&
    utag_data.category_id === "mattresses"
  ) {
    $("#moreLikeThis")
      .parent()
      .after(
        $(".collapse-link:contains(Accessorize with these Items)").parent()
      );
    $("#reviews_container").after($("#moreLikeThis").parent());
  }
}

//

function removeLogo() {
  $("body").on("focus", ".row.thumb-list .thumb.img-click", function() {
    if (
      $(this)
        .find("img")
        .attr("src")
        .indexOf("detail") > 0
    ) {
      $("#revive_logo, .img-wrapper .badge").css("display", "none");
    } else {
      $("#revive_logo, .img-wrapper .badge").css("display", "block");
    }
  });
}

//JIRA EPI-4252 | ESX097 - Special Order Backgrounds Original vs white wall + light wood
/*function changeCylindoBackground() {
	if (typeof window.specialOrderBackgroundFeatureGroups !== 'undefined' && window.specialOrderBackgroundFeatureGroups.length > 0) {
		var triggerClick = setInterval(function () {
			if ($('.bg-swatches-wrapper .bg-swatch img[alt="WALL_WHITE"]').length > 0) {
				$('.bg-swatches-wrapper .bg-swatch img[alt="WALL_WHITE"]').trigger('click');
				clearInterval(triggerClick);
			}
		});
	}
}*/
//ESX099 - show 4 full rows when only one swatch component
function expandSwatchOptions() {
  if ($(".modal-body .customization-component .swatches-holder").length == 1) {
    window.$("#customizationComponentModal").on("shown.bs.modal", function(e) {
      var checkforHeight = setInterval(function() {
        if (window.$("#customizationComponentModal .custom-col").height() > 0) {
          var componentHeight =
            window.$("#customizationComponentModal .custom-col").height() * 4;
          $(".modal-body .swatch-images .mCustomScrollBox").css(
            "max-height",
            componentHeight
          );
          $(".modal-body .swatch-images").css("max-height", componentHeight);
          clearInterval(checkforHeight);
        }
      }, 500);
    });
  }
}

//ADD ENTER AND ESCAPE KEY FUNCTIONALITY TO CYLINDO
function adaCylindoEvents() {
  if ($("#customizationComponentModal").length > 0) {
    $("#customizationComponentModal").attr("data-backdrop", "true");
    $("#customizationComponentModal").keyup(function(event) {
      if (event.keyCode == "27") {
        $("#customizationComponentModal").modal("hide");
      }
    });
  }
  $("#customizationComponentModal").keydown(function(event) {
    if (event.keyCode == "13") {
      $(event.target)
        .find("img")
        .trigger("click");
      setTimeout(function() {
        $(event.target)
          .find("img")
          .trigger("click");
      }, 200);
    }
  });
}

function titleCase(str) {
  str = str.toLowerCase().split(" ");

  var final = [];
  // let word of str
  for (i = 0; i < str.length; i++) {
    final.push(str[i].charAt(0).toUpperCase() + str[i].slice(1));
  }
  return final.join(" ");
}

//ESX118 - MORE IN THIS SHAPE
function addMoreThisShape() {
  if (typeof utag_data.shape !== undefined) {
    if (utag_data.shape) {
      var target_shape = $("th:contains(Shape)")
        .next()
        .text()
        .trim();
      var target_attr = utag_data.product_attribute;
      target_attr = target_attr.charAt(0).toUpperCase() + target_attr.slice(1);
      var url =
        "https://brm-core-0.brsrvr.com//api/v1/core/?account_id=5221&auth_key=o5xlkgn7my5fmr5c&domain_key=livingspaces_com&request_id=fd8d6a02a5764b7995c600e766a38bda&url=%2fbr-checker&_br_uid_2=uid%253D4961390647524%253Av%253D11.8%253Ats%253D1463613117510%253Ahc%253D3145&ptype=other&request_type=search&q=&start=0&rows=16&search_type=keyword&fl=title,pid,url,clearance,sale_price,price,thumb_image,large_image,reviews,reviews_count,description,romanceCopy&fq=f_shape%3A%22" +
        target_shape +
        "%22&fq=product_attribute%3A%22" +
        target_attr +
        "%22";
      var appendTarget =
        $("#featuredArticles").length > 0
          ? $("#featuredArticles").parent()
          : $(".related-items,.bottomcontentboard");
      constructRecSlider(
        url,
        "shape",
        "More In This Shape",
        appendTarget,
        false
      );
    }
  }
}

//ESX126 - MORE IN THIS SIZE (BEDS)
function addMoreInSize() {
  if (typeof utag_data.product_attribute !== undefined) {
    if (
      utag_data.product_attribute == "bed" ||
      utag_data.product_attribute == "bedroom set"
    ) {
      var size = utag_data.size;
      var productAttribute = titleCase(utag_data.product_attribute);
      var colorFamily = utag_data.colorfamily;
      var queryUrl =
        "https://brm-core-0.brsrvr.com/api/v1/core/?account_id=5221&auth_key=o5xlkgn7my5fmr5c&domain_key=livingspaces_com&request_id=fd8d6a02a5764b7995c600e766a38bda&url=%2fbr-checker&_br_uid_2=uid%253D4961390647524%253Av%253D11.8%253Ats%253D1463613117510%253Ahc%253D3145&ptype=other&request_type=search&q=%22" +
        size +
        "%22&start=0&rows=13&search_type=keyword&fl=title,pid,url,price,sale_price,reviews,reviews_count,thumb_image&fq=product_attribute%3A%22" +
        productAttribute +
        "%22&fq=color_groups%3A%22" +
        colorFamily;
      var appendTarget = $("#moreLikeThis").parent();
      constructRecSlider(
        queryUrl,
        "moreSize",
        "More In This Size",
        appendTarget,
        true
      );
    }
  }
}

//ESX105 - MORE IN THIS COLOR (COLOR VARIANTS)
function addMoreInColor() {
  if (window.location.href.indexOf("pdp-cv") > -1) {
    var productAttribute = titleCase(utag_data.product_attribute);
    var colorFamily = utag_data.colorfamily;

    var queryUrl =
      "https://brm-core-0.brsrvr.com/api/v1/core/?account_id=5221&auth_key=o5xlkgn7my5fmr5c&domain_key=livingspaces_com&request_id=fd8d6a02a5764b7995c600e766a38bda&url=%2fbr-checker&_br_uid_2=uid%253D4961390647524%253Av%253D11.8%253Ats%253D1463613117510%253Ahc%253D3145&ptype=other&request_type=search&q=%22" +
      productAttribute +
      "%22&start=0&rows=13&search_type=keyword&fl=title,pid,url,price,sale_price,reviews,reviews_count,thumb_image&fq=color_variant%3A%22Yes%22&fq=product_attribute%3A%22" +
      productAttribute +
      "%22&fq=color_groups%3A%22" +
      colorFamily +
      "%22";
    var appendTarget = $("#moreLikeThis").parent();
    constructRecSlider(
      queryUrl,
      "moreColor",
      "More In This Color",
      appendTarget,
      true
    );
  }
}

function constructRecSlider(url, name, header, appendTarget, moveMLT) {
  window.$.get(url, function(data) {
    var dataArr = data.response.docs,
      tileHtml =
        '<div><div class="block cosellblock narrow" id="' +
        name +
        '_wrapper"><section class="container board"><a class="collapse-link" role="button" data-toggle="collapse" href="#coSellSection_' +
        name +
        '" aria-expanded="true" aria-controls="coSellSection_' +
        name +
        '">' +
        header +
        '<span class="fa fa-angle-down" aria-hidden="true"></span></a><div class="collapse in" id="coSellSection_' +
        name +
        '" aria-expanded="true"><div class="product-grid-component">';
    tileHtml +=
      utag_data.site_type === "desktop"
        ? '<div class="carousel-component">'
        : '<div class="mobile-carousel-component">';

    if (dataArr.length > 1) {
      var currentPagePdp = utag_data.product_id[0];
      for (var i = 0; i < dataArr.length; i++) {
        if (currentPagePdp != dataArr[i].pid) {
          tileHtml +=
            '<div class="product-element col-xs-3"><a href="' +
            dataArr[i].url +
            '" tabindex="-1"><span class="img-place-holder"><img src="' +
            dataArr[i].thumb_image.replace("?w=446&h=296", "?w=230&h=155") +
            '" alt="' +
            dataArr[i].title +
            '" class="img-responsive"></span><span class="title">' +
            dataArr[i].title +
            '</span><span class="price">$' +
            dataArr[i].price +
            "</span></a></div>";
        }
      }
      tileHtml += "</div></div></div></section></div></div>";
      appendTarget.before(tileHtml);

      utag_data.site_type === "desktop"
        ? recommendedSlick(name)
        : recommendedSlickMobile(name);

      $("#coSellSection_" + name).css({
        opacity: "1",
        "max-height": "none",
      });
      if (utag_data.site_type == "mobile")
        $("#" + name + "_wrapper").addClass("row");
      if (moveMLT) moveMLTWidget();
    }
  });
}

function moveMLTWidget() {
  if (utag_data.site_type === "desktop") {
    $("#moreLikeThis")
      .parent()
      .insertAfter("#reviews_container");
  } else {
    $("#moreLikeThis")
      .parent()
      .insertAfter("#reviews_content_wrap");
  }
}

function recommendedSlick(name) {
  window.$("#coSellSection_" + name + " .carousel-component").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: true,
    autoplay: false,
  });
}

function recommendedSlickMobile(name) {
  window.$("#coSellSection_" + name + " .mobile-carousel-component").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: false,
    arrows: false,
    autoplay: false,
  });
}

//TEMP DISABLE PURCHASE ON UMA ITEMS
function disableUmaCart() {
  if (typeof utag_data.product_attribute !== undefined) {
    if (
      "bookends|wine rack|candleholder|lantern|clock|box|tray|decorative dish".indexOf(
        utag_data.product_attribute
      ) > -1
    ) {
      var queryUrl =
        "https://brm-core-0.brsrvr.com/api/v1/core/?account_id=5221&auth_key=o5xlkgn7my5fmr5c&domain_key=livingspaces_com&request_id=fd8d6a02a5764b7995c600e766a38bda&url=%2fbr-checker&_br_uid_2=uid%253D4961390647524%253Av%253D11.8%253Ats%253D1463613117510%253Ahc%253D3145&ptype=other&request_type=search&q=%22" +
        utag_data.product_id[0] +
        "%22&start=0&rows=13&search_type=keyword&fl=title,pid,url,price,sale_price,reviews,reviews_count,thumb_image,brand";

      window.$.get(queryUrl, function(data) {
        if (data.response.numFound > 0) {
          if (data.response.docs[0].brand === "UMA ENTERPRISES, INC") {
            if (utag_data.site_type === "desktop") {
              $(".page").prepend(
                "<style>#product-detail-page-vue .button-group #btnAddToCart, #product-detail-page-vue .button-group .select-wrapper, #product-detail-page-vue .stock-info, #omniinventory{display:none!important} .add-product-to-cart .like-product > a{margin-left:0!important}</style>"
              );
              $("#price-section").after(
                '<span style="display:block; color:#b9170f; font-weight:600; margin-bottom:15px; font-size:14px"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i>&nbsp;&nbsp;This product is unavailable due to COVID-19 disruptions</span>'
              );
            } else {
              $(".page").prepend(
                "<style>#product-detail-page-vue > form.text-center, #product-detail-page-vue .stock-info, #omniinventory{display:none!important}</style>"
              );
              $("#product-detail-page-vue").after(
                '<span style="display:block; color:#b9170f; font-weight:600; margin-bottom:15px; font-size:13px"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i>&nbsp;&nbsp;This product is unavailable due to COVID-19 disruptions</span>'
              );
            }
          }
        }
      });
    }
  }
}

$(document).ready(function() {
  mlScanCheck();
  trackAddToCart();
  otbUpdates();
  mattressUpdate();
  mattress300BannerDynamic();
  //hideMattressOlapic();
  //rugParcelBanner();
  magnoliaProduct();
  discontinueItem();
  inStoreSpecialOrder();
  itemWarningTypeGen();
  removeDuplicateCopy();
  checkReviewCount();
  // if($('#special-order-vue-container').length > 0) {
  // 	createFeatureList(true);
  // 	$('body').on('click', '.mCS_img_loaded', function(){
  // 		createFeatureList(false);
  // 	});
  // }
  swapMltWithAwti();

  //changeCylindoBackground();
  expandSwatchOptions();
  adaCylindoEvents();
  addMoreThisShape();
  addMoreInColor();
  addMoreInSize();
  //disableUmaCart();

  //CYLINDO HACK FOR MAX SIZE ZOOM
  $("body").on(
    "mousedown",
    "#cylindo-viewer .cylindo-icon-fullscreen-off",
    function() {
      cylindoMaxSize();
    }
  );
  $("body").on(
    "keydown",
    "#cylindo-viewer .cylindo-icon-fullscreen-off",
    function(e) {
      if (e.keyCode === 13) cylindoMaxSize();
    }
  );

  function cylindoMaxSize() {
    if (
      void 0 !== typeof utag_data.site_type &&
      "desktop" === utag_data.site_type
    ) {
      var imgSrc = "";
      $(".cylindo-threesixty-list img").each(function() {
        imgSrc = $(this).attr("src");
        if (imgSrc.indexOf("size=650") > -1) {
          $(this).attr("src", imgSrc.replace("size=650", "size=1024"));
        }
      });
    }
  }

  var strObj = {
    "01": {
      name: "La Mirada",
      address: "14501 Artesia Blvd<br> La Mirada, CA 90638",
      link: "/store/MapRedirector?storeId=01",
      cord: [33.8734, -118.02169],
    },
    "03": {
      name: "Van Nuys",
      address: "14400 Arminta St<br> Panorama City, CA 91402",
      link: "/store/MapRedirector?storeId=03",
      cord: [34.21226, -118.44665],
    },
    "04": {
      name: "Irvine",
      address: "101 Technology Dr<br> Irvine, CA 92618",
      link: "/store/MapRedirector?storeId=04",
      cord: [33.65767, -117.74235],
    },
    "05": {
      name: "Monrovia",
      address: "407 W Huntington Dr<br> Monrovia, CA 91016",
      link: "/store/MapRedirector?storeId=05",
      cord: [34.14115, -118.00767],
    },
    "06": {
      name: "Redondo Beach",
      address: "1519 Hawthorne Blvd<br> Redondo Beach, CA 90278",
      link: "/store/MapRedirector?storeId=06",
      cord: [33.86846, -118.35565],
    },
    "07": {
      name: "Menifee",
      address: "30251 Antelope Rd<br> Menifee, CA 92584",
      link: "/store/MapRedirector?storeId=07",
      cord: [33.681759, -117.169319],
    },
    "08": {
      name: "Vista",
      address: "1900 University Dr<br> Vista, CA 92083",
      link: "/store/MapRedirector?storeId=08",
      cord: [33.17137, -117.21879],
    },
    "09": {
      name: "Mission Valley",
      address: "8730 Rio San Diego<br> San Diego, CA 92108",
      link: "/store/MapRedirector?storeId=09",
      cord: [32.77623, -117.14286],
    },
    "10": {
      name: "Scottsdale",
      address: "16275 N Scottsdale Rd<br> Scottsdale, AZ 85260",
      link: "/store/MapRedirector?storeId=10",
      cord: [33.63324, -111.88978],
    },
    "11": {
      name: "Phoenix",
      address: "6600 W. Latham<br> Phoenix, AZ 85043",
      link: "/store/MapRedirector?storeId=11",
      cord: [33.46084, -112.15122],
    },
    "12": {
      name: "Huntington Beach",
      address: "6912 Edinger Ave<br> Huntington Beach, CA 92647",
      link: "/store/MapRedirector?storeId=12",
      cord: [33.72842, -118.00798],
    },
    "13": {
      name: "Mid City Los Angeles",
      address: "4801 Venice Blvd<br> Los Angeles, CA 90019",
      link: "/store/mapredirector?storeId=13",
      cord: [34.04669, -118.34202],
    },
    "14": {
      name: "Fremont",
      address: "49088 Fremont Blvd<br> Fremont, CA 94537",
      link: "/store/MapRedirector?storeId=14",
      cord: [37.45681, -121.92517],
    },
    "15": {
      name: "Gilbert",
      address: "2300 Santan Village Pkwy<br> Gilbert, AZ 85297",
      link: "/store/MapRedirector?storeId=15",
      cord: [33.3086, -111.74706],
    },
    "16": {
      name: "San Leandro",
      address: "250 Floresta Blvd<br> San Leandro, CA 94578",
      link: "/store/MapRedirector?storeId=16",
      cord: [37.70077, -122.14157],
    },
    "17": {
      name: "Glendale",
      address: "6767 W. Bell Road<br> Glendale, AZ 85308",
      link: "/store/MapRedirector?storeId=17",
      cord: [33.6364, -112.20401],
    },
    "18": {
      name: "Summerlin",
      address: "700 S. Rampart Blvd<br> Las Vegas, NV 89145",
      link: "/store/MapRedirector?storeId=18",
      cord: [36.16295, -115.28714],
    },
    "19": {
      name: "Millbrae",
      address: "855 Broadway<br> Millbrae, CA 94030",
      link: "/store/MapRedirector?storeId=19",
      cord: [37.60403, -122.39613],
    },
    "20": {
      name: "Pflugerville",
      address: "19024 N. Heatherwilde<br> Pflugerville, TX 78660",
      link: "/store/MapRedirector?storeId=20",
      cord: [30.48126, -97.61514],
    },
    "21": {
      name: "San Antonio",
      address: "4239 N Loop 1604 W.<br> San Antonio, TX 78249",
      link: "/store/MapRedirector?storeId=21",
      cord: [29.589896, -98.602126],
    },
    "22": {
      name: "Grand Prairie",
      address: "1514 Arkansas Ln.<br> Grand Prairie, TX 75051",
      link: "/store/mapredirector?storeId=22",
      cord: [32.72084, -97.04004],
    },
    "23": {
      name: "San Jose",
      address: "5540 Winfield Blvd.<br>  San Jose, CA 95123",
      link: "/store/mapredirector?storeId=23",
      cord: [37.25288, -121.86575],
    },
    "24": {
      name: "Roseville",
      address: "1851 Freedom Way<br> Roseville, CA 95678",
      link: "/store/mapredirector?storeId=24",
      cord: [38.7918, -121.2973],
    },
    "26": {
      name: "Frisco",
      address: "10900 St Hwy 121<br> Frisco, TX 75035",
      link: "/store/mapredirector?storeId=26",
      cord: [33.107, -96.7866],
    },
    "27": {
      name: "Fort Worth",
      address: "8460 Tehama Ridge Pkwy<br> Fort Worth, TX 76177",
      link: "/store/mapredirector?storeId=26",
      cord: [32.8959, -97.3235],
    },
    "88": {
      name: "Rancho Cucamonga",
      address: "12649 Foothill Blvd<br> Rancho Cucamonga, CA 91739",
      link: "/store/MapRedirector?storeId=88",
      cord: [34.10402, -117.5292],
    },
  };

  function hostedStoreFront() {
    if (
      $("#omniinventory .header-list .header-title strong")
        .text()
        .indexOf("Online") < 0
    ) {
      var strNumb = getURLParam("mhls"),
        notDisplay = true,
        updateCookie = $.cookie("lsf-my-store-id");
      if (strNumb.length == 1) strNumb = "0" + strNumb;
      updateStrNumbCookie(strNumb);
      $('span[itemprop="offers"]').append(
        '<meta itemprop="branchCode" content="' + strNumb + '">'
      );
      $("#displayedSoresModal .modal-body .list-unstyled li").each(function(
        data
      ) {
        if (
          $(this).text() == strObj[strNumb].name ||
          $("p:contains(Displayed at)")
            .children()
            .text() == strObj[strNumb].name
        ) {
          if (updateCookie !== strNumb) {
            $("#omniinventory > ul:nth-child(3) > li:contains(FREE)").remove();
          }
          $(".page-content").append(
            '<div class="modal fade" id="str_address_modal" tabindex="-1" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content text-center"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button> <div class="modal-header text-center"> <h4 class="modal-title">' +
              strObj[strNumb].name +
              ' Store Address</h4> </div> <div style="padding-bottom:1.6rem; class="modal-body"> <p class="store_address" style="font-size:2rem;">' +
              strObj[strNumb].address +
              '</p><a target="_blank" style="color:#bd5519; font-size:1.6rem; text-decoration:none;" href="' +
              strObj[strNumb].link +
              '">Directions &rsaquo;</a> </div> </div> </div></div>'
          );
          $("#omniinventory > ul:nth-child(3) > li:nth-child(1)").html(
            '<span class="fa fa-map-marker" aria-hidden="true"></span>On Display | See at <a href="javascript:void(0);" data-toggle="modal" data-target="#displayedSoresModal">more stores</a>'
          );
          $(
            '#omniinventory .header-list .header-title a[data-target="#myStoreModal"]'
          )
            .siblings("strong")
            .replaceWith(
              '<strong style="cursor:pointer" data-toggle="modal" data-target="#str_address_modal" role="button" tabindex="0" title="Click for Address">' +
                strObj[strNumb].name +
                "</strong>"
            );
          utag_data.site_type == "desktop"
            ? $("#app-footer .my-store .location").html(
                strObj[strNumb].name +
                  '<span aria-hidden="true" class="fa fa-angle-down"></span>'
              )
            : $("#app-footer .my-store .empty").html(strObj[strNumb].name);
          $(".my-store-holder .store").text(strObj[strNumb].name);
          $("#myStoreModal .form-control").replaceWith(deliveryOptionBuilder());
          $("#btn-set-my-store").replaceWith(
            '<button type="button" id="btn-link-to-store" class="btn primary-button"> Set as Your Store </button>'
          );
          sortDropdown();
          $("#str_select").prepend("<option selected>Select one</option>");
          notDisplay = false;
        }
      });
      if (notDisplay) {
        $(".page-content").append(
          '<div class="modal fade" id="str_address_modal" tabindex="-1" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content text-center"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button> <div class="modal-header text-center"> <h4 class="modal-title">' +
            strObj[strNumb].name +
            ' Store Address</h4> </div> <div style="padding-bottom:1.6rem;" class="modal-body"> <p style="font-size:2rem; class="store_address">' +
            strObj[strNumb].address +
            '</p><a target="_blank" style="color:#bd5519; font-size:1.6rem; text-decoration:none;" href="' +
            strObj[strNumb].link +
            '">Directions &rsaquo;</a> </div> </div> </div></div>'
        );
        $(
          '#omniinventory .header-list .header-title a[data-target="#myStoreModal"]'
        )
          .siblings("strong")
          .replaceWith(
            '<strong style="cursor:pointer" data-toggle="modal" data-target="#str_address_modal" role="button" tabindex="0" title="Click for Address">' +
              strObj[strNumb].name +
              "</strong>"
          );
        $("#omniinventory > ul:nth-child(3) > li:nth-child(1)").html(
          '<span class="fa fa-times" aria-hidden="true"></span>Not Displayed | View at <a href="javascript:void(0);" data-toggle="modal" data-target="#displayedSoresModal">other stores</a>'
        );
        utag_data.site_type == "desktop"
          ? $("#app-footer .my-store .location").html(
              strObj[strNumb].name +
                '<span aria-hidden="true" class="fa fa-angle-down"></span>'
            )
          : $("#app-footer .my-store .empty").html(strObj[strNumb].name);
        $(".my-store-holder .store").text(strObj[strNumb].name);
        $("#myStoreModal .form-control").replaceWith(deliveryOptionBuilder());
        $("#btn-set-my-store").replaceWith(
          '<button type="button" id="btn-link-to-store" class="btn primary-button"> Set as Your Store </button>'
        );
        sortDropdown();
        $("#str_select").prepend("<option selected>Select one</option>");
      }
    }
  }

  $("body").on("click", "#btn-link-to-store", function() {
    if (
      $("#str_select")
        .find(":selected")
        .attr("data-strNumb") !== undefined
    ) {
      updateStrNumbCookie(
        $("#str_select")
          .find(":selected")
          .attr("data-strNumb")
      );
      window.location.href = $("#str_select").val();
    }
  });

  function sortDropdown() {
    var options = $("#str_select option");
    var arr = options
      .map(function(_, o) {
        return {
          t: $(o).text(),
          v: o.value,
          d: $(o).attr("data-strNumb"),
        };
      })
      .get();
    arr.sort(function(o1, o2) {
      return o1.t > o2.t ? 1 : o1.t < o2.t ? -1 : 0;
    });
    options.each(function(i, o) {
      o.value = arr[i].v;
      $(o).text(arr[i].t);
      $(o).attr("data-strNumb", arr[i].d);
    });
  }

  function getURLParam(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split("&");
    for (var i = 0; i < sURLVariables.length; i++) {
      var sParameterName = sURLVariables[i].split("=");
      if (sParameterName[0] == sParam) return sParameterName[1];
    }
    return "";
  }

  function deliveryOptionBuilder() {
    var optionData = '<select id="str_select" class="form-control">';
    for (var key in strObj) {
      optionData +=
        '<option data-strNumb="' +
        key +
        '" value="' +
        window.location.pathname +
        "?mhls=" +
        key +
        '">' +
        strObj[key].name +
        "</option>";
    }
    optionData += "</select>";
    return optionData;
  }

  function updateStrNumbCookie(strNumber) {
    $.cookie("lsf-my-store-id", strNumber, {
      expires: 20 * 365,
      path: "/",
    });
  }
  if (sPageURL.indexOf("mhls") >= 0) {
    var checkStrInject = setInterval(function() {
      if (
        ($(".my-store-holder .store").text() !== "" &&
          utag_data.site_type == "desktop" &&
          $("#omniinventory").length > 0) ||
        ($("#app-footer .my-store .empty").text() !== "" &&
          utag_data.site_type == "mobile" &&
          $("#omniinventory").length > 0)
      ) {
        clearInterval(checkStrInject);
        hostedStoreFront();
        $(
          '#omniinventory .header-list .header-title a[data-target="#myStoreModal"]'
        )
          .siblings("strong")
          .keydown(function(e) {
            if (e.keyCode === 13) $(this).trigger("click");
          });
      }
    }, 500);
  }

  //temp fix - pivotal: 169785680 | jira: EPI-4091
  var omniCnt = 0;
  var checkOmniinventoryPopulate = setInterval(function() {
    if ($("#omniinventory .header-title").length) {
      clearInterval(checkOmniinventoryPopulate);
      if (
        !$(
          '#omniinventory .header-title strong:contains("Only Displayed Online")'
        ).length &&
        !$(
          '#omniinventory .list-unstyled li:contains("Not Displayed | View at")'
        ).length &&
        !$('#omniinventory .list-unstyled li:contains("On Display | See at ")')
          .length &&
        !$(
          '#omniinventory .list-unstyled li:contains("Not Displayed | Online Only")'
        ).length &&
        !$(
          '#omniinventory .list-unstyled li:contains("Not Displayed | Only Displayed Online")'
        ).length
      ) {
        $("#omniinventory .list-unstyled")
          .first()
          .prepend(
            '<li><span class="fa fa-times" aria-hidden="true"></span>Not Displayed | View at <a href="javascript:void(0);" class="more-stores" data-toggle="modal" data-target="#displayedSoresModal">other stores</a></li>'
          );
      }
      //TEMP SHELTER IN PLACE CODE
      //if ($('#omniinventory .list-unstyled li:contains("FREE store pickup")') && ("14|19|23|16|18|01|13|06|03|05|12|04|07|88|09|08|22|21|20".indexOf($.cookie('lsf-my-store-id')) > -1)) {
      /*if ($('#omniinventory .list-unstyled li:contains("FREE store pickup")')) {
				$('#omniinventory .list-unstyled li:contains("FREE store pickup")').html('<img src="/Content/images/assets/icon-pickup.png" class="not-in-store" role="presentation" alt="">FREE store pickup <span style="color:#b9170f">temporarily unavailable</span>');
			}*/

      //TEMP DC CLOSURE
      /*$('#omniinventory .list-unstyled li:contains("FREE pickup at Rialto")').html('<img src="/Content/images/assets/icon-pickup.png" class="not-in-store" role="presentation" alt="">FREE pickup at Rialto DC <span style="color:#b9170f">temporarily unavailable</span>');
			$('#omniinventory .list-unstyled li:contains("FREE pickup at Fremont DC")').html('<img src="/Content/images/assets/icon-pickup.png" class="not-in-store" role="presentation" alt="">FREE pickup at Fremont DC <span style="color:#b9170f">temporarily unavailable</span>');
			$('#omniinventory .list-unstyled li:contains("FREE pickup at Grand Prairie DC")').html('<img src="/Content/images/assets/icon-pickup.png" class="not-in-store" role="presentation" alt="">FREE pickup at Grand Prairie DC <span style="color:#b9170f">temporarily unavailable</span>');
			$('#omniinventory .list-unstyled li:contains("FREE pickup at Pflugerville DC")').html('<img src="/Content/images/assets/icon-pickup.png" class="not-in-store" role="presentation" alt="">FREE pickup at Pflugerville DC <span style="color:#b9170f">temporarily unavailable</span>');
			$('#omniinventory .list-unstyled li:contains("FREE pickup at Phoenix")').html('<img src="/Content/images/assets/icon-pickup.png" class="not-in-store" role="presentation" alt="">FREE pickup at Phoenix DC <span style="color:#b9170f">temporarily unavailable</span>');
			$('#omniinventory .list-unstyled li:contains("FREE pickup at Summerlin")').html('<img src="/Content/images/assets/icon-pickup.png" class="not-in-store" role="presentation" alt="">FREE pickup at Summerlin Dock <span style="color:#b9170f">temporarily unavailable</span>');*/

      //ACTIVATE FREE SHIPPING
      if (isFreeShippable()) {
        showThresholdShipping();
      }

      //TEMP FIX WORDING FOR FULL-SERVICE
      fixFullService();

      //HIDE STORE PICK UP FOR DROPSHIP ITEMS | EPI-4605
      dropshipHidePickup();

      // ADD RETURN POLICY LINK AND MODAL TO PDP - https://www.pivotaltracker.com/n/projects/840991
      addReturnPolicyModal();
    } else if (omniCnt > 14) {
      clearInterval(checkOmniinventoryPopulate);
    }
    omniCnt++;
  }, 500);

  /* ESX164 - FREE SHIPPING A/B TEST */
  /*function activateESX164() {
		window['optimizely'] = window['optimizely'] || [];
		window['optimizely'].push({
			type: "page",
			pageName: "ESX164_Activate"
		});
		//console.log("~~~optimizelyESX164() launched");
	}*/

  function injectThresholdMsg(showBool) {
    if (showBool) {
      //activateESX164();
      $("#omni_shipping > ul").prepend(
        '<li id="threshold_ship_msg"><span><i class="fa fa-truck" aria-hidden="true"></i></span>Free Shipping on Orders Over $500 <a href="/company/shipping-faqs" class="fa fa-question-circle question" target="_blank"><span class="sr-only">Click for free shipping details</span></a></li>'
      );
    }
  }

  function setThresholdShipping() {
    var tsZip =
      $.cookie("lsf-selected-zip-code") !== undefined
        ? $.cookie("lsf-selected-zip-code")
        : $.cookie("lsf-autodetected-zip-code");
    var tsShow = false;

    window.$.ajax({
      method: "POST",
      url:
        "https://www.livingspaces.com/API/DeliveryOptionsConsumableApi/GetDeliveryOptionsLight?zipCode=" +
        tsZip,
      error: function() {
        console.log("Problem with the delivery options API.");
      },
    }).done(function(data) {
      //console.dir(data)
      if (data.deliveryOptions !== undefined) {
        tsShow = data.deliveryOptions.isFreeThresholdShippingAvailable;
      }
      var tsObj = {
        zip: tsZip,
        show: tsShow,
      };
      $.cookie("lsf-show-threshold-shipping", JSON.stringify(tsObj), {
        expires: 2 * 365,
        path: "/",
      });

      injectThresholdMsg(tsShow);
    });
  }

  function showThresholdShipping() {
    var tsCookie = $.cookie("lsf-show-threshold-shipping");

    if (tsCookie === undefined || tsCookie === "") {
      setThresholdShipping();
    } else {
      var tsObj = JSON.parse(tsCookie);
      var cookieZip =
        $.cookie("lsf-selected-zip-code") !== undefined
          ? $.cookie("lsf-selected-zip-code")
          : $.cookie("lsf-autodetected-zip-code");

      if (cookieZip !== tsObj.zip) {
        setThresholdShipping();
      } else {
        injectThresholdMsg(tsObj.show);
      }
    }
  }

  function dropshipHidePickup() {
    if (
      $("#omni_shipping:contains('FREE Parcel Shipping available')").length >
        0 &&
      $("#omni_store_details:contains('FREE store pickup')").length > 0
    ) {
      $("#omni_store_details li:contains('FREE store pickup')").hide();
    }
  }

  // Adds return policy modal to PDP
  var addReturnPolicyModal = function addReturnPolicyModal() {
    try {
      var linkSelector =
        "#omniInventoryHeader > .not-in-store > .header-title > a";
      var link = document.querySelector(linkSelector);
      link.attributes.href = "#";
      link.textContent = "Return Policy";
      document.addEventListener("click", function(e) {
        if (e.target.closest(linkSelector)) {
          e.preventDefault();
          $("#ReturnPolicyModal").modal();
        }
      });
      document
        .querySelector("body")
        .insertAdjacentHTML(
          "beforeend",
          '<style> #ReturnPolicyModal img { margin: auto; max-width: 5rem; } #ReturnPolicyModal p { text-align: center; margin-top: 2rem; margin-bottom: 4rem; } #ReturnPolicyModal ul { position: relative; margin-top: 1rem; margin-bottom: 0; } #ReturnPolicyModal li { font-size: 1.8rem; color: #333; font-family: "Source Sans Pro", sans-serif; text-align: left; } #ReturnPolicyModal .modal-dialog .modal-header { padding: 4.6rem 0 0; } </style> <div class="modal fade" id="ReturnPolicyModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" > <div class="modal-dialog" role="document"> <div class="modal-content"> <button type="button" class="close" data-dismiss="modal" aria-label="Close" > <span aria-hidden="true">\xD7</span> </button> <div class="modal-header text-center"> <img src="/globalassets/images/LP/2020/08/return150x150.png" class="img-responsive" /> <h4 class="modal-title">Return Policy</h4> </div> <div class="modal-body"> <ul class="pickup-list"> <li> Living Spaces accepts returns within seven (7) days of your receipt of an item </li> <li> You will be charged a 10% restocking fee on all regular stock furniture returns. </li> <li> Living spaces does not charge a restock fee on accessories such as area rugs, lamps, wall art, silk, trees, florals, and table and ledge accessories. </li> <li> Returns are not accepted on Special Order items or as-is marked items. </li> <li> Returns are not accepted on sleep pillows, comforter sets, or other bedding products </li> <li> Living Spaces does not accept returns on mattresses or box springs that do not qualify for a sleep trial* </li> </ul> <p> For more information see our <a style="display: inline-block; text-decoration: underline;" href="/company/store-policies" >Store Policies Page &rsaquo;</a > </p> </div> </div> </div> </div>'
        );
    } catch (error) {}
  };

  function fixFullService() {
    if (
      $('#omni_shipping > .list-unstyled li li:contains("Get unlimited items")')
        .length > 0
    ) {
      $('#omni_shipping > .list-unstyled li li:contains("Get unlimited items")')
        .unwrap()
        .unwrap();
    }

    var $listItem = $('#omni_shipping .list-unstyled li:contains("for $")');

    if ($listItem.length > 0) {
      var ogMsg = $listItem.html();
      var priceIndex = ogMsg.indexOf("$");
      var aTagIndex = ogMsg.indexOf("<a");
      var priceText = ogMsg.substring(priceIndex, aTagIndex).trim();

      //if (priceText === "$119" || priceText === "$139") priceText = "$99";
      //COLOR VARIANTS
      $("#omni_shipping ul ul.customize-mess").css("margin-left", "inherit");

      var shipRange =
        $(
          '#omni_shipping .list-unstyled li:contains("Get unlimited items delivered") ul'
        ).length > 0
          ? $(
              '#omni_shipping .list-unstyled li:contains("Get unlimited items delivered") ul'
            )
              .clone()
              .wrap("<p/>")
              .parent()
              .html()
          : $(
              '#omni_shipping .list-unstyled li:contains("Get unlimited items delivered") .customize-mess'
            )
              .clone()
              .wrap("<p/>")
              .parent()
              .html();

      var temp99 =
        '<span><img src="/Content/images/assets/icon-full-service.png"></span>Full-service delivery of unlimited items for ' +
        priceText +
        ' <a href="#" class="fa fa-question-circle question" data-target="#homeDeliveryModal" data-toggle="modal" style="max-width: 1.4rem"><span class="sr-only">Click for more in-home delivery details</span></a>' +
        shipRange;
      $listItem.html(temp99);
    }
  }
  function isFreeShippable() {
    if ($('#omni_shipping .list-unstyled li:contains("FREE")').length < 1) {
      if (typeof utag_data.category_id !== undefined) {
        var catList =
          "bedroom|youth|outdoor furniture|upholstery|dining|occasional tables|accents|home office|entertainment|mattresses|box springs/foundations";
        if (catList.indexOf(utag_data.category_id) > -1) {
          return true;
        }
      }
    }

    return false;
  }
});
