const Collection = (props) => {
    return `
    <div class="collection" data-carousel="collection" data-id="${props.id}">
    <h3 class="collection__title">${props.title}</h3>
    <div class="movie-carousel">
        <button class="arrow-slider arrow-slider--left" data-carousel="btn-previous"><i class="fa-solid fa-angle-left"></i></button>
        <button class="arrow-slider arrow-slider--right" data-carousel="btn-next"><i class="fa-solid fa-angle-right"></i></button>
        <ul class="movie-carousel__list" data-carousel="list">
        </ul>
    </div>
</div>
    `
}

export default Collection