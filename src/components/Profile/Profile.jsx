import css from './Profile.module.css'

export default function Profile({
    userData: { avatar, userName, tag, location, stats},
}) {
return (
        
 <div className={css.container}>
     <div className={css.user}>
     <img className={css.image}
     src={avatar}
     alt="User avatar" height="180"                 
     />
     <p className={css.userName}>{userName}</p>
     <p className={css.tag} >{tag}</p>
     <p className={css.location} >{location}</p>
     </div>

 <ul className={css.list}>
 <li className={css.listText} >Followers <span className={css.listSpan}>{stats.followers}</span></li>
 <li className={css.listText}>Views <span className={css.listSpan}>{stats.views}</span></li>
 <li className={css.listText}>Likes <span className={css.listSpan}>{stats.likes}</span></li>
 </ul>
</div>
    )
}