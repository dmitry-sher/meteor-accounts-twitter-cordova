Package.describe({
    name: "dmitrysher:cordova-twitter",
    version: "0.0.1",
    summary: "Login service for Facebook accounts (works with cordova)",
    git: "https://github.com/particle4dev/meteor-accounts-facebook-cordova.git"
});

var both = ['client', 'server'];
var client = 'client';
var server = 'server';
var browser = 'web.browser';
var cordova = 'web.cordova';

Cordova.depends({
    'twitter-connect-plugin': '0.6.0'
});

Package.registerBuildPlugin({
    name: 'configuration',
    use: [
        'check',
        'ejson'
    ],
    sources: [
        'plugin/compile.configuration.plugin.js'
    ]
});

Package.on_use(function(api) {
    api.versionsFrom("1.0");
    api.use([
        'underscore',
        'accounts-base',
        'accounts-oauth',
        'service-configuration'
    ], both);
    // Export Accounts (etc) to packages using this one.
    api.imply('accounts-base', both);
    api.use(['http', 'random'], server);
    api.use(['accounts-ui'], client);
    // Files
    api.add_files(['src/common.js'], both);

    api.add_files([
        'src/server/serverKey.js',
        'src/server/api.js',
        'src/server/loginHandler.js'
    ], server);

    api.add_files([
        'src/cordova/permissions.js',
        'src/cordova/api.js'
    ], cordova);

    api.add_files([
        'src/browser/config.js'
    ], browser);

    api.add_files('src/login.js', 'web');
    if(api.export)
        api.export('CTW');
});
