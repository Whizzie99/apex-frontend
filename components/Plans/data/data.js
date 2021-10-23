import image1 from '../../../public/images/currency.png'
import image2 from '../../../public/images/analytics_team.png'
import image3 from '../../../public/images/data_analytics.png'

// import image1 from '../images/currency.png'
// import image2 from '../images/analytics_team.png'
// import image3 from '../images/data_analytics.png'

// const image1 = require('./images/currency.png')
// const image2 = require('./images/analytics_team.png')
// const image3 = require('./images/data_analytics.png')

export const plans = [
    {
        "id": 1,
        "title": "bronze",
        "perks": ["Return 6%", "every week", "for 5 weeks", "total 30% + capital"],
        "price": "$500",
        "bgimg": image1
    },
    {
        "id": 2,
        "title": "silver",
        "perks": ["Return 0.2%", "every day", "for life time", "life time earning"],
        "price": "$3000",
        "bgimg": image2
    },
    {
        "id": 3,
        "title": "gold",
        "perks": ["Return 5%", "every week", "for 40 weeks", "total 200%"],
        "price": "$5000",
        "bgimg": image3
    },
    {
        "id": 4,
        "title": "platinum",
        "perks": ["Return 5%", "every day", "for 25 days", "total 125%"],
        "price": "$10000",
        "bgimg": image2
    }
]