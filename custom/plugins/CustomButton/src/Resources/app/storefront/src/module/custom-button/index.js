import './component/custom-button';

Shopware.Module.register('custom-button', {
    type: 'plugin',
    name: 'My Custom Button',
    title: 'custom-button.general.title',
    description: 'custom-button.general.descriptionTextModule',
    color: '#ff3d58',
    icon: 'default-object-gear',
    favicon: 'icon-module-settings.png',
    routes: {
        'detail.page': {
            component: 'custom-button',
            path: 'detail/:id'
        },
        'listing.page': {
            component: 'custom-button',
            path: 'listing'
        }
    }
});
