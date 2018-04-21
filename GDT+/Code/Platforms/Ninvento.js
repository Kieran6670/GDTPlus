var GDTPlus = {};

//Platform Images
var PlaceholderImage = [GDT.getRelativePath() + "../../Images/Placeholder/PlaceholderImage.png"];
var TESImage = [GDT.getRelativePath() + "../../../../../images/platforms/TES.png"];
var STESImage = [GDT.getRelativePath() + "../../../../../images/platforms/superb/Super TES.png"];
var TES64Image = [GDT.getRelativePath() + "../../../../../images/platforms/superb/TES 64.png"];
var GSphereImage = [GDT.getRelativePath() + "../../../../../images/platforms/superb/GameSphere.png"];
var NuuImage = [GDT.getRelativePath() + "../../../../../images/platforms/superb/Nuu.png"];
var WuuImage = [GDT.getRelativePath() + "../../../../../images/platforms/superb/Wuu.png"];
var SwapImage = [GDT.getRelativePath() + "../../../../../images/platforms/superb/Swap.png"];
var GamelingImage = [GDT.getRelativePath() + "../../../../../images/platforms/Gameling.png"];
var GSImage = [GDT.getRelativePath() + "../../../../../images/platforms/superb/GS.png"];

//Remove Ninvento Platforms
var platformNames = ["TES","Super TES","TES 64","gameSphere","Nuu","Wuu","Gameling","GS", "Swap"];

for (var pname = 0; pname < Platforms.allPlatforms.length; pname++) {
    for (var pname2 = 0; pname2 < platformNames.length; pname2++) {
var platform = Platforms.allPlatforms[pname];
        if (platform.id == platformNames[pname2])
            Platforms.allPlatforms.remove(platform);
    }
}

//TES
GDT.addPlatform({
	id : "GDT+.TES",
	name : "TES",
	company : "Ninvento",
	startAmount : 0.356,
	marketKeyPoints : [{
				date : "2/5/1",
					amount : 0.41
				}, {
					date : "3/1/1",
					amount : 0.444
				}, {
					date : "4/1/1",
					amount : 0.46
				}
	],
	unitsSold : 0.42,
	licencePrize : 80000,
	published : "2/1/2",
	platformRetireDate : "6/6/2",
	developmentCosts : 30000,
	genreWeightings : [0.8, 0.7, 0.8, 0.8, 0.7, 1],
	audienceWeightings : [1, 0.9, 0.6],
	techLevel : 2,
	iconUri : TESImage,
});

GDT.addEvent({
	id : "GDT+.TES.Rumour",
    date : "1/8/2",
	getNotification : function (company) {
        return new Notification({
            header : "Industry News".localize(),
            text: "According to rumours the Japanese company Ninvento is planning to launch its very own home gaming console. Ninvento is known for the widely successful arcade game 'Dinkey King'.{n}Many industry experts doubt that home gaming consoles will take off but we are eager to see what Ninvento will deliver.".localize(),
        });
    }
});

GDT.addEvent({
	id : "GDT+.TES.Rumour2",
	date : "1/10/2",
	getNotification : function (company) {
		return new Notification({
			sourceId : "GDT+.TES.Rumour2",
			header : "Industry News".localize(),
			text : "Today, Ninvento has confirmed recent rumours and announced their plans to release a new home gaming console called 'TES'.The console features cartridge based games and a uniquely designed controller. \n\nWould you like to view the specs of the TES?",
			image : TESImage,
			options : ["View Specs", "Ignore Specs"],
		});
	},
	
	complete : function (decision) {
		var company = GameManager.company;
		
		if (decision === 0) {
			var TESOptionOne = new Notification({
				header : "TES Specs",
				text : "CPU - Ricah 3A02 (SMO 6205 Based) @ 1.79MHz\nRAM - 2kB\nAudio - Ricah 3A02 (SMO 6205 Based) @ 1.79MHz\nVideo - Ricah 3C02 (256 x 224 with 25 on-screen colours)\nVideo RAM - 2kB",
				image : TESImage,
			});
			var TESOptionOneA = new Notification({
				header : "Industry News".localize(),
				text : "Ninvento have announced they intend to release the new console {0}.".format(General.getETADescription("1/10/2", "2/1/2")),
				image : TESImage,
			});
			company.activeNotifications.addRange(TESOptionOne.split());
			company.activeNotifications.addRange(TESOptionOneA.split());
			return;
		}
		
		if (decision === 1) {
			var TESOptionTwo = new Notification({
				header : "Industry News".localize(),
				text : "Ninvento have announced they intend to release the new console {0}.".format(General.getETADescription("1/10/2", "2/1/2")),
				image : TESImage,
			});
			company.activeNotifications.addRange(TESOptionTwo.split());
			return;
		}
	},
});

