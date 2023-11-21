<template>
    <Head title="Login"></Head>
    <GuestLayout>
        <v-row>
            <v-col>
                <v-card
                    max-width="520"
                    class="mx-auto"
                    :disabled="form.processing"
                    :loading="form.processing"
                >
                    <v-card-title>Login</v-card-title>
                    <v-card-text>
                        <form @submit.prevent="submit()" autocomplete="off">
                            <v-text-field label="Email"></v-text-field>
                            <v-text-field label="Password"></v-text-field>
                            <v-btn
                                :disabled="form.processing"
                                :loading="form.processing"
                                >Login</v-btn
                            >
                        </form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </GuestLayout>
</template>

<script>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";

export default {
    props: {
        canResetPassword: Boolean,
        canRegister: Boolean,
        status: String,
    },
    components: {
        GuestLayout,
        Head,
        Link,
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
    methods: {
        submit() {
            this.form.post(route("login"), {
                onFinish: () => this.form.reset("password"),
            });
        },
    },
};
</script>

<style></style>
