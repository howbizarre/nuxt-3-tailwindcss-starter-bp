<template>
    <div>
        <Html lang="bg-BG">
            <Head>
                <Title>{{ dynamic }} title</Title>
                <Meta name="description" :content="`My page's ${dynamic} description`" />
            </Head>
        </Html>
        <slot />
    </div>
</template>

<script setup>
    useMeta({
        meta: [{ name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1" }],
        bodyAttrs: {
            class: "test",
        },
    });

    const dynamic = 49;
</script>
