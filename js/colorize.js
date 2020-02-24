'use strict';

(function () {
  var inputWizardCoat = document.querySelector('input[name=coat-color]');
  var inputWizardEyes = document.querySelector('input[name=eyes-color]');
  var inputWizardFireball = document.querySelector('input[name=fireball-color]');


  var wizardCoatColor = document.querySelector('.wizard-coat');
  var wizardEyesColor = document.querySelector('.wizard-eyes');
  var wizardFireballColor = document.querySelector('.setup-fireball-wrap');

  var randomizeWizardColor = function (element, attribute, colors, input) {
    element.addEventListener('click', function () {
      var randColor = window.util.getRandomNum(colors);
      element.style[attribute] = randColor;
      input.value = randColor;
    });
  };

  randomizeWizardColor(wizardCoatColor, 'fill', window.util.COAT_COLORS, inputWizardCoat);
  randomizeWizardColor(wizardEyesColor, 'fill', window.util.EYES_COLORS, inputWizardEyes);
  randomizeWizardColor(wizardFireballColor, 'background', window.util.FIREBALL_COLORS, inputWizardFireball);
})();
