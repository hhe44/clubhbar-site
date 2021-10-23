import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
          			{/* General meta tags */}
					<meta name="description" content="Premiere Community for HBAR Content, News and Networking" />
					<meta property="og:title" content="Club HBAR" />
					<meta property="og:description" content="Premiere Community for HBAR Content, News and Networking" />
					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://www.clubhbar.com/" />
					<meta property="og:image" content="https://res.cloudinary.com/drrsuk4nc/image/upload/v1634949586/meta-img-club-hbar_gcar57.png" />
					<meta property="og:site_name" content="Club HBAR" />
          			{/* Twitter Meta Tags */}
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:title" content="Club HBAR" />
					<meta name="twitter:image" content="https://res.cloudinary.com/drrsuk4nc/image/upload/v1634949586/meta-img-club-hbar_gcar57.png" />
					<meta name="twitter:description" content="Premiere Community for HBAR Content, News and Networking" />
					<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap" rel="stylesheet" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
