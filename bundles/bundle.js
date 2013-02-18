{
	// Images
	addImage:[	
		["logo","images/logo.png"],
		["font","images/font.png"],
		["player_sprites","images/cels.png"]
	],
	addFont:[ // adding fonts is required if you add an image with an id of 'font'
		{id:"small",image:"font",firstletter:" ",tileh:8,tilew:8,tilerow:255,gapx:0,gapy:0}
	],
	addTiles:[
		{id:"player_tiles",image:"player_sprites",tileh:30,tilew:30,tilerow:12,gapx:0,gapy:0}
	]
}
