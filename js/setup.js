'use strict';

(function () {
  var WIZARD_NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  var WIZARD_SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  var WIZARD_COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var WIZARD_EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var WIZARD_FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var WIZARD_AMOUNT = 4;

  function getRandom(num) {
    return Math.floor(Math.random() * num);
  }

  function getRandomItemFromArray(arr) {
    return arr[getRandom(arr.length)];
  }

  function getWizard() {
    return {
      name: getRandomItemFromArray(WIZARD_NAMES) + ' ' + getRandomItemFromArray(WIZARD_SURNAMES),
      coatColor: getRandomItemFromArray(WIZARD_COAT_COLORS),
      eyesColor: getRandomItemFromArray(WIZARD_EYES_COLORS)
    };
  }

  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');

  document.querySelector('.setup-similar').classList.remove('hidden');

  var similarListElement = document.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();
  for (var j = 0; j < WIZARD_AMOUNT; j++) {
    fragment.appendChild(renderWizard(getWizard()));
  }
  similarListElement.appendChild(fragment);

  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  var wizardCoatColor = document.querySelector('.wizard-coat');
  wizardCoatColor.addEventListener('click', function () {
    wizardCoatColor.style.fill = getRandomItemFromArray(WIZARD_COAT_COLORS);
    document.querySelector('#coat-color').value = wizardCoatColor.style.fill;
  });

  var wizardEyesColor = document.querySelector('.wizard-eyes');
  wizardEyesColor.addEventListener('click', function () {
    wizardEyesColor.style.fill = getRandomItemFromArray(WIZARD_EYES_COLORS);
    document.querySelector('#eyes-color').value = wizardEyesColor.style.fill;
  });

  var wizardFireballColor = document.querySelector('.setup-fireball-wrap');
  wizardFireballColor.addEventListener('click', function () {
    wizardFireballColor.style.background = getRandomItemFromArray(WIZARD_FIREBALL_COLORS);
    document.querySelector('#fireball-color').value = getRandomItemFromArray(WIZARD_FIREBALL_COLORS);
  });

})();
