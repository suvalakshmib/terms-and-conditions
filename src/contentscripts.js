// function extractTermsAndConditions() {
//     const termsAndConditions = document.querySelectorAll('p, span, div').innerText;
//     return termsAndConditions;
//   }
  
//   chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     if (request.action === 'extractTermsAndConditions') {
//       const termsAndConditions = extractTermsAndConditions();
//       sendResponse({ data: termsAndConditions });
//     }
//   });
//   console.log('from contentscripts.js');