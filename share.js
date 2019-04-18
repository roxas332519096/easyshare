// //facebook sdk初始化
// FB.init({
//   appId: "813481075680992",
//   status: true, // check login status
//   cookie: true, // enable cookies to allow the server to access the session
//   xfbml: true, // parse XFBML
//   channelURL: "http://www.comehike.com/channel.html", // channel.html file
//   oauth: true // enable OAuth 2.0
// });
// //facebook分享
// function facebookShare() {
//   FB.ui(
//     {
//       method: "share",
//       display: "popup",
//       href: "www.baidu.com",
//       quote: totalText
//     },
//     function(response) {}
//   );
// }

// //twitter分享
// function twitterShare() {
//   window.open(`https://twitter.com/share?text=${totalText}&url=${url}`);
// }

// //linkedin分享

// function linkedinShare() {
//   window.open(`
//                 https://www.linkedin.com/cws/share?url=http://www.baidu.com
//             `);
// }

// //获取title

// let title = document.title;

// //获取网址
// let url = window.location.href;

// //获取所选文字内容
// let totalText = "";
// $("div").on("mouseup", getSelectText);
// function getSelectText() {
//   let selectObj = window.getSelection();
//   let selectText = $.trim(selectObj.toString());
//   if (!selectText || selectObj.anchorNode !== selectObj.focusNode) {
//   }
//   if (selectObj.baseOffset !== 0) {
//     totalText += selectObj.anchorNode.textContent.substring(
//       0,
//       selectObj.anchorOffset
//     );
//   }
//   if (selectObj.focusOffset !== selectObj.focusNode.textContent.length) {
//     totalText += selectObj.focusNode.textContent.substring(
//       selectObj.focusOffset
//     );
//   }
//   totalText = selectText;
// }

window.share = function() {
  return {
    facebookInit(appId) {
      return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open("GET", "http://connect.facebook.net/en_US/all.js");
        request.onreadystatechange = () => {
          if (request.readyState === 4) {
            if (request.status === 200 || request.status === 304) {
              let data = request.responseText;
              resolve(data);
            } else {
              reject(error);
            }
          }
        };
        request.send();
      }).then(res => {
        let fbindex = res.indexOf("(function");
        let FBfunction = res.substr(fbindex);
        eval(FBfunction);
        FB.init({
          appId,
          status: true, // check login status
          cookie: true, // enable cookies to allow the server to access the session
          xfbml: true, // parse XFBML
          channelURL: "http://www.comehike.com/channel.html", // channel.html file
          oauth: true // enable OAuth 2.0
        });
      });
    },
    twitter(url, text) {
      window.open(`https://twitter.com/share?text=${text}&url=${url}`);
    },
    linkedin(url) {
      window.open(`https://www.linkedin.com/cws/share?url=${url}`);
    },
    facebook(appId, href, quote) {
      this.facebookInit(appId).then(() => {
        FB.ui(
          {
            method: "share",
            display: "popup",
            href,
            quote
          },
          function(response) {}
        );
      });
    }
  };
};
