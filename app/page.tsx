"use client";
import { trpc } from "./_trpc/client";
import { useState } from "react";
import { Nanum } from "./font"

export default function Home() {
	const getTodos = trpc.getTodos.useQuery();
	const getImages = trpc.getImages.useQuery();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="mx-auto ml-2 mt-5 flex flex-col bg-blue-100">
			<h3 className="font-noto  text-6xl font-black ">Dashboard</h3>
			<div>
				Current Information
			</div>
			<div>
				메모
			</div>
			<div>
				정보 - 총방문 , 수익, 좋아요
			</div>
			<div>약속 </div>
		</div >

	);
}
