// (function () {
//     function fnAddButtons() {
//       var button = document.createElement("button");
//       button.innerHTML = "click me";
//       button.onclick = function () {
//         alert("Button clicked!");
//       };
//       button.setAttribute("style", "background-color: #6d4c41; cursor:pointer; color: white; font-size: 16px; padding: 10px 20px; border:none;outline:none;margin-left:30px;border-radius:20px ;top:10%;");
//       document.querySelector(".cid-s3MpX4AOpg .mbr-image-title").appendChild(button);
//     }
//     fnAddButtons();
//   })();
  



// (function () {
//     function fnAddButtons() {
//       var button = document.createElement("button");
//       button.innerHTML = "click me";
//       button.onclick = function () {
//         chrome.runtime.sendMessage({ action: "openPopup" });
//       };
//       button.setAttribute(
//         "style",
//         "background-color: #6d4c41; color: white; font-size: 16px; padding: 10px 20px; border:none;outline:none;margin-left:30px;border-radius:20px ;top:10%;cursor:pointer"
//       );
//       document
//         .querySelector(".cid-s3MpX4AOpg .mbr-image-title")
//         .appendChild(button);
//     }
//     fnAddButtons();
//   })();
  
// const termsAndConditionsText = "terms and conditions";
// const textNodes = [...document.querySelectorAll("body *")].filter(node => {
//   return node.nodeType === Node.TEXT_NODE && node.textContent.toLowerCase().includes(termsAndConditionsText);
// });

// // Add a button to the page below the terms and conditions text
// if (textNodes.length > 0) {
//   const button = document.createElement("button");
//   button.textContent = "Open Extension";
//   textNodes[0].parentNode.insertBefore(button, textNodes[0].nextSibling);
// }
