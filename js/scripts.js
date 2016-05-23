jQuery(function() {
  bw.turnOn();
  
  bw.down(['right'], function() {
    var $homer = $('.homer');

    if (parseFloat($homer.css('left')) > 880) return;

    $('.homer').css('left', function(i, value) {return parseFloat(value) + 3; })
               .addClass('homer--walks');
  });
  bw.up(['right'], function() {
    var $homer = $('.homer');

    if (parseFloat($homer.css('left')) > 880) {
      $homer.css('left', 0);
    }

    $('.homer').removeClass('homer--walks');
  });

  bw.press(['ю'], function() {console.log('fuuuuuuck!')});
  bw.press(['ю']);
  bw.sequenceCombo('roma'.split(''), function() {console.log('fuuuuuuck!')});
  bw.sequenceCombo('roma'.split(''));
  bw.write('Настя', function() {console.log('fine!')});
});