GDT.addEvent({
	id : "GDT+.TES.Success",
    date : "2/6/4",
	getNotification : function (company) {
        return new Notification({
            header : "Industry News".localize(),
            text: "The recently released TES home console by Ninvento has proven to be a massive success. Sales numbers have exceeded expectations by far.{n}As one customer says: 'I love the games that come with the TES and playing with a controller is so much more fun than on a keyboard.'".localize(),
        });
    }
});

//Super TES
GDT.addPlatform({
	id : "GDT+.STES",
	name : "Super TES",
	company : "Ninvento",
	startAmount : 0.65,
	marketKeyPoints : [{
			date : "6/6/1",
			amount : 0.7
		}, {
			date : "8/10/1",
			amount : 0.73
		}
	],
	unitsSold : 0.8,
	licencePrize : 5E4,
	published : "5/12/4",
	platformRetireDate : "9/8/1",
	developmentCosts : 6E4,
	genreWeightings : [0.9, 0.9, 0.9, 1, 0.7, 0.9],
	audienceWeightings : [1, 0.9, 0.7],
	techLevel : 3,
	iconUri : STESImage,
});

GDT.addEvent({
	id : "GDT+.STES.Announcement",
	date : "5/10/4",
	getNotification : function (company) {
		return new Notification({
			sourceId : "GDT+.STES.Announcement",
			header : "Industry News".localize(),
			text : "Today, Ninvento announced the much anticipated successor to the popular TES console, named the Super TES. Ninvento said it comes with 16-Bit graphics and sound, making it the best console they have ever made. \n\n\Would you like to view the specs of the Super TES?",
			image : STESImage,
			options : ["View Specs", "Ignore Specs"],
		});
	},
	
	complete : function (decision) {
		var company = GameManager.company;
		
		if (decision === 0) {
			var STESOptionOne = new Notification({
				header : "Super TES Specs",
				text : "CPU - Ricah 22A5 @ 3.58MHz\nRAM - 128kB\nAudio - Ninvento SMP-S @ 24.576MHz\nAudio RAM - 64kB\nVideo - Ricah 22A5 (512 x 448 with 256 on-screen colours)\nVideo RAM - 64kB",
				image : STESImage,
			});
			var STESOptionOneA = new Notification({
				header : "Industry News".localize(),
				text : "Ninvento said their fans will not be disappointed with the console, and that it will be launching {0}.".format(General.getETADescription("5/10/4", "5/12/4")),
				image : STESImage,
			});
			company.activeNotifications.addRange(STESOptionOne.split());
			company.activeNotifications.addRange(STESOptionOneA.split());
			return;
		}
		
		if (decision === 1) {
			var STESOptionTwo = new Notification({
				header : "Industry News".localize(),
				text : "Ninvento said their fans will not be disappointed with the console, and that it will be launching {0}.".format(General.getETADescription("5/10/4", "5/12/4")),
				image : STESImage,
			});
			company.activeNotifications.addRange(STESOptionTwo.split());
			return;
		}
	},
});

