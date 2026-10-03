// data/registration.js
import zaData from "@/data/za.json";
import { CTA } from "@/constants/copy";

// Dynamically generate PROVINCES_AND_CITIES mapping from za.json.
// CONFIRM: run `console.log(zaData[0])` once and check that `admin_name`
// actually holds the province (e.g. "Gauteng"), not the country. If it's
// wrong, swap in the correct field name from your dataset.
export const PROVINCES_AND_CITIES = zaData.reduce((acc, item) => {
    const province = item.admin_name || item.province;
    const city = item.city || item.name;

    if (!province || !city) return acc;

    if (!acc[province]) {
        acc[province] = [];
    }

    if (!acc[province].includes(city)) {
        acc[province].push(city);
    }

    return acc;
}, {});

// Sorted array of South Africa provinces derived directly from za.json
export const SA_PROVINCES = Object.keys(PROVINCES_AND_CITIES).sort();

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

// CHANGED: removed the "country" field and the province's dependsOn:
// "country" chain. RegistrationForm.jsx's availableOptions() only special-
// cases dependsOn === "province" — a dependsOn: "country" step silently
// returned an empty options array for every field, so province could never
// be populated. You're only serving South Africa right now (per the FAQ:
// "We're starting in South Africa"), so province now has its own static
// options list and no dependency.
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
        options: SA_PROVINCES, // CHANGED: was dependsOn: "country" with no options
        required: true,
    },
    {
        name: "city",
        label: "City / Area",
        type: "select",
        dependsOn: "province", // unchanged — this one actually works
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
            type: "radio",
            options: ["Yes", "No"],
            required: true,
        },
        {
            name: "offersCollection",
            label: "Do you offer collection?",
            type: "radio",
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
            // CHANGED: was plain text with no link. RegistrationForm.jsx
            // renders checkbox labels as plain text via `{field.label}`, so a
            // string can't contain a real <Link>. Two options: (a) leave this
            // as plain text and add a separate static line with real links
            // just below the checkbox in the page, or (b) extend
            // RegistrationForm.jsx to render this one field's label as JSX.
            // Marking as a TODO rather than silently fixing it, since it
            // needs a component change, not just a data change.
            label: "I agree to the Evivi terms and privacy policy.", // TODO: link "terms" and "privacy policy"
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
            type: "radio",
            options: ["Yes", "No"],
            required: true,
        },
        {
            name: "hasDriversLicence",
            label: "Do you have a valid driver's licence?",
            type: "radio",
            options: ["Yes", "No"],
            required: true,
        },
        {
            name: "hasVehicleLicence",
            label: "Do you have a valid vehicle licence?",
            type: "radio",
            options: ["Yes", "No", "Not applicable"],
            required: true,
        },
        {
            name: "verificationConsent",
            label: "Do you consent to identity and driver verification?",
            type: "radio",
            options: ["Yes", "No"],
            required: true,
        },
        // NOTE: no "agree" checkbox in your delivery role fields — every
        // other role has one. Confirm this is intentional (maybe consent
        // is implied by "verificationConsent" above) or add a matching
        // terms/privacy checkbox for consistency.
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
            label: "I agree to the Evivi terms and privacy policy.", // TODO: link
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
            label: "I agree to the Evivi terms and privacy policy.", // TODO: link
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

// CHANGED: submitLabel wording brought in line with what each role can
// actually do right now (see the table below for reasoning).
export const ROLE_CONFIG = {
    seller: {
        heading: "Join Evivi as a Seller",
        description:
            "Tell us about your business and what you sell so we can prepare for the Evivi marketplace.",
        submitLabel: "Apply to Sell", // CHANGED from "Join as a Seller" — applications are open and reviewed now
        successTitle: "Application received",
        successMessage:
            "Thanks for registering your business with Evivi. We'll keep you updated as we prepare the marketplace for launch.",
    },

    delivery: {
        heading: "Become a Delivery Partner",
        description:
            "Tell us about yourself and your delivery availability.",
        submitLabel: "Complete Registration", // CHANGED from "Join Delivery Waitlist" — applications are open and reviewed now, not a waitlist
        successTitle: "Registration submitted",
        successMessage:
            "Thanks for registering your interest in becoming an Evivi delivery partner. We'll keep you updated as opportunities become available.",
    },

    planner: {
        heading: "Join the Event Planner Waitlist",
        description:
            "Tell us about your planning services and we'll keep you informed as Evivi expands into event services.",
        submitLabel: CTA.submitPartner, // "Join the waitlist" pre-launch, "Register" once live
        successTitle: "You're on the waitlist",
        successMessage:
            "Thanks for registering your interest. Event planning opportunities are part of Evivi's longer term offering and we'll keep you updated.",
    },

    supplier: {
        heading: "Join the Event Supplier Waitlist",
        description:
            "Tell us about your products or services and we'll keep you informed as Evivi expands.",
        submitLabel: CTA.submitPartner, // CHANGED from "Register Interest" — now matches planner's identical situation
        successTitle: "You're on the waitlist",
        successMessage:
            "Thanks for registering your interest. We'll keep you updated as supplier opportunities become available.",
    },

    buyer: {
        heading: "Get Valentine Early Access",
        description:
            "Be among the first to discover gifts and celebrations when Evivi launches.",
        submitLabel: CTA.submitPartner, // CHANGED from "Get Early Access" — matches planner/supplier phrasing; revert if you'd rather keep buyer distinct
        successTitle: "You're on the list!",
        successMessage:
            "Thanks for joining Evivi. We'll let you know when Valentine 2027 early access becomes available.",
    },
};