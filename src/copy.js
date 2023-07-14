// // const config = {
// //   token: {
// //     Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTUwODY1MDIsImRhdGEiOnsiaWQiOiI2NDUwYTUwMTNkZTE4OWIxNzA1MTk4NDMiLCJlbWFpbCI6Inl1dmFyYWpAeW9wbWFpbC5jb20ifSwiaWF0IjoxNjgzNTUwNTAyfQ.nS0ZaGsGMV8LRwYNJvjA3eqmxBOKLOj-UjmxRGL8aXo",
// //   },
// // };

// // function toggleElementDisplay(elementId, show) {
// //   const element = document.getElementById(elementId);
// //   if (element) {
// //     element.style.display = show ? "block" : "none";
// //   }
// // }

// // chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
// //   if (message.action === 'openPopup') {
// //     window.open('popup.html', '_blank');
// //   }
// // });

// // chrome.storage.local.get("myKey", function (result) {
// //   const terms = result.myKey;
// //   if (terms) {
// //     const apiUrl = "http://localhost:8001/api/v1/terms/get_summary";
// //     toggleElementDisplay("loader", true);
// //     toggleElementDisplay("loading", true);
// //     toggleElementDisplay("summary-id", false);
// //     toggleElementDisplay("problems-id", false);
// //     toggleElementDisplay("header-text", false);

// //     fetch(apiUrl, {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //         Authorization: config.token.Authorization,
// //       },
// //       body: JSON.stringify({ terms }),
// //     })
// //       .then((response) => {
// //         if (!response.ok) {
// //           throw new Error(`HTTP error! status: ${response.status}`);
// //         }
// //         return response.json();
// //       })
// //       .then((data) => {
// //         toggleElementDisplay("loader", false);
// //         toggleElementDisplay("loading", false);
// //         toggleElementDisplay("summary-id", true);
// //         toggleElementDisplay("problems-id", true);
// //         toggleElementDisplay("header-text", true);

// //         if (data && data.data) {
// //           const { summary, problems } = data.data;

// //           const summaryList = document.getElementById("summary");
// //           summaryList.innerHTML = "";
// //           summary.replace(/^\d+\.\s+/gm, "").split("\n").forEach((item) => {
// //             const li = document.createElement("li");
// //             li.className = "summary-li";
// //             li.textContent = item;
// //             summaryList.appendChild(li);
// //           });

// //           const problemList = document.getElementById("problems");
// //           problemList.innerHTML = "";
// //           problems.replace(/^\d+\.\s+/gm, "").split("\n").forEach((item) => {
// //             const li = document.createElement("li");
// //             li.textContent = item;
// //             li.className = "problem-li";
// //             problemList.appendChild(li);
// //           });
// //         }
// //       })
// //       .catch((error) => {
// //         console.log("Fetch error:", error);
// //         toggleElementDisplay("loader", false);
// //         toggleElementDisplay("summary-id", false);
// //         toggleElementDisplay("problems-id", false);
// //       });
// //   }
// // });


// // //popup.js


// // document.addEventListener("DOMContentLoaded", function () {
// //   document.getElementById("checkpage").addEventListener("click", function () {
// //     window.location.href = "button.html";
// //   });
// //   });


// // const config = {
// //   token: {
// //     Authorization:
// //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTUwODY1MDIsImRhdGEiOnsiaWQiOiI2NDUwYTUwMTNkZTE4OWIxNzA1MTk4NDMiLCJlbWFpbCI6Inl1dmFyYWpAeW9wbWFpbC5jb20ifSwiaWF0IjoxNjgzNTUwNTAyfQ.nS0ZaGsGMV8LRwYNJvjA3eqmxBOKLOj-UjmxRGL8aXo",
// //   },
// // };

// // function toggleLoader(show) {
// //   const loader = document.getElementById("loader");
// //   if (loader) {
// //     loader.style.display = show ? "block" : "none";
// //   }
// // }

// // function toggleSummaryText(show) {
// //   const summary = document.getElementById("summary-id");
// //   if (summary) {
// //     summary.style.display = show ? "block" : "none";
// //   }
// // }

// // function toggleproblemsText(show) {
// //   const problem = document.getElementById("problems-id");
// //   if (problem) {
// //     problem.style.display = show ? "block" : "none";
// //   }
// // }

