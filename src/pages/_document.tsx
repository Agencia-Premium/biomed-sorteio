import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <meta charSet="utf-8" />
          <meta name="author" content="BioMed" />
          <meta
            name="description"
            content="Laboratório de análises clínicas com qualidade, superando expectativas e suprindo com excelência as necessidades dos médicos, pacientes e colaboradores."
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap"
            rel="stylesheet"
          />

          <link rel="shortcut icon" href="favicon.png" type="images/png" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
