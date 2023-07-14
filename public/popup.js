
// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("checkpage").addEventListener("click", function () {
//     window.location.href = "button.html";
//   });
// });
const labels = document.querySelectorAll(".tab-label");
labels.forEach(function (label) {
  label.addEventListener("click", function () {
    labels.forEach(function (l) {
      l.classList.remove("active");
    });
    this.classList.add("active");
  });
});
const backButton = document.getElementById("back");
const closeButton = document.getElementById("close");

backButton.addEventListener("click", function () {
  window.history.back("./popup.html");
});

closeButton.addEventListener("click", function () {
  window.close();
});

const config = {
  token: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTUwODY1MDIsImRhdGEiOnsiaWQiOiI2NDUwYTUwMTNkZTE4OWIxNzA1MTk4NDMiLCJlbWFpbCI6Inl1dmFyYWpAeW9wbWFpbC5jb20ifSwiaWF0IjoxNjgzNTUwNTAyfQ.nS0ZaGsGMV8LRwYNJvjA3eqmxBOKLOj-UjmxRGL8aXo",
  },
};

function toggleLoader(show) {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = show ? "block" : "none";
  }
}

function toggleSummaryText(show) {
  const summary = document.getElementById("summary-id");
  if (summary) {
    summary.style.display = show ? "block" : "none";
  }
}

function toggleproblemsText(show) {
  const problem = document.getElementById("problems-id");
  if (problem) {
    problem.style.display = show ? "block" : "none";
  }
}

function toggleHeaderText(show) {
  const HeaderText = document.getElementById("header-text");
  if (HeaderText) {
    HeaderText.style.display = show ? "block" : "none";
  }
}
function toggleshowContent(show) {
  const ContentText = document.getElementById("content");
  if (ContentText) {
    ContentText.style.display = show ? "flex" : "none";
  }
}


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("req",request)
  if (request.action === "setLocalData") {
   chrome.storage.local.set({ myKey:request.data}, function () {
     console.log(JSON.stringify("requestData",request.data));
     sendResponse({ message: "Data received and local storage updated." });
    //  chrome.runtime.sendMessage({action:"showData",data:request.data});
   });
 }
});

chrome.storage.local.get("myKey", async function (result) {
  let terms = "";
  terms = result.myKey.replace(/[^a-zA-Z0-9,:;\-.!?! ]/g, '').trim()
   .replace(/[^\w\s]/gi, '').trim()
  .replace(/\n/g, '').trim()
;
  if (terms) {
    toggleLoader(true);
    toggleSummaryText(false);
    toggleproblemsText(false);
    toggleHeaderText(false);
    toggleshowContent(false);
    const apiUrl = "http://localhost:8001/api/v1/terms/get_summary";
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: config.token.Authorization,
      },
      body: JSON.stringify({
        terms: terms,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          console.log(response)
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        toggleLoader(false);
        toggleSummaryText(true);
        toggleproblemsText(true);
        toggleHeaderText(true);
        toggleshowContent(true);
        if(data.status === 'failed'){
          toggleLoader(false);
          toggleSummaryText(false);
          toggleproblemsText(false);
          toggleHeaderText(false);
          toggleshowContent(false);
          throw new Error(data.message)
          
        }
        if (data && data.data) {
          const summary = data.data.summary;
          const problems = data.data.problems;

          const summarywithoutNumbers = summary.replace(/^\d+\.\s+/gm, "");
          const summaryList = document.getElementById("summary");
          const span1 = document.createElement("span");
          span1.setAttribute("class", "span-element");
          summaryList.innerHTML = "";
          const summaryItems = summarywithoutNumbers.split("\n");
          summaryItems.map((summaryItems) => {
            const li = document.createElement("li");
            li.className = "summary-li";
            li.textContent = summaryItems;
            const span = document.createElement("span");
            span.className= "span-element";
            li.appendChild(span);
            summaryList.appendChild(li);
          });

          const problemwithoutNumber = problems.replace(/^\d+\.\s+/gm, "");
          const problemList = document.getElementById("problems");
          const span2 = document.createElement("span");
          span2.setAttribute("class", "span-element");
          problemList.innerHTML = "";
          const problemItems = problemwithoutNumber.split("\n");
          problemItems.map((problemItems) => {
            const li = document.createElement("li");
            li.textContent = problemItems;
            li.className = "problem-li";
            const span = document.createElement("span");
            span.className= "span-element";
            li.appendChild(span);
            problemList.appendChild(li);
          });
        
          const dataElement = document.getElementById("data");
          dataElement.innerHTML = ""; // Clear existing content
          const dataItems = terms;
          if (dataItems) {
            const li = document.createElement("p");
            li.textContent = ` ${dataItems}`;
            li.className = "data-li";
            dataElement.appendChild(li);
          }
        }
        toggleLoader(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        const errorMessage = document.createElement('p');
        errorMessage.className = 'error-p';
        errorMessage.textContent = error.message;
        document.body.appendChild(errorMessage);
        hideLoader();
        HideSummaryText();
      });
  }
});

