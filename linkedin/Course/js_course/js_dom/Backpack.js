class Backpack{
	constructor(
		name,
		volume,
		color,
		pocketNum,
		strapLengthL,
		strapLengthR,
		lidOpen
	){
		this.name = name;
		this.volume = volume;
		this.color = color;
		this.pocketNum = pocketNum;
		this.strapLength = {
			left: strapLengthL,
			right: strapLengthR
		}
		this.lidOpen = lidOpen;
	}
	
	toggleLid(lidStatus){
		this.lidOpen = lidStatus
	}
	newStrapLength(lengthLeft, lengthRight){
		this.straplength.left = lengthLeft;
		this.straplength.right = lengthRight;
	}
}

export default Backpack;