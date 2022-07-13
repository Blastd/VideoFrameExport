browser.browserAction.onClicked.addListener((tabs)=>{
    console.log(tabs);
    browser.tabs.executeScript(tabs.id ,{file: "export.js"});
});