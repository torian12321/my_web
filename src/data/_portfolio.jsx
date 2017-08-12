const
img_aviva_MTG = require('./imgs/aviva_mtg.jpg'),
img_xwerx     = require('./imgs/xwerx.jpg'),
img_uxdesign  = require('./imgs/uxdesign.jpg'),
img_aviva_BD  = require('./imgs/aviva_bd.jpg'),
img_top       = require('./imgs/top.jpg'),
img_thorntons = require('./imgs/thortons.jpg'),
img_integra   = require('./imgs/integra.jpg'),
img_raccoon   = require('./imgs/raccoon.jpg'),
img_hoja      = require('./imgs/hoja.jpg');

module.exports = {
	"proyects": [
		{
			"title": "Aviva - MTG",
			"desc" : "Quick and easy way to calculate your pension gap",
			"img"  : img_aviva_MTG,
			"link" : "http://mindthepensiongap.ie/",
			"tags" : ["responsive", "mobileFirst", "gulp", "angular", "htmlMailing"]
		},{
			"title": "Xwerx",
			"desc" : "Xwerx company website",
			"img"  : img_xwerx,
			"link" : "http://xwerx.com/",
			"tags" : ["developments", "wordpress", "bootstrap"]
		},{
			"title": "UX design",
			"desc" : "Xwerx events website",
			"img"  : img_uxdesign,
			"link" : "http://uxdesign.ie/",
			"tags" : ["developments", "wordpress", "bootstrap"]
		},{
			"title": "Aviva - Best doctors",
			"desc" : "Aviva experts mdical advice",
			"img"  : img_aviva_BD,
			"link" : "http://www.avivaincomeprotection.ie/bestdoctors/",
			"tags" : ["scroll", "effects", "responsibe", "bootstrap"]
		},{
			"title": "Top Oil",
			"desc" : "Built the website for an irish fuel company",
			"img"  : img_top,
			"link" : "http://top.ie/",
			"tags" : ["developments", "wordpress", "bootstrap", "gulp"]
		},{
			"title": "Thorntons",
			"desc" : "Built the website for an irish recycling company",
			"img"  : img_thorntons,
			"link" : "http://thorntons-recycling.ie/",
			"tags" : ["development", "wordpress"]
		},{
			"title": "Integra",
			"desc" : "Dashboard to control and analize parkimetters remotely",
			"img"  : img_integra,
			"tags" : ["development", "grails", "dashboard"]
		},{
			"title": "Raccoon runner",
			"desc" : "Personal Android proyect developed to test Unity3D",
			"img"  : img_raccoon,
			"link" : "https://play.google.com/store/apps/details?id=com.aitorpalomares.games.raccoonrunner",
			"tags" : ["android", "unity", "design", "development", "game", "personal"]
		},{
			"title": "Hoja liquidacion",
			"desc" : "Internal proyect to manage paymenst and stock in a private business",
			"img"  : img_hoja,
			"link" : "https://play.google.com/store/apps/details?id=campo.liquidacion",
			"tags" : ["android", "design", "development", "app", "management", "personal"]
		}
	]
}