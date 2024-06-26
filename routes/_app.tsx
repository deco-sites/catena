import { asset, Head } from "$fresh/runtime.ts";
import { defineApp } from "$fresh/server.ts";
import { Context } from "deco/deco.ts";
import Theme from "../sections/Theme/Theme.tsx";

export default defineApp(async (_req, ctx) => {
  const revision = await Context.active().release?.revision();

  return (
    <>
      {/* Include default fonts and css vars */}
      <Theme colorScheme="any" />

      {/* Include Icons and manifest */}
      <Head>
        {/* Enable View Transitions API */}
        <meta name="view-transition" content="same-origin" />

        {/* Tailwind v3 CSS file */}
        <link
          href={asset(`/styles.css?revision=${revision}`)}
          rel="stylesheet"
        />

        {/* Web Manifest */}
        <link rel="manifest" href={asset("/site.webmanifest")} />

        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html: `      
            
          @font-face {
            font-family: 'THICCCBOI';
            src: url("${
              asset("/fonts/THICCCBOI-Medium.woff2")
            }") format('woff2'),
                url("${
              asset("/fonts/THICCCBOI-Medium.ttf")
            }") format('truetype');
            font-weight: 500;
            font-style: normal;
            font-display: swap;
        }
        
            @font-face {
            font-family: 'THICCCBOI';
            src: url("${
              asset("/fonts/THICCCBOI-Bold.woff2")
            }") format('woff2'),;
            font-weight: bold;
            font-style: bold;
            font-display: swap;
          }

            @font-face {
            font-family: 'THICCCBOI';
            src: url("${
              asset("/fonts/THICCCBOI-Regular.woff2")
            }") format('woff2');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }

            @font-face {
            font-family: 'Unicons';
            src: url("${asset("/fonts/Unicons.woff2")}") format('woff2');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }
        `,
          }}
        />
      </Head>

      {/* Rest of Preact tree */}
      <ctx.Component />
    </>
  );
});
