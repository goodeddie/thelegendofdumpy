{
	// Map BGM
	//addAudio:[
	//	["map-bgm",[audioserver+"tlol-village.mp3",audioserver+"tlol-village.ogg"],{channel:"bgmusic",loop:true}],	
	//],
	// Map graphics
	addImage:[	
		["beginning-tiles","images/gfx-village.png"],
	],
	// Map Tileset
	addTiles:[
		{id:"tiles",image:"beginning-tiles",tileh:30,tilew:30,tilerow:10,gapx:0,gapy:0},	
	],
	setObject:[
		// Dialogues on this map
		{
			object:"dialogues",
			property:"intro",
			value:{ font:"small", skipkey:"a", esckey:null, who: noface,
		  		scenes:[
		  			{ speed:1, who:"noone", talk:["Help help!"]},
		  			{ speed:1, who:"noone", talk:["Someone come save me!"]},
						{ speed:1, who:"noone", talk:["I'm inside the house with the cute little pink door!" ]},
		  		]
		  	}
		},
		{ // Map data and actions
			object:"tilemaps",
			property:"map",
			value:{					
				title:"Kariko Village",
				tileset:"tiles",
				map:[
					[  13,  13,  13,  13,  13,  13,  13,  13,  13,  13,  13,  13,  13,  13,  13,  13],
					[  13,  13,  13,  13,  13,  13,  13,  13,  13,  13,   2,   2,   2,  13,  13,  13],
					[  12,  12,  12,  12,  12,  12,  12,  12,  12,  12,   1,   1,   1,  12,  12,  12],
					[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,  10,  11],
					[   0,   0,   0,   0,  10,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,  10],
					[   0,   0,   0,  11,  11,  11,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
					[   0,   0,   0,  11,  11,   0,   0,   0,   0,   0,  11,  11,   0,   0,   0,   0],
					[   0,   0,   0,  10,   0,   0,   0,   0,   0,   0,   0,  11,   0,   0,   0,   0],
					[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
					[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
					[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
					
				  ],
				 playerSpawnX:40,
				 playerSpawnY:180,
				 addObjects:function() {
					//gbox.playAudio("map-bgm");
					//maingame.addBlock(360,150,"house",0);
					//maingame.addNpc(390,220,[4],"villager",null,[4,5]);
					maingame.addNpc(150,180,[6],"Ally",null,[6,7]);
				 },
				 mapActions:function() {
					//var pl=gbox.getObject("player","player");
					//var ontile=help.getTileInMap(pl.x+pl.colx+pl.colhw,pl.y+pl.coly+pl.colhh,tilemaps.map,tilemaps._defaultblock,"map");
					//if (ontile==1) maingame.gotoLevel({level:"floor1",x:580,y:590,label:"Floor 1 entrance"});
				 },
				tileIsSolid:function(obj,t){ return (t>9) }
			}
		}
	]
}