jQuery(document).ready(function(jQuery) {	
	var urlFormulaireDons = "https://faireundon.fondation-nature-homme.org/";	
	
	jQuery(function() {	
		
		/** Lien - Je fais un don */		
		jQuery(".faireundon").on("click", function(event){			
			event.preventDefault();			
			
			var monFormulaireDon = urlFormulaireDons + "fnh_portail_responsive/?typeDon=ponctuel";			
			
			if ( jQuery.cookie("utm_campaign") != null ){				
				monFormulaireDon += "?utm_campaign=" + jQuery.cookie("utm_campaign") + "&utm_medium=" + jQuery.cookie("utm_medium") + "&utm_source=" + jQuery.cookie("utm_source");			
			}			
			
			else {				monFormulaireDon += "&utm_campaign=I0517";			}			
			
			window.open( monFormulaireDon );			
			return false;			
		});	
		
		/** Lien - Je fais un don - PA */		
		jQuery(".faireundonPA").on("click", function(event){			
			event.preventDefault();			
			
			var monFormulaireDonPA = urlFormulaireDons + "fnh_portail_responsive/?montant=15&typeDon=regulier";	
			
			if ( jQuery.cookie("utm_campaign") != null ){				
				monFormulaireDonPA += "&utm_campaign=" + jQuery.cookie("utm_campaign") + "&utm_medium=" + jQuery.cookie("utm_medium") + "&utm_source=" + jQuery.cookie("utm_source");			
			}			
			
			else {				monFormulaireDonPA += "&utm_campaign=I0517";			}			
			
			window.open( monFormulaireDonPA );			
			return false;			
		});	
	});
});