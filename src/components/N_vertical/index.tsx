import { Bell, Hash, Home, Mail, Settings, User2 } from "lucide-react";
import Link from "next/link";
import { Logo_Symbol } from "../Logo";
import Divider from "../Divider";
import Divider_h from "../Divider_h";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";

const NAVIGATION_ITEMS = [
	{
		title: "홈",
		icon: Home,
		link: "home",
	},
	{
		title: "프로필",
		icon: User2,
		link: "profile"
	},
	{
		title: "태그",
		icon: Hash,
		link: "tag"
	},
	{
		title: "알림",
		icon: Bell,
		link: "info"
	},
	{
		title: "메시지",
		icon: Mail,
		link: "msg"
	}, {
		title: "설정",
		icon: Settings,
		link: "setting"
	}
];
export default function N_vertical() {
	return (
		<section className=" h-screen w-52 flex-col  px-3 py-10 shadow-md">
			<div className="ml-4">
				<Logo_Symbol color={"black"} />
			</div>
			{NAVIGATION_ITEMS.map((item, index) => (
				<Toggle aria-label="Toggle navigation">
					<Link
						className="hover:scale-102 flex items-center justify-start space-x-2  bg-white p-4 transition duration-300 ease-in-out hover:hover:bg-gray-100"
						href={`/${item.title.toLowerCase()}`}
						key={item.title}
					>
						<div key={index} className="mx-1  ">
							<item.icon />
						</div>

						<div className=" font-neutral-10  font-noto ">{item.title}</div>
					</Link>
				</Toggle>
			))}
		</section>
	);
}
