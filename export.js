function tryGetItems(tabs){
    var videoElement = document.getElementsByTagName("video");
    if(videoElement[0]!=null)
        getFrame(videoElement[0], tabs);
    else
        alertError();
}

function getFrame(videoOBJ, tabs){
    
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = videoOBJ.videoWidth;
    canvas.height = videoOBJ.videoHeight;
    ctx.drawImage(videoOBJ, 0, 0);
    canvas.toBlob(blob=>{
        var finalUrl = URL.createObjectURL(blob);
        console.log("Url: ", finalUrl);
        window.open(finalUrl, '_blank');
        URL.revokeObjectURL(finalUrl);
    }, 'image/jpeg');
}

function alertError(){
    alert("Couldn't find any video in this page");
}

tryGetItems();