Ext.define('Flashbang.controller.Main', {
  extend: 'Ext.app.Controller',
  areAdsOn: false,
  countdown: null,
  config: {
    refs: {
      totalSecondsSlider: '#totalSeconds',
      mainView: '#mainView',
      navigationView: '#navigationView',
      settingsView: 'settings',
      grenadeView: 'grenade',
      lightCheckbox: '#lightCheckbox',
      countdownLabel: '#countdownLabel'

    },
    control: {
      '#aboutButton': {
        tap: 'aboutButtonClicked'
      },
      '#settingsButton': {
        tap: 'settingsButtonClicked'
      },
      lightCheckbox: {
        check: 'lightCheckboxChecked',
        uncheck: 'lightCheckboxUnchecked'
      },
      '#backAbout': {
        tap: 'backAboutClicked'
      },
      '#backSettings': {
        tap: 'backSettingsClicked'
      },
      '#facebookButton': {
        tap: 'facebookButtonClicked'
      },
      '#logout': {
        tap: 'logoutClicked'
      }
    },
  },

  launch: function() {

   var thisController = this;
     Ext.get('settingsButton').on({tap: { fn: thisController.settingsButtonClicked, scope: thisController}}); // HTML el. cannot be selected in 'refs'
     var slider = thisController.getTotalSecondsSlider();

     slider.on({change: { fn: thisController.fieldChanged, scope: thisController}});
     slider.on({drag: {fn: thisController.fieldDraged, scope: thisController}});

     var storage = window.localStorage;
     if (storage.getItem('light') === '1') {
       thisController.getLightCheckbox().check();
       console.log('on');
     } else {
      thisController.getLightCheckbox().uncheck();

    }

    var totalSeconds = storage.getItem('totalSeconds');
    if(totalSeconds) {
      slider.setValue(totalSeconds);
      slider.setLabel('Countdown '+totalSeconds+' seconds');
    }

  },
   // saves value of a slider to loacal storage
   fieldChanged: function(me, slider, thumb, newV, old) {
    console.log('key: '+me.getId()+"\nNew value: "+newV);
    var storage = window.localStorage;
    storage.setItem(me.getId(), newV); // key: slider's id, value: slider's value

  },
  fieldDraged: function(me, slider, thumb, e) {
    this.getTotalSecondsSlider().setLabel('Countdown '+e[0]+' seconds');
  },
// adButtonClicked: function() {
//     console.log('clicked adbutton');
//     if(this.areAdsOn) {
//         AdWhirl.hide();
//         this.areAdsOn = false;
//     } else {
//         AdWhirl.show();
//         this.areAdsOn = true;
//     }
// },

lightCheckboxChecked: function() {
  var storage = window.localStorage;
    storage.setItem('light', '1'); // used in Countdown controller for useBacklight
  },
  lightCheckboxUnchecked: function() {
    var storage = window.localStorage;
    storage.setItem('light', '0'); // used in Countdown controller for useBacklight
  },
  aboutButtonClicked: function() {
    this.getMainView().setActiveItem(2);
        // this.getNavigationView().getNavigationBar().setHideAnimation('slideOut');
      },
      settingsButtonClicked: function() {
        this.getMainView().setActiveItem(1);
      },
      backSettingsClicked: function() {
        this.getMainView().animateActiveItem(0, {type: 'slide', direction: 'right'});
      },
      backAboutClicked: function() {
        this.getMainView().animateActiveItem(1, {type: 'slide', direction: 'right'});
      },
      facebookButtonClicked: function() {
        getLoginStatus(facebookWallPost, function () {
          loginAndCall(facebookWallPost);
        });
       //  if(getLoginStatus()) {
       //     facebookWallPost();
       // } else {
       //  loginAndCall(facebookWallPost);
       // }
     },
     logoutClicked: function() {
      function logout() {
        FB.logout(function(response) {
          alert('logged out');
        });
      }
      logout();
    }

  });