//TES64
GDT.addPlatform({
	id : "GDT+.TES64",
	name : "TES 64",
	company : "Ninvento",
	startAmount : 0.7,
	marketKeyPoints : [{
			date : "9/7/1",
			amount : 0.85
		},
	],
	unitsSold : 1.25,
	licencePrize : 2E5,
	published : "9/2/1",
	platformRetireDate : "13/5/4",
	developmentCosts : 6E4,
	genreWeightings : [0.9, 0.8, 0.7, 0.8, 0.7, 0.9],
	audienceWeightings : [1, 0.9, 0.9],
	techLevel : 3,
	iconUri : TES64Image,
});

GDT.addEvent({
	id : "GDT+.TES64.Announcement",
	date : "8/12/1",
	getNotification : function (company) {
		return new Notification({
			sourceId : "GDT+.TES64.Announcement",
			header : "Industry News".localize(),
			text : "Ninvento announced their next generation console called TES 64 today. It is the world's first gaming console to sport 64-bit processors for graphics and audio. Ninvento said this will allow never-before-seen 3D realism.{n}In recent years the Super TES has lost a lot of market share to more modern consoles. Market experts said that the hardware of the TES 64 is surely impressive, but expressed their surprise that it still uses ROM cartridges instead of the much cheaper and higher capacity CD-ROM format.",
			image : TES64Image,
			options : ["View Specs", "Ignore Specs"],
		});
	},
	
	complete : function (decision) {
		var company = GameManager.company;
		
		if (decision === 0) {
			var TES64OptionOne = new Notification({
				header : "TES 64 Specs",
				text : "CPU - ECN 43KVR @ 93.75MHz\nRAM - 4MB RDRAM\nAudio - CD Quality 16-Bit Stereo\nGPU - Realism Engine @ 62.5MHz",
				image : TES64Image,
			});
			var TES64OptionOneA = new Notification({
				header : "Industry News".localize(),
				text : "Nevertheless, the TES 64 seems like an impressive console and Ninvento has said that it plans to aggressively price it against Vonny's Playsystem. They are aiming to launch the console {0}.".format(General.getETADescription("8/12/1", "9/2/1")),
				image : TES64Image,
			});
			company.activeNotifications.addRange(TES64OptionOne.split());
			company.activeNotifications.addRange(TES64OptionOneA.split());
			return;
		}
		
		if (decision === 1) {
			var TES64OptionTwo = new Notification({
				header : "Industry News".localize(),
				text : "Nevertheless, the TES 64 seems like an impressive console and Ninvento has said that it plans to aggressively price it against Vonny's Playsystem. They are aiming to launch the console {0}.".format(General.getETADescription("8/12/1", "9/2/1")),
				image : TES64Image,
			});
			company.activeNotifications.addRange(TES64OptionTwo.split());
			return;
		}
	},
});

//GameSphere
GDT.addPlatform({
	id : "GDT+.GameSphere",
	name : "Gamesphere",
	company : "Ninvento",
	startAmount : 1,
	unitsSold : 1.7,
	licencePrize : 45E4,
	published : "12/12/1",
	platformRetireDate : "17/2/3",
	developmentCosts : 9E4,
	genreWeightings : [0.8, 0.8, 0.7, 0.8, 0.7, 1],
	audienceWeightings : [0.9, 0.9, 0.8],
	techLevel : 3,
	iconUri : GSphereImage,
})

