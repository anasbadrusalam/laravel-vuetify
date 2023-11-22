<template>
    <Head title="Lupa Kata Sandi"></Head>
    <GuestLayout>
        <v-row>
            <v-col>
                <v-card
                    max-width="520"
                    class="mx-auto"
                    :disabled="form.processing"
                    :loading="form.processing"
                >
                    <v-card-title>Lupa Kata Sandi</v-card-title>
                    <v-card-subtitle>
                        Silahkan masukan email untuk mereset kata sandi
                    </v-card-subtitle>
                    <v-card-text>
                        <form @submit.prevent="submit()" autocomplete="off">
                            <v-text-field
                                v-model="form.email"
                                label="Email"
                                autofocus
                                autocomplete="off"
                                :error-messages="form.errors.email"
                                required
                            ></v-text-field>
                            <v-btn
                                type="submit"
                                :disabled="form.processing"
                                :loading="form.processing"
                                >Email Password Reset Link</v-btn
                            >
                        </form>
                        <div class="mt-6 text-center">
                            <p>
                                Masih ingat?
                                <Link
                                    class="font-weight-medium"
                                    :href="route('login')"
                                    >Masuk</Link
                                >
                            </p>
                        </div>
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
    components: {
        GuestLayout,
        Head,
        Link,
    },
    data() {
        return {
            form: useForm({
                email: null,
            }),
        };
    },
    methods: {
        submit() {
            this.form.post(route('password.email'));
        },
    },
};
</script>

<style></style>
