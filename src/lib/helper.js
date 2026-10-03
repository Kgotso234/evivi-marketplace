// Small helper so data/content.js can stay pure data (JSON-shaped, CMS-ready)
// with no LAUNCH_PHASE logic inside it.
//
// A value is either:
//   - a plain string/array/object → same in every phase, returned as-is
//   - { prelaunch: "...", live: "..." } → phase-dependent, resolved here
export function helper(value, isLive) {
    if (
        value &&
        typeof value === "object" &&
        !Array.isArray(value) &&
        ("prelaunch" in value || "live" in value)
    ) {
        return isLive ? value.live ?? value.prelaunch : value.prelaunch ?? value.live;
    }
    return value;
}