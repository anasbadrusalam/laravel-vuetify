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
                            <v-btn color="primary" variant="flat"> Masuk </v-btn>
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
    </v-app>
</template>

<script>
import { Link } from "@inertiajs/vue3";

export default {
    components: {
        Link,
    },
};
</script>

<style></style>
