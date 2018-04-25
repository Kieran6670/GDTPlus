var GDTPlus = {};

//Platform Images
var PlaysystemImage = [GDT.getRelativePath() + "../../../../../images/platforms/superb/Playsystem.png"];
var PlaysystemImageA = [GDT.getRelativePath() + "../../../../../images/platforms/superb/PlaysystemA.png"];
var Playsystem2Image = [GDT.getRelativePath() + "../../../../../images/platforms/superb/Playsystem 2.png"];
var Playsystem3Image = [GDT.getRelativePath() + "../../../../../images/platforms/superb/Playsystem 3.png"];
var Playsystem4Image = [GDT.getRelativePath() + "../../../../../images/platforms/superb/Playsystem 4.png"];
var Playsystem5Image = [GDT.getRelativePath() + "../../../../../images/platforms/superb/Playsystem 5.png"];
var PPSImage = [GDT.getRelativePath() + "../../../../../images/platforms/superb/PPS.png"];

//Remove Vonny Platforms
var platformNames = ["Playsystem","Playsystem 2","Playsystem 3","Playsystem 4", "PPS"];

for (var pname = 0; pname < Platforms.allPlatforms.length; pname++) {
    for (var pname2 = 0; pname2 < platformNames.length; pname2++) {
var platform = Platforms.allPlatforms[pname];
        if (platform.id == platformNames[pname2])
            Platforms.allPlatforms.remove(platform);
    }
}

//Playsystem
GDT.addPlatform({
	id : "GDT+.Playsystem",
	name : "Playsystem",
	company : "Vonny",
	startAmount : 0.85,
	unitsSold : 1.22,
	licencePrize : 2E5,
	published : "7/7/1",
	platformRetireDate : "12/11/2",
	developmentCosts : 6E4,
	genreWeightings : [1, 0.8, 1, 0.9, 0.7, 0.6],
	audienceWeightings : [0.8, 1, 0.9],
	techLevel : 3,
	iconUri : PlaysystemImage,
});

GDT.addEvent({
	id : "GDT+.Play_System.AnnouncementA",
    date : "6/3/4",
	image : PlaysystemImageA,
	getNotification : function (company) {
        return new Notification({
            header : "Industry News".localize(),
            text: "The media is abuzz with the latest news from this year's Entertainment Conference. In a surprise announcement Vonny, a company known for general electronics has presented a prototype console called the Play System.{n}Apparently Vonny has collaborated with Ninvento, creators of the beloved and successful TES and Super TES consoles to develop what is basically a Super TES with a CD drive.{n}This would be the world's first console using a CD drive.".localize(),
        });
    }
});

GDT.addEvent({
	id : "GDT+.Play_System.AnnouncementB",
    date : "6/3/4",
	image : PlaysystemImageA,
	getNotification : function (company) {
        return new Notification({
            header : "Industry News".localize(),
            text: "Journalists around the world are baffled as only one day after Vonny and Ninvento jointly announced the Play System at the Entertainment Conference things have turned sour.{n}Ninvento announced today that they will cancel the project and instead seek to develop a new console with a different partner.{n}Rumour has it that the distribution deal the companies had worked out was unfavorable to Ninvento handing over much of the control to Vonny.{n}This seems to be the end of the Play System.".localize(),
        });
    }
});

GDT.addEvent({
	id : "GDT+.Playsystem.Announcement",
	date : "7/6/1",
	getNotification : function (company) {
		return new Notification({
			sourceId : "GDT+.Playsystem.Announcement",
			header : "Industry News".localize(),
			text : "Today, Vonny has announced their very own console called the Playsystem. Apparently the company has completely reworked their earlier Play System prototype after Ninvento cancelled the project.{n}The new Playsystem comes with a CD-ROM drive and 32-bit processors and is wholly owned by Vonny. Would you like to view the specs for the Playsystem?",
			image : PlaysystemImage,
			options: ["View Specs", "Ignore Specs"],
		});
	},
	
	complete : function (decision) {
		var company = GameManager.company;
		
		if (decision === 0) {
			var PlaysystemOptionOne = new Notification({
				header : "Playsystem Specs",
				text : "CPU - SPIM X3000 @ 33.8688MHz\nRAM - 2Mb\nVRAM - 1Mb",
				image : PlaysystemImage,
			});
			var PlaysystemOptionOneA = new Notification({
				header : "Industry News".localize(),
				text : "Industry professionals say that this might be the beginning of a new generation of consoles. Ninvento declined to comment. The Playsystem will enter the market {0}.".format(General.getETADescription("7/6/1", "7/7/1")),
				image : PlaysystemImage,
			});
			company.activeNotifications.addRange(PlaysystemOptionOne.split());
			company.activeNotifications.addRange(PlaysystemOptionOneA.split());
			return;
		}
		
		if (decision === 1) {
			var PlaysystemOptionTwo = new Notification({
				header : "Industry News",
				text : "Industry professionals say that this might be the beginning of a new generation of consoles. Ninvento declined to comment. The Playsystem will enter the market {0}.".format(General.getETADescription("7/6/1", "7/7/1")),
				image : PlaysystemImage,
			});
			company.activeNotifications.addRange(PlaysystemOptionTwo.split());
			return;
		}
	},
});