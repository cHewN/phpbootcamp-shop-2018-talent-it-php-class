/*!
 * @license LGPLv3, http://opensource.org/licenses/LGPL-3.0
 * @copyright Aimeos.org, 2015
 */

Ext.ns('MShop.panel.customer');

MShop.panel.customer.ListUi = Ext.extend(MShop.panel.AbstractListUi, {

    recordName : 'Customer',
    idProperty : 'customer.id',
    siteidProperty : 'customer.siteid',
    itemUiXType : 'MShop.panel.customer.itemui',

    autoExpandColumn : 'customer-list-label',

    filterConfig : {
        filters : [{
            dataIndex : 'customer.code',
            operator : '=~',
            value : ''
        }]
    },

    initComponent : function() {
        this.title = MShop.I18n.dt('admin', 'Customer');

        MShop.panel.AbstractListUi.prototype.initActions.call(this);
        MShop.panel.AbstractListUi.prototype.initToolbar.call(this);

        MShop.panel.customer.ListUi.superclass.initComponent.call(this);
    },

    getColumns : function() {
        return [{
            xtype : 'gridcolumn',
            dataIndex : 'customer.id',
            header : MShop.I18n.dt('admin', 'ID'),
            sortable : true,
            width : 50,
            editable : false,
            hidden : true
        }, {
            xtype : 'gridcolumn',
            dataIndex : 'customer.status',
            header : MShop.I18n.dt('admin', 'Status'),
            sortable : true,
            width : 70,
            align : 'center',
            renderer : this.statusColumnRenderer.createDelegate(this)
        }, {
            xtype : 'gridcolumn',
            dataIndex : 'customer.code',
            header : MShop.I18n.dt('admin', 'User name'),
            sortable : true,
            width : 100,
            id : 'customer-list-code'
        }, {
            xtype : 'gridcolumn',
            dataIndex : 'customer.password',
            header : MShop.I18n.dt('admin', 'Password'),
            sortable : false,
            width : 100,
            hidden : true
        }, {
            xtype : 'gridcolumn',
            dataIndex : 'customer.label',
            header : MShop.I18n.dt('admin', 'Full name'),
            sortable : true,
            width : 100,
            id : 'customer-list-label'
        }, {
            xtype : 'gridcolumn',
            dataIndex : 'customer.birthday',
            header : MShop.I18n.dt('admin', 'Birthday'),
            sortable : false,
            width : 100,
            format : 'Y-m-d'
        }, {
            xtype : 'gridcolumn',
            dataIndex : 'customer.dateverified',
            header : MShop.I18n.dt('admin', 'Verification date'),
            sortable : false,
            width : 100,
            format : 'Y-m-d'
        }, {
            xtype : 'datecolumn',
            dataIndex : 'customer.ctime',
            header : MShop.I18n.dt('admin', 'Created'),
            sortable : true,
            width : 130,
            format : 'Y-m-d H:i:s',
            hidden : true
        }, {
            xtype : 'datecolumn',
            dataIndex : 'customer.mtime',
            header : MShop.I18n.dt('admin', 'Last modified'),
            sortable : true,
            width : 130,
            format : 'Y-m-d H:i:s',
            hidden : true
        }, {
            xtype : 'gridcolumn',
            dataIndex : 'customer.editor',
            header : MShop.I18n.dt('admin', 'Editor'),
            sortable : true,
            width : 130,
            hidden : true
        }];
    }

});

Ext.reg('MShop.panel.customer.listui', MShop.panel.customer.ListUi);

// hook this into the main tab panel
Ext.ux.ItemRegistry.registerItem('MShop.MainTabPanel', 'MShop.panel.customer.listui', MShop.panel.customer.ListUi, 35);
