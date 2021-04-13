Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  let returnStr = " "
  let strVar = str
    
    for(let i =0; i<str.length;i++){
        if(str[i] === '&'){
          strVar = strVar.replace(str[i], "&amp;");
        }else if(str[i] === '<'){
          strVar = strVar.replace(str[i], "&lt;");
        }else if(str[i] === '>'){
          strVar = strVar.replace(str[i], "&gt;");
        }else if(str[i] === '"'){
          strVar = strVar.replace(str[i], "&quot;");
        }else if(str[i] === "'"){
          strVar = strVar.replace(str[i], "&apos;");
        }else if(str[i] === "<>"){
          strVar = strVar.replace(str[i], "&lt;&gt;");
        }
    }  
  returnStr = strVar
  return returnStr;
}

let result = convertHTML("Dolce & Gabbana");
console.log(result)

Test cases:
convertHTML("Dolce & Gabbana") should return "Dolce &amp; Gabbana".

convertHTML("Hamburgers < Pizza < Tacos") should return "Hamburgers &lt; Pizza &lt; Tacos".

convertHTML("Sixty > twelve") should return "Sixty &gt; twelve".

convertHTML('Stuff in "quotation marks"') should return "Stuff in &quot;quotation marks&quot;".

convertHTML("Schindler's List") should return "Schindler&apos;s List".

convertHTML("<>") should return "&lt;&gt;".

convertHTML("abc") should return "abc".