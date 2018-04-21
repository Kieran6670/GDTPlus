var GDTPlus = {};

//Platform Images
var PlaceholderImage = [GDT.getRelativePath() + "../../Images/Placeholder/PlaceholderImage.png"];
var MVImage = [GDT.getRelativePath() + "../../../../../images/platforms/Master V.png"];
var VGearImage = [GDT.getRelativePath() + "../../../../../images/platforms/superb/Vena Gear.png"];
var VOasisImage = [GDT.getRelativePath() + "../../../../../images/platforms/superb/Vena Oasis.png"];
var DreamVastImage = [GDT.getRelativePath() + "../../../../../images/platforms/superb/DreamVast.png"];

//Remove Vena Platforms
var platformNames = ["Master V","Vena Gear","Vena Oasis","DreamVast"];

for (var pname = 0; pname < Platforms.allPlatforms.length; pname++) {
    for (var pname2 = 0; pname2 < platformNames.length; pname2++) {
var platform = Platforms.allPlatforms[pname];
        if (platform.id == platformNames[pname2])
            Platforms.allPlatforms.remove(platform);
    }
}

//Master V
GDT.addPlatform({
	id : "GDT+.MasterV",
	name : "Master V",
	company : "Vena",
	startAmount : 0.43,
	marketKeyPoints : [{
			date : "4/1/1",
			amount : 0.456,
		},	{
			date: "6/6/2",
			amount: 0.466,
		}
	],
	unitsSold : 0.7,
	licencePrize : 80000,
	published : "3/2/3",
	platformRetireDate : "11/3/4",
	developmentCosts : 30000,
	genreWeightings : [0.9, 0.7, 0.8, 0.8, 0.7, 1],
	audienceWeightings : [0.9, 1, 0.7],
	techLevel : 2,
	iconUri : MVImage,
});

GDT.addEvent({
	id : "GDT+.MasterV.Rumour",
    date : "2/10/3",
	getNotification : function (company) {
        return new Notification({
            header : "Industry News".localize(),
            text: "Rumours have recently surfaced stating that Vena, the Japanese company popular for their arcade games are planning to release a home console which is intended to compete with the Ninvento TES.".localize(),
        });
    }
});

GDT.addEvent({
	id : "GDT+.MasterV.Announcement",
	date : "2/12/1",
	getNotification : function (company) {
		return new Notification({
			sourceId : "GDT+.MasterV.Announcement",
			header : "Industry News".localize(),
			text : "After months of rumours, Vena has officially announced their new home console, named the Master V. \n\nWould you like the view the specs of the Master V?",
			image : MVImage,
			options : ["View Specs", "Ignore Specs"],
		});
	},
	
	complete : function (decision) {
		var company = GameManager.company;
		
		if (decision === 0) {
			var MasterVOptionOne = new Notification({
				header : "Master V Specs",
				text : "CPU - Zileg X80 @ 4MHz\nRAM - 8kB\nAudio - Tennessee Instruments SN76489\nVideo - VDP3264 (256 x 192 with 32 on-screen colours)\nVideo RAM - 16kB",
				image : MVImage,
			});
			var MasterVOptionOneA = new Notification({
				header : "Industry News".localize(),
				text : "Vena have announced they intend to release the new console {0}.".format(General.getETADescription("2/12/1", "3/2/3")),
				image : MVImage,
			});
			company.activeNotifications.addRange(MasterVOptionOne.split());
			company.activeNotifications.addRange(MasterVOptionOneA.split());
			return;
		}
		
		if (decision === 1) {
			var MasterVOptionTwo = new Notification({
				header : "Industry News".localize(),
				text : "Vena have announced they intend to release the new console {0}.".format(General.getETADescription("2/12/1", "3/2/3")),
				image : MVImage,
			});
			company.activeNotifications.addRange(MasterVOptionTwo.split());
			return;
		}
	},
});

GDT.addEvent({
	id : "GDT+.MasterV.Success",
	date : "3/3/2",
	getNotification : function (company) {
        return new Notification({
            header : "Industry News".localize(),
            text: "The Master V, which was recently released by Vena has stirred up the worldwide platform market.\n Industry experts are saying that the console will flourish in all regions of the world except North America due to poor marketing in that region.".localize(),
			image : MVImage,
        });
    }
});

