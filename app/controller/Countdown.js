Ext.define('Flashbang.controller.Countdown', {
    extend: 'Ext.app.Controller',
    inProgress: false,
    totalSeconds: 5, // default value
    useBacklight: false,
    sound: null,
    config: {
        refs: {
            counter: '#counter',
            mainView: '#mainView',
            lightCheckbox: '#lightCheckbox'
        },
        control: {
        },
    },
    grenadeClicked: function() {
        if(!this.sound) {
         this.sound = new Audio("resources/sounds/grenade_explosion.mp3");
         this.sound.load();

     }



     var storage = window.localStorage;
     var totalSecondsString  = storage.getItem('totalSeconds');
     if(totalSecondsString) {
       this.totalSeconds = parseInt(totalSecondsString);
   }
   var backlightString = storage.getItem('light');
   if(backlightString === '1') {
    this.useBacklight = true;
} else {
    this.useBacklight = false;
}

var thisController = this;
if(!this.inProgress) {
    this.inProgress = true;
    thisController.showHideWarning();
    var seconds = this.totalSeconds;
    (function oneSec() {
        if(seconds > 0) {
            thisController.getCounter().setHtml(seconds).show();
            seconds--;
            setTimeout(oneSec, 1000);
        } else {
            thisController.getCounter().hide();
            thisController.boom();
        }

    })();
}
},
launch: function() {
   setTimeout(AdWhirl.show, 8000);
   var thisController = this;
       // if we do not have retina density => iPhone 3GS and older => no flashlight
       if (window.devicePixelRatio == 1 || isIPod()) {
           thisController.getLightCheckbox().hide();
       }


       Ext.get('grenadeImage').on({tap: { fn: thisController.grenadeClicked, scope: thisController}}); // HTML el. cannot be selected in 'refs'
       var warning = Ext.get('warning');
       warning.setStyle({
        'z-index': -1
    });

   },
   boom: function() {
        // TODO play sound and turn on the lights here
        console.log("sound 1");
        var thisController = this;

        thisController.sound.play();

        // white screen

        var white = Ext.getCmp('white');
        if(!white) {
            white = Ext.create('Ext.Panel', {fullscreen: true, cls: 'white', id: 'white'});
            Ext.Viewport.add(white);
        }
        white.show();
        Ext.Anim.run(white, 'fade', {
            out: true,
            autoClear: true,
            duration: 2000,
            delay: 2000,
            after: function() {
                white.hide();
                thisController.inProgress = false;
            }
        });


        if(this.useBacklight && !isIPod()) {
            window.plugins.torch.turnOn();
            console.log('turnOn lights');
        }
        setTimeout(Ext.bind(this.turnOffLights, this), 5000); // turn off light(s)
    },
    turnOffLights: function() {
        if(this.useBacklight && !isIPod()) {
            window.plugins.torch.turnOff();
            console.log('turnoff lights');
        }
        var warning = Ext.get('warning');
        warning.setStyle({
            'z-index': -1
        });


    },
    showHideWarning: function() {
        console.log('warning');
        var warning = Ext.get('warning');
        warning.setStyle({
            'z-index': 1
        });
        Ext.Anim.run(Ext.get('warning'), 'fade', {
            out: false,
            duration: 500,
            after: function() {
                Ext.Anim.run(Ext.get('warning'), 'fade', {
                    out: true,
                    duration: 500,
                    delay: 2000
                });
            }
        });
    }

});
