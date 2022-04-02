let list_project = [
  // Ghi chú về cách đặt tên Class
  //     weblandingpage     : Đặt cho Web và Landing Page
  //     powerpoint         : Đặt cho Powerpoint
  //     motiongraphic      : Đặt cho Motion Graphic


  {
    id:    18,
    class: "weblandingpage",
    name:  "Domain Space",
    type:  "Landing Page",
    url:   "./img/project/iNETDomainSpace.webp",
  },

  {
    id:    17,
    class: "powerpoint",
    name:  "FTA E&C",
    type:  "PowerPoint",
    url:   "./img/project/FTA.webp",
  },

  {
    id:    16,
    class: "motiongraphic",
    name:  "Zozo Mobile",
    type:  "App Explainer",
    url:   "./img/project/Zozo_Mobile.webp",
  },

  {
    id:    15,
    class: "weblandingpage",
    name:  "Zozo Mobile",
    type:  "Home Page",
    url:   "./img/project/ZozoMobile.webp",
  },

  {
    id:    14,
    class: "weblandingpage",
    name:  "Domain Fun",
    type:  "Landing Page",
    url:   "./img/project/iNETDomainFun.webp",
  },

  {
    id:    13,
    class: "weblandingpage",
    name:  "Domain Host",
    type:  "Landing Page",
    url:   "./img/project/iNETDomainHost.webp",
  },

  {
    id:    12,
    class: "weblandingpage",
    name:  "Domain Tech",
    type:  "Landing Page",
    url:   "./img/project/iNETDomainTech.webp",
  },

  {
    id:    11,
    class: "weblandingpage",
    name:  "Domain Store",
    type:  "Landing Page",
    url:   "./img/project/iNETDomainStore.webp",
  },

  {
    id:    10,
    class: "weblandingpage",
    name:  "Domain Xyz",
    type:  "Landing Page",
    url:   "./img/project/iNETDomainXyz.webp",
  },

  {
    id:    9,
    class: "powerpoint",
    name:  "FirstAlliances",
    type:  "PowerPoint",
    url:   "./img/project/FirstAlliances.webp",
  },

  {
    id:    8,
    class: "motiongraphic",
    name:  "iNET Affiliate",
    type:  "Video Marketing",
    url:   "./img/project/iNET_Affiliate.webp",
  },

  {
    id:    7,
    class: "weblandingpage",
    name:  "Domain Website",
    type:  "Landing Page",
    url:   "./img/project/iNETDomainWebsite.webp",
  },

  {
    id:    6,
    class: "weblandingpage",
    name:  "Domain Press",
    type:  "Landing Page",
    url:   "./img/project/iNETDomainPress.webp",
  },

  {
    id:    5,
    class: "motiongraphic",
    name:  "BePage",
    type:  "App Explainer",
    url:   "./img/project/Bepage.webp",
  },

  {
    id:    4,
    class: "weblandingpage",
    name:  "Domain Site",
    type:  "Landing Page",
    url:   "./img/project/iNETDomainSite.webp",
  },

  {
    id:    3,
    class: "weblandingpage",
    name:  "Domain Online",
    type:  "Landing Page",
    url:   "./img/project/iNETDomainOnline.webp",
  },

  {
    id:    2,
    class: "weblandingpage",
    name:  "Tết 2022",
    type:  "Landing Page",
    url:   "./img/project/TetLandingPage.webp",
  },

  {
    id:    1,
    class: "motiongraphic",
    name:  "MSC Loyalty System",
    type:  "App Explainer",
    url:   "./img/project/KDTech_LoyaltySystem.webp",
  }
];


// Import List Project rồi Render ra HTML
var html = '';
list_project.forEach(function(item) {
  html += `<div class="grid-item `+item.class+`">
            <img src="`+item.url+`" alt="`+item.name+` `+item.type+`">
            <div class="content">
              <h4 class="name">`+item.name+`</h4>
              <p class="type">`+item.type+`</p>
            </div>
          </div>`;
});
$('.grid').append(html);