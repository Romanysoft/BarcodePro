(function () {
    window.RTYConfig = {
        appName:"BarcodePro",
        appID:"com.romanysoft.app.macos.BarcodePro",
        documentTitle:"BarcodePro By Romanysoft",
        supportPlatforms:["Mac"],
        googleUA:"UA-76676167-17",
        gitHome:"//github.com/Romanysoft/BarcodePro",
        reportIssueUrl:"//github.com/Romanysoft/BarcodePro/issues",
        changeLogUrl:"//github.com/Romanysoft/BarcodePro/wiki/Changelog",
        wikiUrl:"//github.com/Romanysoft/BarcodePro/wiki",
        jumpLocation:"https://www.romanysoft.net/barcodepro/",
        romanysoftHome:"//www.romanysoft.com",
        copyright:"Copyright © " + (new Date()).getFullYear() + " Romanysoft LAB."
    };
    
    if(window.RTYConfig.jumpLocation){
        window.location = window.RTYConfig.jumpLocation;
    }
})();