'use strict'

// Feature 1: 
// - As a user, I want to view the images on the page so that I can browse the photo collection

// 1. X open an Array
// 2. X create a constructor function
// 3. Build a prototype
// 4. .Get using AJAX
// 5. .append to the DOM

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
    imgArr.forEach(imgObject => imgObject.renderList());
};

$(() => Image.readJson());

//loop through our array to create objects
// create a render function



// populate the dropdown with our keywords
// write a function that responds to users click
// when clicked, all images w/ keywords are .show, everything else is .hide





Image.prototype.renderList = function() {
    //selecting the parent & creating an option
    $('select').append('<option class="clone"></option>');

    $('option').append('<p></p>');
    

    let $listClone = $('option[class="clone"]');
    //fill the option
    $listClone.find('option').text(this.keyword)
    $listClone.removeClass('clone');
    $listClone.attr('class', this.keyword);


    //fill the option
    $listClone.find('p').text(this.title)
    
};




    // let listClone = $('option[class="clone"]');

    // let listHtml = $().html();

    // imageClone.html(imageHtml);

    // imageClone.find('h2').text(this.title);
    // imageClone.find('img').attr('src', this.image_url); imageClone.find('img').attr('alt', this.title);    
    // imageClone.find('p').text(this.description);