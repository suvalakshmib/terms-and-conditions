
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
   if (request.action === "setLocalData") {
    chrome.storage.local.set({ myKey: request.data.replace(/\n/g, '') 
  }, 
  function () {
      console.log("req",request.data);
      sendResponse({ message: "Data received and local storage updated." });
      chrome.runtime.sendMessage({action:"showData",data:JSON.stringify(request.data.replace(/\n/g, '').replace(/[^a-zA-Z0-9,;\-.!? ]/g, '').trim())
    });
    });
  }
});
  
  
  