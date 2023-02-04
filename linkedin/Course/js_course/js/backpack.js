const updateBackpack = (update) => {
	let main = document.querySelector('main');
	main.innerHTML = markup(update);
	console.info(update)
}

const backpack = {
	name: "Everyday Backpack",
	volume: 30,
	color: 'grey',
	pocketNum: 15,
	strapLength: {
		left: 26,
		right: 26,
	},
	lidOpen: false,
	toggleLid: (lidStatus) => {
		this.lidOpen = lidStatus
		updateBackpack('lid status changed')
	},
	newStrapLength: (lengthLeft, lengthRight) => {
		this.strapLength.left = lengthLeft;
		this.strapLength.right = lengthRight;
		updateBackpack("Strap length update")
	}
}

export default backpack;