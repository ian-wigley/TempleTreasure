import {TempleTreasure} from "./templeTreasure.js";

async function LoadContent(onProgress: (loaded: number, total: number) => void): Promise<void> {
    const imgs = Array.from(document.querySelectorAll<HTMLImageElement>("img"));
    const audios = Array.from(document.querySelectorAll<HTMLAudioElement>("audio"));

    const waitForImage = (img: HTMLImageElement) =>
        new Promise<void>((resolve): void => {
            if (img.complete) return resolve();
            img.addEventListener("load", () => resolve(), {once: true});
            img.addEventListener("error", () => {
                console.warn("Failed to load", img.src);
                resolve();
            }, {once: true});
        });

    const waitForAudio = (audio: HTMLAudioElement, timeoutMs = 8000):
        Promise<void> => {
        return new Promise((resolve) => {
            if (audio.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA) return resolve();

            const done = (): void => {
                clearTimeout(timer);
                audio.removeEventListener("canplaythrough", done);
                audio.removeEventListener("error", onError);
                resolve();
            };
            const onError = (): void => {
                console.warn("Failed to load", audio.currentSrc || audio.src);
                done();
            };
            const timer = setTimeout(() => {
                console.warn("Audio load timed out", audio.currentSrc || audio.src);
                done();
            }, timeoutMs);

            audio.addEventListener("canplaythrough", done, {once: true});
            audio.addEventListener("error", onError, {once: true});

            audio.preload = "auto";
            if (audio.networkState === HTMLMediaElement.NETWORK_EMPTY) audio.load();
        });
    }

    const tasks: Promise<void>[] = [
        ...imgs.map(waitForImage),
        ...audios.map((a) => waitForAudio(a)),
    ];

    const total = tasks.length;
    let loaded = 0;
    onProgress(0, total);

    return Promise.all(
        tasks.map((t) => t.then(() => onProgress(++loaded, total)))
    ).then((): void => {
    });
}

async function boot(): Promise<void> {
    const loader = document.getElementById("loader")!;
    const fill = document.getElementById("loader-fill")!;
    const text = document.getElementById("loader-text")!;

    await LoadContent((loaded, total) => {
        const pct = total === 0 ? 100 : Math.round((loaded / total) * 100);
        fill.style.width = `${pct}%`;
        text.textContent = `${pct}%`;
    });

    loader.classList.add("hidden");
    loader.addEventListener("transitionend", () => loader.remove(), {once: true});
}

boot().then((): void => {
    const game = new TempleTreasure();
    game.RunGame(true);
    game.Tick();
});