import Image from "next/image";

export const metadata = {
    title: "Get Valentine Early Access | Evivi",
    description:
        "Be among the first to discover gifts and celebrations on Evivi for Valentine 2027.",
};

export default function BuyersPage() {
    return (
        <div className="bg-white text-[#171717]">

            {/* Hero */}
            <section className="px-6 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

                    <div className="max-w-xl">
                        <span className="inline-flex rounded-full bg-[#fff0c9] px-4 py-2 text-sm font-semibold text-[#243b8f]">
                            Valentine 2027
                        </span>

                        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                            Find the right gift for the people who matter.
                        </h1>

                        <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
                            Evivi brings gifts, local sellers and delivery
                            partners together to make meaningful moments easier
                            to create.
                        </p>

                        <a
                            href="#early-access"
                            className="mt-8 inline-flex rounded-full bg-[#c2185b] px-7 py-3.5 font-semibold text-white transition hover:bg-[#a9154f]"
                        >
                            Get Valentine Early Access
                        </a>
                    </div>

                    <div className="relative min-h-[360px] overflow-hidden rounded-3xl bg-[#f8f9fc]">
                        {/* Add buyer hero image here later */}
                        <Image
                            src="/images/hero-image.jpg"
                            alt=""
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                </div>
            </section>

            {/* How Evivi Works */}
            <section className="bg-[#f8f9fc] px-6 py-16 md:px-10 md:py-24">
                <div className="mx-auto max-w-7xl">

                    <div className="max-w-2xl">
                        <span className="text-sm font-semibold uppercase tracking-wider text-[#c2185b]">
                            How it works
                        </span>

                        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                            A simpler way to find and send gifts
                        </h2>

                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            Evivi connects you with local businesses and
                            delivery partners so you can focus on the moment,
                            not the logistics.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                        {[
                            {
                                number: "01",
                                title: "Discover",
                                text: "Explore gifts and businesses available through Evivi.",
                            },
                            {
                                number: "02",
                                title: "Choose",
                                text: "Find something that feels right for the person and occasion.",
                            },
                            {
                                number: "03",
                                title: "Arrange",
                                text: "Choose the available delivery or collection option.",
                            },
                            {
                                number: "04",
                                title: "Celebrate",
                                text: "Let the gift become part of a meaningful moment.",
                            },
                        ].map((item) => (
                            <div
                                key={item.number}
                                className="rounded-2xl bg-white p-7 shadow-sm"
                            >
                                <span className="text-sm font-bold text-[#c2185b]">
                                    {item.number}
                                </span>

                                <h3 className="mt-5 text-xl font-semibold">
                                    {item.title}
                                </h3>

                                <p className="mt-3 leading-7 text-gray-600">
                                    {item.text}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* Valentine 2027 */}
            <section className="px-6 py-16 md:px-10 md:py-24">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

                    <div className="relative min-h-[380px] overflow-hidden rounded-3xl bg-[#f8f9fc]">
                        {/* Add Valentine image here later */}
                        <Image
                            src="/images/hero-image.jpg"
                            alt=""
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="max-w-xl">
                        <span className="text-sm font-semibold uppercase tracking-wider text-[#c2185b]">
                            Valentine 2027
                        </span>

                        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                            Be there when Evivi opens its doors
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-gray-600">
                            We are preparing Evivi for its first Valentine
                            season. Early access gives you a place in the
                            community before the marketplace opens.
                        </p>

                        <a
                            href="#early-access"
                            className="mt-7 inline-flex rounded-full bg-[#243b8f] px-7 py-3.5 font-semibold text-white"
                        >
                            Get Early Access
                        </a>
                    </div>

                </div>
            </section>

            {/* Why Join */}
            <section className="bg-[#fff0c9] px-6 py-16 md:px-10 md:py-24">
                <div className="mx-auto max-w-7xl">

                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold md:text-4xl">
                            Why join early?
                        </h2>

                        <p className="mt-4 text-lg leading-8 text-gray-700">
                            Stay connected as Evivi prepares for the Valentine
                            2027 launch.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">

                        <div className="rounded-2xl bg-white p-7">
                            <h3 className="text-xl font-semibold">
                                Launch updates
                            </h3>

                            <p className="mt-3 leading-7 text-gray-600">
                                Receive important updates as Evivi gets closer
                                to launch.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white p-7">
                            <h3 className="text-xl font-semibold">
                                Discover what is coming
                            </h3>

                            <p className="mt-3 leading-7 text-gray-600">
                                Follow the products, sellers and experiences
                                being prepared for Valentine 2027.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white p-7">
                            <h3 className="text-xl font-semibold">
                                Be ready for launch
                            </h3>

                            <p className="mt-3 leading-7 text-gray-600">
                                Get ready to explore Evivi when the marketplace
                                becomes available.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Early Access */}
            <section
                id="early-access"
                className="px-6 py-16 md:px-10 md:py-24"
            >
                <div className="mx-auto max-w-4xl rounded-3xl bg-[#c2185b] px-7 py-12 text-center text-white md:px-12">

                    <h2 className="text-3xl font-bold md:text-4xl">
                        Be there from the beginning
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-white/90">
                        Join the Evivi early access list and stay informed about
                        the Valentine 2027 launch.
                    </p>

                    <a
                        href="#"
                        className="mt-7 inline-flex rounded-full bg-white px-7 py-3.5 font-semibold text-[#c2185b]"
                    >
                        Get Valentine Early Access
                    </a>

                </div>
            </section>

        </div>
    );
}