<script>
    export let data;
</script>

<div class="layout">
    <main>
        <slot />
    </main>

    <aside>
        <h2>More Posts</h2>
        <ul>
            {#each data.summaries as {slug, title}}
                <li><a href={`/blog/${slug}`}>{title}</a></li>
            {/each}
        </ul>
    </aside>
</div>

<style>
    @media (min-width: 640px) {
        .layout {
            display: grid;
            grid-template-columns: 1fr 16em;
            gap: 2em;
        }
    }
</style>