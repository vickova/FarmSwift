const calculateAvgRating = reviews=>{
    const totalRating = reviews?.reduce((acc, item)=>acc+item?.rating, 0);
    const avgRating = totalRating === 0
    ?'':totalRating === 1
    ?totalRating :
    (totalRating/reviews?.length);

    return{
        avgRating,
        totalRating
    }
}
export default calculateAvgRating;