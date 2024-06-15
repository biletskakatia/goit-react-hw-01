import FriendListItem from "../FriendListItem/FriendListItem"
import css from "./FriendList.module.css"
export default function FriendList({friends}) {
    return (<ul className={css.friendList}>
    <li className={css.friendsListItem}>{friends.map(friend => (
        <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        />
    ))}
    </li>
    </ul>)
}