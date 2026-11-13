
<script lang="ts">
import OfflineIcon from "@shirone/iconify-offline";
import { addCollection } from "@shirone/iconify-offline-functions";
import { localIconCollections } from "@/generated/local-icon-collections";

import type { IconProps } from "./Icon.svelte";

const warnedNames = new Set<string>();

for (const collection of localIconCollections) addCollection(collection);

function warnAboutLegacyName(raw: unknown): void {
    if (typeof raw !== "string" || !import.meta.env.DEV) return;
    if (warnedNames.has(raw)) return;
    warnedNames.add(raw);
    console.warn(
        `[shirones] <Icon name="${raw}"> is the removed astro-icon API; rename it to icon="${raw}" or the icon renders as an empty node.`,
    );
}

let { icon, name, ...props }: IconProps & Record<string, unknown> = $props();

warnAboutLegacyName(name);

function resolveIconName(raw: unknown): string {
    if (typeof raw !== "string" || raw.length === 0) return "";

    // Support public SVG files
    if (raw.startsWith("/") && /\.svg(?:[?#].*)?$/i.test(raw)) {
        return raw;
    }

    // Support Iconify and local icons
    return raw.includes(":") ? raw : `local:${raw}`;
}

const resolved = $derived(resolveIconName(icon ?? name));

const isExternalSvg = $derived(
    resolved.startsWith("/") && /\.svg(?:[?#].*)?$/i.test(resolved)
);

const svgStyle = $derived([
    `width: ${props.width ?? (props.height ? "auto" : "1em")}`,
    `height: ${props.height ?? (props.width ? "auto" : "1em")}`,
    "object-fit: contain",
    props.inline ? "display: inline-block; vertical-align: middle" : "",
    props.style ?? "",
].filter(Boolean).join("; "));
</script>

{#if isExternalSvg}
    <span
        aria-hidden="true"
        class={props.class}
        style={`
            display: inline-block;
            width: ${props.width ?? (props.height ? "auto" : "1em")};
            height: ${props.height ?? (props.width ? "auto" : "1em")};
            background-color: ${props.color ?? "currentColor"};
            -webkit-mask: url("${resolved}") center / contain no-repeat;
            mask: url("${resolved}") center / contain no-repeat;
            ${props.style ?? ""}
        `}
    ></span>
{:else}
    <OfflineIcon icon={resolved} {...props} />
{/if}
