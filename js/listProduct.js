let list_product = [
  // Ghi chú về cách đặt tên Class
  //     presentation       : Đặt cho Slide Template
  //     curriculumVitae   : Đặt cho Curriculum Vitae


  {
    id:        4,
    class:     "presentation",
    model:     "PPT0001MD",
    name:      "Honey PPT Template",
    credit:    "by Mikoslide - Creative Market",
    type:      "style: Minimal, Mordern",
    created:   "Apr 02, 2022",
    updated:   "last updated: Apr 02, 2022",
    url:       "./img/product/PPT0001MD/thumbnail_Honey.webp",
    urlThumb1: "./img/product/PPT0001MD/thumbnail_Honey.webp",
    urlThumb2: "./img/product/PPT0001MD/thumbnail_Honey.webp",
    urlThumb3: "./img/product/PPT0001MD/thumbnail_Honey.webp",
    function:  '<a href="./img/product/PPT0001MD/Honey.zip" download><i>download</i></a>',
  },

  {
    id:        3,
    class:     "presentation",
    model:     "PPT0001MD",
    name:      "Honey PPT Template",
    credit:    "by Mikoslide - Creative Market",
    type:      "style: Minimal, Mordern",
    created:   "Apr 02, 2022",
    updated:   "last updated: Apr 02, 2022",
    url:       "./img/product/PPT0001MD/thumbnail_Honey.webp",
    urlThumb1: "./img/product/PPT0001MD/thumbnail_Honey.webp",
    urlThumb2: "./img/product/PPT0001MD/thumbnail_Honey.webp",
    urlThumb3: "./img/product/PPT0001MD/thumbnail_Honey.webp",
    function:  '<a href="./img/product/PPT0001MD/Honey.zip" download><i>download</i></a>',
  },

  {
    id:        2,
    class:     "presentation",
    model:     "PPT0001MD",
    name:      "Honey PPT Template",
    credit:    "by Mikoslide - Creative Market",
    type:      "style: Minimal, Mordern",
    created:   "Apr 02, 2022",
    updated:   "last updated: Apr 02, 2022",
    url:       "./img/product/PPT0001MD/thumbnail_Honey.webp",
    urlThumb1: "./img/product/PPT0001MD/thumbnail_Honey.webp",
    urlThumb2: "./img/product/PPT0001MD/thumbnail_Honey.webp",
    urlThumb3: "./img/product/PPT0001MD/thumbnail_Honey.webp",
    function:  '<a href="./img/product/PPT0001MD/Honey.zip" download><i>download</i></a>',
  },

  {
    id:        1,
    class:     "presentation",
    model:     "PPT0001MD",
    name:      "Honey PPT Template",
    credit:    "by Mikoslide - Creative Market",
    type:      "style: Minimal, Mordern",
    created:   "Apr 02, 2022",
    updated:   "last updated: Apr 02, 2022",
    url:       "./img/product/PPT0001MD/thumbnail_Honey.webp",
    urlThumb1: "./img/product/PPT0001MD/thumbnail_Honey.webp",
    urlThumb2: "./img/product/PPT0001MD/thumbnail_Honey.webp",
    urlThumb3: "./img/product/PPT0001MD/thumbnail_Honey.webp",
    function:  '<a href="./img/product/PPT0001MD/Honey.zip" download><i>download</i></a>',
  }
];


var slider1;


// Import List Product rồi Render ra HTML
var html = '';
list_product.forEach(function(item) {
  html += `<div class="grid-item `+item.class+`">

            <div class="carousel">
              <div class="carousel-cell"><img src="`+item.url+`" alt="`+item.name+`"></div>
              <div class="carousel-cell"><img src="`+item.url+`" alt="`+item.name+`"></div>
              <div class="carousel-cell"><img src="`+item.url+`" alt="`+item.name+`"></div>
            </div>

            <div class="itemContent">
              <div class="itemTitle"><h4 class="name">`+item.name+`</h4></div>

              <div class="itemSubTitle">
                <div>`+item.credit+`</div>
                <div>`+item.type+`</div>
                <div>`+item.updated+`</div>
              </div>

              <div class="itemFunction">`+item.function+`</div>
            </div>

          </div>`;
  
  return slider1 = item.urlThumb1;
});
$('.grid').append(html);


// Flickity Carousel
var $carousel = $('.carousel').flickity({
  imagesLoaded: true,
  prevNextButtons: false,
});