//Vena Gear
GDT.addPlatform({
	id : "GDT+.VGear",
	name : "Vena Gear",
	company : "Vena",
	startAmount : 0.6,
	unitsSold : 0.84,
	licencePrize : 50000,
	published : "4/2/4",
	platformRetireDate : "8/4/1",
	developmentCosts : 30000,
	genreWeightings : [0.9, 0.8, 0.8, 0.9, 0.6, 1],
	audienceWeightings : [0.9, 1, 0.8],
	techLevel : 3,
	iconUri : VGearImage,
});

GDT.addEvent({
	id : "GDT+.VGear.Announcement",
	date : "4/1/2",
	getNotification : function (company) {
		return new Notification({
			sourceId : "GDT+.VGear.Announcement",
			header : "Industry News".localize(),
			text : "Today Vena, creators of the popular Master V system, have announced a new console called the Vena Gear. This is a portable system aimed to compete against the Gameling from Ninvento. \n\nWould you like to view the specs for the Vena Gear?",
			image : VGearImage,
			options : ["View Specs", "Ignore Specs"],
		});
	},
	
	complete : function (decision) {
		var company = GameManager.company;
		
		if (decision === 0) {
			var VGearOptionOne = new Notification({
				header : "Vena Gear Specs",
				text : "CPU - Zileg X80 @ 3.5MHz\nRAM - 8kB\nAudio - Tennessee Instruments SN76489\nVideo - VDP3264 (256 x 192 with 32 on-screen colours)\nVideo RAM - 16kB",
				image : VGearImage,
			});
			var VGearOptionOneA = new Notification({
				header : "Industry News".localize(),
				text : "A company spokesperson has stated that 'Unlike similar devices on the market which are crippled by their handheld nature, the Vena Gear offers the full power of the Master V in a portable package. They intend to launch the console in {0}.".format(General.getETADescription("4/1/2", "4/2/4")),
				image : VGearImage,
			});
			company.activeNotifications.addRange(VGearOptionOne.split());
			company.activeNotifications.addRange(VGearOptionOneA.split());
			return;
		}
		
		if (decision === 1) {
			var VGearOptionTwo = new Notification({
				header : "Industry News".localize(),
				text : "A company spokesperson has stated that 'Unlike similar devices on the market which are crippled by their handheld nature, the Vena Gear offers the full power of the Master V in a portable package. They intend to launch the console in {0}.".format(General.getETADescription("4/1/2", "4/2/4")),
				image : VGearImage,
			});
			company.activeNotifications.addRange(VGearOptionTwo.split());
			return;
		}
	},
});

//Vena Oasis
GDT.addPlatform({
	id : "GDT+.VOasis",
	name : "Vena Oasis",
	company : "Vena",
	startAmount : 0.62,
	unitsSold : 0.65,
	licencePrize : 100000,
	published : "5/2/4",
	platformRetireDate : "10/11/1",
	developmentCosts : 50000,
	genreWeightings : [1, 0.8, 0.8, 0.9, 0.6, 0.7],
	audienceWeightings : [0.8, 1, 0.9],
	techLevel : 3,
	iconUri : VOasisImage,
});

GDT.addEvent({
	id : "GDT+.VOasis.Announcement",
	date : "5/1/1",
	getNotification : function (company) {
		return new Notification({
			sourceId : "GDT+.VOasis.Announcement",
			header : "Industry News",
			text : "Vena have just announced they will be releasing their new platform {0}. The Vena Oasis comes with 16-Bit hardware offering a major improvement in specifications which promises a new gaming experience. \n\nWould you like to view the specs for the Vena Oasis?",
			image : VOasisImage,
			options : ["View Specs", "Ignore Specs"],
		});
	},
	
	complete : function (decision) {
		var company = GameManager.company;
		
		if (decision === 0) {
			var VOasisOptionOne = new Notification({
				header : "Vena Oasis Specs",
				text : "CPU - Notorola 68000 @ 7.61MHz\nCo-Processor - Zileg X80 @ 4MHz\nAudio - Tennessee Instruments SM98467\nFM Synthesizer - Yomoha YM2612\nAudio RAM - 8kB\nVideo - VDP64512 (320 x 224 with 32 on-screen colours)\nVideo RAM - 64kB",
				image : VOasisImage,
			});
			var VOasisOptionOneA = new Notification({
				header : "Industry News".localize(),
				text : "Vena have said that the console is a 'new start, which will act as the genesis for a new generation of gaming consoles.' The company predict the console will do very well in the market, and they aim to launch the console {0}".format(General.getETADescription("5/1/1", "5/2/4")),
				image : VOasisImage,
			});
			company.activeNotifications.addRange(VOasisOptionOne.split());
			company.activeNotifications.addRange(VOasisOptionOneA.split());
			return;
		}
		
		if (decision === 1) {
			var VOasisOptionTwo = new Notification({
				header : "Industry News",
				text : "Vena have said that the console is a 'new start, which will act as the genesis for a new generation of gaming consoles.' The company predict the console will do very well in the market, and they aim to launch the console {0}".format(General.getETADescription("5/1/1", "5/2/4")),
				image : VOasisImage,
			});
			company.activeNotifications.addRange(VOasisOptionTwo.split());
			return;
		}
	},
});

