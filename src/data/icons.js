// Central icon registry. JSON content files reference icons by name
// (e.g. "Search"), and pages resolve the string to a component here.
// Add new icons to this list as new content needs them.
import {
    Search, Gift, Truck, ClipboardCheck, ChevronRight, ArrowRight, Heart,
    Store, Bike, CalendarCheck, Package, Users, ClipboardList, ShieldCheck,
    Star, TrendingUp, Sparkles, Bell, CalendarClock, Check, ChevronDown,
    Clock3, Car, Users2, Handshake, CalendarHeart, PartyPopper,
    HeartHandshake, Wrench, Rocket, Cake, Baby, Gem, GraduationCap,
    Compass, Loader2, CheckCircle2, Plus
} from "lucide-react";

export const ICONS = {
    Search, Gift, Truck, ClipboardCheck, ChevronRight, ArrowRight, Heart,
    Store, Bike, CalendarCheck, Package, Users, ClipboardList, ShieldCheck,
    Star, TrendingUp, Sparkles, Bell, CalendarClock, Check, ChevronDown,
    Clock3, Car, Users2, Handshake, CalendarHeart, PartyPopper,
    HeartHandshake, Wrench, Rocket, Cake, Baby, Gem, GraduationCap,
    Compass, Loader2, CheckCircle2, Plus, 
};

// Helper so pages don't need `ICONS[name] || FallbackIcon` everywhere.
export function getIcon(name) {
    return ICONS[name] ?? Sparkles;
}