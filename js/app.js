'use strict';

let imgArr = [];

function Image (imgObject) {
  this.image_url = imgObject.image_url;
  this.title = imgObject.title;
  this.description = imgObject.description;
  this.keyword = imgObject.keyword;
  this.horns = imgObject.horns;
}


let keyword = [];

Image.prototype.filterImage = function () {
    imgArr.forEach(value => {
   if(keyword.indexOf(value.keyword) < -1) {
    } else {
        keyword.push(imgArr.value);
    
};
    });
// keyword.forEach(value => ($(`select`).append(`<option id ="option_${value}">${value}</option>`));

     

    

};

Image.prototype.render = function() {
    $('main').append('<div class="clone"></div>');
    let imageClone = $('div[class="clone"]');

    let imageHtml = $('#photo-template').html();

    imageClone.html(imageHtml);

    imageClone.find('h2').text(this.title);
    imageClone.find('img').attr('src', this.image_url); 
    imageClone.find('img').attr('alt', this.title);    
    imageClone.find('p').text(this.description);
    imageClone.removeClass('clone');
    imageClone.attr('class' , this.keyword);
    imageClone.addClass('tomObject');

    
};
       
    Image.readJson = () => { 
    $.get('../data/page-1.json','json')

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






Image.prototype.renderList = function() {
    //selecting the parent & creating an option
    $('select').append('<option class="clone">Filter By Key Word</option>');
    
    $('option').append('<p></p>');
    
    
    let listClone = $('option[class="clone"]');
    //fill the option
    listClone.find('option').text(this.keyword)
    listClone.removeClass('clone');
    listClone.attr('class', this.keyword);
    
    
    //fill the option
    listClone.find('p').text(this.title)
    
    $('select').on('change',(e)=> {
        let option = e.target.value;
        $('div').hide();
        $(`.${option}`).show();
        // console.log('select');
    });
};

$(() => Image.readJson());

// Image.imagesFilter = () => {

// let filterkeyword = [];
// $('option').not(':first').remove();
// Image.imgArr.forEach(display =>{
//     if(!filterkeyword.includes(imgObject.keyword)) 
//     filterkeyword.push(imgObject.keyword);
// });
//     filterkeyword.sort();
//     filterkeyword.forEach(keyword => {
//       let optionTag = `<option value="${keyword}">${keyword}</option>`;
//       $('select').append(optionTag);
//     });
// };


