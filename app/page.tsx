"use client";
import { trpc } from './_trpc/client'
import { useState } from 'react';
import Card_list from '@/src/components/Card_list';

export default function Home() {
	const getTodos = trpc.getTodos.useQuery();

	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			{JSON.stringify(getTodos.data)}
			<div className='flex flex-col  items-center'>
				<p>hello...? </p>
				<Card_list></Card_list>
			</div>
		</div>
	)
}
