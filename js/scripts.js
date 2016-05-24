jQuery(function() {
  var $homer = $('.homer');
  var walkRightInterval;
  var walkRightSensor = false;
  var walkLeftInterval;
  var walkLeftSensor = false;
  bw.turnOn();
  
  bw.down(['right'], function() {
    $homer.removeClass('homer--looks-left')
          .removeClass('homer--walks-to-left')
          .addClass('homer--walks-to-right');

    if (walkRightSensor) return;

    walkRightSensor = true;
    walkRightInterval = setInterval(function() {
      if (parseFloat($homer.css('left')) > 886) return;
      $homer.css('left', function(i, value) {return parseFloat(value) + 4; });
    }, 20)
  });

  bw.up(['right'], function() {
    clearInterval(walkRightInterval);
    walkRightSensor = false;
    $homer.removeClass('homer--walks-to-right');
  });


  bw.down(['left'], function() {
    $homer.addClass('homer--looks-left')
          .addClass('homer--walks-to-left');

    if (walkLeftSensor) return;

    walkLeftSensor = true;
    walkLeftInterval = setInterval(function() {
      if (parseFloat($homer.css('left')) < 4) return;
      $homer.css('left', function(i, value) {return parseFloat(value) - 4; });
    }, 20)
  });

  bw.up(['left'], function() {
    clearInterval(walkLeftInterval);
    walkLeftSensor = false;
    $homer.removeClass('homer--walks-to-left');
  });

  bw.down(['ctrl'], function() {
    var homerWalks = $homer.hasClass('homer--walks-to-left') || $homer.hasClass('homer--walks-to-right');
    if (!homerWalks) {
      if ($homer.hasClass('homer--looks-left')) {
        $homer.addClass('homer--walks-to-left');
      } else {
        $homer.addClass('homer--walks-to-right');
      }
    }

    $homer.addClass('homer--jumps');
    setTimeout(function() {
      $homer.removeClass('homer--jumps');
      if (!homerWalks) {
        $homer.removeClass('homer--walks-to-right')
              .removeClass('homer--walks-to-left');
      }
    }, 400)
  });

  bw.combo(['j', 'k', 'l'], function() {
    $homer.toggleClass('homer-on-the-top');

    if ($homer.hasClass('homer--looks-left')) {
      $homer.addClass('homer--walks-to-left');
    } else {
      $homer.addClass('homer--walks-to-right');
    }

    setTimeout(function() {
        $homer.removeClass('homer--walks-to-right')
              .removeClass('homer--walks-to-left');
    }, 400)
  });

  bw.write('jQuery', function() {
    var $hiddenBlock = $('.about-my-plugin__text--hidden-block');
    $hiddenBlock.show();
    setTimeout(function() {
      $hiddenBlock.hide();
    }, 1000);
  });
});