let spacing = '';

if (utag_data.site_type == 'mobile') {
  spacing = '&nbsp;';
}

// selector
const sku = $('.breadcrumb-wrapper span:last-child').text();
const pdpMod = `<span></span><span itemprop='itemListElement' itemscope='' itemtype='http://schema.org/ListItem'><a href='javascript:void(0);' class='selected'>${
  spacing
}SKU: ${
  sku
}</a><meta itemprop='item' content='https://www.livingspaces.com/pdp-turdur-sofa-223508'><meta itemprop='name' content='223508'><meta itemprop='position' content='5'></span>`;

$('.breadcrumb-wrapper span:last-child').remove();
$('.breadcrumb-wrapper span:last-child').append(pdpMod);