// // function toggleLoadingText(show) {
// //   const LoadingText = document.getElementById("loading");
// //   if (LoadingText) {
// //     LoadingText.style.display = show ? "block" : "none";
// //   }
// // }

// // function toggleHeaderText(show) {
// //   const HeaderText = document.getElementById("header-text");
// //   if (HeaderText) {
// //     HeaderText.style.display = show ? "block" : "none";
// //   }
// // }



// // chrome.storage.local.get("myKey", function (result) {
// //   let terms = result.myKey;
// //   if (terms) {
// //     const apiUrl = "http://localhost:8001/api/v1/terms/get_summary";
// //     toggleLoader(true);
// //     toggleLoadingText(true);
// //     toggleSummaryText(false);
// //     toggleproblemsText(false);
// //     toggleHeaderText(false);
// //     fetch(apiUrl, {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //         Authorization: config.token.Authorization,
// //       },
// //       body: JSON.stringify({
// //         terms: terms,
// //       }),
// //     })
// //       .then((response) => {
// //         if (!response.ok) {
// //           throw new Error(`HTTP error! status: ${response.status}`);
// //         }
// //         return response.json();
// //       })
// //       .then((data) => {
// //         toggleLoader(false);
// //         toggleLoadingText(false);
// //         toggleSummaryText(true);
// //         toggleproblemsText(true);
// //         toggleHeaderText(true);
// //         if (data && data.data) {
// //           const summary = data.data.summary;
// //           const problems = data.data.problems;



// //           const summarywithoutNumbers = summary.replace(/^\d+\.\s+/gm, "");
// //           const summaryList = document.getElementById("summary");
// //           summaryList.innerHTML = "";
// //           const summaryItems = summarywithoutNumbers.split("\n");
// //           summaryItems.map((summaryItems) => {
// //             const li = document.createElement("li");
// //             li.className = "summary-li";
// //             li.textContent = summaryItems;
// //             summaryList.appendChild(li);
// //           });
// //           const problemwithoutNumber = problems.replace(/^\d+\.\s+/gm, "");
// //           const problemList = document.getElementById("problems");
// //           problemList.innerHTML = "";
// //           const problemItems = problemwithoutNumber.split("\n");
// //           problemItems.map((problemItems) => {
// //             const li = document.createElement("li");
// //             li.textContent = problemItems;
// //             li.className = "problem-li";
// //             problemList.appendChild(li);
// //           });
// //         }
// //         toggleLoader(false);
// //       })
// //       .catch((error) => {
// //         console.log("Fetch error:", error);
// //         hideLoader();
// //         HideSummaryText();
// //       });
// //   }
// // });

// //  // Listen for a message from the background script
// //  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
// //   if (request.action === "showData") {
// //     // Retrieve the data from the message
// //     var data = request.data;

// //     // Display the data in the popup
// //     var dataElement = document.getElementById("data");
// //     dataElement.textContent = JSON.stringify(data);
// //   }
// // });

// // // Send a message to the background script to request the data
// // chrome.runtime.sendMessage({ action: "getData" });


// // // document.addEventListener('DOMContentLoaded',function(){
// // //   var myButton= document.getElementById("checkpage");
// // //   myButton.addEventListener('click',function(){})
// // // })

// // // {
// // //   "name": "Updated Text",
// // //   "version": "1.0",
// // //   "manifest_version": 3,
// // //   "description": "Reads text",
// // //   "permissions": ["storage", "activeTab", "tabs"],
// // //   "action": {
// // //     "default_popup": "popup.html",
// // //     "default_description": "Selecting text"
// // //   },
// // //   "background": {
// // //     "service_worker": "background.js"
// // //   },
// // //   "content_scripts": [
// // //     {
// // //       "matches": ["<all_urls>"],
// // //       "js": ["content.js"]
// // //     }
// // //   ]
// // // }













// // const TextAreaContent = document.getElementById("data-input");
// // const maxCharacter = 17000;

// // chrome.storage.local.get("myKey", async function (result) {
// //   if (result.myKey) {
// //     TextAreaContent.value = result.myKey;
  
