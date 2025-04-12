# StyleZAI - AI-Powered Fashion Discovery

StyleZAI is a platform that uses artificial intelligence to help users discover their perfect style by matching their preferences with curated selections from various resale websites.

## Features

- AI-powered style recommendations
- Sustainable fashion through resale integration
- Personalized outfit suggestions
- Modern, responsive design

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/stylezai-basesite.git
cd stylezai-basesite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
stylezai-basesite/
├── public/              # Static files
├── src/
│   ├── components/      # Reusable components
│   ├── pages/          # Page components
│   ├── App.tsx         # Main application component
│   └── index.tsx       # Application entry point
├── package.json        # Project dependencies
└── README.md          # Project documentation
```

## Deployment

This project is configured for deployment with AWS Amplify. To deploy:

1. Push your changes to your Git repository
2. Connect your repository to AWS Amplify
3. Configure the build settings:
   - Build command: `npm run build`
   - Output directory: `build`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.