GDT.addEvent({
	id : "GDT+.GSphere.Announcement",
	date : "12/10/4",
	getNotification : function (company) {
		return new Notification({
			sourceId : "GDT+.GSphere.Announcement",
			header : "Industry News".localize(),
			text : "Today, Ninvento announced their new home console which they have called the Gamesphere. It is aimed to compete against the market leading Playsystem 2 and the mBox which is Micronoft's first endeavor into the home console market.",
			image : GSphereImage,
			options: ["View Specs", "Ignore Specs"],
		});
	},
	
	complete : function (decision) {
		var company = GameManager.company;
		
		if (decision === 0) {
			var GSphereOptionOne = new Notification({
				header : "Gamesphere Specs",
				text : "CPU - WBM PCPower Gecko @ 486Mhz\nRAM 24MB\nAudio - AIT Flip @ 162Mhz\nAudio RAM - 16MB\nGPU - AIT Flip @ 162MHz\nVideo RAM - 3MB",
				image : GSphereImage,
			});
			var GSphereOptionOneA = new Notification({
				header : "Industry News".localize(),
				text : "The curiously shaped console is the first console from Ninvento to use optical media rather than ROM cartridges, however it uses the smaller Mini-DVD standard rather than the full size DVDs it competitors are using. The console will launch {0}.".format(General.getETADescription("12/10/4", "12/12/1")),
				image : GSphereImage,
			});
			company.activeNotifications.addRange(GSphereOptionOne.split());
			company.activeNotifications.addRange(GSphereOptionOneA.split());
			return;
		}
		
		if (decision === 1) {
			var GSphereOptionTwo = new Notification({
				header : "Industry News",
				text : "The curiously shaped console is the first console from Ninvento to use optical media rather than ROM cartridges, however it uses the smaller Mini-DVD standard rather than the full size DVDs it competitors are using. The console will launch {0}.".format(General.getETADescription("12/10/4", "12/12/1")),
				image : GSphereImage,
			});
			company.activeNotifications.addRange(GSphereOptionTwo.split());
			return;
		}
	},
});

//Nuu
GDT.addPlatform({
	id : "GDT+.Nuu",
	name : "Nuu",
	company : "Ninvento",
	startAmount : 2,
	unitsSold : 2.8,
	licencePrize : 5E5,
	published : "17/4/4",
	platformRetireDate : "21/6/3",
	developmentCosts : 8E4,
	genreWeightings : [0.8, 0.6, 0.7, 1, 0.7, 1],
	audienceWeightings : [1, 1, 0.7],
	techLevel : 4,
	iconUri : NuuImage,
})

GDT.addEvent({
	id : "GDT+.Nuu.Announcement",
	date : "16/12/4",
	getNotification : function (company) {
		return new Notification({
			sourceId : "GDT+.Nuu.Announcement",
			header : "Industry News".localize(),
			text : "Today, Ninvento revealed their bid in the next console generation by announcing the Nuu. Instead of trying to compete with Micronoft or Vonny on Hardware strength and graphical power, they have decided to deliver a whole new console experience.{n}The Nuu features a controller with a built-in motion sensor, which allows players to stand front of their TV and use the controller as a counterpart to virtual objects such as a tennis racquet. Would you like to view the specs for the Nuu?",
			image : NuuImage,
			options: ["View Specs", "Ignore Specs"],
		});
	},
	
	complete : function (decision) {
		var company = GameManager.company;
		
		if (decision === 0) {
			var NuuOptionOne = new Notification({
				header : "Nuu Specs",
				text : "CPU - WBM Deepway @ 729MHz\nRAM - 64MB\nGPU - AIT Hollytimber @ 243MHz\nGPU RAM - 24MB\nInternal Storage - 512MB Flash Storage",
				image : NuuImage,
			});
			var NuuOptionOneA = new Notification({
				header : "Industry News".localize(),
				text : "The console also comes with Ethernet for Online support, as well as an SD Card slot to increase the storage capacity. It also includes backwards compatibilty with the GameSphere, coming with ports for GameSphere controllers and Memory Cards on top of the console. Ninvento are aiming to launch the console {0}.".format(General.getETADescription("16/12/4", "17/4/4")),
				image : NuuImage,
			});
			company.activeNotifications.addRange(NuuOptionOne.split());
			company.activeNotifications.addRange(NuuOptionOneA.split());
			return;
		}
		
		if (decision === 1) {
			var NuuOptionTwo = new Notification({
				header : "Industry News",
				text : "The console also comes with Ethernet for Online support, as well as an SD Card slot to increase the storage capacity. It also includes backwards compatibilty with the GameSphere, coming with ports for GameSphere controllers and Memory Cards on top of the console. Ninvento are aiming to launch the console {0}.".format(General.getETADescription("16/12/4", "17/4/4")),
				image : NuuImage,
			});
			company.activeNotifications.addRange(NuuOptionTwo.split());
			return;
		}
	},
});

