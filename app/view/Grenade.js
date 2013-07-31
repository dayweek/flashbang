Ext.define('Flashbang.view.Grenade', {
    extend: 'Ext.Container',
    xtype: 'grenade',
    config: {
        layout: 'vbox',
        items: [
        {
            html: 'WARNING!',
            id: 'warning'
        },
        {
          xtype: 'component',
          html: '<div id="settingsButton" class="settings-button"></div>'
      },
      {
        xtype: 'component',
        html: '<div id="grenadeImage" class="grenade-image"></div>'
    },
    {
        xtype: 'container',
        layout: 'hbox',
        items: [

        {
            html: '',
            id: 'counter'

        }
        ]
    }

    ]
}
});