
var album ={ "1234":{
  "artist": "Arijit Singh",
  "tracks": ["chana mereya"]
},
"2365":{
  "artist":"Sonu Nigam",
  "track":" "

},
"5678":{
  "artist":" ",
  "track":["tama tuma","roka"]
},
"6545":{
  "artist":"Shaan",
  "track":["bhool ja"]
}
}

function al(id,prop,val)
{
  var a= JSON.parse(JSON.stringify(album));
console.log(a);

//  var uid=parseInt(id);
  if( prop!=="track" && val!=="")
  {
  a[id][prop]=[val];
  }
  else if (prop=="track" && val!=="")
   {
     if (!a[id].hasOwnProperty(prop))
     {
      a[id][prop] = [];
     }
   a[id][prop].push[val];
    }
else if(val==="")
{
  delete a[id][prop];
}
}
