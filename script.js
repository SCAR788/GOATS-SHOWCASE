
    ImageArray = new Array();
    ImageArray[0] = 'dhoni.jpg';
    ImageArray[1] = 'kitchen4.jpg';
    ImageArray[2] = 'pig1.jpg';
    ImageArray[3] = 'site1.jpg';
    ImageArray[4] = 'site2.jpg';
    ImageArray[5] = 'site3.jpg';
    ImageArray[6] = 'site4.jpg';
    ImageArray[7] = 'site5.jpg';
    ImageArray[8] = 'site6.jpg';
    ImageArray[9] = 'site7.jpg';
    ImageArray[10] = 'site8.jpg';


function getRandomImage() {
    var num = Math.floor( Math.random() * 11);
    var img = ImageArray[num];
    document.getElementById("randImage").innerHTML = ('<img src="' + 'images/random/' + img + '" width="250px">')

}