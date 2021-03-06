var profileFields = [];

CTW.Configure = function (config) {
    if(Meteor.settings.environment === "production")
        if(!config || !config.pro.APP_ID || !config.pro.secret) {
            throw new Error("Meteor settings for accounts-facebook-cordova not configured correctly.");
        }
    if(Meteor.settings.environment === "development")
        if(!config || !config.dev.APP_ID || !config.dev.secret) {
            throw new Error("Meteor settings for accounts-facebook-cordova not configured correctly.");
        }
    if(config.profileFields) {
        _.each(config.profileFields, function (p) {
            if(_.indexOf(profileFields, p) == -1)
                profileFields.push(p);
        });
    }
    ServiceConfiguration.configurations.remove({
        service: "facebook"
    });
    if(Meteor.settings.environment === "production")
        ServiceConfiguration.configurations.insert({
            service: "facebook",
            appId: config.pro.APP_ID,
            secret: config.pro.secret
        });
    if(Meteor.settings.environment === "development")
        ServiceConfiguration.configurations.insert({
            service: "facebook",
            appId: config.dev.APP_ID,
            secret: config.dev.secret
        });
    // https://github.com/meteor/meteor/blob/devel/packages/accounts-facebook/facebook.js#L15
    Accounts.addAutopublishFields({
        // publish all fields including access token, which can legitimately
        // be used from the client (if transmitted over ssl or on
        // localhost). https://developers.facebook.com/docs/concepts/login/access-tokens-and-types/,
        // "Sharing of Access Tokens"
        forLoggedInUser: ['services.facebook'],
        forOtherUsers: [
            // https://www.facebook.com/help/167709519956542
            'services.facebook.id', 'services.facebook.username', 'services.facebook.gender'
        ]
    });
};

CTW.getProfileFields = function () {
    return profileFields;
};