const calc=()=>{

    let rannum=Math.random();
    rannum=100*rannum;
    let realNum=Math.floor(rannum);
    document.getElementById('text').innerHTML="Your crush loves you"+ realNum +"percent";
    //var img=document.createElement('img');
    //img.src="love.gif";
    document.body.style.backgroundImage="url(love.gif)";

}