const handlerFunction = () => {// PRE_INIT ZIPCODE DATA

  // Range generator helper fcn
  function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }

  // ZIP CODE DATA
  const zipCodes = {
    california: {
      bayArea: {
        codes: [94151, 94159, 94158, 94102, 94104, 94103, 94105, 94188, 94108, 94177, 94107, 94110, 94109, 94112, 94111, 94115, 94114, 94117, 94116, 94118, 94121, 94123, 94122, 94124, 94127, 94126, 94129, 94131, 94130, 94133, 94132, 94134, 94139, 94143, 94903, 94901, 94904, 94920, 94925, 94924, 94929, 94930, 94937, 94933, 94939, 94938, 94941, 94940, 94947, 94946, 94949, 94948, 94950, 94957, 94956, 94963, 94960, 94965, 94964, 94970, 94971, 94973, 94063, 94062, 94065, 94066, 94070, 94080, 94074, 94002, 94010, 94005, 94014, 94015, 94018, 94401, 94020, 94403, 94019, 94402, 94021, 94404, 94025, 94027, 94030, 94038, 94037, 94044, 94061, 94060, 95010, 95060, 95018, 95062, 95017, 95065, 95064, 95019, 95066, 95073, 95041, 95003, 95005, 95007, 94588, 94587, 94601, 94603, 94602, 94605, 94607, 94606, 94609, 94608, 94611, 94610, 94613, 94612, 94618, 94619, 94621, 94660, 94661, 94701, 94703, 94702, 94501, 94705, 94704, 94707, 94502, 94706, 94709, 94708, 94710, 94720, 94514, 94536, 94538, 94540, 94539, 94542, 94541, 94544, 94546, 94545, 94552, 94551, 94555, 94560, 95377, 94566, 94568, 94577, 95391, 94579, 94578, 94580, 94586, 94596, 94595, 94598, 94597, 94507, 94506, 94509, 94801, 94511, 94803, 94513, 94802, 94805, 94804, 94807, 94517, 94516, 94806, 94519, 94518, 94521, 94520, 94523, 94525, 94526, 94505, 94528, 94531, 94530, 94548, 94547, 94549, 94553, 94556, 94561, 94563, 94565, 94564, 94569, 94572, 94583, 94582],
        location: 'Fremont, CA 94538'
      },
      full: {
        codes: range(90001, 96162),
        location: 'Rialto, CA 92324'
      }
    },
    arizona: {
      full: {
        codes: range(85001, 86556),
        location: 'Phoenix, AZ 85043'
      }
    },
    texas: {
      austin: {
        codes: [78944, 77452, 78950, 77418, 78931, 77474, 77473, 78933, 78002, 78015, 78023, 78039, 78069, 78073, 78101, 78108, 78109, 78112, 78124, 78150, 78148, 78152, 78154, 78163, 78201, 78203, 78202, 78205, 78204, 78207, 78206, 78209, 78208, 78211, 78210, 78213, 78212, 78215, 78214, 78217, 78216, 78219, 78218, 78221, 78220, 78223, 78222, 78225, 78224, 78227, 78226, 78229, 78228, 78231, 78230, 78233, 78232, 78235, 78234, 78237, 78236, 78239, 78238, 78240, 78243, 78242, 78245, 78244, 78247, 78249, 78248, 78251, 78250, 78253, 78252, 78255, 78254, 78257, 78256, 78259, 78258, 78261, 78260, 78263, 78265, 78264, 78266, 78280, 78284, 78288, 78297],
        location: "Pflugerville, TX 78660"
      },
      dallas: {
        codes: [75019, 75039, 75038, 75041, 75040, 75043, 75042, 75044, 75047, 75048, 75051, 75050, 75052, 75054, 75061, 75060, 75063, 75062, 75080, 75082, 75081, 75089, 75088, 75099, 75104, 75115, 75116, 75125, 75134, 75137, 75141, 75146, 75150, 75149, 75154, 75159, 75172, 75181, 75180, 75182, 75202, 75201, 75204, 75203, 75206, 75205, 75208, 75207, 75210, 75209, 75212, 75211, 75215, 75214, 75217, 75216, 75219, 75218, 75220, 75223, 75222, 75225, 75224, 75227, 75226, 75229, 75228, 75231, 75230, 75233, 75232, 75235, 75234, 75237, 75236, 75238, 75241, 75240, 75243, 75242, 75244, 75247, 75246, 75249, 75248, 75251, 75253, 75254, 75275, 75283, 75284, 75326, 75001, 75390, 75006, 75007, 75397, 75015],
        location: "Grand Prairie, TX 75051"
      }
    }
  }

  // END ZIPCODE DATA
  const desktopSite = window.utag_data.site_type == 'desktop'
  const viewYourOptions = desktopSite ? document.querySelector('.search-form-container button') : document.getElementById('searchStoreButton')
  const zipCodeBox = document.getElementById('cityOrZipCodeInput')
  const injectionPoint = document.getElementById('delivery-options-caption-container')

  const makeNode = (html) => {
    return document.createRange().createContextualFragment(html);
  }


  viewYourOptions.addEventListener('click', () => {
    window['optimizely'] = window['optimizely'] || [];
    window['optimizely'].push({
      type: "event",
      eventName: "clickVYO",
      tags: {
        revenue: 0, // Optional in cents as integer (500 == $5.00)
        value: 0.00 // Optional as float
      }
    });

    console.log('clickevent')
    curZip = + zipCodeBox.value

    let place = false
    let stateNames = Object.keys(zipCodes);
    let areaNames;
    for (var i = 0; i < stateNames.length; i++) {
      if (place) {
        break
      }
      areaNames = Object.keys(zipCodes[stateNames[i]])
      for (var t = 0; t < areaNames.length; t++) {
        var curItem = zipCodes[stateNames[i]][areaNames[t]]
        if (curItem.codes.includes(curZip)) {
          place = curItem.location
          break
        } else {
          place = false
        }
      }

      // Need to pause for update
      setTimeout(() => {
        console.log(place)
        // Set up in the if statement, edit it in the else statement
        if (!document.getElementById('ShippingFromContainer')) {
          console.log('cond 1')
          if (place) { injectionPoint.parentNode.before(makeNode(`<div class="col-xs-12" id="ShippingFromContainer" style="${desktopSite ? "margin-top:2rem;" : "text-align:center"}"><span style="font-size:${desktopSite ? "1.6rem" : "1.5rem"};">Ships from: ${place}</span></div>`)) }
        } else {
          console.log('cond 2')
          if (place) {
            document.querySelector('#ShippingFromContainer span').textContent = `Ships from: ${place}`
            document.getElementById('ShippingFromContainer').style.display = 'block'
          } else {
            document.getElementById('ShippingFromContainer').style.display = 'none'
          }

        }

      }, 1000)
    }
  }, false)

}


var anotherInterval = setInterval(() => {
  if (typeof window.utag_data !== 'undefined' && document.readyState == 'complete' && (document.querySelector('.search-form-container button') || document.getElementById('searchStoreButton'))) {
    clearInterval(anotherInterval);
    handlerFunction()
  }
}, 50);




