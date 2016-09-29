var targets = [
  '[data-ga-event-category="pure_ads_sp"]',
  '[data-role="footer"][data-theme="a"]',
  '[data-role="footer"] li:nth-child(2)',
  '[data-role="footer"] li:nth-child(3)',
  '[data-role="content"] [data-role="listview"]:nth-child(5)',
  '[data-role="content"] [data-role="listview"]:nth-child(6)',
];
var $removeTarget = $(targets.join());
function jQueryMain() {
  $removeTarget.remove();
}
$(jQueryMain);
