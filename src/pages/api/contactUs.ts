import Cors from "cors"
import initMiddleware from "./_middleware"
// Initialize the cors middleware
const cors = initMiddleware(
	Cors({
		// Only allow requests with GET, POST and OPTIONS
		methods: ["GET", "POST", "OPTIONS"],
	})
)
var nodemailer = require("nodemailer")
let transporter = nodemailer.createTransport({
	name: "cyberinfotechuae.com",
	host: "smtpout.secureserver.net",
	port: 465,
	secure: true,
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PW,
	},
})
export default async function handler(req, res) {
	await cors(req, res)
	const enquiry = req.body
	console.log(enquiry)
	const emailheader =
		"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"

	var mailOptions = {
		from: process.env.EMAIL_USER,
		to: process.env.EMAIL_USER,
		subject: enquiry.subject + " from " + enquiry.email,
		html: `
    <html><head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  
    <title>Message from website</title>
  
    <style>
  
        body {margin:0; padding:0; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;} img{line-height:100%; outline:none; text-decoration:none; -ms-interpolation-mode: bicubic;} a img{border: none;} #backgroundTable {margin:0; padding:0; width:100% !important; } a, a:link{color:#2A5DB0; text-decoration: underline;} table td {border-collapse:collapse;} span {color: inherit; border-bottom: none;} span:hover { background-color: transparent; }
  
    </style>
  
    <style>
  .scalable-image img{max-width:100% !important;height:auto !important}.button a{transition:background-color .25s, border-color .25s}.button a:hover{background-color:#e1e1e1 !important;border-color:#0976a5 !important}@media only screen and (max-width: 400px){.preheader{font-size:12px !important;text-align:center !important}.header--white{text-align:center}.header--white .header__logo{display:block;margin:0 auto;width:118px !important;height:auto !important}.header--left .header__logo{display:block;width:118px !important;height:auto !important}}@media screen and (-webkit-device-pixel-ratio), screen and (-moz-device-pixel-ratio){.sub-story__image,.sub-story__content{display:block
  !important}.sub-story__image{float:left !important;width:200px}.sub-story__content{margin-top:30px !important;margin-left:200px !important}}@media only screen and (max-width: 550px){.sub-story__inner{padding-left:30px !important}.sub-story__image,.sub-story__content{margin:0 auto !important;float:none !important;text-align:center}.sub-story .button{padding-left:0 !important}}@media only screen and (max-width: 400px){.featured-story--top table,.featured-story--top td{text-align:left}.featured-story--top__heading td,.sub-story__heading td{font-size:18px !important}.featured-story--bottom:nth-child(2) .featured-story--bottom__inner{padding-top:10px
  !important}.featured-story--bottom__inner{padding-top:20px !important}.featured-story--bottom__heading td{font-size:28px !important;line-height:32px !important}.featured-story__copy td,.sub-story__copy td{font-size:14px !important;line-height:20px !important}.sub-story table,.sub-story td{text-align:center}.sub-story__hero img{width:100px !important;margin:0 auto}}@media only screen and (max-width: 400px){.footer td{font-size:12px !important;line-height:16px !important}}
     @media screen and (max-width:600px) {
    table[className="columns"] {
        margin: 0 auto !important;float:none !important;padding:10px 0 !important;
    }
    td[className="left"] {
     padding: 0px 0 !important;
    </style>
  
  </head>
  
  <body style="background: #e1e1e1;font-family:Arial, Helvetica, sans-serif; font-size:1em;"><style type="text/css">
  div.preheader 
  { display: none !important; } 
  </style>
  <div className="preheader" style="font-size: 1px; display: none !important;">${enquiry.subject}</div>
    <table id="backgroundTable" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#e1e1e1;">
        <tbody><tr>
            <td className="body" align="center" valign="top" style="background: #434343;" width="100%">
                <table cellpadding="0" cellspacing="0">
                    <tbody><tr>
                        <td width="640">
                            </td>
                    </tr>
                    <tr>
                        <td className="main" width="640" align="center" style="padding: 0 10px;">
                            <table style="min-width: 100%; " className="stylingblock-content-wrapper" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td className="stylingblock-content-wrapper camarker-inner"><table cellspacing="0" cellpadding="0">
  <tbody><tr>
  <td width="640" align="left">
   <table width="100%" cellspacing="0" cellpadding="0">
    <tbody><tr>
     <td className="header header--left" style="padding: 20px 10px;" align="left">
      <a><img className="header__logo" src="${emailheader}" alt="Gulf Motorcycles" style="display: block; border: 0;" width="100%" height="auto"></a>
     </td>
    </tr>
   </tbody></table>
  </td>
  </tr>
  </tbody></table></td></tr></tbody></table><table style="min-width: 100%; " className="stylingblock-content-wrapper" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td className="stylingblock-content-wrapper camarker-inner"><table className="featured-story featured-story--top" cellspacing="0" cellpadding="0">
  <tbody><tr>
  <td style="padding-bottom: 20px;">
   <table cellspacing="0" cellpadding="0">
    <tbody><tr>
     <td className="featured-story__inner" style="background: #fff;">
      <table cellspacing="0" cellpadding="0">
       <tbody>
        
       </tr>
       <tr>
           <td className="featured-story__copy" style="background: #fff;padding: 30px 31px 0px;" width="640" align="left">
            <table cellspacing="0" cellpadding="0">
             <tbody><tr>
              <td style="font-family: Ubuntu, Tahoma, Verdana, sans-serif; font-size: 16px; line-height: 22px; color: #555555; padding-top: 16px;" align="center"><strong>Subject : ${enquiry.subject}</strong><br></td>
             </tr>
            </tbody></table>
           </td>
          </tr>
       <tr>
        <td className="featured-story__content-inner" style="padding: 32px 30px 45px;">
         <table cellspacing="0" cellpadding="0">
          <tbody><tr>
           <td className="featured-story__heading featured-story--top__heading" style="background: #fff;" width="640" align="left">
            <table cellspacing="0" cellpadding="0">
             <tbody><tr>
              <td style="font-family: Geneva, Tahoma, Verdana, sans-serif; font-size: 22px; color: #464646;" width="400" align="left">
               <a href="" style="text-decoration: none; color: #464646;">Hi Gulf Motorcycles,</a>
              </td>
             </tr>
    <tr>
           <td className="featured-story__copy" style="background: #fff;" width="640" align="left">
            <table cellspacing="0" cellpadding="0">
             <tbody><tr>
              <td style="font-family: Ubuntu, Tahoma, Verdana, sans-serif; font-size: 16px; line-height: 22px; color: #555555; padding-top: 16px;" align="left">${enquiry.message}<br></td>
             </tr>
            </tbody></table>
           </td>
          </tr>
            </tbody></table>
           </td>
          </tr>
          <tr>
           <td className="featured-story__copy" style="background: #fff;" width="640" align="center">
            <table cellspacing="0" cellpadding="0">
             <tbody><tr>
              <td style="font-family: Ubuntu, Tahoma, Verdana, sans-serif; font-size: 16px; line-height: 22px; color: #555555; padding-top: 16px;" align="left">${enquiry.name} | ${enquiry.phone}<br></td>
             </tr>
            </tbody></table>
           </td>
          </tr>
          
         </tbody></table>
        </td>
       </tr>
      </tbody></table>
     </td>
    </tr>
   </tbody></table>
  </td>
  </tr>
  </tbody></table></td></tr></tbody></table></td>
                    </tr>
                    <tr>
                     <td className="footer" width="640" align="center" style="padding-top: 10px;">
                      <table cellspacing="0" cellpadding="0">
                       <tbody><tr>
                        <td align="center" style="font-family: Geneva, Tahoma, Verdana, sans-serif;font-size: 14px;line-height: 18px;color: #ffffff;padding: 0 20px 40px;">
                                      <br>      <br>Gulf Motorcycles, Al Qouz -3, Opposite Al Ahli Driving Centre, MK Ghanim Compound, Unit 45, Dubai, United Arab Emirates</td>
                       </tr>
                      </tbody></table>
                     </td>
                    </tr>
                </tbody></table>
            </td>
        </tr>
    </tbody></table>
  </body></html>`,
	}

	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			console.log(error)
		} else {
			console.log("Email sent: " + info.response)
			res.statusCode = 200
			res.end()
		}
	})
}
