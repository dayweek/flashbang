Ext.define('Flashbang.view.About', {
    extend: 'Ext.Component',
           xtype: 'about',
    config: {
        html: '<p>Code by David Hrachovy </p><br> <p>"Distraction device" image by Rama (Own work) <a onclick="openLink1()" href="#">CC-BY-SA-2.0-fr</a>, via <a onclick="openLink2()" href="#">Wikimedia commons</a></p>',
        cls: 'about',
        padding:  10

    }
});

function openLink1() {

    window.open("http://creativecommons.org/licenses/by-sa/2.0/fr/deed.en");
}

function openLink2() {

    window.open("http://commons.wikimedia.org/wiki/File:Distraction_device_img_1621.jpg");
}