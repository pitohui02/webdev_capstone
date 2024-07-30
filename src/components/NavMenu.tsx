import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
} from "@radix-ui/react-navigation-menu";
import { NavLink } from "react-router-dom";

export default function NavMenu() {
	return (
		<>
			<NavigationMenu
				orientation="horizontal"
				className="min-w-full flex flex-row justify-center  gap-9 py-3 px-4 font-bold text-slate-800  "
			>
				<NavigationMenuList className="flex flex-row gap-9 py-3 px-4 font-bold text-slate-800  ">
					<NavigationMenuItem>
						<NavLink
							to="/"
							className="hover:bg-slate-300 p-2 rounded-sm hover:text-[#FFAF8A] duration-300"
						>
							Home
						</NavLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavLink
							to="/photos"
							className="hover:bg-slate-300 p-2 rounded-sm hover:text-[#FFAF8A] duration-300"
						>
							Photos
						</NavLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavLink
							to="/illustrations"
							className="hover:bg-slate-300 p-2 rounded-sm hover:text-[#FFAF8A] duration-300"
						>
							Illustrations
						</NavLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</>
	);
}
