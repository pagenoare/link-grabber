chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        if(request.command == "parse") {
            var links = document.getElementsByTagName('a');
            var result = [];
            for(i = 0; i < links.length; i++)
            {
                result.push(links[i].href);
            }
            sendResponse({'links': result});
        } else {
            sendResponse({});
        }
    }
);

