const SalonData=[
    {
        id:1,
        image:'assets/salon1.jpg',
        description: "Meadows Wellness is an Unisex Salon in Mathura is one of the most well-known Beauty Parlours \n in the city. Also known as Beauty Spas, Beauty Parlours, Beauty Spas For Women, Salons, \n Women Beauty Parlours, Hair Straightening Beauty Parlours, Bridal Makeup Artists, \n Hair Bonding Beauty Parlours, and much more. Best Hair Straightening Salons in Mathura.",
        reviews:4.5,
        service: [
            {
               hair:'Haircut + Hair Wash + Blow-Dry',
               priceH:'499₹',
               timeH:'45 min',
               body:'Aroma Manicure + Pedicure',
               priceB:'699₹',
               timeB:'30 min',
               face:'Organic/Fresh Fruit Facial',
               priceF:'999₹',
               timeF:'1 hr',
               makeup:'Light Party Make-up : Kryolan Makeup + Hair Styling + Nail Paint',
               priceM:'2,499₹',
               timeM:'1.5 hr',
               wax:' White Chocolate Waxing (Full Arms + Full Legs + Under arms)',
               priceW:'899₹',
               timeW:'45 min',
               nail:'3 D Nail Art With Gel Nail Paint ( Hand 10 Finger)',
               priceN:'599₹',
               timeN:'15 min',
            }
        ],
    },

    {
        id:2,
        image:'assets/salon2.jpg',
        category:"service",
        description: "Revive Hair and Beauty Salon established in 2008. Now one of the biggest salon chains in Uttar Pradesh India \n having presence in many cities. Strands have been immensely successful needless to say, being an \n associate to huge brand like “Revive”.",
        reviews: 4.8,
        service:[
            {
               hair:'Keratin Treatment / Smoothening/ Straightening /Global Hair Color',
               priceH:'1,999₹',
               timeH:'40 min',
               face:'Anti Acne Facial With Rubber Mask',
               priceF:'1,299₹',
               timeF:'1 hr',
               wax:'Rica Waxing ( FA+FL+UA) + Threading (Eyebrow+Upperlip)',
               priceW:'799₹',
               timeW:'50 min',
               nail:'Nail Extension + Gel Nail Paint + Nail Art ( Hand 10 Finger)',
               priceN:'1,199₹',
               timeN:'20 min',
               makeup:'MAC/Kryolan/Huda Beauty Party Makeup + Hairdo + Dress Draping',
               priceM:'1,849₹' ,
               timeM:'2 hr',
               body:'De-Tan + Cleanup + Manicure + Pedicure + Threading',
               priceB:'899₹',
               timeB:'1 hr' 
            }
        ],
    },
]

export default SalonData;

export const Product=[
    {
        id:1,
        category:'skin',
        img:"assets/nyka_skin.jpg",
        description:'Nykaa SKINRX 20% Vitamin C Face Serum for Bright, Glowing Skin with 1% Hyaluronic Acid',
        price:'1199₹' 
    },

    {
        id:2,
        category:'skin',
        img: "./assets/lakme_skin.jpg",
        description:'Lakme Absolute Perfect Radiance Skin Brightening Day Creme',
        price:'225₹'   
    },

    {
        id:3,
        category:'skin',
        img:'assets/mini_skin.jpg',
        description:'Minimalist 10% Niacinamide Face Serum for Acne Marks- Oil Balancing & Dark Spot with Zinc',
        price:'599₹'   
    },

    {
        id:4,
        category:'skin',
        img:'assets/vasline_skin.jpg',
        description:'Vaseline Intensive Care Cocoa Glow Body Lotion',
        price:'99₹'   
    },

    {
        id:5,
        category:'tool',
        img:'assets/dryer_tool.jpg',
        description:'Philips Hair Dryer (HP8100/46)',
        price:'875₹'   
    },

    {
        id:6,
        category:'hair',
        img:'assets/serum_hair.jpg',
        description:'Streax Professional Vitariche Gloss Hair Serum',
        price:'207₹'   
    },

    {
        id:7,
        category:'hair',
        img:'assets/wow_hair.jpg',
        description:'WOW Skin Science Onion Black Seed Oil Hair Care Kit (Shampoo + Hair Conditioner + Hair Oil)',
        price:'969₹'   
    },

    {
        id:8,
        category:'tool',
        img:'assets/curler_tool.jpg',
        description:'Ikonic Professional Mini Crimper - Purple',
        price:'1275₹'   
    },

    {
        id:9,
        category:'hair',
        img:'assets/loreal_hair.jpg',
        description:'LOreal Professionnel Absolut Repair Shampoo with Protein and Gold Quinoa, Serie Expert',
        price:'695₹'   
    },
];

