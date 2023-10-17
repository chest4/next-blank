import Image from "next/image"
import Car from "../public/car.jpg"

export default function Home() {
	return (
		<>
			<Image
				className="flex rounded-xl float-left mr-5"
				src={Car}
				placeholder="blur"
				quality={100}
				width={500}
				height={500}
			/>
			<h1 className="font-bold">Главная</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit numquam vel labore architecto sapiente, quae odio laborum ex expedita maxime placeat eius neque, repellat consectetur ab doloremque iste, delectus alias!</p>
		</>
	)
}