// //     let spanval = TextAreaContent.value.slice(0, maxCharacter);
// //     let val = TextAreaContent.value.slice(maxCharacter);
  
// //     if (spanval.length > 17000) {
// //       spanval = spanval.slice(0, 17000);
// //     }
  
// //     let combinedValue = spanval + val;
// //     TextAreaContent.value = combinedValue;
  
// //     let span = document.getElementById("current1");
// //     span.textContent = spanval;
// //     console.log("spanval", spanval);
  
// //     if (maxCharacter) {
// //       let errorSpan = document.getElementById("extra1");
// //       errorSpan.className = "error";
// //       errorSpan.textContent = val;
// //       console.log("val", val);
// //     }
// //     TextAreaContent.value = spanval + val;
// //   }

  
// //   const countCharacters = () => {
// //     const div = document.getElementById("data-input");
// //     const enteredText = div.innerText;
// //     const numofEnteredCharas = enteredText.length;
// //     const displayNumberofcharacters = document.getElementById("current");
// //     const remainingChars = numofEnteredCharas;
// //     displayNumberofcharacters.textContent =
// //       "Remaining characters: " + remainingChars + "/" + div.getAttribute("maxlength");
// //   };
  
// //   // Call the countCharacters function initially to display the count
// //   countCharacters();
  
// //   const div = document.getElementById("data-input");
// //   div.addEventListener("input", countCharacters);
// //   div.addEventListener("keyup", function (event) {
// //     if (event.key === "Delete" || event.key === "Backspace") {
// //       countCharacters();
// //     }
// //   });
  

  

// //   // const countCharacters = () => {
// //   //   let numofEnteredCharas = TextAreaContent.value.length;
// //   //   const displayNumberofcharacters = document.getElementById("current");
// //   //   displayNumberofcharacters.textContent =
// //   //     "Maximum text limit: " + numofEnteredCharas + "/17000";
// //   //   document.body.appendChild(displayNumberofcharacters);
// //   // };

// //   // countCharacters();
// //   // TextAreaContent.addEventListener("keyup", countCharacters);
// // });

// // document.addEventListener("DOMContentLoaded", function () {
// //   document.getElementById("checkpage").addEventListener("click", function () {
// //     window.location.href = "button.html";
// //   });
// // });



// // copy2 of text js

// const keyVal = document.getElementById("data-input");
// keyVal.addEventListener("input",function(){
//   console.log(keyVal.value.length)
//   const display = document.getElementById("current");
//   display.textContent =
//   "Maximum character limit:"+keyVal.value.length +"/17000";
// })

// const TextAreaContent = document.getElementById("data-input");
// const maxCharacter = 17000;

// chrome.storage.local.get("myKey", async function (result) {
//   if (result.myKey ) {
//     TextAreaContent.value = result.myKey;
  
//     let spanval = TextAreaContent.value.slice(0, maxCharacter);
//     let val = TextAreaContent.value.slice(maxCharacter);
  
//     if (spanval.length > 17000) {
//       spanval = spanval.slice(0, 17000);
//     }
  
//     let combinedValue = spanval + val;
//     TextAreaContent.value = combinedValue;
  
//     let span = document.getElementById("current1");
//     span.textContent = spanval;
//     console.log("spanval", spanval);
  
//     if (maxCharacter) {
//       let errorSpan = document.getElementById("extra1");
//       errorSpan.className = "error";
//       errorSpan.textContent = val;
//       console.log("val", val);
//     }
//     TextAreaContent.value = spanval + val;
//   }

//   const countCharacters = () => {
//     const text = document.getElementById("data-input");
//     const textVal = TextAreaContent.value.length;
//     const display = document.getElementById("current");
//     display.textContent =
//     "Maximum character limit:"+textVal +"/17000";
//   };
//   // Call the countCharacters function initially to display the count
//   countCharacters();
//    TextAreaContent.addEventListener("input", countCharacters);

// //   const currentVal = document.getElementById("data-input");
// // currentVal.addEventListener("input", countCharacters);
// // currentVal.addEventListener("keydown", function (event) {
// //   if (event.keyCode === 46 || event.keyCode === 8) {
// //     countCharacters();
// //   }
// // });



// });

// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("checkpage").addEventListener("click", function () {
//     window.location.href = "button.html";
//   });
// });




