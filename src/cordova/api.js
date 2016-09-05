// https://github.com/Wizcorp/phonegap-facebook-plugin#get-status
CTW.getLoginStatus = function (callback) {
	var onError = function (message) {
		callback(new Error(message.errorMessage), null);
	};
	var onSuccess = function (res) {
		callback(null, res);
	};
	TwitterConnect.showUser(onSuccess, onError);
};

// https://github.com/Wizcorp/phonegap-facebook-plugin#login
CTW.loginCordova = function (callback) {
	var onError = function (message) {
		callback(new Error(message.errorMessage), null);
	};
	var onSuccess = function (res) {
		callback(null, res);
	};
    // secret: ".."
    // token: ".."
    // userId: "720173751346847744"
    // userName: "dmitry_sher"
    TwitterConnect.login(onSuccess, onError);
};

CTW.logoutCordova = function (callback) {
    var onError = function (message) {
        callback(new Error(message.errorMessage), null);
    };
    var onSuccess = function (res) {
        callback(null, res);
    };
    TwitterConnect.logout(onSuccess, onError);
};