<template>
<nav>
    <ul>
        <li>
            <NuxtLink to="/">Home</NuxtLink>
                    </li>
<li>            <NuxtLink to="/about">About</NuxtLink>
</li>
    </ul>
</nav>
</template>

<style scoped>

nav {
    display: flex;
    width: 100%;

}

ul {
    list-style: none;
    display: flex;
    gap: 32px;
}

</style>