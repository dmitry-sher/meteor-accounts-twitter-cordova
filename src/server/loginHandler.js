// https://github.com/meteor/meteor/blob/devel/packages/facebook/facebook_server.js
Accounts.registerLoginHandler(function(loginRequest) {
    if(!loginRequest.twitter) {
        return undefined;
    }

    loginRequest = loginRequest.authResponse;

    var identity = CTW.getIdentity(loginRequest.accessToken);
    var profilePicture = CTW.getProfilePicture(loginRequest.accessToken);

    var serviceData = {
        accessToken: loginRequest.accessToken,
        expiresAt: (+new Date) + (1000 * loginRequest.expiresIn)
    };

    var whitelisted = ['id', 'email', 'name', 'first_name',
        'last_name', 'link', 'username', 'gender', 'locale', 'age_range'];

    var fields = _.pick(identity, whitelisted);
    _.extend(serviceData, fields);

    var options = {profile: {}};
    var profileFields = _.pick(identity, CTW.getProfileFields());
    _.extend(options.profile, profileFields);

    options.profile.avatar = profilePicture;

    // https://github.com/meteor/meteor/blob/devel/packages/accounts-base/accounts_server.js#L1129
    return Accounts.updateOrCreateUserFromExternalService("facebook", serviceData, options);

});
