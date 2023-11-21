<template>
    <Head title="Register"></Head>
    <GuestLayout>
        <v-row>
            <v-col>
                <v-card
                    max-width="520"
                    class="mx-auto"
                    :disabled="form.processing"
                    :loading="form.processing"
                >
                    <v-card-title>Register</v-card-title>

                    <v-card-text>
                        <form @submit.prevent="submit()" autocomplete="off">
                            <v-text-field
                                v-model="form.name"
                                label="Name"
                                autofocus
                                autocomplete="off"
                                :error-messages="form.errors.name"
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model="form.email"
                                label="Email"
                                type="email"
                                autocomplete="off"
                                :error-messages="form.errors.email"
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model="form.password"
                                label="Password"
                                type="password"
                                autocomplete="off"
                                :error-messages="form.errors.password"
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model="form.password_confirmation"
                                label="Password Confirmation"
                                type="password"
                                autocomplete="off"
                                required
                            ></v-text-field>

                            <v-btn
                                type="submit"
                                :disabled="form.processing"
                                :loading="form.processing"
                                >Register</v-btn
                            >
                            <div class="text-center mt-3">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Commodi laudantium cum
                                    doloremque amet similique quas.
                                </p>
                            </div>
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
                name: null,
                email: null,
                password: null,
                password_confirmation: null,
            }),
        };
    },
    methods: {
        submit() {
            this.form.post(route("register"), {
                onFinish: () =>
                    this.form.reset("password", "password_confirmation"),
            });
        },
    },
};
</script>

<style></style>
