<template>
    <Head title="Masuk"></Head>
    <GuestLayout>
        <v-sheet height="100" >
            <v-row align="center" justify="center">
                <v-col>
                    <v-card flat>
                        <v-card-text> hii </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-sheet >
    </GuestLayout>
</template>

<script>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import { Head, Link } from "@inertiajs/vue3";

export default {
    components: {
        GuestLayout,
        Head,
        Link,
    },
};
</script>

<style></style>
