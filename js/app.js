var app = {

  defaultLocales: {
    '*' : 'en-us',
    'en': 'en-us',
    'es': 'es-us',
  },

  populateReferer: function(){
    $('.referer').html( this.getReferer() );
  },

  populateBrowser: function(){
    $('#browserMake').html(app.browserDetect.browser);
    $('#browserVersion').html(app.browserDetect.version);
  },

  determineRedirect: function(){
    window.location.replace("/" + this.getLanguage() + "/?referer=" + this.getReferer() );
  },

  getLanguage: function(){
    var locale = window.navigator.userLanguage || window.navigator.language;
    if(locale != null){
      locale = locale.toLowerCase();
    }
    return locale;
  },

  languageNotFoundRedirect: function(){
    var self = this;

    var locale = self.getLanguage();
    var majorLoacle = locale.split("-")[0];
    var destinationLocale = self.defaultLocales["*"];
    if(self.defaultLocales[majorLoacle] != null){
      destinationLocale = self.defaultLocales[majorLoacle];
    }
    $('#nearestLanguage').attr("href", "/" + destinationLocale + "/?referer=" + this.getReferer());

    setTimeout(function(){
      window.location.replace("/" + destinationLocale + "/?referer=" + self.getReferer() );
    }, 5 * 1000);
  },

  getReferer: function(){
    var referer = this.getUrlVars()['referer']
    if(referer != null && referer != 'undefined'){
      return referer;
    }else if(document.referrer != null){
      return document.referrer.split('/')[2];
    }else{
      return null;
    }
  },

  getUrlVars: function(){
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
    });
    return vars;
  },

  browserDetect: {
    init: function () {
      this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
      this.version = this.searchVersion(navigator.userAgent)
        || this.searchVersion(navigator.appVersion)
        || "an unknown version";
      this.OS = this.searchString(this.dataOS) || "an unknown OS";
    },
    searchString: function (data) {
      for (var i=0;i<data.length;i++) {
        var dataString = data[i].string;
        var dataProp = data[i].prop;
        this.versionSearchString = data[i].versionSearch || data[i].identity;
        if (dataString) {
          if (dataString.indexOf(data[i].subString) != -1)
            return data[i].identity;
        }
        else if (dataProp)
          return data[i].identity;
      }
    },
    searchVersion: function (dataString) {
      var index = dataString.indexOf(this.versionSearchString);
      if (index == -1) return;
      return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
    },
    dataBrowser: [
      {
        string: navigator.userAgent,
        subString: "Chrome",
        identity: "Chrome"
      },
      {   string: navigator.userAgent,
        subString: "OmniWeb",
        versionSearch: "OmniWeb/",
        identity: "OmniWeb"
      },
      {
        string: navigator.vendor,
        subString: "Apple",
        identity: "Safari",
        versionSearch: "Version"
      },
      {
        prop: window.opera,
        identity: "Opera",
        versionSearch: "Version"
      },
      {
        string: navigator.vendor,
        subString: "iCab",
        identity: "iCab"
      },
      {
        string: navigator.vendor,
        subString: "KDE",
        identity: "Konqueror"
      },
      {
        string: navigator.userAgent,
        subString: "Firefox",
        identity: "Firefox"
      },
      {
        string: navigator.vendor,
        subString: "Camino",
        identity: "Camino"
      },
      {   // for newer Netscapes (6+)
        string: navigator.userAgent,
        subString: "Netscape",
        identity: "Netscape"
      },
      {
        string: navigator.userAgent,
        subString: "MSIE",
        identity: "Explorer",
        versionSearch: "MSIE"
      },
      {
        string: navigator.userAgent,
        subString: "Gecko",
        identity: "Mozilla",
        versionSearch: "rv"
      },
      {     // for older Netscapes (4-)
        string: navigator.userAgent,
        subString: "Mozilla",
        identity: "Netscape",
        versionSearch: "Mozilla"
      }
    ],
    dataOS : [
      {
        string: navigator.platform,
        subString: "Win",
        identity: "Windows"
      },
      {
        string: navigator.platform,
        subString: "Mac",
        identity: "Mac"
      },
      {
           string: navigator.userAgent,
           subString: "iPhone",
           identity: "iPhone/iPod"
        },
      {
        string: navigator.platform,
        subString: "Linux",
        identity: "Linux"
      }
    ]
  },

};