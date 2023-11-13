<template>
    <v-app>
        <v-app-bar density="comfortable" border flat>
            <v-app-bar-title>Laravel</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn color="primary" variant="flat">
                Masuk
            </v-btn>
        </v-app-bar>
        <v-main class="bg-grey-lighten-3">
            <v-container fluid>
                <slot />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {};
</script>

<style></style>
