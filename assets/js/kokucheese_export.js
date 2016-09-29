var targets = [
  '[data-ga-event-category="pure_ads_sp"]',
  '[data-role="footer"][data-theme="a"]',
  '[data-role="footer"] li:nth-child(2)',
  '[data-role="footer"] li:nth-child(3)',
  '[data-role="content"] [data-role="listview"]:nth-child(5)',
  '[data-role="content"] [data-role="listview"]:nth-child(6)',
];
var $removeTarget = $(targets.join());

var html = '<a href="https://ssl.kokucheese.com/event/entry/429832/"><input type="button" class="register-button" value="今すぐ理科ブラ6に参加登録する！"></a>';

function jQueryMain() {
  $removeTarget.remove();
  $('.register-target').append(html);
}

$(jQueryMain);
