import Button from "components/Button/Button";
import React from "react";
import { useSelector } from "react-redux";
import { getCurrentUserFriends } from "store/selectors/appSelectors";
import FriendsListItem from "./FriendsListItem";

const Friends = () => {
	const friends = useSelector(getCurrentUserFriends) ?? [];

	return (
		<div className='p-5 bg-primary rounded-3xl'>
			<h3 className='text-3xl mb-5'>Friends</h3>
			<ul>
				{friends.map(user => {
					return <FriendsListItem key={user._id} user={user} />;
				})}
			</ul>
			<div className='text-center'>
				<Button color='secondary' className='w-full'>
					Show more
				</Button>
			</div>
		</div>
	);
};

export default Friends;