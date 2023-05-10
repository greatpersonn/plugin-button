import './page/custom-button-config';

Shopware.Module.register('custom-button', {
    type: 'plugin',
    name: 'My Custom Button',
    title: 'custom-button.general.menuTitle',
    description: 'custom-button.general.descriptionTextModule',
    color: '#ff3d58',
    icon: 'default-object-gear',
    favicon: 'icon-module-settings.png',
    entity: 'custom_button.config',
    routes: {
        config: {
            component: 'custom-button-config',
            path: 'config'
        }
    },
    settingsItem: {
        group: 'plugins',
        to: 'custom.button.config',
        iconComponent: 'sw-icon-settings'
    }
});