export const SpaApi=[
    {
        id:1,
        img:'assets/spa1.jpg',
        review: "3.4",
        service: [
            {
                s1:'Full Body Massage (Thai) (45 mins) + Shower (15 mins)',
                price:'845₹',
                s2:'Full Body Massage (Swedish) (60 mins) + Shower (15 mins)',
                price2:'1,170₹',
                s3:'Full Body Massage (Deep Tissue) (60 mins) + Shower (15 mins)',
                price3:'1,625₹'
            }
        ]
    },
    {
        id:2,
        img:'assets/spa2.jpg',
        review:'4.6',
        service:[
            {
                s1:'Full Body Massage (with organic cold-pressed oil) 50 mins + Shower (10 mins)',
                price:'1,799₹',
                s2:'Full Body Massage(60 mins) + Full Body Scrub(50 mins) + Shower (10 minutes)',
                price2:'2,999₹',
                s3:'Signature Foot Massage / Head Massage / De-Stress Back and Shoulder massage (30 mins)',
                price3:'799₹'
            }
        ]
    },
    {
        id:3,
        img:'./assets/spa3.jpg',
        review:'4.4',
        service:[
            {
                s1:'Full Body Scrub (30min) + Choice of Full Body Massage (30min) + Shower (15min)',
                price:'999₹',
                s2:'Full Body Wine Scrub (30min) + Choice of Full Body Massage (30min) + Shower (15min)',
                price2:'1,499₹',
                s3:'Turkish Full Body Massage (60 mins) + Shower (15 mins)',
                price3:'2,199₹'
            }
        ]
    }
]

export const Team=[
    {
        name: 'Sanskriti Agrawal',
        img:'assets/girl.jpg',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing \n elit. Fusce eu viverra eros. Nunc convallis nibh \n ante, vitae egestas diam tempus quis.'
    },
    {
        name:'Saum Pandey',
        img:'assets/boy.png',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing \n elit. Fusce eu viverra eros. Nunc convallis nibh \n ante, vitae egestas diam tempus quis.'
    }
]

export const BlogApi=[
    {
        img:'assets/image7.jpg',
        name:'How Massage Can Reduce Stress',
        description:'Stress is something that we all deal with throughout our lives. And while it is common, it can have negative \n effects on our bodies and minds. For this reason, it is important that you try to reduce your stress as much \n as possible. Luckily, there are many ways to reduce stress and help you feel Sometimes it can be hard…',
        link:'Read More'
    },

    {
        img:'assets/image8.jpg',
        name:'Different HairCut For Summer',
        description:'Summer fun is just around the corner and that means you will be spending more time outside in the heat, \n swimming in lakes and pools, and driving with the windows down! While summer brings a ton of fun outdoor \n activities, it also brings a constant mess of hair. If you are sick of having to If you are one of those women…',
        link:'Read More'
    },

    // {
    //     img:'assets/image9.jpg',
    //     name:'Exactly What Happens to Your Face When You’re Stressed',
    //     description:'“When your emotions are high, your cortisol levels spike and trigger your oil glands to produce more oil,” says Mona Gohara, M.D., a board-certified dermatologist and associate clinical professor of dermatology at Yale School of Medicine. “That oil then feeds acne-causing bacteria in your skin, leading to, yes, acne.”',
    //     link:'Read More'
    // }
]

export const MenApi=[
    {
        id:1,
        img:'assets/men1.jpg',
        description:'Vikings Salon is one of the capital cities most unique and competent salons creating styles that are \n characterised with comfort, ease and edge! Vikings is a style leader and we are famous for our \n unique culture of organic haircutting, beautiful creative color and seamless balayage highlighting.',
        review:4.4,
        button:'Book Now',
        service:[
            {
                hair:'Haircut + Hair Wash',
                priceH:'499₹',
                hair2:'Haircut + Hair Wash + Beard Shave/Trim',
                priceH2:'799₹',
                face:'Face Clean Up/Thalgo Face Clean Up',
                priceF:'1,499₹',
                face2:'Thalogo Facial',
                priceF2:'2,499₹'
            }
        ]
    },

    {
        id:2,
        img:'assets/men2.jpg',
        description:'Figaros Unisex Salon in West Punjabi Bagh, Delhi is a top player in the category Beauty Spas in the \n Delhi. This well-known establishment acts as a one-stop destination servicing customers both local \n and from other parts of Delhi. Over the course of its journey, this business has established a firm \n foothold in it’s industry.',
        review:4.5,
        button:'Book Now',
        service:[
            {
                hair:'Haircut',
                priceH:'260₹',
                hair2:'Haircut+Hair Wash + Beard Trim/Shave',
                priceH2:'400₹',
                face:' GK Keratin Treatment (Any Length)',
                priceF:'1,500₹',
                face2:'LOréal Deep Conditioning Hair Spa',
                priceF2:'590₹'
            }
        ]
    }
]
