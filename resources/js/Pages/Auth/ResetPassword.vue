<template>
    <Head title="Reset Kata Sandi" />

    <AuthenticatedLayout>
        <v-card>
            <v-card-text>You're logged in!</v-card-text>
        </v-card>
    </AuthenticatedLayout>
</template>

<script>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, useForm } from "@inertiajs/vue3";

export default {
    components: {
        AuthenticatedLayout,
        Head,
    },
    props: {
        email: String,
        token: String,
    },
    data() {
        return {
            form: useForm({
                email: null,
                password: null,
                remember: false,
            }),
        };
    },
};
</script>

<style></style>
