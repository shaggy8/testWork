jQuery(function() {
  bw.init();
  bw.action(['f'], function() {console.log('fuck!')});
  bw.combo(['j', 'q'], function() {console.log('fuck!')});
});