//Dreamvast
GDT.addPlatform({
	id : "GDT+.DreamVast",
	name : "Vena DreamVast",
	company : "Vena",
	startAmount : 1.1,
	marketKeyPoints : [{
			date : "11/4/2",
			amount : 1.2
		}
	],
	unitsSold : 0.9,
	licencePrize : 250000,
	published : "10/8/3",
	platformRetireDate : "14/1/4",
	developmentCosts : 60000,
	genreWeightings : [1, 0.7, 0.8, 1, 0.7, 0.7],
	audienceWeightings : [0.7, 1, 1],
	techLevel : 4,
	iconUri : DreamVastImage,
});

GDT.addEvent({
	id : "GDT+.DreamVast.Announcement",
	date : "10/1/2",
	getNotification : function (company) {
		return new Notification({
			sourceId : "GDT+.DreamVast.Announcement",
			header : "Industry News",
			text : "The day that Vena fans have waited for has finally arrived, as Vena have just announced their next console, named the DreamVast. A Vena spokesperson has stated that the DreamVast is 'Dream come true. It is the most powerful games console ever made.'\n\nWould you like to view the specs for the DreamVast?",
			image : DreamVastImage,
			options : ["View Specs", "Ignore Specs"],
		});
	},
	
	complete : function (decision) {
		var company = GameManager.company;
		
		if (decision === 0) {
			var DreamVastOptionOne = new Notification({
				header : "DreamVast Specs",
				text : "CPU - Haitachi MH-4 @ 200MHz\nRAM - 16Mb\nAudio - Yomoha SISP\nAudio RAM - 2Mb\nGPU - ProVR2 CLZ2 @ 100MHz (640 x 480)\nVideo RAM - 8Mb",
				image : DreamVastImage,
			});
			var DreamVastOptionOneA = new Notification({
				header : "Industry News",
				text : "The console also ships with a modem by default, making it the first console ready for online play out of the box. They have confirmed the system will launch {0}.".format(General.getETADescription("10/1/2", "10/8/3")),
				image : DreamVastImage,
			});
			company.activeNotifications.addRange(DreamVastOptionOne.split());
			company.activeNotifications.addRange(DreamVastOptionOneA.split());
			return;
		}
		
		if (decision === 1) {
			var DreamVastOptionTwo = new Notification({
				header : "Industry News",
				text : "The console also ships with a modem by default, making the first console it ready for online play out of the box. They have confirmed the system will launch {0}.".format(General.getETADescription("10/1/2", "10/8/3")),
				image : DreamVastImage,
			});
			company.activeNotifications.addRange(DreamVastOptionTwo.split());
			return;
		}
	},
});

GDT.addEvent({
	id : "GDT+.DreamVast.Slowing",
    date : "11/4/2",
	getNotification : function (company) {
        return new Notification({
            header : "Industry News".localize(),
            text: "Since release, the DreamVast from Vena has been one of the fastest selling consoles in history but lately it seems that the anticipation of the upcoming Playsystem 2 release is slowing down sales.{n}If the Playsystem 2 can hold up to the hype when it is released then Vena could be in deep trouble.".localize(),
        });
    }
});

GDT.addEvent({
	id : "GDT+.DreamVast.Discontinued",
    date : "12/7/3",
	getNotification : function (company) {
        return new Notification({
            header : "Industry News".localize(),
            text: "In a sobering announcement, Vena has today confirmed the discontinuation of the DreamVast. Vena's president said that while many companies will still deliver games for the platform, the company will no longer produce new units in the future.{n}Vena fans worldwide are disappointed, as a beloved part of gaming console history is coming to an end.".localize(),
        });
    }
});