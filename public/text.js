const TextAreaContent = document.getElementById("data-input");
const maxCharacter = 17000;

const dataInput = document.getElementById("data-input");
const button1 = document.getElementById("checkpage");
const disableButton = () => {
  const validLength =
    dataInput?.querySelector("#current1")?.textContent?.length ?? 0;
  const excessLength =
    dataInput?.querySelector("#extra1")?.textContent?.length ?? 0;
  const Textlength = validLength + excessLength;
  if (Textlength <= 17000) {
    button1.disabled = false;
  } else if (Textlength > 17000) {
    button1.disabled = true;
  }
};
const checkButtons = document.getElementById("check");

const disableButton1 = () => {
  const validLength =
    dataInput?.querySelector("#current1")?.textContent?.length ?? 0;
  const excessLength =
    dataInput?.querySelector("#extra1")?.textContent?.length ?? 0;
  const Textlength = validLength + excessLength;
  if (Textlength <= 17000) {
    button1.disabled = false;
    checkButtons.disabled = false;
  } else if (Textlength > 17000) {
    button1.disabled = true;
    checkButtons.disabled = true;
  }
};

dataInput.addEventListener("input", disableButton);
dataInput.addEventListener("input", disableButton1);

chrome.storage.local.get("myKey", async function (result) {
  if (result.myKey) {
    TextAreaContent.value = result.myKey;
    try {
      TextAreaContent.value = JSON.parse(result.myKey);
    } catch (error) {
      TextAreaContent.value = result.myKey;
    }

    let spanval = TextAreaContent.value.slice(0, maxCharacter);
    let val = TextAreaContent.value.slice(maxCharacter);

    if (spanval.length > 17000) {
      spanval = spanval.slice(0, 17000);
    }

    let combinedValue = spanval + val;
    TextAreaContent.value = combinedValue;

    let span = document.getElementById("current1");
    span.textContent = spanval;

    if (maxCharacter) {
      let errorSpan = document.getElementById("extra1");
      errorSpan.className = "error";
      errorSpan.textContent = val;
    }

    TextAreaContent.value = spanval + deletespan;
    const validLength =
      dataInput?.querySelector("#current1")?.textContent?.length ?? 0;
    const excessLength =
      dataInput?.querySelector("#extra1")?.textContent?.length ?? 0;
    const Textlength = validLength + excessLength;
    if (Textlength <= 17000) {
      button1.disabled = false;
      checkButtons.disabled = false;
    } else if (Textlength > 17000) {
      button1.disabled = true;
      checkButtons.disabled = true;
    }
  }

  const countCharacters = () => {
    let span = document.getElementById("current1")?.textContent?.length ?? 0;
    let errorSpan = document.getElementById("extra1")?.textContent?.length ?? 0;
    console.log(span, errorSpan);
    const TextAreaContent = document.getElementById("data-input");
    const display = document.getElementById("current");
    let textVal = span + errorSpan;
    if (textVal === 0) {
      textVal = TextAreaContent.textContent.length;
    }
    display.textContent= "Maximum character limit:" + textVal + "/17000";
    
  };
  countCharacters();
  TextAreaContent.addEventListener("input", countCharacters);
});
const deletespan = document.getElementById("extra1");
// const normalize = document.getElementById("delete-button");
const btn= document.getElementById("delete-button").addEventListener("click", function () {
  deletespan.textContent = "";
  button1.disabled = false;
  checkButtons.disabled = false;
  const span = document.getElementById("current1")?.textContent;
  console.log("span",span)

  const finalValue = span.length + deletespan.textContent.length;
  const displayVal = document.getElementById("current");
  displayVal.textContent = "Maximum character limit:" + finalValue+ "/17000";
console.log("span",span)
  chrome.runtime.sendMessage({
    action: "setLocalData",
    data: JSON.stringify(span.replace(/\n[^a-zA-Z0-9,;\-.!? ]+[^\w\s]/gi, "")).trim(),
  });
});
// btn.disabled= true;
document.getElementById("checkpage").addEventListener("click", function () {
  window.location.href = "button.html";
});
