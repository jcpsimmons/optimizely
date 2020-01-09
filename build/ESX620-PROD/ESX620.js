var anotherInterval = setInterval(function () {
  if (typeof window.jQuery !== 'undefined') {
    clearInterval(anotherInterval);
    var holidayHours = '<div class="container holidaySH"> <div class="header"> <h2>Holiday Hours</h2> </div> <div class="row"> <div class="col-xs-12 mobileCol"> <div class="row"> <div class="col-xs-6 vBorder padRight"> <ul class="col1"> <li><span>Dec 11<sup>th</sup> (wed)</span>10am - 5pm</li> <li><span>Dec 24<sup>th</sup> (mon)</span>10am - 5pm</li> <li class="goldBG"><span>Christmas Day</span>Closed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </li> </ul> </div> <div class="col-xs-6 padLeft xmasTree"> <ul class="col2"> <li><span>Dec 26<sup>th</sup> (wed)</span>8am - 9pm</li> <li><span>Dec 31<sup>th</sup> (mon)</span>10am - 7pm</li> </ul> </div> </div> </div> </div> </div>';
    $('.page').before(holidayHours);
  }
}, 50);