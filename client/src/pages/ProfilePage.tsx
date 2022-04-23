import { useUserPosts } from "modules/posts/apiClient";
import ProfilePagePosts from "modules/posts/ProfilePagePosts/ProfilePagePosts";
import { useNavigate, useParams } from "react-router";
import { userImageUrl } from "services/api";
import { useGetUser } from "modules/users/apiClient";
import ProfilePageUserActions from "modules/users/ProfilePageUserActions";
import { useCreateChat } from "modules/chat/apiClient";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserId } from "store/selectors/appSelectors";
import { setCurrentChat } from "store/chat/chatSlice";

function ProfilePage() {
	const { userId } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const currentUserId = useSelector(getCurrentUserId);
	const { data: user } = useGetUser(userId!);
	const { data: posts = [], isLoading } = useUserPosts(userId!);
	const { mutate: createChat, isSuccess, data: chat } = useCreateChat();

	const isCurrentUserProfile = currentUserId === user?._id;

	useEffect(() => {
		if (isSuccess && chat) {
			dispatch(setCurrentChat(chat));
			navigate("/chat");
		}
	}, [chat, dispatch, isSuccess, navigate]);

	return (
		<div className='container'>
			<div className='flex gap-5 items-center mt-10'>
				<img
					className='rounded-full w-72 h-72'
					src={userImageUrl(userId)}
					alt='Profile'
				/>
				<div className='flex flex-col gap-4'>
					<div className='flex gap-5'>
						<h3 className='text-3xl font-bold'>{user?.fullName}</h3>
						<div className='flex gap-4'>
							<ProfilePageUserActions userId={userId!} />
						</div>
					</div>

					<div className='flex gap-6'>
						<p>{posts?.length ?? 0} Posts</p>
						<p>{user?.friends.length ?? 0} Friends</p>
					</div>
					{!isCurrentUserProfile && (
						<button
							className='self-start underline'
							onClick={() => {
								createChat(userId!);
							}}
						>
							Send message
						</button>
					)}
				</div>
			</div>
			<ProfilePagePosts
				posts={posts.filter(post => post.photo)}
				isLoading={isLoading}
			/>
		</div>
	);
}

export default ProfilePage;