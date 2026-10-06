import Image from "next/image";
import Link from "next/link";
import { getIcon } from "@/data/icons";
import { CONTENT } from "@/data/content";
import { ROUTES } from "@/constants/copy";
import RegistrationForm from "@/components/registration/RegistrationForm";

const c = CONTENT.deliveryPartner;

const Heart = getIcon("Heart");
const Truck = getIcon("Truck");
const Bike = getIcon("Bike");
const Check = getIcon("Check");
const ChevronRight = getIcon("ChevronRight");
const ShieldCheck = getIcon("ShieldCheck");
const Clock3 = getIcon("Clock3");
const Car = getIcon("Car");

export const metadata = {
    title: "Become a Delivery Partner | Evivi",
    description: "Join Evivi's delivery network and help local gifts and celebrations arrive on time.",
};

export default function DeliveryPartnersPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* 1. HERO HEADER */}
            <section id="hero" className="relative bg-brand-gradient text-white overflow-hidden">
                <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-44 md:pt-40 md:pb-45 relative z-10">
                    {/* Spatial Navigation Anchor / Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-xs text-white/70 uppercase tracking-widest font-medium mb-6">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight size={14} className="text-white/40" />
                        <span className="text-white font-semibold">Delivery Partners</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7">
                            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur-sm mb-4">
                                {c.hero.badge}
                            </span>
                            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                                {c.hero.heading}
                            </h1>
                            <p className="mt-4 text-base sm:text-lg text-white/85 max-w-xl leading-relaxed">
                                {c.hero.bodyLead}
                            </p>
                            <p className="mt-2 text-xs sm:text-sm text-white/70 max-w-xl leading-relaxed">
                                {c.hero.bodySecondary}
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <a 
                                    href="#register" 
                                    className="rounded-full bg-white px-7 py-3.5 text-xs sm:text-sm font-bold text-magenta shadow-md transition-all hover:bg-white/90 hover:scale-105 active:scale-95"
                                >
                                    Become a Delivery Partner
                                </a>
                                <a 
                                    href="#delivery-journey" 
                                    className="rounded-full bg-white/10 border border-white/20 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-white/20"
                                >
                                    See how it works
                                </a>
                            </div>

                            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-white/80">
                                <span className="flex items-center gap-2">
                                    <ShieldCheck size={16} className="text-magenta" />
                                    Secure registration
                                </span>
                                <span className="flex items-center gap-2">
                                    <Heart size={16} className="text-magenta" />
                                    Help celebrations arrive
                                </span>
                            </div>
                        </div>

                        {/* Visual Image Card Frame */}
                        <div className="lg:col-span-5 relative hidden lg:block">
                            <div className="relative h-72 w-full rounded-2xl overflow-hidden border border-white/20 shadow-xl">
                                <Image 
                                    src={c.hero.image} 
                                    alt="Evivi delivery partner delivering gifts" 
                                    fill 
                                    priority 
                                    sizes="(max-width: 1024px) 100vw, 40vw" 
                                    className="object-cover" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/80 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/10 backdrop-blur-md p-3 border border-white/20 text-xs text-white flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="flex size-9 items-center justify-center rounded-lg bg-white/20 text-white">
                                            <Truck size={18} />
                                        </span>
                                        <div>
                                            <p className="font-semibold">Delivery Network</p>
                                            <p className="text-[11px] text-white/70">Connecting local sellers & gifts</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Tall, eased fade into the dark Ecosystem section (plum-deep #3B0D5C) */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-44">
                    <div
                        className="absolute inset-0 backdrop-blur-sm"
                        style={{
                            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 100%)",
                            maskImage: "linear-gradient(to bottom, transparent 0%, black 100%)",
                        }}
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(to bottom,
                                rgba(59,13,92,0) 0%,
                                rgba(59,13,92,0.04) 15%,
                                rgba(59,13,92,0.15) 35%,
                                rgba(59,13,92,0.40) 55%,
                                rgba(59,13,92,0.70) 75%,
                                rgba(59,13,92,0.92) 90%,
                                rgba(59,13,92,1) 100%)`,
                        }}
                    />
                </div>
            </section>

            {/* 2. ECOSYSTEM SHOWCASE */}
            <section data-navbar-theme="dark" className="bg-plum-deep text-white px-5 sm:px-8 py-16 md:py-16 ">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl mx-auto text-center mb-12">
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-magenta">
                            {c.ecosystem.eyebrow}
                        </span>
                        <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-bold">
                            {c.ecosystem.heading}
                        </h2>
                        <p className="mt-3 text-base text-purple-100/80 leading-relaxed">
                            {c.ecosystem.body}
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3 relative">
                        {c.ecosystemFlow.map((item, index) => {
                            const Icon = getIcon(item.icon);
                            return (
                                <div key={item.label} className="relative group">
                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10">
                                        <span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-white/10 text-magenta group-hover:scale-110 transition-transform">
                                            <Icon size={22} />
                                        </span>
                                        <h3 className="mt-4 font-display font-bold text-lg text-white">{item.label}</h3>
                                        <p className="mt-2 text-xs sm:text-sm text-purple-100/70 leading-relaxed">{item.copy}</p>
                                    </div>
                                    {index < c.ecosystemFlow.length - 1 && (
                                        <ChevronRight size={20} className="absolute -right-5 top-1/2 hidden -translate-y-1/2 text-white/30 md:block z-10" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
                
            </section>

            {/* 3. DELIVERY JOURNEY */}
            <section id="delivery-journey" className="scroll-mt-20 px-5 sm:px-8 py-16 md:py-20 bg-soft-gradient border-b border-border/30">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl mb-12">
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-magenta">The delivery journey</span>
                        <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-plum-deep">
                            From registration to delivering the gift
                        </h2>
                        <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                            The process helps Evivi understand where you can provide delivery support and how your availability fits into the developing network.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {c.journeySteps.map((step) => (
                            <div key={step.num} className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm hover:border-magenta/30 transition-all">
                                <span className="font-mono text-xs font-bold text-magenta bg-secondary px-2.5 py-1 rounded-full">
                                    Step {step.num}
                                </span>
                                <h3 className="mt-4 font-display text-lg font-bold text-plum-deep">{step.title}</h3>
                                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{step.copy}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. WHAT YOU MAY DELIVER */}
            <section data-navbar-theme="light" className="px-5 sm:px-8 py-16 md:py-20 border-b border-border/30">
                <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
                    <div className="overflow-hidden rounded-2xl border border-border/60 relative h-72 sm:h-96 w-full shadow-sm">
                        <Image 
                            src="/images/delivery-bag.png" 
                            alt="Gift package ready for local delivery" 
                            fill 
                            sizes="(max-width: 1024px) 100vw, 50vw" 
                            className="object-cover" 
                        />
                    </div>
                    <div>
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-magenta">What you may deliver</span>
                        <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-plum-deep">
                            Help gifts complete their final journey
                        </h2>
                        <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                            Delivery opportunities can vary depending on the seller, order, and supported delivery area.
                        </p>
                        <div className="mt-8 space-y-4">
                            {c.deliveryTypes.map((item) => (
                                <div key={item.title} className="flex gap-4 p-3 rounded-xl bg-card border border-border/50">
                                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-magenta">
                                        <Check size={16} />
                                    </span>
                                    <div>
                                        <h3 className="font-display font-bold text-sm text-plum-deep">{item.title}</h3>
                                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.copy}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. REQUIREMENTS (WHO CAN APPLY) */}
            <section data-navbar-theme="light" className="bg-[var(--color-warm-lilac)]/30 px-5 sm:px-8 py-16 md:py-20 border-b border-border/30">
                <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-magenta">Who can apply?</span>
                        <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-plum-deep">
                            If you can move gifts safely, tell us about yourself
                        </h2>
                        <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                            We want to understand your transport, location, and availability so that delivery opportunities can be considered as the network develops.
                        </p>
                        <a 
                            href="#register" 
                            className="mt-6 inline-flex items-center gap-2 rounded-full bg-magenta px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-sm transition-all hover:bg-magenta/90"
                        >
                            Start registration
                            <ChevronRight size={16} />
                        </a>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {c.partnerRequirements.map((requirement) => (
                            <div key={requirement} className="flex gap-3 rounded-2xl border border-border/70 bg-card p-5 shadow-sm">
                                <Check size={18} className="mt-0.5 shrink-0 text-magenta" />
                                <span className="text-xs sm:text-sm text-foreground/80 leading-relaxed">{requirement}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. AVAILABILITY & TRANSPORT */}
            <section data-navbar-theme="light" className="px-5 sm:px-8 py-16 md:py-20 border-b border-border/30">
                <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-magenta">Availability & Transport</span>
                        <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-plum-deep">
                            Tell us when and where you can help
                        </h2>
                        <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                            Delivery support can look different for every partner. Some partners may have a motorcycle, while others may use a car, bakkie, or van.
                        </p>
                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl bg-card border border-border/70 p-5 shadow-sm">
                                <Clock3 size={22} className="text-magenta mb-3" />
                                <h3 className="font-display font-bold text-sm text-plum-deep">Flexible Availability</h3>
                                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">Share the times when you can provide delivery support.</p>
                            </div>
                            <div className="rounded-2xl bg-card border border-border/70 p-5 shadow-sm">
                                <Car size={22} className="text-magenta mb-3" />
                                <h3 className="font-display font-bold text-sm text-plum-deep">Various Transport Types</h3>
                                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">Tell us what type of transport you have available.</p>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-2xl border border-border/60 relative h-72 sm:h-96 w-full shadow-sm">
                        <Image 
                            src="/images/delivery-car.png" 
                            alt="Vehicle used for local gift deliveries" 
                            fill 
                            sizes="(max-width: 1024px) 100vw, 50vw" 
                            className="object-cover" 
                        />
                    </div>
                </div>
            </section>

            {/* 7. PARTNER BENEFITS */}
            <section data-navbar-theme="dark" className="bg-plum-deep text-white px-5 sm:px-8 py-16 md:py-20 border-b border-border/30">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl mb-12">
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-magenta">Why become a partner?</span>
                        <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                            Become part of the delivery side of Evivi
                        </h2>
                        <p className="mt-3 text-base text-purple-100/80 leading-relaxed">
                            Delivery partners help connect participating sellers with customers and recipients across supported areas.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {c.partnerBenefits.map((benefit) => (
                            <div key={benefit.num} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                                <span className="font-mono text-xs font-bold text-magenta bg-white/10 px-2.5 py-1 rounded-full">
                                    0{benefit.num}
                                </span>
                                <h3 className="mt-4 font-display font-bold text-lg text-white">{benefit.title}</h3>
                                <p className="mt-2 text-xs sm:text-sm text-purple-100/70 leading-relaxed">{benefit.copy}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. SELLER CROSS-PROMOTION CTA */}
            <section data-navbar-theme="light" className="px-5 sm:px-8 py-12">
                <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl bg-card border border-border/80 p-8 sm:p-10 lg:flex-row lg:items-center shadow-sm">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-magenta">Are you a gift seller?</span>
                        <h2 className="mt-2 font-display text-2xl font-bold text-plum-deep">Join Evivi on the seller side too</h2>
                        <p className="mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            If you create gifts or celebration products, you can learn more about joining Evivi as a seller.
                        </p>
                    </div>
                    <Link 
                        href={ROUTES.seller} 
                        className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border/80 bg-secondary px-6 py-3 text-xs sm:text-sm font-bold text-plum-deep hover:bg-magenta hover:text-white transition-all"
                    >
                        Become a Seller
                        <ChevronRight size={16} />
                    </Link>
                </div>
            </section>

            {/* 9. REGISTRATION FORM PORTAL */}
            <section id="register" className="scroll-mt-20 px-5 sm:px-8 py-16 md:py-24 bg-soft-gradient">
                <div className="mx-auto max-w-3xl">
                    <div className="mx-auto max-w-xl text-center mb-10">
                        <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-widest text-magenta mb-3">
                            {c.register.badge}
                        </span>
                        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-plum-deep">{c.register.heading}</h2>
                        <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">{c.register.body}</p>
                    </div>
                    <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-10 shadow-md">
                        <RegistrationForm role="delivery" />
                    </div>
                </div>
            </section>

            {/* 10. FINAL ACTION BANNER */}
            <section data-navbar-theme="dark" className="px-5 sm:px-8 pb-16 md:pb-20 pt-8">
                <div className="mx-auto max-w-5xl rounded-3xl bg-brand-gradient p-8 sm:p-10 md:p-12 text-white text-center shadow-lg relative overflow-hidden">
                    <Bike size={36} className="mx-auto text-white/90 mb-4" />
                    <h2 className="font-display text-2xl sm:text-3xl font-bold">Ready to help gifts get there?</h2>
                    <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-white/85 leading-relaxed">
                        Register as an Evivi delivery partner and tell us where and when you can provide delivery support.
                    </p>
                    <a 
                        href="#register" 
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs sm:text-sm font-bold text-magenta shadow-md transition-all hover:bg-white/90 hover:scale-105 active:scale-95"
                    >
                        Start Registration
                        <ChevronRight size={16} />
                    </a>
                </div>
            </section>
        </main>
    );
}