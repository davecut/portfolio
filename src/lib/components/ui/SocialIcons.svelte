<script>
    import ThemeImage from './ThemeImage.svelte';
</script>

<div class="social-icons mt-5 mr-5 flex h-10 w-20 items-center justify-center gap-3">
    <a href="https://www.linkedin.com/" class="linkedin z-0" target="_blank">
        <img
            src="./icons/linkedin.png"
            alt="linkedin"
            class="linkedin-icon w-7 cursor-pointer transition-all hover:scale-125"
        />
    </a>
    <a href="https://www.github.com/" class="github z-0" target="_blank">
        <ThemeImage
            srcDark="/icons/github-dark.png"
            srcLight="/icons/github-light.png"
            alt="GitHub"
            className="github-icon w-7 cursor-pointer hover:scale-125 transition-all"
        />
    </a>
</div>
