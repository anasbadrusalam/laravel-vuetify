<template>
    <Head title="Reset Kata Sandi" />

    <GuestLayout>
        <v-row>
            <v-col>
                <v-card
                    max-width="520"
                    class="mx-auto"
                    :disabled="form.processing"
                    :loading="form.processing"
                >
                    <v-card-title>Atur Ulang Kata Sandi</v-card-title>
                    <v-card-text>
                        <form @submit.prevent="submit()" autocomplete="off">
                            <v-text-field
                                v-model="form.email"
                                label="Email"
                                readonly
                                autocomplete="off"
                                :error-messages="form.errors.email"
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model="form.password"
                                label="Kata Sandi Baru"
                                type="password"
                                autocomplete="off"
                                :error-messages="form.errors.password"
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model="form.password_confirmation"
                                label="Ulangi Kata Sandi Baru"
                                type="password"
                                autocomplete="off"
                                :error-messages="
                                    form.errors.password_confirmation
                                "
                                required
                            ></v-text-field>
                            <v-btn
                                type="submit"
                                :disabled="form.processing"
                                :loading="form.processing"
                                >Atur Kata Sandi</v-btn
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
import { Head, useForm } from "@inertiajs/vue3";

export default {
    components: {
        GuestLayout,
        Head,
    },
    props: {
        email: String,
        token: String,
    },
    data() {
        return {
            form: useForm({
                token: this.token,
                email: this.email,
                password: null,
                password_confirmation: false,
            }),
        };
    },
    methods: {
        submit() {
            this.form.post(route("password.store"), {
                onFinish: () =>
                    this.form.reset("password", "password_confirmation"),
            });
        },
    },
};
</script>

<style></style>
