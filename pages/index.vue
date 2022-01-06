<template>
    <div>
        <Hero />
    </div>
</template>

<script>
    export default {
        setup() {
            useMeta({
                title: "42",
                bodyAttrs: {
                    class: "no-js",
                },
            });
        },
    };
</script>
