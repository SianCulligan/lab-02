'use strict';

let imgArr = [];

function Image (imgObject) {
  this.image_url = imgObject.image_url;
  this.title = imgObject.title;
  this.description = imgObject.description;
  this.keyword = imgObject.keyword;
  this.horns = imgObject.horns;
}

// render function
Image.prototype.render = function() {
  $('main').append('<div class="clone"></div>');
  let imageClone = $('div[class="clone"]');
  let imageHtml = $('#photo-template').html();
  imageClone.html(imageHtml);
  imageClone.find('h2').text(this.title);
  imageClone.find('img').attr('src', this.image_url); imageClone.find('img').attr('alt', this.title);
  imageClone.find('p').text(this.description);
  imageClone.removeClass('clone');
  imageClone.attr('class' , this.keyword);
};

//generate images from page-1
Image.readJson = () => {
  $.ajax('../data/page-1.json','json')
    .then(imgData => {
      imgData.forEach(imageItem => {
        imgArr.push(new Image(imageItem));
      });
    })
    .then(Image.loadImage);
};

Image.loadImage = () => {
  imgArr.forEach(imgObject => imgObject.render());
  renderList();
};

$(() => Image.readJson());

//generate keyword list
let keywordFilter = [];

function renderList () {
  imgArr.forEach((keywordCheck) => {
    if(!keywordFilter.includes(keywordCheck.keyword)) {
      console.log(keywordCheck.keyword);
      keywordFilter.push(keywordCheck.keyword);
      $('select').append(`<option>${keywordCheck.keyword}</option>`);
    }
  });
}

Image.prototype.renderList = function() {
  //select the parent & creating an option
  imgArr.forEach();
  $('option').append('<p></p>');
  let $listClone = $('option[class="clone"]');
  //fill the option
  $listClone.find('option').text(this.keyword);
  $listClone.removeClass('clone');
  $listClone.attr('class', this.keyword);
  //find the option
  $listClone.find('p').text(this.keyword);
};

//filter by keyword
keywordFilter.forEach(function(value) {
  $('select') .append(`<option id="option_${value}">${value}</option>`);});

$('select').on('change', (event) => {
  let option = event.target.value;
  $('div').hide();
  $(`.${option}`).show();
});