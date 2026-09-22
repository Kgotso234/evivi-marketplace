/*
|--------------------------------------------------------------------------
| Registration Data
|--------------------------------------------------------------------------
| Shared data used by the different registration forms.
|
| Form state, initialForm objects, validation and submission logic
| should stay inside the individual form components.
|--------------------------------------------------------------------------
*/


/*
|--------------------------------------------------------------------------
| Locations
|--------------------------------------------------------------------------
*/

export const PROVINCES_AND_CITIES = {
    "Eastern Cape": [
        "Gqeberha",
        "East London",
        "Makhanda",
        "Mthatha",
        "Komani",
    ],

    "Free State": [
        "Bloemfontein",
        "Welkom",
        "Bethlehem",
        "Phuthaditjhaba",
    ],

    Gauteng: [
        "Johannesburg",
        "Pretoria",
        "Soweto",
        "Centurion",
        "Midrand",
        "Sandton",
    ],

    "KwaZulu-Natal": [
        "Durban",
        "Pietermaritzburg",
        "Richards Bay",
        "Ballito",
        "Newcastle",
    ],

    Limpopo: [
        "Polokwane",
        "Thohoyandou",
        "Tzaneen",
        "Mokopane",
    ],

    Mpumalanga: [
        "Mbombela",
        "Emalahleni",
        "Secunda",
        "Middelburg",
    ],

    "Northern Cape": [
        "Kimberley",
        "Upington",
        "Kuruman",
        "Springbok",
    ],

    "North West": [
        "Mahikeng",
        "Rustenburg",
        "Potchefstroom",
        "Klerksdorp",
    ],

    "Western Cape": [
        "Cape Town",
        "Stellenbosch",
        "Paarl",
        "George",
        "Knysna",
    ],
};


/*
|--------------------------------------------------------------------------
| Seller
|--------------------------------------------------------------------------
*/

/*
 * Categories shown on the Seller landing page.
 */
export const SELLER_DISPLAY_CATEGORIES = [
    "Florists",
    "Gift & hamper businesses",
    "Bakeries & sweet treats",
    "Personalised gift creators",
    "Chocolatiers & confectionery",
    "Balloons & décor",
    "Jewellery & accessories",
    "Other eligible gift businesses",
];


/*
 * Business type selected during Seller registration.
 */
export const SELLER_BUSINESS_TYPES = [
    "Registered business",
    "Sole proprietor",
    "Independent creator",
    "Small business",
];


/*
 * Products/categories selected during Seller registration.
 */
export const SELLER_BUSINESS_CATEGORIES = [
    "Flowers",
    "Gift hampers",
    "Baked goods",
    "Chocolates",
    "Personalised gifts",
    "Balloons & décor",
    "Jewellery & accessories",
    "Other",
];


/*
|--------------------------------------------------------------------------
| Event Planner
|--------------------------------------------------------------------------
|
| Keep these separate from Seller categories.
|
| The exact Planner service categories have not been finalised yet.
|--------------------------------------------------------------------------
*/

export const EVENT_PLANNER_SERVICE_CATEGORIES = [];


/*
|--------------------------------------------------------------------------
| Event Supplier
|--------------------------------------------------------------------------
|
| Keep these separate from Planner and Seller categories.
|
| The exact Supplier service categories have not been finalised yet.
|--------------------------------------------------------------------------
*/

export const EVENT_SUPPLIER_SERVICE_CATEGORIES = [];


/*
|--------------------------------------------------------------------------
| Delivery Partner
|--------------------------------------------------------------------------
|
| These are the options currently used by the Delivery Partner form.
|--------------------------------------------------------------------------
*/

export const DELIVERY_VEHICLE_TYPES = [
    "Car",
    "Motorcycle",
    "Scooter",
    "Bicycle",
    "Other",
];


export const DELIVERY_AVAILABILITY_OPTIONS = [
    "Weekday mornings",
    "Weekday afternoons",
    "Weekday evenings",
    "Weekends",
    "Public holidays",
];


export const YES_NO_OPTIONS = [
    "Yes",
    "No",
];


export const VEHICLE_LICENCE_OPTIONS = [
    "Yes",
    "No",
    "Not applicable",
];