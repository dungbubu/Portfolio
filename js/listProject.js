let list_project = [
  // Ghi chú về cách đặt tên Class
  //     webLandingpage     : Đặt cho Web và Landing Page
  //     presentation       : Đặt cho Slide thuyết trình
  //     motionGraphic      : Đặt cho Motion Graphic


  {
    id:    23,
    class: "webLandingpage",
    name:  "Manison",
    type:  "Web theme",
    url:   "./img/project/Manison.webp",
  },

  {
    id:    22,
    class: "webLandingpage",
    name:  "Phân bón Phượng Hoàng",
    type:  "Website",
    url:   "./img/project/PhanBonPhuongHoang.webp",
  },

  {
    id:    21,
    class: "presentation",
    name:  "Growell",
    type:  "PowerPoint",
    url:   "./img/project/Growell.webp",
  },

  {
    id:    20,
    class: "presentation",
    name:  "Caraot",
    type:  "PowerPoint",
    url:   "./img/project/Caraot.webp",
  },

  {
    id:    19,
    class: "webLandingpage",
    name:  "Portfolio Bùi Đức Hoà",
    type:  "Landing Page",
    url:   "./img/project/PortfolioBuiDucHoa.webp",
  },

  {
    id:    18,
    class: "webLandingpage",
    name:  "Domain Space",
    type:  "Landing Page",
    url:   "./img/project/iNETDomainSpace.webp",
  },

  {
    id:    17,
    class: "presentation",
    name:  "FTA E&C",
    type:  "PowerPoint",
    url:   "./img/project/FTA.webp",
  },

  {
    id:    16,
    class: "motionGraphic",
    name:  "Zozo Mobile",
    type:  "App Explainer",
    url:   "./img/project/Zozo_Mobile.webp",
  },

  {
    id:    15,
    class: "webLandingpage",
    name:  "Zozo Mobile",
    type:  "Home Page",
    url:   "./img/project/ZozoMobile.webp",
  },

  {
    id:    14,
    class: "webLandingpage",
    name:  "Domain Fun",
    type:  "Landing Page",
    url:   "./img/project/iNETDomainFun.webp",
  },

  {
    id:    13,
    class: "webLandingpage",
    name:  "Domain Host",
    type:  "Landing Page",
    url:   "./img/project/iNETDomainHost.webp",
  },

  {
    id:    12,
    class: "webLandingpage",
    name:  "Domain Tech",
    type:  "Landing Page",
    url:   "./img/project/iNETDomainTech.webp",
  },

  {
    id:    11,
    class: "webLandingpage",
    name:  "Domain Store",
    type:  "Landing Page",
    url:   "./img/project/iNETDomainStore.webp",
  },

  {
    id:    10,
    class: "webLandingpage",
    name:  "Domain Xyz",
    type:  "Landing Page",
    url:   "./img/project/iNETDomainXyz.webp",
  },

  {
    id:    9,
    class: "presentation",
    name:  "FirstAlliances",
    type:  "PowerPoint",
    url:   "./img/project/FirstAlliances.webp",
  },

  {
    id:    8,
    class: "motionGraphic",
    name:  "iNET Affiliate",
    type:  "Video Marketing",
    url:   "./img/project/iNET_Affiliate.webp",
  },

  {
    id:    7,
    class: "webLandingpage",
    name:  "Domain Website",
    type:  "Landing Page",
    url:   "./img/project/iNETDomainWebsite.webp",
  },

  {
    id:    6,
    class: "webLandingpage",
    name:  "Domain Press",
    type:  "Landing Page",
    url:   "./img/project/iNETDomainPress.webp",
  },

  {
    id:    5,
    class: "motionGraphic",
    name:  "BePage",
    type:  "App Explainer",
    url:   "./img/project/Bepage.webp",
  },

  {
    id:    4,
    class: "webLandingpage",
    name:  "Domain Site",
    type:  "Landing Page",
    url:   "./img/project/iNETDomainSite.webp",
  },

  {
    id:    3,
    class: "webLandingpage",
    name:  "Domain Online",
    type:  "Landing Page",
    url:   "./img/project/iNETDomainOnline.webp",
  },

  {
    id:    2,
    class: "webLandingpage",
    name:  "Tết 2022",
    type:  "Landing Page",
    url:   "./img/project/TetLandingPage.webp",
  },

  {
    id:    1,
    class: "motionGraphic",
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