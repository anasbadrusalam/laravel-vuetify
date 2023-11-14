<template>
    <v-app>
        <v-app-bar density="comfortable" border flat>
            <v-container>
                <v-row align="center">
                    <v-col>
                        <v-app-bar-title>
                            <Link as="button" :href="route('welcome')">
                                Laravel
                            </Link>
                        </v-app-bar-title>
                    </v-col>
                    <v-col class="text-right">
                        <Link :href="route('login')">
                            <v-btn color="primary" variant="flat">
                                Login
                            </v-btn>
                        </Link>
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>
        <v-main class="bg-grey-lighten-3">
            <v-container>
                <slot />
            </v-container>
        </v-main>
        <!-- <v-footer color="primary" border>
            <v-row justify="center" no-gutters>
                <v-btn
                    v-for="link in links"
                    :key="link"
                    color="white"
                    variant="text"
                    class="mx-2"
                    rounded="xl"
                >
                    {{ link }}
                </v-btn>
                <v-col class="text-center mt-4" cols="12">
                    {{ new Date().getFullYear() }} — <strong>Laravel</strong>
                </v-col>
            </v-row>
        </v-footer> -->
    </v-app>
</template>

<script>
import { Link } from "@inertiajs/vue3";

export default {
    components: {
        Link,
    },
    data: () => ({
        links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
    }),
};
</script>

<style></style>
