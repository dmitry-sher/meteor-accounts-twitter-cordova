var _permissions = [];
/**
 *
 */
CTW.Configure = function (permissions) {
    _.each(permissions, function (p) {
        if(_.indexOf(_permissions, p) == -1)
            _permissions.push(p);
    });
};
/**
 *
 *
 */
CTW.getPermissions = function () {
    return _permissions;
};