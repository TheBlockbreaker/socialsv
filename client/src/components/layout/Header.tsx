import Tippy from "@tippyjs/react";
import useLogout from "common/hooks/useLogout";
import React from "react";
import {
	AiFillHome,
	AiFillNotification,
	AiFillMessage,
	AiOutlineLogout,
} from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getCurrentUser } from "store/selectors/appSelectors";
import { useAppSelector } from "store/store";

const classes = {
	icon: "w-6 h-6",
};

const Header = () => {
	const logoutHandler = useLogout();
	const currentUser = useAppSelector(getCurrentUser);

	return (
		<div className='container m-auto py-4 px-6 bg-primary rounded-3xl my-6'>
			<div className='flex justify-between items-center'>
				<Tippy content='Hello'>
					<h1 className='text-xl font-bold'>INSTAGRAM</h1>
				</Tippy>
				<form>
					<input className='bg-transparent text-xl' placeholder='Search..' />
				</form>
				<div className='flex items-center gap-2'>
					<Link to='/'>
						<AiFillHome className={classes.icon} />
					</Link>
					<Link to='/notifications'>
						<AiFillNotification className={classes.icon} />
					</Link>
					<Link to='/chat'>
						<AiFillMessage className={classes.icon} />
					</Link>
					<Link to={`/profile/${currentUser?._id}`}>
						<FaUser className={classes.icon} />
					</Link>
					<button onClick={logoutHandler}>
						<AiOutlineLogout className={classes.icon} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;