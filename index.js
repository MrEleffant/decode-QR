var QrCode = require('qrcode-reader');
var qr = new QrCode()
const fs = require('fs')
var Jimp = require('jimp')



try {
    var buffer = fs.readFileSync(`./image.jpg`)
    Jimp.read(buffer, function(err, image) {
        if (err) {
            console.error(err)
        }
        qr.callback = function(err, value) {
            if (err) console.error(err) 
            console.log(value)
        }
        console.log(image.bitmap.data)
        qr.decode(image.bitmap)
})
} catch (error) {
    console.log('erreur dans la lecture ' + error)
}
