let list_product = [
  // Ghi chú về cách đặt tên Class
  //     slide              : Đặt cho Presentation
  //     cv                 : Đặt cho Curriculum Vitae


  {
    id:        2,
    class:     "slide",
    model:     "PPT0001MD",
    name:      "Honey PPT Template",
    credit:    "by Mikoslide - Creative Market",
    type:      "style: Minimal, Mordern",
    created:   "Apr 02, 2022",
    updated:   "Apr 02, 2022",
    url:       "./img/product/PPT0001MD/thumbnail_Honey.webp",
    function:  '<a href="./img/product/PPT0001MD/Honey.zip" download><i>download</i></a>',
  },
  
  {
    id:        1,
    class:     "slide",
    model:     "PPT0001MD",
    name:      "Honey PPT Template",
    credit:    "by Mikoslide - Creative Market",
    type:      "style: Minimal, Mordern",
    created:   "Apr 02, 2022",
    updated:   "Apr 02, 2022",
    url:       "./img/product/PPT0001MD/thumbnail_Honey.webp",
    function:  '<a href="./img/product/PPT0001MD/Honey.zip" download><i>download</i></a>',
  }
];


// Import List Product rồi Render ra HTML
var html = '';
list_product.forEach(function(item) {
  html += `<div class="grid-item `+item.class+`">
            <img src="`+item.url+`" alt="`+item.name+`">
            <div class="content">
              <h4 class="name">`+item.name+`</h4>
            </div>
            <div class="subContent">
              <p class="credit">`+item.credit+`</p>
              <p class="type">`+item.type+`</p>
              <p class="date">`+item.created+` - `+item.updated+`</p>
            </div>
            <div class="function">
              `+item.function+`
            </div>
          </div>`;
});
$('.grid').append(html);