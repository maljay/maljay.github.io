var random_rotate = 0;
var order_rotation = 1;
var all_images = new Array();
var image_urls = new Array();
var url_target = new Array();

all_images[0] = "assets/images/sendioo.gif";
image_urls[0] = "https://warriorplus.com/o2/a/pm97l/0";
url_target[0] = "_blank";

all_images[1] = "assets/images/w3schools.gif";
image_urls[1] = "www.w3schools.com";
url_target[1] = "_blank";

all_images[2] = "assets/images/cleverprogrammer.gif";
image_urls[2] = "www.cleverprogrammer.com";
url_target[2] = "_blank";

all_images[3] = "assets/images/codecollege.gif";
image_urls[3] = "https://codecollege.ca";
url_target[3] = "_blank";

function rotate() {
    if(document.images){
        var ry = Math.floor(Math.random*all_images.length);
        window.document.all['adBanner'].src = all_images[ry];
        document.getElementById('adBannerLink').href = image_urls[ry];
        document.getElementById('adBannerLink').target = url_target;

        setTimeout("rotate()", 1000);
    }
}

var start_image = -1;
function order_rotate(){
    start_image++;
    if(start_image > all_images.length - 1){start_image = 0}

    setTimeout("order_rotate()", 1000)

    window.document.all['adBanner'].src = all_images[start_image];
    document.getElementById('adBannerLink').href = image_urls[start_image];
    document.getElementById('adBannerLink').target = url_target[start_image];
}