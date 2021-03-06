$(document).ready(function() {
  document
    .querySelector("head")
    .insertAdjacentHTML(
      "beforeend",
      "<style> #ShopByDepartmentLabelOptimizely { -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important; -o-transform: none !important; -moz-transform: none !important; -ms-transform: none !important; -webkit-transform: none !important; transform: none !important; box-shadow: none !important;} #ShopByDepartmentLabelOptimizely p { font-weight: 700; font-size: 2rem; white-space: normal !important; text-align: left; } </style>"
    );

  document.getElementById("CategoryTiles").outerHTML =
    '<div id="CategoryTiles"> <h2>Shop by Department</h2> <div class="flex-row"> <div class="flex-item" id="ShopByDepartmentLabelOptimizely"> <p>Shop by Department</p> </div> <a href="/departments/furniture/living-room"> <div class="flex-item"> <img src="/globalassets/images/home/2020/03/Living320x228.jpg" alt="Living Room" class="img-responsive" /> <p>Living Room</p> </div> </a> <a href="/departments/furniture/home-office"> <div class="flex-item"> <img src="/globalassets/images/home/2020/03/Office320x228.jpg?v=1" alt="Home Office" class="img-responsive" /> <p>Home Office</p> </div></a > <a href="/departments/furniture/dining-room"> <div class="flex-item"> <img src="/globalassets/images/home/2020/03/dining320x228.jpg" alt="Dining Room" class="img-responsive" /> <p>Dining Room</p> </div></a > <a href="/departments/furniture/bedroom"> <div class="flex-item"> <img src="/globalassets/images/home/2020/03/bed320x228.jpg" alt="Bedroom" class="img-responsive" /> <p>Bedroom</p> </div></a > <a href="/departments/mattresses"> <div class="flex-item"> <img src="/globalassets/images/home/2020/03/mattress320x228.jpg" alt="Mattresses" class="img-responsive" /> <p>Mattresses</p> </div></a > </div> <div class="flex-row"> <a href="/departments/outdoor"> <div class="flex-item"> <img src="/globalassets/images/home/2020/03/outdoor320x228.jpg" alt="Outdoor" class="img-responsive" /> <p>Outdoor</p> </div></a > <a href="/departments/kids"> <div class="flex-item"> <img src="/globalassets/images/home/2020/03/kids320x228.jpg" alt="Kids and Teens" class="img-responsive" /> <p>Kids + Teens</p> </div></a > <a href="/departments/elements"> <div class="flex-item"> <img src="/globalassets/images/home/2020/03/elements320x228.jpg" alt="elements" class="img-responsive" /> <p>elements</p> </div></a > <a href="/departments/rugs"> <div class="flex-item"> <img src="/globalassets/images/home/2020/03/rug320x228.jpg" alt="Rugs" class="img-responsive" /> <p>Rugs</p> </div></a > <a href="/departments/home-decor"> <div class="flex-item"> <img src="/globalassets/images/home/2020/03/pillows320x228.jpg" alt="Decor and Pillows" class="img-responsive" /> <p>Decor + Pillows</p> </div></a > <a href="/departments/wall-art"> <div class="flex-item"> <img src="/globalassets/images/home/2020/03/wallart320x228.jpg" alt="Wall Art" class="img-responsive" /> <p>Wall Art</p> </div></a > </div> <div class="flex-row"> <a href="/inspiration/celebrity-designer/magnolia-home"> <div class="flex-item img-fill magnolia-img lower-third-text"></div ></a> <a href="/inspiration/celebrity-designer/nate-berkus-and-jeremiah-brent/furniture" > <div class="flex-item img-fill nj-img lower-third-text"></div ></a> <a href="/departments/featured/new-arrivals"> <div class="flex-item"> <img src="/globalassets/images/home/2020/03/new320x228.jpg" alt="New Items" class="img-responsive" /> <p>New Items</p> </div></a > <a href="/departments/custom-upholstery"> <div class="flex-item"> <img src="/globalassets/images/home/2020/03/SO-320x228.png" alt="Custom Fabrics" class="img-responsive" /> <p>Custom Fabrics</p> </div></a > <a href="/clearance/outlet"> <div class="flex-item img-fill outlet-image"></div ></a> <a href="/clearance"> <div class="flex-item img-fill clearance-image"></div ></a> </div> </div>';

  // variation 3 tracking
  document
    .getElementById("ShopByDepartmentLabelOptimizely")
    .addEventListener("click", function() {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "shopByDepartment",
        tags: {
          revenue: 0, // Optional in cents as integer (500 == $5.00)
          value: 0.0 // Optional as float
        }
      });
    });
});
