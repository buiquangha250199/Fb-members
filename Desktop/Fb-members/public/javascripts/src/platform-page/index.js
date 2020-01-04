const componentName = "platformPage";
module.exports = componentName;

const service = require('../app-service');

angular.module(componentName, ['ngRoute', service])
.component("platformPage", {
    controller: PlatformController,
    controllerAs: "self",
    template: require("./template.html"),
    style: require("./style.css")
});

function getPlatform($http) {

    let getPlatformsReq = {
        method: 'GET',
        url: 'https://fb-members.sellpro.vn/api/v1/platforms',
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.token
        }
    } 

    let platforms = [];

    $http(getPlatformsReq).then(function (res) {

        platforms.push(res.data.data.platforms);

    }, function (res) {
        self.res = res.status;
        console.log(self.res);
    });

    return platforms;
}

function PlatformController($location, FacebookPlatformService, $rootScope, $http) {

    let self = this;
    self.hidden = true;

    console.log(localStorage.token);   

    self.platforms = getPlatform($http);

    //////////////////////////////////////////////////////////

    self.platform_id = 1;

    self.setPlatformId = function (id) {
        self.platform_id = id;
        console.log(self.platform_id);
    }

    ////////////////////////////////////////////////////////

    let getlistReq = {
        method: 'GET',
        url: 'https://fb-members.sellpro.vn/api/v1/groups/' + self.platform_id,
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.token
        }
    } 

    $http(getlistReq).then(function (res) {
        self.list = res.data.data.groups;
        console.log(self.list);
        

    }, function (res) {
        self.res = res.status;
        console.log(self.res);
    });


    //////////////////////////////////////////////////////////

    self.csv_link = "https://fb-members.sellpro.vn/api/v1/files/1575886906698_members.csv";

    self.getCsvFile = function (group_id) {
        let getCsvFileReq = {
        method: 'GET',
        url: 'https://fb-members.sellpro.vn/api/v1/members/' + self.group_id,
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.token
        }
    } 

    $http(getCsvFileReq).then(function (res) {
        console.log(res.data.data.csv_link);
        self.csv_link = res.data.data.csv_link;

    }, function (res) {
        self.res = res.status;
        console.log(self.res);
    });
    }

    //////////////////////////////////////////////////////////

    self.show = function (cookie) {

        cookie = JSON.parse(cookie);

        return cookie;
    }

    self.sendCookie = function () {
        // self.cookie = JSON.parse(self.cookie);
        // console.log(self.cookie);
        FacebookPlatformService.SendCookie(JSON.parse(self.cookie), self.platform_id, function (response) {
            if (response.data.success) {
                self.hidden = false;
                self.typeAlert = true;
                self.iconMsg = 'fas fa-check-circle';
                self.msg = "Success!";
                self.cookie = null;
                console.log(response.data);
            } else {
                self.hidden = false;
                self.typeAlert = false;
                self.iconMsg = 'fas fa-exclamation-triangle';
                self.msg = response.data.reason;
                console.log(response.data);
            }
        });

        //event.preventDefault();
    };

    ////////////////////////////////////////////////////////////////

    self.sendLink = function () {
        FacebookPlatformService.SendLink(self.link, self.platform_id, function (response) {
            if (response.data.success) {
                self.hidden = false;
                self.typeAlert = true;
                self.iconMsg = 'fas fa-check-circle';
                self.msg = 'Success!';
                self.link = null;
                console.log(response.data);

                let getlistReq = {
                    method: 'GET',
                    url: 'https://fb-members.sellpro.vn/api/v1/groups/' + self.platform_id,
                    headers: {
                        'Content-Type': 'application/json',
                        'token': localStorage.token
                    }
                } 

                $http(getlistReq).then(function (res) {
                    self.list = res.data.data.groups;

                }, function (res) {
                    self.res = res.status;
                    console.log(self.res);
                });
                
            } else {
                self.hidden = false;
                self.typeAlert = false;
                self.iconMsg = 'fas fa-exclamation-triangle';
                self.msg = response.data.reason;
                console.log(response.data);
            }
        });

        //event.preventDefault();
    };

}