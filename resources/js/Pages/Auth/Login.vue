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
                            <v-text-field
                                v-model="form.email"
                                label="Email"
                                autofocus
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
                            <div class="d-flex justify-space-between">
                                <div>
                                    <v-checkbox
                                        label="remember me"
                                        color="primary"
                                        density="compact"
                                        v-model="form.remember"
                                    ></v-checkbox>
                                </div>
                                <Link
                                    as="div"
                                    v-if="canResetPassword"
                                    :href="route('password.request')"
                                >
                                    <v-btn
                                        size="small"
                                        variant="text"
                                        class="mt-1"
                                        >Forgot your password?</v-btn
                                    >
                                </Link>
                            </div>
                            <v-btn
                                type="submit"
                                :disabled="form.processing"
                                :loading="form.processing"
                                >Login</v-btn
                            >
                        </form>
                        <div class="mt-6 text-center">
                            <p>
                                Belum punya akun?
                                <Link
                                    class="font-weight-medium"
                                    :href="route('register')"
                                    >Daftar</Link
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
