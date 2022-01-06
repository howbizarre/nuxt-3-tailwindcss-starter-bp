<template>
    <Html lang="bg-BG">
        <Head>
            <Title>{{ dynamic }} title</Title>
            <Meta name="description" :content="`My page's ${dynamic} description`" />
        </Head>
    </Html>
    <div>
        <slot />
    </div>
</template>

<script>
    export default {
        setup() {
            useMeta({
                meta: [{ name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1" }],
                bodyAttrs: {
                    class: "test",
                },
            });
        },
        data: () => ({ dynamic: 49 }),
    };
</script>
