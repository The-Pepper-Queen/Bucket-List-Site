
var myImages = ['https://www.nerdmuch.com/wp-content/uploads/2018/01/Shallan.jpg',
                'https://bushbaby.travel/images/country/Asia/Thailand/Landmark_Wat_Thai_sunset_temple_shutterstock_LEAD.jpg',
                'https://media-cdn.tripadvisor.com/media/photo-s/0d/f5/45/ed/southern-iceland-glaciers.jpg',
                'https://www.italymototour.com/wp-content/uploads/2017/05/positano.jpg',
                'https://upload.wikimedia.org/wikipedia/commons/a/a0/Kiritimati-EO.jpg',
                'https://c.tadst.com/gfx/1200x630/sunrise-sunset-sun-calculator.jpg?1',
                'https://treksnrapids.com/wp-content/uploads/2017/08/skydiving-sky0716.jpg',
                'https://www.steamboat.com/-/media/steamboat/summer-images/events/desktop/habr.ashx',
                'https://images.theconversation.com/files/67570/original/image-20141217-31052-1rsoftn.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip',
              ];

var myAlt = ['Girl Drawing',
              'Scenic Thailand Temple',
              'Scenic Iceland',
              'Scenic Italy',
              'Scenic Kiritimati (Christmas) Island',
              'Scenic Sunrise',
              'Skydiving Picture',
              'Hot Air Balloons Image',
              'Cockpit Pilot Sunset Image',
            ];


var img_index = 0;
function change_image() {

    //here "this" will point to button, the element which is clicked ie event occurred.

    //but we need image, so get it by using below statement
    var img = document.getElementById("myImg");
    img_index = ++img_index % 9; //replace 2 with number of images
    img.src = myImages[img_index];
}

var img_index2 = 0;
function change_alt() {

    //here "this" will point to button, the element which is clicked ie event occurred.

    //but we need image, so get it by using below statement
    var img = document.getElementById("myImg");
    img_index = ++img_index2 % 9; //replace 2 with number of images
    img.alt = myAlt[img_index];
}
