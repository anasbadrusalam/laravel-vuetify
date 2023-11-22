<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <v-card :disabled="form.processing" :loading="form.processing">
            <v-card-text>
                Thanks for signing up! Before getting started, could you verify
                your email address by clicking on the link we just emailed to
                you? If you didn't receive the email, we will gladly send you
                another.
            </v-card-text>
            <v-card-actions>
                <form @submit.prevent="submit">
                    <v-btn
                        type="submit"
                        color="primary"
                        variant="flat"
                        :disabled="form.processing"
                        :loading="form.processing"
                        >Kirim ulang email verifikasi</v-btn
                    >
                </form>
            </v-card-actions>
        </v-card>
    </AuthenticatedLayout>
</template>

<script>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";

export default {
    components: {
        AuthenticatedLayout,
        Head,
        Link,
    },
    data() {
        return {
            form: useForm({}),
        };
    },
    methods: {
        submit() {
            this.form.post(route("verification.send"));
        },
    },
};
</script>
