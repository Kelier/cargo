!(function(e) {
  if ('object' == typeof exports && 'undefined' != typeof module) module.exports = e();
  else if ('function' == typeof define && define.amd) define([], e);
  else {
    ('undefined' != typeof window
      ? window
      : 'undefined' != typeof global ? global : 'undefined' != typeof self ? self : this
    ).vkey = e();
  }
})(function() {
  return (function e(o, r, t) {
    function n(i, u) {
      if (!r[i]) {
        if (!o[i]) {
          var s = 'function' == typeof require && require;
          if (!u && s) return s(i, !0);
          if (a) return a(i, !0);
          var f = new Error("Cannot find module '" + i + "'");
          throw ((f.code = 'MODULE_NOT_FOUND'), f);
        }
        var l = (r[i] = { exports: {} });
        o[i][0].call(
          l.exports,
          function(e) {
            var r = o[i][1][e];
            return n(r || e);
          },
          l,
          l.exports,
          e,
          o,
          r,
          t
        );
      }
      return r[i].exports;
    }
    for (var a = 'function' == typeof require && require, i = 0; i < t.length; i++) n(t[i]);
    return n;
  })(
    {
      1: [
        function(e, o, r) {
          'use strict';
          var t,
            n = 'undefined' != typeof window ? window.navigator.userAgent : '',
            a = /OS X/.test(n),
            i = /Opera/.test(n),
            u = !/like Gecko/.test(n) && !i,
            s = (o.exports = {
              0: a ? '<menu>' : '<UNK>',
              1: '<mouse 1>',
              2: '<mouse 2>',
              3: '<break>',
              4: '<mouse 3>',
              5: '<mouse 4>',
              6: '<mouse 5>',
              8: '<backspace>',
              9: '<tab>',
              12: '<clear>',
              13: '<enter>',
              16: '<shift>',
              17: '<control>',
              18: '<alt>',
              19: '<pause>',
              20: '<caps-lock>',
              21: '<ime-hangul>',
              23: '<ime-junja>',
              24: '<ime-final>',
              25: '<ime-kanji>',
              27: '<escape>',
              28: '<ime-convert>',
              29: '<ime-nonconvert>',
              30: '<ime-accept>',
              31: '<ime-mode-change>',
              32: '<space>',
              33: '<page-up>',
              34: '<page-down>',
              35: '<end>',
              36: '<home>',
              37: '<left>',
              38: '<up>',
              39: '<right>',
              40: '<down>',
              41: '<select>',
              42: '<print>',
              43: '<execute>',
              44: '<snapshot>',
              45: '<insert>',
              46: '<delete>',
              47: '<help>',
              91: '<meta>',
              92: '<meta>',
              93: a ? '<meta>' : '<menu>',
              95: '<sleep>',
              106: '<num-*>',
              107: '<num-+>',
              108: '<num-enter>',
              109: '<num--\x3e',
              110: '<num-.>',
              111: '<num-/>',
              144: '<num-lock>',
              145: '<scroll-lock>',
              160: '<shift-left>',
              161: '<shift-right>',
              162: '<control-left>',
              163: '<control-right>',
              164: '<alt-left>',
              165: '<alt-right>',
              166: '<browser-back>',
              167: '<browser-forward>',
              168: '<browser-refresh>',
              169: '<browser-stop>',
              170: '<browser-search>',
              171: '<browser-favorites>',
              172: '<browser-home>',
              173: a && u ? '-' : '<volume-mute>',
              174: '<volume-down>',
              175: '<volume-up>',
              176: '<next-track>',
              177: '<prev-track>',
              178: '<stop>',
              179: '<play-pause>',
              180: '<launch-mail>',
              181: '<launch-media-select>',
              182: '<launch-app 1>',
              183: '<launch-app 2>',
              186: ';',
              187: '=',
              188: ',',
              189: '-',
              190: '.',
              191: '/',
              192: '`',
              219: '[',
              220: '\\',
              221: ']',
              222: "'",
              223: '<meta>',
              224: '<meta>',
              226: '<alt-gr>',
              229: '<ime-process>',
              231: i ? '`' : '<unicode>',
              246: '<attention>',
              247: '<crsel>',
              248: '<exsel>',
              249: '<erase-eof>',
              250: '<play>',
              251: '<zoom>',
              252: '<no-name>',
              253: '<pa-1>',
              254: '<clear>'
            });
          for (t = 58; t < 65; ++t) s[t] = String.fromCharCode(t);
          for (t = 48; t < 58; ++t) s[t] = t - 48 + '';
          for (t = 65; t < 91; ++t) s[t] = String.fromCharCode(t);
          for (t = 96; t < 106; ++t) s[t] = '<num-' + (t - 96) + '>';
          for (t = 112; t < 136; ++t) s[t] = 'F' + (t - 111);
        },
        {}
      ]
    },
    {},
    [1]
  )(1);
});
