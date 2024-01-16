import definePlugin from "@utils/types";

export default definePlugin({
    name: "AutoIdleOnAFK",
    description: "Automatically updates your discord status to 'idle' when you haven't opened your discord client for more than 5 minutes",
    authors: [
        {
            id: 904144997559975937n,
            name: "Your Name",
        },
    ],
    patches: [],
    // Delete these two below if you are only using code patches
    start() {},
    stop() {},
});
