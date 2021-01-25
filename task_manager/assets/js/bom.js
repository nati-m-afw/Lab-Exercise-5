/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/




// Define UI Variables  here 
const answers = document.querySelectorAll("span.badge");


answers[0].innerHTML = location.href;
answers[1].innerHTML = location.protocol;
answers[2].innerHTML = location.host;
answers[3].innerHTML = location.port;
answers[4].innerHTML = location.hostname;


answers[5].innerHTML = navigator.appName;
answers[6].innerHTML = navigator.appVersion;
answers[7].innerHTML = navigator.platform;
answers[8].innerHTML = navigator.language;
answers[9].innerHTML = navigator.cookieEnabled;


answers[10].innerHTML = screen.height;
answers[11].innerHTML = screen.width
answers[12].innerHTML = screen.pixelDepth;

answers[13].innerHTML = history.length;
answers[14].innerHTML = history.state;








// Display the BOM Information on the innerHTML of the elements