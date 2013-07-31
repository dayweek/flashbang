function loadApp() {

// do not insert any code here :()

                                              try {
                                      // alert('Device is ready! Make sure you set your app_id below this alert.');
                                      FB.init({ appId: "241477832640316", nativeInterface: CDV.FB, useCachedDialogs: false });
                                      } catch (e) {
                                      alert(e);
                                      }

    Ext.application({
        name: 'Flashbang',

        requires: [
        'Ext.MessageBox'
        ],

        views: ['Main', 'Settings', 'About'],
        controllers: ['Main', 'Countdown'],

        icon: {
            '57': 'resources/icons/Icon.png',
            '72': 'resources/icons/Icon~ipad.png',
            '114': 'resources/icons/Icon@2x.png',
            '144': 'resources/icons/Icon~ipad@2x.png'
        },

        isIconPrecomposed: true,

        startupImage: {
            '320x460': 'resources/startup/320x460.jpg',
            '640x920': 'resources/startup/640x920.png',
            '768x1004': 'resources/startup/768x1004.png',
            '748x1024': 'resources/startup/748x1024.png',
            '1536x2008': 'resources/startup/1536x2008.png',
            '1496x2048': 'resources/startup/1496x2048.png'
        },

        launch: function() {
        // run ads
        

        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('Flashbang.view.Main'));
        
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
            );
    }
});
}
