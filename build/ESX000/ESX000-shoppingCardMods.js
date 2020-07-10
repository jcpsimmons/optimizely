var shoppingCartModifications = function shoppingCartModifications() {
  var MOBILE = !!document.querySelectorAll(".ls-t-mobile").length;
  var button = document.querySelector("#shippingVersusFullDelivery button.close");
  button.style.display = "flex";
  button.style.alignItems = "center";
  button.querySelector("span").style.display = "block";
  button.querySelector("span").insertAdjacentHTML("beforebegin", "<span style=\"font-size: 2.2rem; margin-right: 1rem; display: block;\" aria-hidden=\"true\">CLOSE</span>");
  var desktopLinkHtml = "<style> #VideoLinkContainer { background: #fff; } #VideoLink { display: flex; justify-content: space-between; align-items: center; } #VideoLink > div { margin: auto; } #VideoLink img { max-width: 5rem; border: none !important; } #VideoLink span { color: #00699a; font-weight: 600; font-size: 1.4rem; white-space: nowrap; } /* VIDEO MODAL */ #modal-video .modal-backdrop.in { filter: alpha(opacity=7); opacity: 0.7; } #modal-video .modal-header { padding: 25px 25px 15px 25px; text-align: right; } #modal-video .modal-header, #modal-video .modal-footer { border: 0; } #modal-video .modal-header .close { float: none; text-shadow: none; color: #fff !important; opacity: 1 !important; font-weight: 400 !important; font-size: 3rem !important; margin-top: 2.6rem !important; margin-right: 1.4rem !important; position: absolute !important; right: 0 !important; top: 0 !important; z-index: 9 !important; border-radius: 30rem !important; background: #100f0f !important; width: 3rem !important; height: 3rem !important; } #modal-video .modal-body { padding: 0 2.5rem 2.5rem 2.5rem; } #modal-video .modal-content { background: none; border: 0; -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0; -moz-box-shadow: none; -webkit-box-shadow: none; box-shadow: none; } </style> <tr id=\"VideoLinkContainer\"> <td></td> <td></td> <td> <a class=\"playVideo\" data-toggle=\"modal\" data-target=\"#modal-video\" data-theVideo=\"https://www.youtube.com/embed/JY9kQZCIFas\" role=\"button\" aria-label=\"Click to Watch the delivery video\" href=\"\" alt=\"Click to watch the delivery video\" > <div id=\"VideoLink\"> <div> <img src=\"/globalassets/images/lp/2020/07/play-video-icon.jpg\" alt=\"Click to play the video.\" class=\"img-responsive\" /> </div> <div><span>Watch Video About Free Shipping Limitations</span></div> </div> </a> </td> </tr>";
  var mobileLinkHtml = "<style> #VideoLinkContainer { background: #fff; margin-bottom: 1rem; } #VideoLink { display: flex; justify-content: center; } #VideoLink > div { margin: auto 0; } #VideoLink img { max-width: 5rem; border: none !important; } #VideoLink span { color: #00699a; font-weight: 600; font-size: 1.4rem; white-space: nowrap; } /* VIDEO MODAL */ #modal-video .modal-backdrop.in { filter: alpha(opacity=7); opacity: 0.7; } #modal-video .modal-header { padding: 25px 25px 15px 25px; text-align: right; } #modal-video .modal-header, #modal-video .modal-footer { border: 0; } #modal-video .modal-header .close { float: none; text-shadow: none; color: #fff !important; opacity: 1 !important; font-weight: 400 !important; font-size: 3rem !important; margin-top: 2.6rem !important; margin-right: 1.4rem !important; position: absolute !important; right: 0 !important; top: 0 !important; z-index: 9 !important; border-radius: 30rem !important; background: #100f0f !important; width: 3rem !important; height: 3rem !important; } #modal-video .modal-body { padding: 0 2.5rem 2.5rem 2.5rem; } #modal-video .modal-content { background: none; border: 0; -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0; -moz-box-shadow: none; -webkit-box-shadow: none; box-shadow: none; } #shippingVersusFullDelivery table { margin-bottom: 1rem!important; } </style> <div id=\"VideoLinkContainer\"> <a class=\"playVideo\" data-toggle=\"modal\" data-target=\"#modal-video\" data-theVideo=\"https://www.youtube.com/embed/JY9kQZCIFas\" role=\"button\" aria-label=\"Click to Watch the delivery video\" href=\"\" alt=\"Click to watch the delivery video\" > <div id=\"VideoLink\"> <div> <img src=\"/globalassets/images/lp/2020/07/play-video-icon.jpg\" alt=\"Click to play the video.\" class=\"img-responsive\" /> </div> <div><span>Watch Video About Free Shipping Limitations</span></div> </div> </a> </div> ";
  var modalHtml = "<div class=\"modal fade\" id=\"modal-video\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-video-label\" > <div class=\"modal-dialog\" role=\"document\"> <div class=\"modal-content\"> <div class=\"modal-header\"> <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" > <span aria-hidden=\"true\">&times;</span> </button> </div> <div class=\"modal-body\"> <div class=\"modal-video\"> <div class=\"embed-responsive embed-responsive-16by9\"> <iframe id=\"main-Video\" class=\"embed-responsive-item\" width=\"1170\" src=\"\" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe> </div> </div> </div> </div> </div> </div>";

  if (MOBILE) {
    document.querySelector("#shippingVersusFullDelivery table").insertAdjacentHTML("afterend", mobileLinkHtml);
  } else {
    document.querySelector("#shippingVersusFullDelivery table > tfoot > tr").insertAdjacentHTML("afterend", desktopLinkHtml);
  }

  document.querySelector("body").insertAdjacentHTML("beforeend", modalHtml);

  function waitForjQuery($) {
    var trigger = $("body").find('#VideoLinkContainer [data-toggle="modal"].playVideo');
    trigger.click(function () {
      var theModal = $(this).data("target"),
          videoSRC = $(this).attr("data-theVideo"),
          videoSRCauto = videoSRC + "?rel=0&vq=1080&controls=1&autoplay=1&modestbranding=1&showinfo=0";
      $(theModal + " iframe").attr("src", videoSRCauto);
      $(theModal + " button.close").click(function () {
        $(theModal + " iframe").attr("src", videoSRC);
      });
      $("#modal-video").on("hidden.bs.modal", function (e) {
        $("body").addClass("modal-open");
        $(theModal + " iframe").attr("src", videoSRC);

        if (MOBILE) {
          window.onscroll = function () {};

          document.querySelector(".modal-backdrop.fade.in").style.zIndex = 0;
        }
      });
    });
    $("#shippingVersusFullDelivery > .modal-dialog > .modal-content > button.close").click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      $("#shippingVersusFullDelivery").modal("hide");
    });
    $("#modal-video > .modal-dialog > .modal-content > .modal-header > button").click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      $("#modal-video").modal("hide");
    });

    if (MOBILE) {
      $("#modal-video").on("show.bs.modal", function (e) {
        $("#modal-video").css("z-index", 1051);
        document.querySelector(".modal-backdrop.fade.in").style.zIndex = 1050;

        window.onscroll = function () {
          window.scrollTo(0, 0);
        };
      });
      $("body").addClass("modal-open");
    } else {
      $(document).on("show.bs.modal", ".modal", function () {
        var zIndex = 1040 + 10 * $(".modal:visible").length;
        $(this).css("z-index", zIndex);
        setTimeout(function () {
          $(".modal-backdrop").not(".modal-stack").css("z-index", zIndex - 1).addClass("modal-stack");
        }, 0);
      });
    }
  }

  var anotherInterval = setInterval(function () {
    if (window.jQuery) {
      clearInterval(anotherInterval);
      waitForjQuery(window.jQuery);
    }
  }, 50);
};

if (document.readyState === "complete") {
  shoppingCartModifications();
} else {
  document.addEventListener("DOMContentLoaded", shoppingCartModifications);
}