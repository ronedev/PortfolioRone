import React from 'react'
import { FormattedMessage } from 'react-intl'
import { reviewsList } from './reviewsList'
import star from 'img/icons/star.png'

const Reviews = () => {

    //Funcion que evaluará el rating recibido por la lista de reviews y devolvera la cantidad de estrellas segun corresponda
    const rating = (rating) => {
        switch (rating) {
            case 1:
                return (
                    <img src={star} alt='starIcon' />
                )
            case 2:
                return (
                    <>
                        <img src={star} alt='starIcon' />
                        <img src={star} alt='starIcon' />
                    </>
                )
            case 3:
                return (
                    <>
                        <img src={star} alt='starIcon' />
                        <img src={star} alt='starIcon' />
                        <img src={star} alt='starIcon' />
                    </>
                )
            case 4:
                return (
                    <>
                        <img src={star} alt='starIcon' />
                        <img src={star} alt='starIcon' />
                        <img src={star} alt='starIcon' />
                        <img src={star} alt='starIcon' />
                    </>
                )
            case 5:
                return (
                    <>
                        <img src={star} alt='starIcon' />
                        <img src={star} alt='starIcon' />
                        <img src={star} alt='starIcon' />
                        <img src={star} alt='starIcon' />
                        <img src={star} alt='starIcon' />
                    </>
                )
            default:
                return (
                    <>
                        <img src={star} alt='starIcon' />
                        <img src={star} alt='starIcon' />
                        <img src={star} alt='starIcon' />
                        <img src={star} alt='starIcon' />
                        <img src={star} alt='starIcon' />
                    </>
                )
        }
    }

    return (
        <section className='reviewsSection' id='reviews'>
            <button className='btn1'>
                <FormattedMessage
                    id='reviews.btnPrimary'
                    defaultMessage="Testimonials"
                />
            </button>
            <h2>
                <FormattedMessage
                    id='reviews.title'
                    defaultMessage="What customer says"
                />
            </h2>
            <div className='testimonialsContainer'>
                {reviewsList.map(review => {
                    return (
                        <div className='reviewContainer'>
                            <div className='ratingContainer'>
                                {rating(review.rating)}
                            </div>
                            <p>
                                <FormattedMessage
                                    id={'review.opinion'+review.id}
                                    defaultMessage='Customer opinion'
                                />
                            </p>
                            <span className='reviewCustomerName'>{review.autor} <br/><span className='reviewCustomerPosition'>{review.position}</span></span>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Reviews