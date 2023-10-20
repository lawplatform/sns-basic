"use client";
import { trpc } from "./_trpc/client";
import { useState } from "react";
import { Nanum } from "./font"

export default function Home() {
	const getTodos = trpc.getTodos.useQuery();
	const getImages = trpc.getImages.useQuery();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="w-full bg-green-100">

			<p className="font-roboto">This is A font </p>
			<p >This is B font</p>
			<p className="font-roboto">This is B font</p>
			<p className="font-black">This is B font</p>
			<div>
				<p className="font-bold">한글 폰트 실험</p>
				<p >한글 폰트 실험</p>
				<p className="font-noto">한글 폰트 실험(나눔)</p>
				<p className={Nanum.className}>한글 폰트 실험</p></div>
		</div>

	);
}