//Wuu
GDT.addPlatform({
	id : "GDT+.Wuu",
	name : "Wuu",
	company : "Ninvento",
	startAmount : 3,
	unitsSold : 5,
	licencePrize : 1E6,
	published : "20/12/4",
	marketKeyPoints: [{
					date: "29/12/4",
					amount: 5
				}
			],
	platformRetireDate : "26/5/2",
	developmentCosts : 8E4,
	genreWeightings : [0.9, 0.7, 0.8, 1, 0.7, 1],
	audienceWeightings : [0.9, 1, 0.7],
	techLevel : 5,
	iconUri : WuuImage,
})

GDT.addEvent({
	id : "GDT+.Wuu.Announcement",
	date : "20/8/4",
	getNotification : function (company) {
		return new Notification({
			sourceId : "GDT+.Wuu.Announcement",
			header : "Industry News".localize(),
			text : "Ninvento has revealed that their bid in the next generation of consoles will be called the Wuu. The new console features a controller with a integrated display. This is said to make local multiplayer games much more interesting by giving each player a unique screen. Would you like to view the specs for the Wuu",
			image : WuuImage,
			options: ["View Specs", "Ignore Specs"],
		});
	},
	
	complete : function (decision) {
		var company = GameManager.company;
		
		if (decision === 0) {
			var WuuOptionOne = new Notification({
				header : "Wuu Specs",
				text : "CPU - WBM Coffee Tri-Core @ 1.24GHz\nRAM - 2GB\nGPU - CCD Caffelatte @ 550MHz\nInternal Storage - 8/32GB",
				image : WuuImage,
			});
			var WuuOptionOneA = new Notification({
				header : "Industry News".localize(),
				text : "Ninvento has always been at the forefront of innovation and this console seems, once again, to be a brave move. The Wuu is said to be available {0}.".format(General.getETADescription("20/8/4", "20/12/4")),
				image : WuuImage,
			});
			company.activeNotifications.addRange(WuuOptionOne.split());
			company.activeNotifications.addRange(WuuOptionOneA.split());
			return;
		}
		
		if (decision === 1) {
			var WuuOptionTwo = new Notification({
				header : "Industry News",
				text : "Ninvento has always been at the forefront of innovation and this console seems, once again, to be a brave move. The Wuu is said to be available {0}.".format(General.getETADescription("20/8/4", "20/12/4")),
				image : WuuImage,
			});
			company.activeNotifications.addRange(WuuOptionTwo.split());
			return;
		}
	},
});

//Swap
GDT.addPlatform({
	id : "GDT+.Swap",
	name : "Swap",
	company : "Ninvento",
	startAmount : 4.5,
	unitsSold : 6,
	licencePrize : 125E4,
	published : "25/3/1",
	marketKeyPoints: [{
					date: "29/12/4",
					amount: 6
				}
			],
	platformRetireDate : "260/12/4",
	developmentCosts : 8E4,
	genreWeightings : [0.9, 0.8, 1, 0.8, 0.7, 1],
	audienceWeightings : [0.9, 1, 0.8],
	techLevel : 6,
	iconUri : SwapImage,
})

