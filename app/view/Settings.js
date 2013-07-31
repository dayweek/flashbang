Ext.define('Flashbang.view.Settings', {
    extend: 'Ext.form.Panel',
    xtype: 'settings',

    config: {
        scrollable: false,
        id: 'settings',
        padding: 10,

        items: [
        {
            xtype: 'fieldset',
                    defaults: {
            labelAlign: 'top',
            labelCls: 'labelText'
        },
        layout: {
            pack: 'center'
        },
            items: [
                    {
            xtype: 'sliderfield',
            id: 'totalSeconds', // used for storing value in local storage // TODO rename it
            value: 5,
            label: 'Countdown 5 seconds',
            minValue: 3,
            maxValue: 20,

        },
        {
            xtype: 'checkboxfield',
            label: 'Backlight',
            id: 'lightCheckbox'
        },
                {

            xtype: 'button',
            text: 'Share on Facebook',
            id: 'facebookButton'
        }

            ]
        }
        ]

    }
});