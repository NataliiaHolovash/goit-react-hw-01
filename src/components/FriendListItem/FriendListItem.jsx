import css from './FriendListItem.module.css'
import clsx from 'clsx'

export default function FriendListItem({
    friends: {avatar, name, isOnline}
}) {
    const statusClsx = clsx(css.status, {
        [css.isOnline]: isOnline,
        [css.isOffline]: !isOnline
    });
    return (
        <div className={css.container} >
            <img className={css.image} src={avatar} alt="Avatar" width="98" />
            <p className={css.name} >{name}</p>
            <p className={statusClsx} >{isOnline === true ? "Online" : "Offline"}</p>
        </div>   
    )
}