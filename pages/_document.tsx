import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
    <Html lang="ru">
        <Head>
            <meta name="theme-color" content="#131315" media="(prefers-color-scheme: light)" />
            <meta name="theme-color" content="#131315" media="(prefers-color-scheme: dark)" />
        </Head>

        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
);

export default Document;
