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

export const SELLER_BUSINESS_TYPES = [
    "Registered business",
    "Sole proprietor",
    "Independent creator",
    "Small business",
];

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

export const SELLER_DISPLAY_CATEGORIES = [
    "Florists",
    "Gifts and hamper businesses",
    "Bakeries & sweet treat",
    "Personalised gift creator",
    "Chocolatiers & confectionery",
    "Balloons & decor",
    "Jewellery & accessories",
    "Other eligible gift businesses",
];


export const DELIVERY_VEHICLE_TYPES = [
    "Motorcycle",
    "Car",
    "Bakkie",
    "Van",
    "Other",
];

export const DELIVERY_AVAILABILITY_OPTIONS = [
    "Weekday mornings",
    "Weekday afternoons",
    "Weekday evenings",
    "Weekends",
    "Public holidays",
];

export const EVENT_PLANNER_SERVICE_CATEGORIES = [
    "Event planning",
    "Event coordination",
    "Wedding planning",
    "Party planning",
    "Corporate events",
    "Other",
];

export const EVENT_SUPPLIER_SERVICE_CATEGORIES = [
    "Venue",
    "Decor & styling",
    "Catering",
    "Photography / videography",
    "Entertainment",
    "Florist",
    "Other",
];

export const SHARED_FIELDS = [
    {
        name: "fullName",
        label: "Full name",
        type: "text",
        required: true,
    },
    {
        name: "email",
        label: "Email address",
        type: "email",
        required: true,
    },
    {
        name: "mobile",
        label: "Mobile number",
        type: "tel",
        required: true,
    },
    {
        name: "province",
        label: "Province",
        type: "select",
        options: Object.keys(PROVINCES_AND_CITIES),
        required: true,
    },
    {
        name: "city",
        label: "City / Area",
        type: "select",
        dependsOn: "province",
        required: true,
    },
];

export const ROLE_FIELDS = {
    seller: [
        {
            name: "businessName",
            label: "Business name",
            type: "text",
            required: true,
        },
        {
            name: "businessType",
            label: "Business type",
            type: "select",
            options: SELLER_BUSINESS_TYPES,
            required: true,
        },
        {
            name: "categories",
            label: "What do you sell?",
            type: "multiselect",
            options: SELLER_BUSINESS_CATEGORIES,
            required: true,
        },
        {
            name: "offersDelivery",
            label: "Do you offer delivery?",
            type: "select",
            options: ["Yes", "No"],
            required: true,
        },
        {
            name: "offersCollection",
            label: "Do you offer collection?",
            type: "select",
            options: ["Yes", "No"],
            required: true,
        },
        {
            name: "description",
            label: "Short business description",
            type: "textarea",
            required: false,
        },
        {
            name: "website",
            label: "Website",
            type: "url",
            required: false,
        },
        {
            name: "instagram",
            label: "Instagram",
            type: "text",
            required: false,
        },
        {
            name: "agree",
            label: "I agree to the Evivi terms and privacy policy.",
            type: "checkbox",
            required: true,
        },
    ],

    delivery: [
        {
            name: "vehicleType",
            label: "Vehicle type",
            type: "select",
            options: DELIVERY_VEHICLE_TYPES,
            required: true,
        },
        {
            name: "availability",
            label: "Typical availability",
            type: "multiselect",
            options: DELIVERY_AVAILABILITY_OPTIONS,
            required: true,
        },
        {
            name: "hasSmartphone",
            label: "Do you have your own smartphone?",
            type: "select",
            options: ["Yes", "No"],
            required: true,
        },
        {
            name: "hasDriversLicence",
            label: "Do you have a valid driver's licence?",
            type: "select",
            options: ["Yes", "No"],
            required: true,
        },
        {
            name: "hasVehicleLicence",
            label: "Do you have a valid vehicle licence?",
            type: "select",
            options: ["Yes", "No", "Not applicable"],
            required: true,
        },
        {
            name: "verificationConsent",
            label: "Do you consent to identity and driver verification?",
            type: "select",
            options: ["Yes", "No"],
            required: true,
        },
    ],

    planner: [
        {
            name: "businessName",
            label: "Business name",
            type: "text",
            required: true,
        },
        {
            name: "serviceCategory",
            label: "Services offered",
            type: "multiselect",
            options: EVENT_PLANNER_SERVICE_CATEGORIES,
            required: true,
        },
        {
            name: "website",
            label: "Website or social media",
            type: "text",
            required: false,
        },
        {
            name: "description",
            label: "Short description",
            type: "textarea",
            required: false,
        },
        {
            name: "agree",
            label: "I agree to the Evivi terms and privacy policy.",
            type: "checkbox",
            required: true,
        },
    ],

    supplier: [
        {
            name: "businessName",
            label: "Business name",
            type: "text",
            required: true,
        },
        {
            name: "serviceCategory",
            label: "Products or services offered",
            type: "multiselect",
            options: EVENT_SUPPLIER_SERVICE_CATEGORIES,
            required: true,
        },
        {
            name: "website",
            label: "Website or social media",
            type: "text",
            required: false,
        },
        {
            name: "description",
            label: "Short description",
            type: "textarea",
            required: false,
        },
        {
            name: "agree",
            label: "I agree to the Evivi terms and privacy policy.",
            type: "checkbox",
            required: true,
        },
    ],

    buyer: [
        {
            name: "agree",
            label: "I agree to receive Evivi launch and early access updates.",
            type: "checkbox",
            required: true,
        },
    ],
};

export const ROLE_CONFIG = {
    seller: {
        heading: "Join Evivi as a Seller",
        description:
            "Tell us about your business and what you sell so we can prepare for the Evivi marketplace.",
        submitLabel: "Join as a Seller",
        successTitle: "You're on the list!",
        successMessage:
            "Thanks for registering your business with Evivi. We'll keep you updated as we prepare the marketplace for launch.",
    },

    delivery: {
        heading: "Become a Delivery Partner",
        description:
            "Tell us about yourself and your delivery availability.",
        submitLabel: "Join Delivery Waitlist",
        successTitle: "You're on the list!",
        successMessage:
            "Thanks for registering your interest in becoming an Evivi delivery partner. We'll keep you updated as opportunities become available.",
    },

    planner: {
        heading: "Join the Event Planner Waitlist",
        description:
            "Tell us about your planning services and we'll keep you informed as Evivi expands into event services.",
        submitLabel: "Join the Waitlist",
        successTitle: "You're on the list!",
        successMessage:
            "Thanks for registering your interest. Event planning opportunities are part of Evivi's longer term offering and we'll keep you updated.",
    },

    supplier: {
        heading: "Join the Event Supplier Waitlist",
        description:
            "Tell us about your products or services and we'll keep you informed as Evivi expands.",
        submitLabel: "Register Interest",
        successTitle: "You're on the list!",
        successMessage:
            "Thanks for registering your interest. We'll keep you updated as supplier opportunities become available.",
    },

    buyer: {
        heading: "Get Valentine Early Access",
        description:
            "Be among the first to discover gifts and celebrations when Evivi launches.",
        submitLabel: "Get Early Access",
        successTitle: "You're on the list!",
        successMessage:
            "Thanks for joining Evivi. We'll let you know when Valentine 2027 early access becomes available.",
    },
};