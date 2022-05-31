const BannerSliderItem = (props) =>{
    return `
    <div class="banner-slider__item" data-banner="item" data-id="${props.id}">
        <a href="/${props.slug}" class="banner-slider__link">
            <img class="banner-slider__cover" src="${props.imageCover}"
                alt="${props.title}" />
            <img class="banner-slider__title" src="${imageTitle}" data-banner="img-title"
                alt="${props.title}" />
        </a>
    </div>
    `
} 

export dafault BannerSliderItem