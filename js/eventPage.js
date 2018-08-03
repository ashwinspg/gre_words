setInterval(function(){
    var dictKeys = Object.keys(gre_dict);
    var keyIndex = Math.floor(Math.random() * 100000) % dictKeys.length;

    var key = dictKeys[keyIndex];
    var value = gre_dict[key];

    var obj = {
        type: "basic",
        title: key,
        message: value,
        iconUrl: "image/icon48.png"
    };

    chrome.notifications.clear('notification', function(){
        chrome.notifications.create('notification', obj);
    });
}, (600 * 1000));