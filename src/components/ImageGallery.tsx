import Photo from "../../public/cosmetic-smears-cream-texture-on-pastel-background.webp";

export default function ImageGallery() {
	return (
		<>
			<div className="grid grid-cols-3 min-w-full justify-items-center items-center ">
				<img src={Photo} alt="" />
				<img src={Photo} alt="" />
				<img src={Photo} alt="" />
			</div>
		</>
	);
}
