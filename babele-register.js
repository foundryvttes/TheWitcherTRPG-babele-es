Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {

		Babele.get().register({
			module: 'TheWitcherTRPG-babele-es',
			lang: 'es',
			dir: 'compendium'
		});
		
		document.getElementById("logo").src="/modules/TheWitcherTRPG-babele-es/images/fvtt-witcher-es.webp";
		
	}
	
});
