Ext.define("Flashbang.view.Main", {
    extend: 'Ext.Panel',
    requires: [
    'Flashbang.view.Grenade',
    'Flashbang.view.Settings'
    ],
    config: {
        activeItem: 0,
        layout: {
            type:'card',
            animation: {type:'slide'}
        },
        id: 'mainView',

        items: [
        {
            xtype: 'grenade',
            title: 'Grenade'
        },
        {
            xtype: 'panel',
            items: [
            {
                xtype: 'titlebar',
                title: 'Settings',
                items: [
                {
                    ui: 'back',
                    text: 'Back',
                    id: 'backSettings'
                },
                {
                    iconCls: 'info',
                    iconMask: true,
                    align: 'right',
                    id: 'aboutButton'
                }
                ]
            },
            {
                xtype: 'settings'
            }]


        },
        {
            xtype: 'panel',
            items: [
            {
                xtype: 'titlebar',
                title: 'Credits',
                items: [
                {
                    ui: 'back',
                    text: 'Back',
                    id: 'backAbout'
                }
                ]
            },
            {
                xtype: 'about',
            }]


        }

        ]

    }

});
