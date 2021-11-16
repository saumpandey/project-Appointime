const SalonData=[
    {
        id:1,
        name: "Pink Scissor",
        category:"service",
        description: "Pink Scissor Unisex Salon in Mathura is one of the most well-known Beauty Parlours in the city. Also known as Beauty Spas, Beauty Parlours, Beauty Spas For Women, Salons, Women Beauty Parlours, Hair Straightening Beauty Parlours, Bridal Makeup Artists, Hair Bonding Beauty Parlours, and much more. Best Hair Straightening Salons in Mathura.",
        reviews: 4.5,
        service: [
            {
                hair:"Hair Treatment",
                priceH: "2000₹",
                face: "Orange Facial",
                priceF:"5200₹"
            }
        ]
    },

    {
        id:2,
        name: "NS4 Hair and Beauty Salon",
        category:"service",
        description: "Ns4 Beauty & Salon established in 2008. Now one of the biggest salon chains in Uttar Pradesh India having presence in many cities. Strands have been immensely successful needless to say, being an associate to huge brand like “NS4”.",
        reviews: 4.8,
        service:[
            {
                hair:"Hair Rub" ,
                priceH:"1000₹",
                face:"Pulp Facial",
                priceF:"2000₹"
            }
        ]
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
