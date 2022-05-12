let list_project = [
  // Ghi chú về cách đặt tên Class
  //     webLandingpage     : Đặt cho Web và Landing Page
  //     presentation       : Đặt cho Slide thuyết trình
  //     motionGraphic      : Đặt cho Motion Graphic


  {
    id:    22,
    class:      "presentation",
    name:       "ITE HCMC",
    type:       "PowerPoint",
    thumbnail:  "./img/project/ITEHCMC(thumbnail).webp",
    url:        "./img/project/ITEHCMC.webp",
  },

  {
    id:    21,
    class:      "presentation",
    name:       "Netco Post",
    type:       "PowerPoint",
    thumbnail:  "./img/project/NetcoPost(thumbnail).webp",
    url:        "./img/project/NetcoPost.webp",
  },

  {
    id:    20,
    class:      "webLandingpage",
    name:       "Techmaster IOS Class",
    type:       "Landing Page",
    thumbnail:  "./img/project/TechmasterIOSClass(thumbnail).webp",
    url:        "./img/project/TechmasterIOSClass.webp",
  },

  {
    id:    19,
    class:      "webLandingpage",
    name:       "Manison",
    type:       "Web theme",
    thumbnail:  "./img/project/Manison(thumbnail).webp",
    url:        "./img/project/Manison.webp",
  },

  {
    id:    18,
    class:      "webLandingpage",
    name:       "Phân bón Phượng Hoàng",
    type:       "Website",
    thumbnail:  "./img/project/PhanBonPhuongHoang(thumbnail).webp",
    url:        "./img/project/PhanBonPhuongHoang.webp",
  },

  {
    id:    17,
    class:      "presentation",
    name:       "Growell",
    type:       "PowerPoint",
    thumbnail:  "./img/project/Growell(thumbnail).webp",
    url:        "./img/project/Growell.webp",
  },

  {
    id:    16,
    class:      "presentation",
    name:       "Caraot",
    type:       "PowerPoint",
    thumbnail:  "./img/project/Caraot(thumbnail).webp",
    url:        "./img/project/Caraot.webp",
  },

  {
    id:    15,
    class:      "webLandingpage",
    name:       "Portfolio Bùi Đức Hoà",
    type:       "Landing Page",
    thumbnail:  "./img/project/PortfolioBuiDucHoa(thumbnail).webp",
    url:        "./img/project/PortfolioBuiDucHoa.webp",
  },

  {
    id:    14,
    class:      "webLandingpage",
    name:       "Domain Space",
    type:       "Landing Page",
    thumbnail:  "./img/project/iNETDomainSpace(thumbnail).webp",
    url:        "./img/project/iNETDomainSpace.webp",
  },

  {
    id:    13,
    class:      "presentation",
    name:       "FTA E&C",
    type:       "PowerPoint",
    thumbnail:  "./img/project/FTA(thumbnail).webp",
    url:        "./img/project/FTA.webp",
  },

  {
    id:    12,
    class:      "webLandingpage",
    name:       "Zozo Mobile",
    type:       "Home Page",
    thumbnail:  "./img/project/ZozoMobile(thumbnail).webp",
    url:        "./img/project/ZozoMobile.webp",
  },

  {
    id:    11,
    class:      "webLandingpage",
    name:       "Domain Fun",
    type:       "Landing Page",
    thumbnail:  "./img/project/iNETDomainFun(thumbnail).webp",
    url:        "./img/project/iNETDomainFun.webp",
  },

  {
    id:    10,
    class:      "webLandingpage",
    name:       "Domain Host",
    type:       "Landing Page",
    thumbnail:  "./img/project/iNETDomainHost(thumbnail).webp",
    url:        "./img/project/iNETDomainHost.webp",
  },

  {
    id:    9,
    class:      "webLandingpage",
    name:       "Domain Tech",
    type:       "Landing Page",
    thumbnail:  "./img/project/iNETDomainTech(thumbnail).webp",
    url:        "./img/project/iNETDomainTech.webp",
  },

  {
    id:    8,
    class:      "webLandingpage",
    name:       "Domain Store",
    type:       "Landing Page",
    thumbnail:  "./img/project/iNETDomainStore(thumbnail).webp",
    url:        "./img/project/iNETDomainStore.webp",
  },

  {
    id:    7,
    class:      "webLandingpage",
    name:       "Domain Xyz",
    type:       "Landing Page",
    thumbnail:  "./img/project/iNETDomainXyz(thumbnail).webp",
    url:        "./img/project/iNETDomainXyz.webp",
  },

  {
    id:    6,
    class:      "presentation",
    name:       "FirstAlliances",
    type:       "PowerPoint",
    thumbnail:  "./img/project/FirstAlliances(thumbnail).webp",
    url:        "./img/project/FirstAlliances.webp",
  },

  {
    id:    5,
    class:      "webLandingpage",
    name:       "Domain Website",
    type:       "Landing Page",
    thumbnail:  "./img/project/iNETDomainWebsite(thumbnail).webp",
    url:        "./img/project/iNETDomainWebsite.webp",
  },

  {
    id:    4,
    class:      "webLandingpage",
    name:       "Domain Press",
    type:       "Landing Page",
    thumbnail:  "./img/project/iNETDomainPress(thumbnail).webp",
    url:        "./img/project/iNETDomainPress.webp",
  },

  {
    id:    3,
    class:      "webLandingpage",
    name:       "Domain Site",
    type:       "Landing Page",
    thumbnail:  "./img/project/iNETDomainSite(thumbnail).webp",
    url:        "./img/project/iNETDomainSite.webp",
  },

  {
    id:    2,
    class:      "webLandingpage",
    name:       "Domain Online",
    type:       "Landing Page",
    thumbnail:  "./img/project/iNETDomainOnline(thumbnail).webp",
    url:        "./img/project/iNETDomainOnline.webp",
  },

  {
    id:    1,
    class:      "webLandingpage",
    name:       "Tết 2022",
    type:       "Landing Page",
    thumbnail:  "./img/project/TetLandingPage(thumbnail).webp",
    url:        "./img/project/TetLandingPage.webp",
  },
];


// Import List Project rồi Render ra HTML
var html = '';
list_project.forEach(function(item) {
  html += `<div class="grid-item `+item.class+`">
            <img class="thumbnail_img" src="`+item.thumbnail+`" alt="`+item.name+` `+item.type+`">
            <img class="project_img"   src="`+item.url+`"       alt="`+item.name+` `+item.type+`">
            <div class="content">
              <h4 class="name">`+item.name+`</h4>
              <p class="type">`+item.type+`</p>
            </div>
          </div>`;
});
$('.grid').append(html);