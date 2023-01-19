const qrcode = require('qrcode')
const dt = require('./datetime.js')

exports.main = (args) => {
  return qrcode.toDataURL(args.text).then(res => ({
    headers:  { 'content-type': 'text/html; charset=UTF-8' },
    body: "The date and time currently are:" + dt.myDateTime()
  }))
}

if (process.env.TEST) exports.main({text:"hello"}).then(console.log)