GDT.addEvent({
	id : "GDT+.Swap.Announcement",
	date : "24/10/4",
	getNotification : function (company) {
		return new Notification({
			sourceId : "GDT+.Swap.Announcement",
			header : "Industry News".localize(),
			text : "Ninvento has today revealed their upcoming game console: The Ninvento Swap. The device seems to function both as a portable console and as a home console. When the Swap is removed from its docking station, unique controller pads called 'Fun-Pads' are attached to the side of the screen and turn the console into a handheld device. Would you like to view the specs for the Swap?",
			image : SwapImage,
			options: ["View Specs", "Ignore Specs"],
		});
	},
	
	complete : function (decision) {
		var company = GameManager.company;
		
		if (decision === 0) {
			var SwapOptionOne = new Notification({
				header : "Swap Specs",
				text : "SoC - Mvidia Tigra Z1 (1.02GHz 8 Core CPU, 768 MHz GPU)\nRAM - 4GB\nInternal Storage - 32GB (Expandable via microSD)",
				image : SwapImage,
			});
			var SwapOptionOneA = new Notification({
				header : "Industry News".localize(),
				text : "The reaction to the announcement was mixed as many voiced concerns that the device might not have a clear audience and might fail to appeal to both casual and core gamers. Others praised the unique nature of the device and pointed out that Ninvento has frequently managed to land successes with odd devices in the past. The Swap is said to hit markets {0}.".format(General.getETADescription("24/10/4", "25/3/1")),
				image : SwapImage,
			});
			company.activeNotifications.addRange(SwapOptionOne.split());
			company.activeNotifications.addRange(SwapOptionOneA.split());
			return;
		}
		
		if (decision === 1) {
			var OptionTwo = new Notification({
				header : "Industry News",
						text : "The reaction to the announcement was mixed as many voiced concerns that the device might not have a clear audience and might fail to appeal to both casual and core gamers. Others praised the unique nature of the device and pointed out that Ninvento has frequently managed to land successes with odd devices in the past. The Swap is said to hit markets {0}.".format(General.getETADescription("24/10/4", "25/3/1")),
				image : SwapImage,
			});
			company.activeNotifications.addRange(SwapOptionTwo.split());
			return;
		}
	},
});

GDT.addEvent({
	id : "GDT+.swapBitter",
    date : "25/4/1",
	getNotification : function (company) {
        return new Notification({
            header : "Industry News".localize(),
            text: "The recently released Ninvento Swap console has caused an unusual social media storm. It all started when a consumer licked one of the game cartridges and reported that it tasted extremely bad. Thousands of consumers then repeated the experiment, tasting their cartridges and reporting the result on social media, further encouraging others to do the same.{n}Ninvento has now published an official statement to confirm that game cartridges for the Swap are coated with denatonium benzoate, a non-toxic bittering agent. This was apparently done to discourage children from biting on and swallowing the fairly small cartridges.{n}Initial reactions to the console itself have been more positive than to the taste of its cartridges as the Swap is turning out to be quite popular with gamers around the globe.".localize(),
        });
    }
	image : SwapImage,
});

//Gameling
GDT.addPlatform({
	id : "GDT+.Gameling",
	name : "Gameling",
	company : "Ninvento",
	startAmount : 0.8,
	unitsSold : 1,
	licencePrize : 5E4,
	published : "3/9/2",
	platformRetireDate : "14/4/2",
	developmentCosts : 3E4,
	genreWeightings : [0.8, 0.7, 0.9, 0.9, 0.6, 1],
	audienceWeightings : [1, 0.9, 0.6],
	techLevel : 2,
	iconUri : GamelingImage,
})

