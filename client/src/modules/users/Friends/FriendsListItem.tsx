import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userImageUrl } from "services/api";
import IUser from "../../../interfaces/IUser";

interface PropTypes {
	user: IUser;
}

const FriendsListItem: React.FC<PropTypes> = ({ user }) => {
	const [isOnline, setIsOnline] = useState(false);

	return (
		<li className='mb-5'>
			<Link to={`/profile/${user._id}`}>
				<div className='flex gap-5 items-center'>
					<div className='rounded-full w-14 h-14 overflow-hidden'>
						<img
							className='w-full h-full object-fill'
							src={userImageUrl(user._id)}
							alt='user profile'
						/>
					</div>
					<div>
						<h6 className='font-bold leading-4 mb-1'>{user.fullName}</h6>
					</div>
					{isOnline ? (
						<div className='ml-auto bg-yellow-300 rounded-full w-4 h-4 self-center'></div>
					) : (
						<div className='ml-auto self-center'>5m</div>
					)}
				</div>
			</Link>
		</li>
	);
};

export default FriendsListItem;