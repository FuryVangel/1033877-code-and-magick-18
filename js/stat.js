'use strict';
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_X = 40;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 130;
var BAR_SHIFT = 50;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + BAR_X + (BAR_WIDTH + BAR_SHIFT) * i, CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_X + (BAR_WIDTH + BAR_SHIFT) * i, CLOUD_HEIGHT - BAR_X - (BAR_HEIGHT * times[i]) / maxTime);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, 100%,' + Math.round(Math.random() * 100) + '%)';
    };
    ctx.fillRect(CLOUD_X + BAR_X + (BAR_WIDTH + BAR_SHIFT) * i, CLOUD_HEIGHT - (GAP) * 3, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
  }
};

