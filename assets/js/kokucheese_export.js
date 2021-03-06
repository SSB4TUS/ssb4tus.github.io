var targets = [
  '[data-ga-event-category="pure_ads_sp"]',
  '[data-role="footer"][data-theme="a"]',
  '[data-role="footer"] li:nth-child(2)',
  '[data-role="footer"] li:nth-child(3)',
  '[data-role="content"] [data-role="listview"]:nth-child(5)',
  '[data-role="content"] [data-role="listview"]:nth-child(6)',
];
var $removeTarget = $(targets.join());

var registerButtonPC = '<a href="https://ssl.kokucheese.com/event/entry/429832/"><div class="register-button"></div></a>';
var registerButtonSP = '<a href="https://ssl.kokucheese.com/s/event/entry/429832/"><div class="register-button"></div></a>'

function jQueryMain() {
  $removeTarget.remove();
  var isSP = !!location.href.match(/^(http:\/\/kokucheese.com\/s)(.*)/);
  var insertHtml = isSP ? registerButtonSP : registerButtonPC;
  $('.register-target').append(insertHtml);
}

$(jQueryMain);
