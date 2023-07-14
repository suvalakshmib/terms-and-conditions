




const allTextNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
let allText = "";
while (allTextNodes.nextNode()) {
  allText += allTextNodes.currentNode.textContent;
}
allText = allText.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
.replace(/[\r\n\t /^\s]+/gm, " ")
  .replace(/<script([\S\s]*?)>([\S\s]*?)<\/script>/ig
  , '')
  .replace(/\\u00|<br\s*\/?>/g, "")
  .replace(/\$\(\s*['"](.*?)['"]\s*\)\.on\((.*?)\);?/g, '')
  .replace(/\$\(\s*['"](.*?)['"]\s*\)\.text\((.*?)\);?/g, '')
  .replace(/[^\x20-\x7E]/g, "")
  .replace(/<[^>]+(?!<\/a>)>|[^a-zA-Z\s]+/g, "")
  .replace(/\$\(\s*['"](.*?)['"]\s*\)\.(attr|val)\((.*?)\);?/g, '')
  .replace(/{[^}]*}/g, "")
  .replace(/<li\b[^<]*(?:(?!<\/li>)<[^<]*)*<\/li>/gi, "")
  .replace(/grecaptcha\("([^"]+)"\);/, '')
  .replace(/"/g, '')

console.log(JSON.stringify(allText));
chrome.runtime.sendMessage({ action: 'setLocalData', data: allText });
/^\s+|\s+$/gm