GDT.addEvent({
	id : "GDT+.Gameling.Announcement",
	date : "3/7/4",
	getNotification : function (company) {
		return new Notification({
			sourceId : "GDT+.Gameling.Announcement",
			header : "Industry News".localize(),
			text : "Today, Ninvento has announced that they will introduce a portable gaming device called Gameling. The device comes with changeable game cartridges, a monochrome screen on a green background, built-in speakers and even multiplayer support via a connection cable. Would you like to view the specs for the Gameling?",
			image : GamelingImage,
			options: ["View Specs", "Ignore Specs"],
		});
	},
	
	complete : function (decision) {
		var company = GameManager.company;
		
		if (decision === 0) {
			var GamelingOptionOne = new Notification({
				header : "Gameling Specs",
				text : "CPU - Acute RL20953 @ 4.19 MHz\nDisplay - 160x144\nRAM - 8kB",
				image : Image,
			});
			var GamelingOptionOneA = new Notification({
				header : "Industry News".localize(),
				text : "Compared to PCs and other gaming consoles the Gameling is underpowered but given the lower cost and excellent portability it might find a huge following.{n}The Gameling is said to hit shelves {0}.".format(General.getETADescription("3/7/4", "3/9/2")),
				image : GamelingImage,
			});
			company.activeNotifications.addRange(GamelingOptionOne.split());
			company.activeNotifications.addRange(GamelingOptionOneA.split());
			return;
		}
		
		if (decision === 1) {
			var GamelingOptionTwo = new Notification({
				header : "Industry News",
				text : "Compared to PCs and other gaming consoles the Gameling is underpowered but given the lower cost and excellent portability it might find a huge following.{n}The Gameling is said to hit shelves {0}.".format(General.getETADescription("3/7/4", "3/9/2")),
				image : GamelingImage,
			});
			company.activeNotifications.addRange(GamelingOptionTwo.split());
			return;
		}
	},
});

//GS
GDT.addPlatform({
	id : "GDT+.GS",
	name : "GS",
	company : "Ninvento",
	startAmount : 1.5,
	unitsSold : 3.8,
	licencePrize : 35E4,
	published : "13/8/4",
	marketKeyPoints: [{
					date: "26/12/4",
					amount: 3.8
				}
			],
	platformRetireDate : "260/12/4",
	developmentCosts : 5E4,
	genreWeightings : [0.9, 0.9, 1, 0.9, 0.9, 1],
	audienceWeightings : [1, 0.9, 0.8],
	techLevel : 3,
	iconUri : GSImage,
})

GDT.addEvent({
	id : "GDT+.GSRumour",
    date : "13/2/1",
	getNotification : function (company) {
        return new Notification({
            header : "Industry News".localize(),
            text: "Rumours are spreading that Ninvento is working on a new game console. Most of the rumours state that it is not a successor to the somewhat disappointing Game Sphere but instead a new console in the mobile market.{n}Ninvento's Gameling has been leading the mobile market thanks to numerous updates and a large list of very popular games available on the platform, but the hardware is aging quickly and many players wonder what will be next.".localize(),
        });
    }
});

GDT.addEvent({
	id : "GDT+.GS.Announcement",
	date : "13/8/1",
	getNotification : function (company) {
		return new Notification({
			sourceId : "GDT+.GS.Announcement",
			header : "Industry News".localize(),
			text : "Today, Ninvento has announced a new mobile console called the Ninvento GS. It features two screens, one of them touch sensitive, and promises unique gameplay. While Ninvento has been struggling to regain their market lead ever since the TES 64 they still have a very strong position on the mobile market. Would you like to view the specs for the GS?",
			image : GSImage,
			options: ["View Specs", "Ignore Specs"],
		});
	},
	
	complete : function (decision) {
		var company = GameManager.company;
		
		if (decision === 0) {
			var GSOptionOne = new Notification({
				header : "GS Specs",
				text : "CPU - Dual CRM Processors (67/33 MHz)\nRAM - 4MB\nDisplay - 256x192 (x2)",
				image : GSImage,
			});
			var GSOptionOneA = new Notification({
				header : "Industry News".localize(),
				text : "The Ninvento GS promises to strengthen this position and aims to breath life into a stagnating mobile market. The console will be in stores {0}.".format(General.getETADescription("13/8/1", "13/8/4")),
				image : GSImage,
			});
			company.activeNotifications.addRange(GSOptionOne.split());
			company.activeNotifications.addRange(GSOptionOneA.split());
			return;
		}
		
		if (decision === 1) {
			var GSOptionTwo = new Notification({
				header : "Industry News",
				text : "The Ninvento GS promises to strengthen this position and aims to breath life into a stagnating mobile market. The console will be in stores {0}.".format(General.getETADescription("13/8/1", "13/8/4")),
				image : GSImage,
			});
			company.activeNotifications.addRange(GSOptionTwo.split());
			return;
		}
	},
});