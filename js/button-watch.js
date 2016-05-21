(function() {

  this.buttonWatch = this.bw = {

    init: function() {
        document.addEventListener('keydown', this._downResponse);
        document.addEventListener('keyup', this._upResponse);
    },

    _oneButtonAction: {},
    _comboAction: [],
    _pressed: {},

    _downResponse: function(event) {
        var code = event.keyCode;

        for (var key in bw._oneButtonAction) {
          if (key == code) {
            bw._oneButtonAction[code](event);
          }
        }

        bw._pressed[code] = true;
    },

    _upResponse: function(event) {
        var code = event.keyCode;
        delete bw._pressed[code];
    },

    action: function(buttons, action) {
        var self = this;
        var codes = self._findCode(buttons);

        codes.forEach(function(code) {

          if (Array.isArray(code) && action) {

              code.forEach(function(x) {
                self._oneButtonAction[x] = action;
              });

          } else if (action) {
              self._oneButtonAction[code] = action;

          } else if (Array.isArray(code) && !action) {

              code.forEach(function(x) {
                delete self._oneButtonAction[x];
              });

          } else if (!action) {
              delete self._oneButtonAction[code];
          }
        });
    },

    combo: function(buttons, action) {
        var self = this;
        var codes = self._findCode(buttons);

        if (action) {

          self._comboAction.push({
            'combo': codes,
            'action': action
          });

        } else {
          //if array «codes» contains arrays then in «mergedArr» they all merged in one array
          var mergedArr = codes.join('|').split(',').join('|').split('|').map(function(x) {return +x});
          for (var i = 0; i < self._comboAction; i++) {
            var combo = self._comboAction[i].combo;
            var match = combo.every(function(x) {
              if 
            });
          }
        }
    },

    sequenceCombo: function(buttons, action) {},

    _findCode: function(buttons) {
        var self = this;
        return buttons.map(function(button) {
          if (typeof button === 'string') {
            return self._keyCodes[button];
          } else {
            return button;
          }
        });
    },

    _keyCodes: {
        'backspace': 8,
        'tab': 9,
        'enter': 13,
        'shift': 16,
        'ctrl': [17, 57392],
        'alt': [18, 225],
        'pause': 19,
        'caps': 20,
        'esc': 27,
        'space': 32,
        'pageup': 33,
        'pagedown': 34,
        'end': 35,
        'home': 36,
        'left': 37,
        'up': 38,
        'right': 39,
        'down': 40,
        'print': [44, 124],
        'insert': 45,
        'delete': 46,
        '0': 48,
        '1': 49,
        '2': 50,
        '3': 51,
        '4': 52,
        '5': 53,
        '6': 54,
        '7': 55,
        '8': 56,
        '9': 57,
        'a': 65,
        'b': 66,
        'c': 67,
        'd': 68,
        'e': 69,
        'f': 70,
        'g': 71,
        'h': 72,
        'i': 73,
        'j': 74,
        'k': 75,
        'l': 76,
        'm': 77,
        'n': 78,
        'o': 79,
        'p': 80,
        'q': 81,
        'r': 82,
        's': 83,
        't': 84,
        'u': 85,
        'v': 86,
        'w': 87,
        'x': 88,
        'y': 89,
        'z': 90,
        'cmd': [91, 92, 93, 224],
        'num_0': 96,
        'num_1': 97,
        'num_2': 98,
        'num_3': 99,
        'num_4': 100,
        'num_5': 101,
        'num_6': 102,
        'num_7': 103,
        'num_8': 104,
        'num_9': 105,
        'num_multiply': 106,
        'num_add': 107,
        'num_enter': 108,
        'num_subtract': 109,
        'num_decimal': 110,
        'num_divide': 111,
        'f1': 112,
        'f2': 113,
        'f3': 114,
        'f4': 115,
        'f5': 116,
        'f6': 117,
        'f7': 118,
        'f8': 119,
        'f9': 120,
        'f10': 121,
        'f11': 122,
        'f12': 123,
        'num': [12, 144, 63289],
        'scroll': 145,
        ';': [59, 186],
        '=': [61, 187],
        ',': 188,
        '-': [173, 189],
        '.': 190,
        '/': 191,
        '`': 192,
        '[': 219,
        '\\': [0, 220],
        ']': 221,
        '\'': 222,
        '`': 223,
        '?': 191,
        '>': 190,
        '<': 188,
        '\"': 222,
        ':': [59, 186],
        '{': 219,
        '}': 221,
        '|': [0, 220],
        '~': 192,
        '+': [61, 187],
        '_': [173, 189],
        '!': 49,
        '@': 50,
        '#': 51,
        '$': 52,
        '%': 53,
        '^': 54,
        '&': 55,
        '*': 56,
        '(': 57,
        ')': 48,
        'escape': 27,
        'control': [17, 57392],
        'command': [91, 92, 93, 224],
        'break': 19,
        'windows': [91, 92, 93, 224],
        'option': [18, 225],
        'caps_lock': 20,
        'apostrophe': 222,
        'semicolon': [59, 186],
        'tilde': 192,
        'accent': 223,
        'scroll_lock': 145,
        'num_lock': [12, 144, 63289],
        'metaKey': [91, 92, 93, 224],
        'ctrlKey': [17, 57392],
        'shiftKey': 16,
        'altKey': [18, 225]
    }
  }
})();