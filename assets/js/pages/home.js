import UserProfile from '../componentes/user-profile.js'
import BannerSliderItem from '../componentes/banner-slider-item.js'
import ControlSliderItem from '../componentes/control-slider-item.js'
import Collection from '../componentes/collection.js'
import MovieCarouselItem from '../componentes/movie-carousel-item.js'
import bannerSliderModule from '../modules/banner-slider.js'
import collectionModule from '../modules/collection.js'
import headerModule from '../modules/header.js'

const Home = (data) => {
    const userProfilesElement = document.querySelector('[data-usermenu="user-profiles"]')
    const controlsSliderElement = document.querySelector('[data-banner="controls"]')
    const bannerSliderElement = document.querySelector('[data-banner="slider"]')
    const collectionstElement = document.querySelector('[data-carousel="collections"]')
    const movieCarouselListElement = document.querySelector('[data-banner="slider"]')
    const {banners, categories, movies, userProfiles} = data

    for(const profile of userProfiles){
        userProfilesElement.innerHTML += UserProfile(profile)
    }

    for (const banner of banners){
        bannerSliderElement.innerHTML += BannerSliderItem(banner)
        controlsSliderElement.innerHTML += ControlSliderItem()
    }

    for (const category of categories){
        collectionstElement.innerHTML += Collection(category)
        const collectiontElement = document.querySelector(`[data-id="${category.id}"]`)
        const movieCarouselListElement = collectiontElement.querySelector('[data-carousel="list"]')
        const collectionMovies = movies.filter((movie) => movie.categories.includes(category.id))
        for(const movie of collectionMovies){
            movieCarouselListElement.innerHTML += MovieCarouselItem(movie)
        }
    }

    headerModule().init()
    bannerSliderModule().init()
    collectionModule().init()
}

export default Home