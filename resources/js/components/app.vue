<template>
    <h1>Vue Learn 0.0</h1>
    <!-- <p>current path : {{$route.fullPath}}</p> -->
    <nav>
        <div>
            <router-link class="link" to="/">Home</router-link>
            <router-link class="link" to="/about">About</router-link>
        </div>
    </nav>
    <main>
        <router-view/>
    </main>
</template>