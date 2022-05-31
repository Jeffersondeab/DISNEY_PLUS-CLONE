import UserProfile from '../componentes/user-profile.js'

const Home = (data) => {
    const userProfilesElement = document.querySelector('[data-usermenu="user-profiles"]')
    const controlsSliderElement = document.querySelector('[data-banner="controls"]')
    const bannerSliderElement = document.querySelector('[data-banner="slider"]')
    const collectionstElement = document.querySelector('[data-carousel="collections"]')
    const movieCarouselListElement = document.querySelector('[data-banner="slider"]')
    const {banners, categories, movies, userProfiles} = data

    for(const profile of userProfiles){
        userProfilesElement.innerHTML = userProfilesElement.innerHTML + UserProfile(profile)
    }
}

export default Home