// data/content.js
//
// All page body copy lives here, keyed by page. Icons are referenced by
// name (resolved through data/icons.js's getIcon()), and routes by routeKey
// (resolved through constants/copy.js's ROUTES), so this file stays pure
// data — no imports, no LAUNCH_PHASE checks, no JSX. This is the file a
// future CMS would read from and write to.
//
// Any field can be either a plain value (same in both phases) or
// { prelaunch: "...", live: "..." } (phase-dependent) — resolved at render
// time via lib/resolvePhase.js.

export const CONTENT = {
    home: {
        hero: {
            badge: {
                prelaunch: "Launching with Valentine gifting",
                live: "Now live for Valentine gifting",
            },
            heading: ["Find the right gift.", "Make the moment happen."],
            body: "Evivi connects gift buyers with local sellers, making it easier to discover, choose and send meaningful gifts.",
            note: {
                prelaunch: "Launching Valentine 2027. Join the early-access list today.",
                live: "Now live. Find the right gift today.",
            },
        },

        howItWorks: {
            eyebrow: {
                prelaunch: "How Evivi will work",
                live: "How Evivi works",
            },
            heading: "Find, choose and send the perfect gift.",
            intro: {
                prelaunch: "From discovery to delivery, this is how gifting on Evivi will work when we open.",
                live: "From discovery to delivery, Evivi makes gifting easy and stress-free.",
            },
            steps: [
                {
                    id: "discover",
                    icon: "Search",
                    title: "Discover",
                    copy: {
                        prelaunch: "You'll be able to browse Valentine gifts from local sellers near you or near where the gift needs to go.",
                        live: "Browse Valentine gifts from local sellers near you or near where the gift needs to go.",
                    },
                },
                {
                    id: "choose",
                    icon: "Gift",
                    title: "Choose",
                    copy: "Pick the gift that feels right and review the product details before ordering.",
                },
                {
                    id: "delivery",
                    icon: "Truck",
                    title: "Choose delivery or collection",
                    copy: "See the delivery and collection options for your gift and plan for when you need it.",
                },
                {
                    id: "pay",
                    icon: "ClipboardCheck",
                    title: "Pay securely and track your gift",
                    copy: {
                        prelaunch: "Pay securely, then follow your gift until it is delivered or ready for collection.",
                        live: "Complete your purchase and follow your gift until it is delivered or ready for collection.",
                    },
                },
            ],
        },

        banner: {
            heading: "Valentine's Day doesn't wait.",
            body: {
                prelaunch: "Evivi opens for Valentine 2027. Join the early-access list and avoid the last-minute rush.",
                live: "Find your gift early, choose how you want it delivered, and avoid the last-minute rush.",
            },
            note: {
                prelaunch: "Be the first to know when we open.",
                live: "Order early and choose delivery or collection.",
            },
        },

        personas: {
            eyebrow: "Who it's for",
            heading: "Who Evivi is for",
            intro: "One marketplace, five ways to be part of it.",
            items: [
                {
                    id: "buyers",
                    title: "Buyers",
                    description: "Find the right gift and have it delivered where it needs to be.",
                    routeKey: "buyer",
                    icon: "Gift",
                    accent: "var(--color-vibrant-magenta)",
                    status: "open",
                },
                {
                    id: "sellers",
                    title: "Sellers",
                    description: "List your gifts and reach more Valentine buyers.",
                    routeKey: "seller",
                    icon: "Store",
                    accent: "var(--color-royal-purple)",
                    status: "open",
                },
                {
                    id: "delivery-partners",
                    title: "Delivery Partners",
                    description: "Register to help deliver local gifts on your own schedule.",
                    routeKey: "deliveryPartner",
                    icon: "Bike",
                    accent: "var(--color-coral-rose)",
                    status: "open",
                },
                {
                    id: "event-planners",
                    title: "Event Planners",
                    description: "Coordinate events and connect with trusted suppliers.",
                    routeKey: "eventPlanner",
                    icon: "CalendarCheck",
                    accent: "var(--color-deep-plum)",
                    status: { prelaunch: "soon", live: "soon" }, // planners stay closed even at live launch — adjust if that changes
                },
                {
                    id: "event-suppliers",
                    title: "Suppliers",
                    description: "Supply the products and services behind every celebration.",
                    routeKey: "eventSupplier",
                    icon: "Package",
                    accent: "var(--color-muted-purple)",
                    status: { prelaunch: "soon", live: "soon" },
                },
            ],
        },

        vision: {
            eyebrow: "Beyond Valentine",
            heading: "Valentine is where we start. Celebrations are where we're going.",
            body: "Birthdays, anniversaries, baby showers and more are part of where Evivi is heading.",
            linkLabel: "Read our vision",
            routeKey: "about",
        },

        closing: {
            heading: "Be there from the beginning.",
            body: {
                prelaunch: "Evivi launches with Valentine 2027. Join early to be first to discover meaningful gifts from local sellers.",
                live: "Discover meaningful gifts, support local sellers and bring celebrations together.",
            },
        },
    },

    about: {
        hero: {
            eyebrow: "Beyond Valentine",
            heading: "Valentine is where we start. Celebrations are where we're going.",
            body: "Evivi is being built to connect gift buyers, sellers and event professionals with the businesses and services that help meaningful moments happen.",
        },
        vision: {
            eyebrow: "Our vision",
            heading: "More moments to celebrate",
            body: "Valentine's Day is where Evivi starts, but it's only the beginning. We're building toward a marketplace for every occasion worth celebrating.",
            moments: [
                { icon: "Cake", label: "Birthdays" },
                { icon: "HeartHandshake", label: "Anniversaries" },
                { icon: "Baby", label: "Baby Showers" },
                { icon: "Gem", label: "Proposals" },
                { icon: "GraduationCap", label: "Graduations" },
                { icon: "Sparkles", label: "Other Celebrations" },
            ],
        },
        moreWaysToHelp: {
            eyebrow: "More ways Evivi can help",
            heading: "From a single gift to a full celebration",
            body: "Evivi is being built to bring the whole journey together — the gift, the planning, and everything in between.",
            // CHANGED: "Plan a celebration" (href: "/") dropped — no real
            // destination, overlapped with Event Planners right next to it.
            items: [
                { icon: "Users2", title: "Event Planners & Coordinators", text: "Connect with professionals who help customers design and coordinate unforgettable events.", routeKey: "eventPlanner" },
                { icon: "Store", title: "Event Suppliers", text: "Discover businesses that provide products, services and styling for events.", routeKey: "eventSupplier" },
            ],
        },
        story: {
            eyebrow: "Our story",
            heading: "Built to make celebrations easier to create",
            body: "Evivi is a product of Innerchild Events, built with a simple goal: make it easier to find and share the right gift for the moments that matter, and to grow into the platform people turn to for every kind of celebration.",
        },
        closing: {
            heading: "Be there from the beginning.",
            body: {
                prelaunch: "Evivi launches with Valentine gifting. Join early to discover what's coming and help shape a better way to celebrate.",
                live: "Discover meaningful gifts, support local sellers and bring celebrations together.",
            },
        },
    },

    buyer: {
        hero: {
            eyebrow: "Valentine 2027",
            heading: "Find the right gift for the people who matter.",
            body: "Evivi brings gifts, local sellers and delivery partners together to make meaningful moments easier to create.",
        },
        howItWorks: {
            eyebrow: { prelaunch: "How it will work", live: "How it works" },
            heading: { prelaunch: "A simpler way to find and send gifts", live: "A simpler way to find and send gifts" },
            body: {
                prelaunch: "Evivi will connect you with local businesses and delivery partners so you can focus on the moment, not the logistics.",
                live: "Evivi connects you with local businesses and delivery partners so you can focus on the moment, not the logistics.",
            },
            steps: [
                { icon: "Search", number: "01", title: "Discover", text: "Explore gifts and businesses available through Evivi." },
                { icon: "Gift", number: "02", title: "Choose", text: "Find something that feels right for the person and occasion." },
                { icon: "Truck", number: "03", title: "Arrange", text: "Choose the available delivery or collection option." },
                { icon: "ClipboardCheck", number: "04", title: "Celebrate", text: "Let the gift become part of a meaningful moment." },
            ],
        },
        valentineSection: {
            eyebrow: "Valentine 2027",
            heading: "Be there when Evivi opens its doors",
            body: "We are preparing Evivi for its first Valentine season. Early access gives you a place in the community before the marketplace opens.",
        },
        whyJoin: {
            heading: "Why join early?",
            body: "Stay connected as Evivi prepares for the Valentine 2027 launch.",
            items: [
                { icon: "Bell", title: "Launch updates", text: "Receive important updates as Evivi gets closer to launch." },
                { icon: "Sparkles", title: "Discover what is coming", text: "Follow the products, sellers and experiences being prepared for Valentine 2027." },
                { icon: "CalendarClock", title: "Be ready for launch", text: "Get ready to explore Evivi when the marketplace becomes available." },
            ],
        },
        register: {
            heading: "Join the Event Buyer Waitlist",
            body: "Tell us how to reach you and we'll let you know the moment Evivi opens for Valentine 2027.",
        },
    },

    eventPlanner: {
        hero: {
            badge: "Coming later",
            heading: "Bring your event expertise to Evivi.",
            body: "Evivi is building a future space for event planners and coordinators to connect with clients, suppliers and opportunities.",
            notAvailable: "Event planning and coordination will not be part of the Valentine 2027 launch.",
        },
        whyJoin: [
            { icon: "Users2", title: "Connect with clients", text: "Create opportunities to connect with people looking for event planning support." },
            { icon: "Handshake", title: "Work with suppliers", text: "Build relationships with venues, suppliers and other event professionals." },
            { icon: "TrendingUp", title: "Grow your presence", text: "Create a future presence on a marketplace built around celebrations." },
        ],
        futurePreviews: [
            { icon: "CalendarHeart", label: "Planner" },
            { icon: "PartyPopper", label: "Event" },
            { icon: "Gift", label: "Celebration" },
        ],
        future: {
            eyebrow: "The future of Evivi",
            heading: "A space for celebrations beyond gifts",
            body: "Evivi is starting with Valentine 2027. Event planning and coordination are part of the longer term vision for the platform.",
        },
        availability: {
            heading: "Not available during the Valentine 2027 launch",
            body: "We are focusing the initial launch on gifts and Valentine celebrations. Event planning and coordination will become available at a later stage.",
        },
        register: {
            heading: "Want to know when planners can join?",
            body: "Join the waitlist and we will let you know when event planner and coordinator applications become available.",
        },
    },

    eventSupplier: {
        hero: {
            badge: "Coming later",
            heading: "Bring your event products and services to Evivi.",
            body: "Evivi is building a future marketplace where event suppliers can connect with planners and people creating special occasions.",
            notAvailable: "Event suppliers will not be part of the Valentine 2027 launch.",
        },
        whyJoin: [
            { icon: "Users2", title: "Reach event planners", text: "Make your products and services discoverable to planners looking for event support." },
            { icon: "Store", title: "Showcase your offering", text: "Create a future presence where customers can discover what your business provides." },
            { icon: "HeartHandshake", title: "Support celebrations", text: "Become part of an ecosystem built around events, gifts and meaningful occasions." },
        ],
        futureOpportunities: [
            { icon: "Package", title: "Event products", text: "Products that help bring events and celebrations together." },
            { icon: "Wrench", title: "Event services", text: "Services that support planners and event hosts." },
            { icon: "Rocket", title: "Future marketplace", text: "A future space to showcase your business through Evivi." },
        ],
        building: {
            eyebrow: "What Evivi is building",
            heading: "More than a Valentine marketplace",
            body: "The initial Evivi launch focuses on Valentine 2027. The platform will expand into more celebration and event services over time.",
            opportunitiesHeading: "Future supplier opportunities",
        },
        availability: {
            heading: "Not available during the Valentine 2027 launch",
            body: "Evivi is currently preparing its Valentine 2027 launch. Event supplier onboarding will be introduced at a later stage.",
        },
        register: {
            heading: "Want to know when suppliers can join?",
            body: "Join the waitlist and we will let you know when supplier applications become available.",
        },
    },

    deliveryPartner: {
        hero: {
            badge: "Delivery partners",
            heading: "Become an Evivi delivery partner.",
            bodyLead: "Help local gift sellers deliver gifts and celebration packages to customers across supported areas.",
            bodySecondary: "If you have reliable transport and want flexible delivery opportunities, register to become part of the Evivi delivery partner network.",
            image: "/images/delivery-hero.png",
        },
        ecosystemFlow: [
            { icon: "Gift", label: "Gift Seller", copy: "prepares the order" },
            { icon: "Truck", label: "Delivery Partner", copy: "helps get it there" },
            { icon: "Heart", label: "Gift Buyer", copy: "receives the gift" },
        ],
        ecosystem: {
            eyebrow: "What is an Evivi delivery partner?",
            heading: "You help move the celebration from the seller to the recipient.",
            body: "Delivery partners support participating sellers by helping fulfil eligible local orders. You provide the transport and delivery support while Evivi works toward coordinating the marketplace experience.",
        },
        journeySteps: [
            { num: "01", title: "Register", copy: "Tell Evivi about yourself, your transport and the areas where you can provide delivery support." },
            { num: "02", title: "We review your details", copy: "We review the information you provide as we build the early delivery partner network." },
            { num: "03", title: "Complete verification", copy: "If required, we will guide you through the relevant verification steps before delivery access is provided." },
            { num: "04", title: "Get ready", copy: "If selected, we will share the relevant expectations and next steps before you begin supporting deliveries." },
            { num: "05", title: "Receive opportunities", copy: "Eligible delivery opportunities can be considered based on availability, coverage and network requirements." },
            { num: "06", title: "Deliver with Evivi", copy: "Collect eligible orders from participating sellers and help get them safely to customers or recipients." },
        ],
        deliveryTypes: [
            { title: "Local gift deliveries", copy: "Help participating sellers get eligible gifts and celebration packages to customers within supported areas." },
            { title: "Scheduled deliveries", copy: "Some orders may have specific delivery dates or time requirements." },
            { title: "Seller collections", copy: "Collect prepared orders from participating sellers according to the fulfilment instructions provided." },
            { title: "Recipient handover", copy: "Complete the final part of the journey by getting the order to the intended customer or recipient." },
        ],
        partnerRequirements: [
            "Reliable transport",
            "A valid driver's licence where applicable",
            "Ability to safely handle gifts and packages",
            "Ability to indicate your service areas",
            "Ability to indicate when you can provide delivery support",
            "A reliable way for Evivi or participating sellers to contact you",
        ],
        partnerBenefits: [
            { num: "01", title: "Flexible opportunities", copy: "Indicate the areas and times when you can support deliveries." },
            { num: "02", title: "Local delivery work", copy: "Support participating sellers with eligible local orders in areas you can serve." },
            { num: "03", title: "Be part of something growing", copy: "Join Evivi's early delivery network as the celebration marketplace develops." },
            { num: "04", title: "Build a reliable reputation", copy: "Consistent, professional fulfilment can help establish trust within the Evivi network." },
        ],
        afterApplication: [
            { num: "01", title: "Submit your details", copy: "Tell us about yourself, your transport and where you can provide delivery support." },
            { num: "02", title: "Application review", copy: "We review the information provided as the delivery partner network develops." },
            { num: "03", title: "Verification", copy: "Relevant verification steps may be required before delivery access is provided." },
            { num: "04", title: "Partner preparation", copy: "If selected, we will share the relevant expectations and next steps." },
            { num: "05", title: "Delivery opportunities", copy: "Eligible opportunities can be considered based on availability, coverage and network requirements." },
        ],
        // NEW: added so app/delivery-partner/page.jsx can pull the
        // registration section's badge/heading/body from CONTENT instead of
        // hardcoding it, matching the pattern every other role-form page uses.
        register: {
            badge: "Delivery Partner Registration",
            heading: "Join the Evivi delivery network.",
            body: "Tell us about yourself and your delivery availability. We will use your information to understand where and when you can support deliveries.",
        },
    },

    // NEW: Seller's content, previously hardcoded as local arrays
    // (sellerBenefits, journeySteps) directly inside app/seller/page.jsx.
    // Moved here so Seller follows the same CONTENT-driven pattern as
    // every other page.
    seller: {
        hero: {
            eyebrow: "How to sell on Evivi",
            heading: "Turn what you create into something worth celebrating.",
            body: "Bring your gifts, flowers and Valentine packages to customers looking for meaningful ways to celebrate.",
            image: "/images/seller-hero.png",
            statusNote: "Applications are open now. Selling begins with the Valentine 2027 launch.",
        },
        intro: {
            eyebrow: "Your craft deserves to be discovered",
            heading: "Whether you create bouquets, hampers, baked treats or personalised gifts, there may be a place for you on Evivi.",
            body: "We're inviting selected sellers to join early, create real Valentine offerings and help shape the marketplace before launch.",
        },
        journeySteps: [
            { num: "01", title: "Apply to join", copy: "Tell us about your business, what you sell and where you operate." },
            { num: "02", title: "Share your offerings", copy: "Let Evivi know what types of gifts or Valentine packages you offer." },
            { num: "03", title: "Get ready for customers", copy: "Once selected, prepare your eligible offerings for the Evivi marketplace." },
            { num: "04", title: "Receive structured orders", copy: "Once Evivi launches, customers will discover your offerings and place orders through the marketplace." },
            { num: "05", title: "Fulfil the order", copy: "You'll support delivery, collection, or both, based on your business model." },
            { num: "06", title: "Grow with Evivi", copy: "Build your presence, customer trust and reputation as the marketplace develops." },
        ],
        craft: {
            image: "/images/seller-craft.png",
            eyebrow: "Made for creators",
            heading: "Your products tell a story. Evivi helps customers find it.",
            body: "From a carefully arranged bouquet to a personalised gift box, the things you create are part of how people celebrate the moments that matter to them.",
        },
        whoCanSell: {
            eyebrow: "Who can sell",
            heading: "Made for the people who make celebrations special.",
            image: "/images/seller-gifts.png",
            note: "Don't see your category? Tell us what you create when you apply.",
        },
        benefits: {
            eyebrow: "For gift sellers",
            heading: "Sell your gifts. Reach more customers. Grow with Evivi.",
            body: "If you sell flowers, hampers, chocolates, balloons or Valentine gift packages, we're inviting selected gift sellers to join Evivi early.",
            items: [
                { icon: "Users", title: "Reach more gift buyers", copy: "Put your products in front of people actively looking for Valentine gifts." },
                { icon: "ClipboardList", title: "Manage orders easily", copy: "Receive customer orders through Evivi instead of relying on scattered messages and manual tracking." },
                { icon: "ShieldCheck", title: "Get paid securely", copy: "Customer payments will be processed through Evivi's secure payment system once the marketplace opens." },
                { icon: "Star", title: "Build your reputation", copy: "Earn ratings and reviews that help future buyers choose your business." },
                { icon: "TrendingUp", title: "Create more opportunities to sell", copy: "Reach customers beyond your existing audience and add another sales channel for your gift business." },
            ],
            note: { title: "Early sellers help shape Evivi.", text: "Share feedback, suggest improvements and be part of building the best way to buy and sell gifts." },
        },
        register: {
            eyebrow: "Ready to join Evivi?",
            heading: "Your next customer could be looking for exactly what you create.",
            body: "Join the early Evivi seller network and help us shape the future of celebration.",
            disclaimer: "Submitting an application does not automatically guarantee marketplace approval or placement.",
        },
    },

    faq: {
        heading: "Frequently asked questions",
        intro: "Everything you need to know about Evivi, whether you're here to buy, sell, or partner with us.",
        groups: [
            {
                title: "General",
                items: [
                    { q: "What is Evivi?", a: "Evivi is a marketplace for gifts and celebrations. We're launching with Valentine gifting, connecting gift buyers with local sellers, delivery partners, and over time event planners and suppliers." },
                    { q: "When does Evivi launch?", a: "Evivi is preparing for its first Valentine season. Early access lets you join the community and be first to know as launch gets closer." },
                    { q: "Is Evivi free to use?", a: "Browsing and registering for early access is free. Sellers and partners will see fee details as part of onboarding, before anything goes live." },
                    { q: "Which areas does Evivi serve?", a: "We're starting in South Africa and building out coverage by province and city as sellers and delivery partners join. You can select your area when you register." },
                    { q: "How do I contact support?", a: "A dedicated support channel is coming soon. In the meantime, register for early access and we'll be in touch with the best way to reach us." },
                ],
            },
            {
                title: "For Buyers",
                items: [
                    { q: "How do I get early access?", a: 'Use the "Get Valentine Early Access" button on the homepage to join the list. We\'ll let you know as soon as you can start browsing and ordering.', linkRouteKey: "buyer", linkLabel: "Get Valentine Early Access" },
                    { q: "How will delivery work?", a: "Depending on the seller, you'll be able to choose delivery or collection for your gift. Options are shown per listing once the marketplace is live." },
                    { q: "When can I actually place an order?", a: "Ordering opens once the marketplace launches for Valentine 2027. Early access members will be notified first." },
                ],
            },
            {
                title: "For Sellers",
                items: [
                    { q: "How do I apply to sell on Evivi?", a: "Head to our seller page and fill in the application form with your business details. We'll follow up with next steps if you're selected.", linkRouteKey: "seller", linkLabel: "Apply to sell" },
                    { q: "What can I sell on Evivi?", a: "Evivi is preparing to support gift businesses offering products such as flowers, gift hampers, baked goods, chocolates, personalised gifts, balloons and décor, jewellery and accessories, and other eligible gift products." },
                    { q: "What fees does Evivi charge sellers?", a: "Fee details will be shared with selected sellers as part of onboarding, before you list anything on the marketplace." },
                    { q: "When will sellers start receiving orders?", a: "Sellers will be able to receive customer orders once the relevant marketplace offerings are live. Selected sellers will receive updates as launch approaches." },
                ],
            },
            {
                title: "For Partners",
                items: [
                    { q: "How do I become a delivery partner?", a: "Delivery partners can join the Evivi waitlist to express their interest. We'll provide updates as delivery opportunities become available.", linkRouteKey: "deliveryPartner", linkLabel: "Join the delivery partner waitlist" },
                    { q: "When can event suppliers join Evivi?", a: "Event suppliers are part of Evivi's longer term marketplace vision beyond the Valentine 2027 launch. Join the supplier waitlist to be notified when opportunities become available.", linkRouteKey: "eventSupplier", linkLabel: "Join the supplier waitlist" },
                    { q: "When can event planners and coordinators join?", a: "Event planning and coordination are part of Evivi's longer term marketplace vision beyond the Valentine 2027 launch. Join the planner waitlist to receive updates when opportunities become available.", linkRouteKey: "eventPlanner", linkLabel: "Join the planner waitlist" },
                    { q: "Will partners be able to offer services through Evivi?", a: "The goal is to create opportunities for delivery partners, event planners, coordinators and suppliers to participate as Evivi expands beyond its initial Valentine marketplace." },
                ],
            },
        ],
    },
};