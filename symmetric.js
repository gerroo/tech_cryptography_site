
var key = 0
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ .?";
function draw_crypto_picker() {
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ .?";
    var canvas = document.getElementById("caesar_animation_1");
    if (canvas.getContext) {
        ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, 1160, 60);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
		
		for (var i = 0; i < 29; i ++){
			ctx.rect(i*40,0,40,60);
			ctx.font = "14pt Courier";
			text = alphabet[i];
			ctx.fillText(text,(40*i)+15,30);
			ctx.stroke();
		}
	}
		
        ctx.save();
		
	canvas = document.getElementById("caesar_animation_2");
	if (canvas.getContext) {
        ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, 1160, 60);

        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
		
		for (var i = 0; i < 29; i ++){
			ctx.rect(i*40,0,40,60);
			ctx.font = "14pt Courier";
			text = alphabet[i];
			ctx.fillText(text,(40*i)+15,30);
			ctx.stroke();
		}
		
        ctx.save();
		
}
}

function key_change(){
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ .?";
	key = parseInt(document.getElementById("key").value, 10);
	var canvas = document.getElementById("caesar_animation_2");
	var a = (29-key) % 29
	
	var part_1 = alphabet.slice(0,a);
	var part_2 = alphabet.slice(a, 29);
	alphabet = part_2 + part_1
    if (canvas.getContext) {
        ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, 1160, 60);

        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
		
		for (var i = 0; i < 29; i ++){
			ctx.rect(i*40,0,40,60);
			ctx.font = "14pt Courier";
			text = alphabet[i];
			ctx.fillText(text,(40*i)+15,30);
			ctx.stroke();
		}
		
        ctx.save();
}
}

function encrypt() {
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ .?";
	var txt = document.getElementById("textarea_encrypt").value
	var encrypted = ""
	txt.split('').forEach(function (c){
		c = c.toUpperCase();
		var index = alphabet.indexOf(c);
		console.log(index);
		index = (index + key) % 29;
		encrypted += alphabet[index];
	});
	document.getElementById("textarea_encrypt").value = encrypted;
}

function decrypt(){
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ .?";
	var txt = document.getElementById("textarea_decrypt").value
	var decrypted = "";
	txt.split('').forEach(function (c){
		c = c.toUpperCase();
		var index = alphabet.indexOf(c);
		index = (index - key) % 29;
		decrypted += alphabet[index];
	});
	document.getElementById("textarea_decrypt").value = decrypted;
}

function encrypt_pad(){
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ .?";
	var txt = document.getElementById("textarea_encrypt_onetime").value
	var pad = document.getElementById("textarea_pad_onetime").value
	var encrypted = "";
	txt.split('').forEach(function (c){
		var q = c;
		c = c.toUpperCase();
		
		var alp_index = alphabet.indexOf(c);
		var alp_index_pad = alphabet.indexOf(pad[txt.indexOf(q)].toUpperCase());
		var index = (alp_index + alp_index_pad) % 29;
		console.log(alp_index,alp_index_pad, index);
		encrypted += alphabet[index];
	});
	document.getElementById("textarea_encrypt_onetime").value = encrypted;
}

function decrypt_pad(){
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ .?";
	var txt = document.getElementById("textarea_decrypt_onetime").value
	var pad = document.getElementById("textarea_pad_onetime").value
	var decrypted = "";
	txt.split('').forEach(function (c){
		var q = c;
		c = c.toUpperCase();
		var alp_index = alphabet.indexOf(c);
		var alp_index_pad = alphabet.indexOf(pad[txt.indexOf(q)].toUpperCase());
		var index = (alp_index - alp_index_pad) % 29;
		console.log(alp_index,alp_index_pad, index);
		decrypted += alphabet[index];
	});
	document.getElementById("textarea_decrypt_onetime").value = decrypted;
}