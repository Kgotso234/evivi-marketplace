import Image from "next/image";

export const metadata = {
    title: "Event Planners and Coordinators | Evivi",
    description:
        "Discover what Evivi is building for event planners and coordinators. Join the waitlist for future availability.",
};

export default function EventPlannersPage() {
    return (
        <div className="bg-white text-[#171717]">

            {/* Hero */}
            <section className="px-6 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

                    <div className="max-w-xl">
                        <span className="inline-flex rounded-full bg-[#fff0c9] px-4 py-2 text-sm font-semibold text-[#243b8f]">
                            Coming later
                        </span>

                        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
                            Bring your event expertise to Evivi.
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Evivi is building a future space for event
                            planners and coordinators to connect with clients,
                            suppliers and opportunities.
                        </p>

                        <p className="mt-4 text-base leading-7 text-gray-600">
                            Event planning and coordination will not be part of
                            the Valentine 2027 launch.
                        </p>

                        <a
                            href="#waitlist"
                            className="mt-8 inline-flex rounded-full bg-[#c2185b] px-7 py-3.5 font-semibold text-white"
                        >
                            Join the Waitlist
                        </a>
                    </div>

                    <div className="relative min-h-[360px] overflow-hidden rounded-3xl bg-[#f8f9fc]">
                        {/* Add planner hero image here later */}
                        <Image
                            src="/images/hero-image.jpg"
                            alt=""
                            fill
                            className="object-cover"
                        />
                    </div>

                </div>
            </section>

            {/* Why Join */}
            <section className="bg-[#f8f9fc] px-6 py-16 md:px-10 md:py-24">
                <div className="mx-auto max-w-7xl">

                    <h2 className="text-3xl font-bold md:text-4xl">
                        Why planners may join Evivi
                    </h2>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">

                        <div className="rounded-2xl bg-white p-7">
                            <h3 className="text-xl font-semibold">
                                Connect with clients
                            </h3>

                            <p className="mt-3 leading-7 text-gray-600">
                                Create opportunities to connect with people
                                looking for event planning support.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white p-7">
                            <h3 className="text-xl font-semibold">
                                Work with suppliers
                            </h3>

                            <p className="mt-3 leading-7 text-gray-600">
                                Build relationships with venues, suppliers and
                                other event professionals.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white p-7">
                            <h3 className="text-xl font-semibold">
                                Grow your presence
                            </h3>

                            <p className="mt-3 leading-7 text-gray-600">
                                Create a future presence on a marketplace built
                                around celebrations.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Future Platform */}
            <section className="px-6 py-16 md:px-10 md:py-24">
                <div className="mx-auto max-w-7xl">

                    <div className="max-w-2xl">
                        <span className="text-sm font-semibold uppercase tracking-wider text-[#c2185b]">
                            The future of Evivi
                        </span>

                        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                            A space for celebrations beyond gifts
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-gray-600">
                            Evivi is starting with Valentine 2027. Event
                            planning and coordination are part of the longer
                            term vision for the platform.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">

                        <div className="relative min-h-[220px] overflow-hidden rounded-2xl bg-[#f8f9fc]">
                            {/* Planner image */}
                        </div>

                        <div className="relative min-h-[220px] overflow-hidden rounded-2xl bg-[#f8f9fc]">
                            {/* Event image */}
                        </div>

                        <div className="relative min-h-[220px] overflow-hidden rounded-2xl bg-[#f8f9fc]">
                            {/* Celebration image */}
                        </div>

                    </div>
                </div>
            </section>

            {/* Availability Notice */}
            <section className="px-6 pb-16 md:px-10 md:pb-24">
                <div className="mx-auto max-w-5xl rounded-3xl bg-[#fff0c9] px-7 py-12 text-center md:px-12">

                    <h2 className="text-3xl font-bold md:text-4xl">
                        Not available during the Valentine 2027 launch
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-700">
                        We are focusing the initial launch on gifts and
                        Valentine celebrations. Event planning and coordination
                        will become available at a later stage.
                    </p>

                </div>
            </section>

            {/* Waitlist */}
            <section
                id="waitlist"
                className="px-6 pb-16 md:px-10 md:pb-24"
            >
                <div className="mx-auto max-w-4xl rounded-3xl bg-[#c2185b] px-7 py-12 text-center text-white md:px-12">

                    <h2 className="text-3xl font-bold md:text-4xl">
                        Want to know when planners can join?
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-white/90">
                        Join the waitlist and we will let you know when event
                        planner and coordinator applications become available.
                    </p>

                    <a
                        href="#"
                        className="mt-7 inline-flex rounded-full bg-white px-7 py-3.5 font-semibold text-[#c2185b]"
                    >
                        Join the Waitlist
                    </a>

                </div>
            </section>

        </div>
    );
}