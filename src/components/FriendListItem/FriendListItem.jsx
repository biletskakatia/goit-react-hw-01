import css from "./FriendListItem.module.css";
export default function FriendListItem({ avatar, name, isOnline }) { 
    return (
    <div className={css.item}>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
    <p className={`${css.status} ${isOnline ? css.online : css.offline}`}>
    {isOnline ? 'Online' : 'Offline'}</p>
    </div>
)
}