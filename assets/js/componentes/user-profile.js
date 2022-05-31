const UserProfile = () => {
    return 
    `<li class="user-menu__item" id="${props.id}">
        <div class="user-profile user-profile">
            <img class="user-profile__avatar" src="${props.avatar}" alt="">
            <span class="user-profile__title">${props.nome}</span>
        </div>
    </li>`
}

export default UserProfile