var GDTPlus = {};

(function() {
		GDTPlus.modPath = GDT.getRelativePath();
		
	var ready = function () {
		console.log("GDT+ - GDT+.js has initialized")
	};
	
	var error = function () {
		console.log("GDT+ - GDT+.js has failed to initialize.", error, "Please report this error via GutHub.")
	};
GDT.loadJs([
			//Platform Scripts
			'Code/Platforms/Vena.js',
			'Code/Platforms/Ninvento.js',
			
			//Extra Scripts
			'Code/Extras/gdtplusMenu.js',
], ready, error);
}) ();

//Global Event Removal
Media.allScheduledStories.splice(0, 9);
Media.allScheduledStories.splice(2, 32);
Media.allScheduledStories.splice(3, 7);

//GDT+ Menu


var div = $("body");
	div.append('<div id="GDTPlusMenuDiv" class="windowBorder tallWindow" style="overflow: auto; display: none; background-color: #ffffff; border: solid; border-color: #cfcfcf;"> <div id="GDTPlusMenuTitle" class="windowTitle smallerWindowTitle">GDT+ Menu</div><h2 style="color: #000000; text-align: center;">About GDT+</h2> <p style="text-align: center;">GDT+ is a mod which aims to enhance your GDT experience by making events more emersive, as well as adding new platforms and other additional features</p> <div id="GDTPlusSeperator" class="windowTitle smallerWindowTitle"></div><h3 style="color: #000000; text-align:center">GDT+ Information</h3> <p style="text-align:center">GDT+ Version - 1.0.0 Beta 1(Build 2018.04.22)</br> Build Date - 10/02/2018</p> <div id="GDTPlusSeperator" class="windowTitle smallerWindowTitle"></div><h3 style="color: #000000; text-align:center">1.0.0 Beta 1 Changelog</h3> <p style="text-align:center">Completed notification rewrite for Ninvento platforms<div id="GDTPlusSeperator" class="windowTitle smallerWindowTitle"></div><h3 style="color: #000000; text-align:center">Important Links</h3><div id="githubButton" class="selectorButton centeredButtonWrapper" onclick= window.open("https://github.com/KizzaGaming/GDTPlus"); style="margin:0 auto">GitHub Repository</div></div>');