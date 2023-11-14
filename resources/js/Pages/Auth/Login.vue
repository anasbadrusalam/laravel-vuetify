<template>
    <Head title="Login"></Head>
    <GuestLayout>
        <v-row>
            <v-col>
                <v-card max-width="550" class="mx-auto">
                    <v-card-title>Login</v-card-title>
                    <v-card-text>
                        <v-text-field
                            label="Email"
                        ></v-text-field>
                        <v-text-field
                            label="Password"
                        ></v-text-field>
                        <v-btn>Login</v-btn>

                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
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
