import css from './FriendListItem.module.css'
import clsx from 'clsx'

export const FriendListItem = ({friend: {avatar, name, isOnline, id}}) => {
    return (
<div className={css.container} dataid={id}>
  <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
  <p className={css.name}>{name}</p>
  <p className={clsx(css.isOnline, isOnline ? css.online : css.offline)}>{isOnline ? "Online" : "Offline"}</p>
</div>
)};